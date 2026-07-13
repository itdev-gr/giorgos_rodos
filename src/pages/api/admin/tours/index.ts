export const prerender = false;

import type { APIRoute } from 'astro';
import { createAdminClient, createPublicClient } from '../../../../lib/supabase';
import { requireAdmin, readJsonBody } from '../../../../lib/api-auth';

export const POST: APIRoute = async ({ request, locals }) => {
  const denied = requireAdmin(locals);
  if (denied) return denied;

  const body = await readJsonBody(request);
  if (!body) return new Response(JSON.stringify({ error: 'Invalid request body' }), { status: 400 });

  const supabase = createAdminClient() || createPublicClient();
  if (!supabase) return new Response(JSON.stringify({ error: 'Service unavailable' }), { status: 503 });

  const ownerId = body.owner_id || locals.user?.id;
  // Admin-created tours are pinned across every listings page by default.
  const isGlobal = body.is_global ?? ((locals.profile as Record<string, unknown> | null)?.role === 'admin');

  const { data, error } = await supabase.from('tours').insert({
    ...body,
    owner_id: ownerId,
    is_global: isGlobal,
  }).select().single();

  if (error) {
    console.error('admin tours POST failed:', error.message);
    return new Response(JSON.stringify({ error: 'Could not create tour' }), { status: 400 });
  }
  return new Response(JSON.stringify(data), { status: 201 });
};
