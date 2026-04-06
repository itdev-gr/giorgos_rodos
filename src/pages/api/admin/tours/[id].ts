export const prerender = false;

import type { APIRoute } from 'astro';


export const PUT: APIRoute = async ({ params, request }) => {
  const { createAdminClient } = await import('../../../lib/supabase');
  const { id } = params;
  const body = await request.json();
  const supabase = createAdminClient();

  const { error } = await supabase.from('tours').update(body).eq('id', id);
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  return new Response(JSON.stringify({ success: true }), { status: 200 });
};

export const DELETE: APIRoute = async ({ params }) => {
  const { createAdminClient } = await import('../../../lib/supabase');
  const { id } = params;
  const supabase = createAdminClient();

  const { error } = await supabase.from('tours').delete().eq('id', id);
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  return new Response(JSON.stringify({ success: true }), { status: 200 });
};
