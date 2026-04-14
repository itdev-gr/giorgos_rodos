export const prerender = false;

import type { APIRoute } from 'astro';
import { createAdminClient, createPublicClient } from '../../../../lib/supabase';


export const POST: APIRoute = async ({ request, locals }) => {
  const body = await request.json();
  const supabase = createAdminClient() || createPublicClient();

  const ownerId = body.owner_id || locals.user?.id;

  // Admin-created tours are pinned across every listings page by default.
  const isGlobal = body.is_global ?? ((locals as any).profile?.role === 'admin');

  const { data, error } = await supabase.from('tours').insert({
    ...body,
    owner_id: ownerId,
    is_global: isGlobal,
  }).select().single();

  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  return new Response(JSON.stringify(data), { status: 201 });
};
