export const prerender = false;

import type { APIRoute } from 'astro';
import { createPublicClient } from '../../../lib/supabase';

export const POST: APIRoute = async ({ cookies, redirect }) => {
  const access_token = cookies.get('sb-access-token')?.value;
  const refresh_token = cookies.get('sb-refresh-token')?.value;

  // Revoke the session server-side so a captured refresh token can't mint new
  // access tokens after logout. Best-effort — cookies are cleared regardless.
  if (access_token && refresh_token) {
    try {
      const supabase = createPublicClient();
      if (supabase) {
        await supabase.auth.setSession({ access_token, refresh_token });
        await supabase.auth.signOut();
      }
    } catch {
      /* ignore — cookie clearing below still logs the user out of this browser */
    }
  }

  cookies.delete('sb-access-token', { path: '/' });
  cookies.delete('sb-refresh-token', { path: '/' });
  return redirect('/login');
};
