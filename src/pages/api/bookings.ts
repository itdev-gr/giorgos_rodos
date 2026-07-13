export const prerender = false;

import type { APIRoute } from 'astro';
import { createAdminClient, createPublicClient } from '../../lib/supabase';
import { readJsonBody, isEmail, clampInt } from '../../lib/api-auth';

export const POST: APIRoute = async ({ request }) => {
  const body = await readJsonBody(request);
  if (!body) return new Response(JSON.stringify({ error: 'Invalid request body' }), { status: 400 });

  const { tour_id, customer_name, customer_email, customer_phone, booking_date, guests } = body;

  if (!tour_id || !customer_name || !customer_email || !booking_date) {
    return new Response(JSON.stringify({ error: 'Tour, name, email and date are required' }), { status: 400 });
  }
  if (!isEmail(customer_email)) {
    return new Response(JSON.stringify({ error: 'A valid email is required' }), { status: 400 });
  }
  if (String(customer_name).length > 200 || String(customer_phone || '').length > 60) {
    return new Response(JSON.stringify({ error: 'Input too long' }), { status: 400 });
  }

  const supabase = createAdminClient() || createPublicClient();
  if (!supabase) return new Response(JSON.stringify({ error: 'Service unavailable' }), { status: 503 });

  // Only accept bookings against a real tour (also blocks spam with random ids).
  const { data: tour } = await supabase.from('tours').select('id').eq('id', tour_id).maybeSingle();
  if (!tour) return new Response(JSON.stringify({ error: 'Tour not found' }), { status: 400 });

  const { error } = await supabase.from('bookings').insert({
    tour_id,
    customer_name: String(customer_name).slice(0, 200),
    customer_email,
    customer_phone: customer_phone ? String(customer_phone).slice(0, 60) : null,
    booking_date,
    guests: clampInt(guests, 1, 100, 1),
    status: 'pending',
  });

  if (error) {
    console.error('bookings insert failed:', error.message);
    return new Response(JSON.stringify({ error: 'Could not record booking' }), { status: 500 });
  }

  // Owner notification is sent client-side via Web3Forms; this only persists.
  return new Response(JSON.stringify({ success: true }), { status: 201 });
};
