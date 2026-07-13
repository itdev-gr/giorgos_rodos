export const prerender = false;

import type { APIRoute } from 'astro';
import { createAdminClient, createPublicClient } from '../../../../lib/supabase';
import { requireAdmin, readJsonBody } from '../../../../lib/api-auth';

const BOOKING_STATUSES = ['pending', 'confirmed', 'cancelled', 'completed'];

export const PUT: APIRoute = async ({ params, request, locals }) => {
  const denied = requireAdmin(locals);
  if (denied) return denied;

  const { id } = params;
  const body = await readJsonBody(request);
  if (!body || !BOOKING_STATUSES.includes(body.status)) {
    return new Response(JSON.stringify({ error: 'Invalid status' }), { status: 400 });
  }

  const supabase = createAdminClient() || createPublicClient();
  if (!supabase) return new Response(JSON.stringify({ error: 'Service unavailable' }), { status: 503 });

  const { error } = await supabase.from('bookings').update({ status: body.status }).eq('id', id);
  if (error) {
    console.error('admin booking PUT failed:', error.message);
    return new Response(JSON.stringify({ error: 'Update failed' }), { status: 400 });
  }
  return new Response(JSON.stringify({ success: true }), { status: 200 });
};
