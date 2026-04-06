export const prerender = false;

import type { APIRoute } from 'astro';
import { createAdminClient, createPublicClient } from '../../../../lib/supabase';


export const PUT: APIRoute = async ({ params, request }) => {
  const { id } = params;
  const body = await request.json();
  const supabase = createAdminClient() || createPublicClient();

  const { error } = await supabase.from('profiles').update(body).eq('id', id);
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  return new Response(JSON.stringify({ success: true }), { status: 200 });
};

export const DELETE: APIRoute = async ({ params }) => {
  const { id } = params;
  const supabase = createAdminClient() || createPublicClient();

  // Delete profile first (cascade will handle), then auth user
  const { error: profileError } = await supabase.from('profiles').delete().eq('id', id);
  if (profileError) return new Response(JSON.stringify({ error: profileError.message }), { status: 400 });

  const { error: authError } = await supabase.auth.admin.deleteUser(id!);
  if (authError) return new Response(JSON.stringify({ error: authError.message }), { status: 400 });

  return new Response(JSON.stringify({ success: true }), { status: 200 });
};
