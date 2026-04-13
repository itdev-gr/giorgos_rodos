export const prerender = false;

import type { APIRoute } from 'astro';
import { createAdminClient, createPublicClient } from '../../../../lib/supabase';


export const POST: APIRoute = async ({ request, locals }) => {
  const body = await request.json();
  const supabase = createAdminClient() || createPublicClient();

  // Admin can create tours on behalf of any user, or themselves
  const ownerId = body.owner_id || locals.user?.id;

  const { data, error } = await supabase.from('tours').insert({
    ...body,
    owner_id: ownerId,
  }).select().single();

  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  return new Response(JSON.stringify(data), { status: 201 });
};
