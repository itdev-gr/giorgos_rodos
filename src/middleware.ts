import { defineMiddleware } from 'astro:middleware';
import { DEFAULT_LOCALE } from './i18n/locales';
import {
  isExcludedFromLocalization,
  isLocalizableRoute,
  parseLocaleFromPathname,
} from './i18n/routing';

const PUBLIC_HTML_CACHE =
  'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400';

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname, hostname, search } = context.url;

  // www → apex (301 permanent for link equity)
  if (hostname === 'www.rhodesrentaboat.com') {
    return context.redirect(`https://rhodesrentaboat.com${pathname}${search}`, 301);
  }

  const parsed = parseLocaleFromPathname(pathname);
  const hasLocalePrefix = pathname.match(/^\/([a-z]{2})(?=\/|$)/)?.[1] === parsed.locale && parsed.locale !== DEFAULT_LOCALE;

  // /en/* → unprefixed English URLs
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    const target = parsed.pathname === '/' && pathname === '/en' ? '/' : parsed.pathname;
    return context.redirect(`${target}${search}`, 301);
  }

  if (hasLocalePrefix) {
    if (isExcludedFromLocalization(parsed.pathname) || !isLocalizableRoute(parsed.pathname)) {
      return context.redirect(`${parsed.pathname}${search}`, 301);
    }

    context.locals.locale = parsed.locale;
    const rewriteUrl = new URL(`${parsed.pathname}${search}`, context.url);
    return context.rewrite(rewriteUrl);
  }

  if (!context.locals.locale) {
    context.locals.locale = DEFAULT_LOCALE;
  }

  const isProtected =
    pathname.startsWith('/dashboard') ||
    pathname.startsWith('/api/admin') ||
    pathname.startsWith('/api/user');

  if (!isProtected) {
    const response = await next();
    if (
      context.request.method === 'GET' &&
      !pathname.startsWith('/api/') &&
      pathname !== '/login'
    ) {
      const contentType = response.headers.get('content-type') || '';
      if (contentType.includes('text/html')) {
        response.headers.set('Cache-Control', PUBLIC_HTML_CACHE);
      }
    }
    return response;
  }

  try {
    const { createServerClient } = await import('./lib/supabase');

    const accessToken = context.cookies.get('sb-access-token')?.value;
    const refreshToken = context.cookies.get('sb-refresh-token')?.value;

    if (!accessToken) {
      if (pathname.startsWith('/api/')) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
      }
      return context.redirect('/login');
    }

    const supabase = createServerClient(accessToken);
    if (!supabase) {
      if (pathname.startsWith('/api/')) {
        return new Response(JSON.stringify({ error: 'Service unavailable' }), { status: 503 });
      }
      return context.redirect('/login');
    }

    const { data: { user }, error } = await supabase.auth.getUser();

    if (error || !user) {
      if (refreshToken) {
        const { data: refreshData, error: refreshError } = await supabase.auth.refreshSession({
          refresh_token: refreshToken,
        });
        if (!refreshError && refreshData.session) {
          context.cookies.set('sb-access-token', refreshData.session.access_token, {
            path: '/',
            httpOnly: true,
            secure: true,
            sameSite: 'lax',
            maxAge: 60 * 60,
          });
          context.cookies.set('sb-refresh-token', refreshData.session.refresh_token, {
            path: '/',
            httpOnly: true,
            secure: true,
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 7,
          });

          const freshClient = createServerClient(refreshData.session.access_token);
          let profile = null;
          if (freshClient) {
            const { data } = await freshClient
              .from('profiles')
              .select('*')
              .eq('id', refreshData.user!.id)
              .single();
            profile = data;
          }

          context.locals.user = refreshData.user;
          context.locals.profile = profile;
          context.locals.accessToken = refreshData.session.access_token;
        } else {
          context.cookies.delete('sb-access-token', { path: '/' });
          context.cookies.delete('sb-refresh-token', { path: '/' });
          if (pathname.startsWith('/api/')) {
            return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
          }
          return context.redirect('/login');
        }
      } else {
        context.cookies.delete('sb-access-token', { path: '/' });
        if (pathname.startsWith('/api/')) {
          return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
        }
        return context.redirect('/login');
      }
    } else {
      let profile = null;
      const { data } = await supabase.from('profiles').select('*').eq('id', user.id).single();
      profile = data;

      context.locals.user = user;
      context.locals.profile = profile;
      context.locals.accessToken = accessToken;
    }

    const profile = context.locals.profile;
    const isAdminRoute =
      pathname.startsWith('/dashboard/admin') || pathname.startsWith('/api/admin');

    if (isAdminRoute && profile?.role !== 'admin') {
      if (pathname.startsWith('/api/')) {
        return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });
      }
      return context.redirect('/dashboard');
    }

    return next();
  } catch (e) {
    console.error('Middleware error:', e);
    if (pathname.startsWith('/api/')) {
      return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
    }
    return context.redirect('/login');
  }
});
