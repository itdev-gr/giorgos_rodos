import { createClient } from '@supabase/supabase-js';

// `process` is undefined in the browser bundle. Referencing it directly (even
// behind `||`) throws a ReferenceError before the fallback can run, so read it
// through this guard which returns '' client-side.
function fromProcessEnv(name: string): string {
  return typeof process !== 'undefined' && process.env ? process.env[name] || '' : '';
}

function getUrl() {
  return import.meta.env.PUBLIC_SUPABASE_URL || fromProcessEnv('PUBLIC_SUPABASE_URL');
}

function getAnonKey() {
  return import.meta.env.PUBLIC_SUPABASE_ANON_KEY || fromProcessEnv('PUBLIC_SUPABASE_ANON_KEY');
}

function getServiceKey() {
  // Non-PUBLIC env vars: use process.env on server (Vercel SSR)
  // Supabase Vercel integration uses SUPABASE_SERVICE_ROLE (no _KEY suffix)
  return import.meta.env.SUPABASE_SERVICE_ROLE_KEY
    || fromProcessEnv('SUPABASE_SERVICE_ROLE_KEY')
    || import.meta.env.SUPABASE_SERVICE_ROLE
    || fromProcessEnv('SUPABASE_SERVICE_ROLE');
}

// Browser client (used in React components), lazy singleton.
// Returns null when env vars are absent so callers degrade gracefully instead
// of createClient() throwing "supabaseUrl is required".
let _supabase: ReturnType<typeof createClient> | null = null;
export function getSupabase() {
  if (!_supabase) {
    const url = getUrl();
    const key = getAnonKey();
    if (!url || !key) return null;
    _supabase = createClient(url, key);
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
