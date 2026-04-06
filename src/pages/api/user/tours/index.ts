export const prerender = false;

import type { APIRoute } from 'astro';
import { createAdminClient } from '../../../../lib/supabase';

export const GET: APIRoute = async ({ locals }) => {
  const supabase = createAdminClient();
  const userId = locals.user?.id;

  const { data, error } = await supabase
    .from('tours')
    .select('*')
    .eq('owner_id', userId)
    .order('created_at', { ascending: false });

  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  return new Response(JSON.stringify(data), { status: 200 });
};

export const POST: APIRoute = async ({ request, locals }) => {
  const body = await request.json();
  const userId = locals.user?.id;
  const supabase = createAdminClient();

  const { error } = await supabase.from('tours').insert({
    owner_id: userId,
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
  });

  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  return new Response(JSON.stringify({ success: true }), { status: 201 });
};
