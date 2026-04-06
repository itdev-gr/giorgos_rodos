import { a6 as defineMiddleware, af as sequence } from './chunks/sequence_DctpTcVe.mjs';
import 'piccolore';
import 'clsx';

const onRequest$1 = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  const isProtected = pathname.startsWith("/dashboard") || pathname.startsWith("/api/admin") || pathname.startsWith("/api/user");
  if (!isProtected) {
    return next();
  }
  const { createServerClient, createAdminClient } = await import('./chunks/supabase_CmOsxOS2.mjs');
  const accessToken = context.cookies.get("sb-access-token")?.value;
  const refreshToken = context.cookies.get("sb-refresh-token")?.value;
  if (!accessToken) {
    if (pathname.startsWith("/api/")) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }
    return context.redirect("/login");
  }
  const supabase = createServerClient(accessToken);
  if (!supabase) {
    return next();
  }
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error || !user) {
    if (refreshToken) {
      const { data: refreshData, error: refreshError } = await supabase.auth.refreshSession({ refresh_token: refreshToken });
      if (!refreshError && refreshData.session) {
        context.cookies.set("sb-access-token", refreshData.session.access_token, {
          path: "/",
          httpOnly: true,
          secure: true,
          sameSite: "lax",
          maxAge: 60 * 60
        });
        context.cookies.set("sb-refresh-token", refreshData.session.refresh_token, {
          path: "/",
          httpOnly: true,
          secure: true,
          sameSite: "lax",
          maxAge: 60 * 60 * 24 * 7
        });
        const adminClient = createAdminClient();
        const { data: profile2 } = await adminClient.from("profiles").select("*").eq("id", refreshData.user.id).single();
        context.locals.user = refreshData.user;
        context.locals.profile = profile2;
        context.locals.accessToken = refreshData.session.access_token;
      } else {
        context.cookies.delete("sb-access-token", { path: "/" });
        context.cookies.delete("sb-refresh-token", { path: "/" });
        if (pathname.startsWith("/api/")) {
          return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
        }
        return context.redirect("/login");
      }
    } else {
      context.cookies.delete("sb-access-token", { path: "/" });
      if (pathname.startsWith("/api/")) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
      }
      return context.redirect("/login");
    }
  } else {
    const adminClient = createAdminClient();
    const { data: profile2 } = await adminClient.from("profiles").select("*").eq("id", user.id).single();
    context.locals.user = user;
    context.locals.profile = profile2;
    context.locals.accessToken = accessToken;
  }
  const profile = context.locals.profile;
  const isAdminRoute = pathname.startsWith("/dashboard/admin") || pathname.startsWith("/api/admin");
  if (isAdminRoute && profile?.role !== "admin") {
    if (pathname.startsWith("/api/")) {
      return new Response(JSON.stringify({ error: "Forbidden" }), { status: 403 });
    }
    return context.redirect("/dashboard");
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
