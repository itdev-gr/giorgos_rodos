export const prerender = false;

import type { APIRoute } from 'astro';
import { createAdminClient, createPublicClient } from '../../../../lib/supabase';


export const PUT: APIRoute = async ({ params, request }) => {
  const { id } = params;
  const body = await request.json();
  const supabase = createAdminClient() || createPublicClient();

  const { error } = await supabase.from('tours').update({
    title: body.title,
    description: body.description,
    service_page: body.service_page,
    badge_label: body.badge_label || null,
    price: body.price || null,
    duration: body.duration || null,
    guests: body.guests || null,
    image_url: body.image_url || null,
    images: body.images || [],
    category: body.category || null,
    highlights: body.highlights || [],
    inclusions: body.inclusions || [],
    exclusions: body.exclusions || [],
    itinerary: body.itinerary || null,
    meeting_point: body.meeting_point || null,
    departure_time: body.departure_time || null,
    return_time: body.return_time || null,
    status: body.status || 'draft',
    updated_at: new Date().toISOString(),
  }).eq('id', id);

  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  return new Response(JSON.stringify({ success: true }), { status: 200 });
};

export const DELETE: APIRoute = async ({ params }) => {
  const { id } = params;
  const supabase = createAdminClient() || createPublicClient();

  const { error } = await supabase.from('tours').delete().eq('id', id);
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  return new Response(JSON.stringify({ success: true }), { status: 200 });
};
