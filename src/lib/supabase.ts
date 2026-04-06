import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceKey = import.meta.env.SUPABASE_SERVICE_ROLE_KEY;

// Browser client (used in React components)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Server client with user's session (used in API routes and middleware)
export function createServerClient(accessToken?: string) {
  return createClient(supabaseUrl, supabaseAnonKey, {
    global: {
      headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
    },
  });
}

// Admin client with service role (bypasses RLS, used for admin operations)
export function createAdminClient() {
  return createClient(supabaseUrl, supabaseServiceKey);
}
