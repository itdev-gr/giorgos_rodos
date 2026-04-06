export const prerender = false;

import type { APIRoute } from 'astro';
import { createAdminClient } from '../../../../lib/supabase';


export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { email, password, full_name, company_name, phone, role } = body;

  if (!email || !password) {
    return new Response(JSON.stringify({ error: 'Email and password are required' }), { status: 400 });
  }

  const supabase = createAdminClient();

  // Create auth user
  const { data: authData, error: authError } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });

  if (authError) {
    return new Response(JSON.stringify({ error: authError.message }), { status: 400 });
  }

  // Create profile
  const { error: profileError } = await supabase.from('profiles').insert({
    id: authData.user.id,
    full_name: full_name || null,
    company_name: company_name || null,
    phone: phone || null,
    role: role || 'user',
  });

  if (profileError) {
    return new Response(JSON.stringify({ error: profileError.message }), { status: 400 });
  }

  return new Response(JSON.stringify({ success: true, userId: authData.user.id }), { status: 201 });
};
