export const prerender = false;

import type { APIRoute } from 'astro';
import { createAdminClient, createPublicClient } from '../../../../lib/supabase';
import { requireAdmin, readJsonBody } from '../../../../lib/api-auth';

// Only these profile columns may be updated via the admin panel.
const PROFILE_FIELDS = ['full_name', 'company_name', 'phone', 'role'];

export const PUT: APIRoute = async ({ params, request, locals }) => {
  const denied = requireAdmin(locals);
  if (denied) return denied;

  const { id } = params;
  const body = await readJsonBody(request);
  if (!body) return new Response(JSON.stringify({ error: 'Invalid request body' }), { status: 400 });

  const supabase = createAdminClient() || createPublicClient();
  if (!supabase) return new Response(JSON.stringify({ error: 'Service unavailable' }), { status: 503 });

  // Whitelist updatable fields (avoid writing arbitrary/immutable columns).
  const update: Record<string, unknown> = {};
  for (const k of PROFILE_FIELDS) if (body[k] !== undefined) update[k] = k === 'role' ? (body[k] === 'admin' ? 'admin' : 'user') : body[k];

  const { error } = await supabase.from('profiles').update(update).eq('id', id);
  if (error) {
    console.error('admin user PUT failed:', error.message);
    return new Response(JSON.stringify({ error: 'Update failed' }), { status: 400 });
  }
  return new Response(JSON.stringify({ success: true }), { status: 200 });
};

export const DELETE: APIRoute = async ({ params, locals }) => {
  const denied = requireAdmin(locals);
  if (denied) return denied;

  const { id } = params;
  if (!id) return new Response(JSON.stringify({ error: 'Missing id' }), { status: 400 });

  // Don't let an admin delete their own account out from under themselves.
  if (id === locals.user?.id) {
    return new Response(JSON.stringify({ error: 'You cannot delete your own account' }), { status: 400 });
  }

  const supabase = createAdminClient() || createPublicClient();
  if (!supabase) return new Response(JSON.stringify({ error: 'Service unavailable' }), { status: 503 });

  const { error: profileError } = await supabase.from('profiles').delete().eq('id', id);
  if (profileError) {
    console.error('admin user DELETE (profile) failed:', profileError.message);
    return new Response(JSON.stringify({ error: 'Delete failed' }), { status: 400 });
  }

  const { error: authError } = await supabase.auth.admin.deleteUser(id);
  if (authError) {
    console.error('admin user DELETE (auth) failed:', authError.message);
    return new Response(JSON.stringify({ error: 'Delete failed' }), { status: 400 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
};
