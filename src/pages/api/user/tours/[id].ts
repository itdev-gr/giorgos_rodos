export const prerender = false;

import type { APIRoute } from 'astro';
import { createAdminClient, createPublicClient } from '../../../../lib/supabase';
import { requireUser, readJsonBody } from '../../../../lib/api-auth';

const PLAIN_FIELDS = ['title', 'description', 'service_page', 'status'];
const NULLABLE_FIELDS = ['badge_label', 'price', 'duration', 'guests', 'image_url', 'category', 'itinerary', 'meeting_point', 'departure_time', 'return_time'];
const ARRAY_FIELDS = ['images', 'highlights', 'inclusions', 'exclusions'];

export const PUT: APIRoute = async ({ params, request, locals }) => {
  const denied = requireUser(locals);
  if (denied) return denied;

  const { id } = params;
  const body = await readJsonBody(request);
  if (!body) return new Response(JSON.stringify({ error: 'Invalid request body' }), { status: 400 });

  const supabase = createAdminClient() || createPublicClient();
  if (!supabase) return new Response(JSON.stringify({ error: 'Service unavailable' }), { status: 503 });

  const { data: tour } = await supabase.from('tours').select('owner_id').eq('id', id).single();
  if (!tour || tour.owner_id !== locals.user!.id) {
    return new Response(JSON.stringify({ error: 'Not authorized' }), { status: 403 });
  }

  // Partial update: only write fields present in the body.
  const update: Record<string, unknown> = { updated_at: new Date().toISOString() };
  for (const k of PLAIN_FIELDS) if (body[k] !== undefined) update[k] = body[k];
  for (const k of NULLABLE_FIELDS) if (body[k] !== undefined) update[k] = body[k] || null;
  for (const k of ARRAY_FIELDS) if (body[k] !== undefined) update[k] = body[k] || [];

  const { error } = await supabase.from('tours').update(update).eq('id', id);
  if (error) {
    console.error('user tours PUT failed:', error.message);
    return new Response(JSON.stringify({ error: 'Update failed' }), { status: 400 });
  }
  return new Response(JSON.stringify({ success: true }), { status: 200 });
};

export const DELETE: APIRoute = async ({ params, locals }) => {
  const denied = requireUser(locals);
  if (denied) return denied;

  const { id } = params;
  const supabase = createAdminClient() || createPublicClient();
  if (!supabase) return new Response(JSON.stringify({ error: 'Service unavailable' }), { status: 503 });

  const { data: tour } = await supabase.from('tours').select('owner_id').eq('id', id).single();
  if (!tour || tour.owner_id !== locals.user!.id) {
    return new Response(JSON.stringify({ error: 'Not authorized' }), { status: 403 });
  }

  const { error } = await supabase.from('tours').delete().eq('id', id);
  if (error) {
    console.error('user tours DELETE failed:', error.message);
    return new Response(JSON.stringify({ error: 'Delete failed' }), { status: 400 });
  }
  return new Response(JSON.stringify({ success: true }), { status: 200 });
};
