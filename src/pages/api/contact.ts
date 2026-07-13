export const prerender = false;

import type { APIRoute } from 'astro';
import { createAdminClient, createPublicClient } from '../../lib/supabase';
import { readJsonBody, isEmail } from '../../lib/api-auth';

// This endpoint only records the lead in Supabase. Email delivery happens
// client-side via Web3Forms (their free plan rejects server-side submits), so
// this route no longer sends email or returns 502 on delivery failure.
export const POST: APIRoute = async ({ request }) => {
  const body = await readJsonBody(request);
  if (!body) return new Response(JSON.stringify({ error: 'Invalid request body' }), { status: 400 });

  const { name, email, phone, subject, message } = body;

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Name, email and message are required' }), { status: 400 });
  }
  if (!isEmail(email)) {
    return new Response(JSON.stringify({ error: 'A valid email is required' }), { status: 400 });
  }
  if (String(name).length > 200 || String(message).length > 5000 || String(subject || '').length > 200) {
    return new Response(JSON.stringify({ error: 'Input too long' }), { status: 400 });
  }

  try {
    const supabase = createAdminClient() || createPublicClient();
    if (supabase) {
      const { error } = await supabase.from('contact_submissions').insert({
        name: String(name).slice(0, 200),
        email,
        phone: phone ? String(phone).slice(0, 60) : null,
        subject: subject ? String(subject).slice(0, 200) : null,
        message: String(message).slice(0, 5000),
      });
      if (error) {
        console.error('contact insert failed:', error.message);
        return new Response(JSON.stringify({ error: 'Could not record submission' }), { status: 500 });
      }
    }
  } catch (e) {
    console.error('contact endpoint error:', e);
    return new Response(JSON.stringify({ error: 'Could not record submission' }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 201 });
};
