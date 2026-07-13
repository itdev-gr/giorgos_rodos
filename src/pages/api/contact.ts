export const prerender = false;

import type { APIRoute } from 'astro';
import { createAdminClient, createPublicClient } from '../../lib/supabase';

// This endpoint only records the lead in Supabase. Email delivery happens
// client-side via Web3Forms (their free plan rejects server-side submits), so
// this route no longer sends email or returns 502 on delivery failure.
export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { name, email, phone, subject, message } = body;

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Name, email and message are required' }), { status: 400 });
  }

  try {
    const supabase = createAdminClient() || createPublicClient();
    if (supabase) {
      const { error } = await supabase.from('contact_submissions').insert({
        name, email, phone: phone || null, subject: subject || null, message,
      });
      if (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
      }
    }
  } catch {
    return new Response(JSON.stringify({ error: 'Could not record submission' }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 201 });
};
