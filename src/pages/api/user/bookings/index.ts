export const prerender = false;

import type { APIRoute } from 'astro';
import { createAdminClient, createPublicClient } from '../../../../lib/supabase';
import { requireUser } from '../../../../lib/api-auth';

export const GET: APIRoute = async ({ locals }) => {
  const denied = requireUser(locals);
  if (denied) return denied;

  const supabase = createAdminClient() || createPublicClient();
  if (!supabase) return new Response(JSON.stringify({ error: 'Service unavailable' }), { status: 503 });

  const { data, error } = await supabase
    .from('bookings')
    .select('*, tours!inner(title, owner_id)')
    .eq('tours.owner_id', locals.user!.id)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('user bookings GET failed:', error.message);
    return new Response(JSON.stringify({ error: 'Could not load bookings' }), { status: 400 });
  }
  return new Response(JSON.stringify(data), { status: 200 });
};
