export const prerender = false;

import type { APIRoute } from 'astro';
import { createAdminClient } from '../../lib/supabase';


export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { name, email, phone, subject, message } = body;

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Name, email and message are required' }), { status: 400 });
  }

  const supabase = createAdminClient();
  const { error } = await supabase.from('contact_submissions').insert({
    name, email, phone: phone || null, subject: subject || null, message,
  });

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 201 });
};
