export const prerender = false;

import type { APIRoute } from 'astro';
import { createAdminClient, createPublicClient } from '../../../../lib/supabase';


export const GET: APIRoute = async ({ locals }) => {
  const userId = locals.user?.id;
  const supabase = createAdminClient() || createPublicClient();

  const { data, error } = await supabase
    .from('bookings')
    .select('*, tours!inner(title, owner_id)')
    .eq('tours.owner_id', userId)
    .order('created_at', { ascending: false });

  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  return new Response(JSON.stringify(data), { status: 200 });
};
