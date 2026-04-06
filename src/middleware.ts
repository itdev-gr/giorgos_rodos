import { defineMiddleware } from 'astro:middleware';
import { createServerClient, createAdminClient } from './lib/supabase';

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  // Only protect dashboard and API routes
  const isProtected = pathname.startsWith('/dashboard') || pathname.startsWith('/api/admin') || pathname.startsWith('/api/user');

  if (!isProtected) {
    return next();
  }

  // Get tokens from cookies
  const accessToken = context.cookies.get('sb-access-token')?.value;
  const refreshToken = context.cookies.get('sb-refresh-token')?.value;

  if (!accessToken) {
    if (pathname.startsWith('/api/')) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }
    return context.redirect('/login');
  }

  // Verify session
  const supabase = createServerClient(accessToken);
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error || !user) {
    // Try refresh
    if (refreshToken) {
      const { data: refreshData, error: refreshError } = await supabase.auth.refreshSession({ refresh_token: refreshToken });
      if (!refreshError && refreshData.session) {
        // Set new cookies
        context.cookies.set('sb-access-token', refreshData.session.access_token, {
          path: '/',
          httpOnly: true,
          secure: true,
          sameSite: 'lax',
          maxAge: 60 * 60, // 1 hour
        });
        context.cookies.set('sb-refresh-token', refreshData.session.refresh_token, {
          path: '/',
          httpOnly: true,
          secure: true,
          sameSite: 'lax',
          maxAge: 60 * 60 * 24 * 7, // 7 days
        });

        // Get profile with role
        const adminClient = createAdminClient();
        const { data: profile } = await adminClient.from('profiles').select('*').eq('id', refreshData.user!.id).single();

        context.locals.user = refreshData.user;
        context.locals.profile = profile;
        context.locals.accessToken = refreshData.session.access_token;
      } else {
        // Both tokens invalid
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
    // Valid token — get profile
    const adminClient = createAdminClient();
    const { data: profile } = await adminClient.from('profiles').select('*').eq('id', user.id).single();

    context.locals.user = user;
    context.locals.profile = profile;
    context.locals.accessToken = accessToken;
  }

  // Role-based access
  const profile = context.locals.profile;
  const isAdminRoute = pathname.startsWith('/dashboard/admin') || pathname.startsWith('/api/admin');

  if (isAdminRoute && profile?.role !== 'admin') {
    if (pathname.startsWith('/api/')) {
      return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });
    }
    return context.redirect('/dashboard');
  }

  return next();
});
