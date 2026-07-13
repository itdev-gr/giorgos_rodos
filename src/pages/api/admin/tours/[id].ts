export const prerender = false;

import type { APIRoute } from 'astro';
import { createAdminClient, createPublicClient } from '../../../../lib/supabase';

function requireAdmin(locals: App.Locals): Response | null {
  if (!locals.user?.id) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  if ((locals.profile as Record<string, unknown> | null)?.role !== 'admin') {
    return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });
  }
  return null;
}

// Columns the admin form may set. Split by how an empty value should be stored.
const PLAIN_FIELDS = ['title', 'description', 'service_page', 'status'];
const NULLABLE_FIELDS = ['badge_label', 'price', 'duration', 'guests', 'image_url', 'category', 'itinerary', 'meeting_point', 'departure_time', 'return_time'];
const ARRAY_FIELDS = ['images', 'highlights', 'inclusions', 'exclusions'];

export const PUT: APIRoute = async ({ params, request, locals }) => {
  const denied = requireAdmin(locals);
  if (denied) return denied;

  const { id } = params;
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== 'object') {
    return new Response(JSON.stringify({ error: 'Invalid request body' }), { status: 400 });
  }

  const supabase = createAdminClient() || createPublicClient();
  if (!supabase) return new Response(JSON.stringify({ error: 'Service unavailable' }), { status: 503 });

  // Partial update: only touch fields actually present in the request. A
  // status-only quick action (Approve/Reject) must NOT null out the rest of
  // the tour, which is exactly what a full-row update with `|| null` did.
  const update: Record<string, unknown> = { updated_at: new Date().toISOString() };
  for (const k of PLAIN_FIELDS) if (body[k] !== undefined) update[k] = body[k];
  for (const k of NULLABLE_FIELDS) if (body[k] !== undefined) update[k] = body[k] || null;
  for (const k of ARRAY_FIELDS) if (body[k] !== undefined) update[k] = body[k] || [];

  const { error } = await supabase.from('tours').update(update).eq('id', id);
  if (error) {
    console.error('admin tours PUT failed:', error.message);
    return new Response(JSON.stringify({ error: 'Update failed' }), { status: 400 });
  }
  return new Response(JSON.stringify({ success: true }), { status: 200 });
};

export const DELETE: APIRoute = async ({ params, locals }) => {
  const denied = requireAdmin(locals);
  if (denied) return denied;

  const { id } = params;
  const supabase = createAdminClient() || createPublicClient();
  if (!supabase) return new Response(JSON.stringify({ error: 'Service unavailable' }), { status: 503 });

  const { error } = await supabase.from('tours').delete().eq('id', id);
  if (error) {
    console.error('admin tours DELETE failed:', error.message);
    return new Response(JSON.stringify({ error: 'Delete failed' }), { status: 400 });
  }
  return new Response(JSON.stringify({ success: true }), { status: 200 });
};
