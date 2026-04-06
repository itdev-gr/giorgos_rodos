export const prerender = false;

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return new Response(JSON.stringify({ error: 'Email and password are required' }), { status: 400 });
    }

    const { createServerClient, createAdminClient } = await import('../../../lib/supabase');

    const supabase = createServerClient();
    if (!supabase) {
      return new Response(JSON.stringify({ error: 'Service unavailable' }), { status: 503 });
    }

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 401 });
    }

    // Set auth cookies
    cookies.set('sb-access-token', data.session.access_token, {
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60,
    });

    cookies.set('sb-refresh-token', data.session.refresh_token, {
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
    });

    // Get user role for redirect
    const adminClient = createAdminClient();
    let redirect = '/dashboard/user';
    if (adminClient) {
      const { data: profile } = await adminClient.from('profiles').select('role').eq('id', data.user.id).single();
      redirect = profile?.role === 'admin' ? '/dashboard/admin' : '/dashboard/user';
    }

    return new Response(JSON.stringify({ success: true, redirect }), { status: 200 });
  } catch (e) {
    console.error('Login error:', e);
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
  }
};
