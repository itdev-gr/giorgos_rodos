export const prerender = false;

import type { APIRoute } from 'astro';
import { createAdminClient, createPublicClient } from '../../lib/supabase';


export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { tour_id, customer_name, customer_email, customer_phone, booking_date, guests } = body;

  if (!tour_id || !customer_name || !customer_email || !booking_date) {
    return new Response(JSON.stringify({ error: 'Tour, name, email and date are required' }), { status: 400 });
  }

  const supabase = createAdminClient() || createPublicClient();
  const { error } = await supabase.from('bookings').insert({
    tour_id,
    customer_name,
    customer_email,
    customer_phone: customer_phone || null,
    booking_date,
    guests: parseInt(guests) || 1,
    status: 'pending',
  });

  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  return new Response(JSON.stringify({ success: true }), { status: 201 });
};
