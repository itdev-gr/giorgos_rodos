export const prerender = false;

import type { APIRoute } from 'astro';
import { createAdminClient, createPublicClient } from '../../../../lib/supabase';


export const PUT: APIRoute = async ({ params, request, locals }) => {
  const { id } = params;
  const userId = locals.user?.id;
  if (!userId) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });

  const body = await request.json();
  const supabase = createAdminClient() || createPublicClient();

  // Verify the booking belongs to a tour owned by this user
  const { data: booking } = await supabase
    .from('bookings')
    .select('id, tours!inner(owner_id)')
    .eq('id', id)
    .single();

  if (!booking || (booking as any).tours?.owner_id !== userId) {
    return new Response(JSON.stringify({ error: 'Not authorized' }), { status: 403 });
  }

  const { error } = await supabase
    .from('bookings')
    .update({ status: body.status })
    .eq('id', id);

  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  return new Response(JSON.stringify({ success: true }), { status: 200 });
};
