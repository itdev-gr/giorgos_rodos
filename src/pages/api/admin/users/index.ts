export const prerender = false;

import type { APIRoute } from 'astro';
import { createAdminClient, createPublicClient } from '../../../../lib/supabase';
import { requireAdmin, readJsonBody, isEmail } from '../../../../lib/api-auth';

export const POST: APIRoute = async ({ request, locals }) => {
  const denied = requireAdmin(locals);
  if (denied) return denied;

  const body = await readJsonBody(request);
  if (!body) return new Response(JSON.stringify({ error: 'Invalid request body' }), { status: 400 });

  const { email, password, full_name, company_name, phone, role } = body;

  if (!email || !password) {
    return new Response(JSON.stringify({ error: 'Email and password are required' }), { status: 400 });
  }
  if (!isEmail(email)) {
    return new Response(JSON.stringify({ error: 'A valid email is required' }), { status: 400 });
  }
  if (String(password).length < 8) {
    return new Response(JSON.stringify({ error: 'Password must be at least 8 characters' }), { status: 400 });
  }

  const supabase = createAdminClient() || createPublicClient();
  if (!supabase) return new Response(JSON.stringify({ error: 'Service unavailable' }), { status: 503 });

  const { data: authData, error: authError } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });

  if (authError || !authData?.user) {
    console.error('admin create user failed:', authError?.message);
    return new Response(JSON.stringify({ error: 'Could not create user' }), { status: 400 });
  }

  const { error: profileError } = await supabase.from('profiles').insert({
    id: authData.user.id,
    full_name: full_name || null,
    company_name: company_name || null,
    phone: phone || null,
    role: role === 'admin' ? 'admin' : 'user',
  });

  if (profileError) {
    console.error('admin create profile failed:', profileError.message);
    return new Response(JSON.stringify({ error: 'Could not create user profile' }), { status: 400 });
  }

  return new Response(JSON.stringify({ success: true, userId: authData.user.id }), { status: 201 });
};
