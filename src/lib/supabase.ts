import { createClient } from '@supabase/supabase-js';

function getUrl() {
  return import.meta.env.PUBLIC_SUPABASE_URL || process.env.PUBLIC_SUPABASE_URL || '';
}

function getAnonKey() {
  return import.meta.env.PUBLIC_SUPABASE_ANON_KEY || process.env.PUBLIC_SUPABASE_ANON_KEY || '';
}

function getServiceKey() {
  // Non-PUBLIC env vars: use process.env on server (Vercel SSR)
  // Supabase Vercel integration uses SUPABASE_SERVICE_ROLE (no _KEY suffix)
  return import.meta.env.SUPABASE_SERVICE_ROLE_KEY
    || process.env.SUPABASE_SERVICE_ROLE_KEY
    || import.meta.env.SUPABASE_SERVICE_ROLE
    || process.env.SUPABASE_SERVICE_ROLE
    || '';
}

// Browser client (used in React components), lazy singleton
let _supabase: ReturnType<typeof createClient> | null = null;
export function getSupabase() {
  if (!_supabase) {
    _supabase = createClient(getUrl(), getAnonKey());
  }
  return _supabase;
}

// Server client with user's session (used in API routes and middleware)
export function createServerClient(accessToken?: string) {
  const url = getUrl();
  const key = getAnonKey();
  if (!url || !key) return null as any;
  return createClient(url, key, {
    global: {
      headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
    },
  });
}

// Public client with anon key (respects RLS, used for public page queries)
export function createPublicClient() {
  const url = getUrl();
  const key = getAnonKey();
  if (!url || !key) return null as any;
  return createClient(url, key);
}

// Public reads: anon client first, admin fallback for SSR/build when service role is set.
export function createReadClient() {
  return createPublicClient() || createAdminClient();
}

// Admin client with service role (bypasses RLS, used for admin operations)
export function createAdminClient() {
  const url = getUrl();
  const key = getServiceKey();
  if (!url || !key) return null as any;
  return createClient(url, key);
}
