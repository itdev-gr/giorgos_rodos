export const prerender = false;

import type { APIRoute } from 'astro';


export const PUT: APIRoute = async ({ params, request, locals }) => {
  const { createAdminClient } = await import('../../../lib/supabase');
  const { id } = params;
  const body = await request.json();
  const userId = locals.user?.id;
  const supabase = createAdminClient();

  // Verify ownership
  const { data: tour } = await supabase.from('tours').select('owner_id').eq('id', id).single();
  if (!tour || tour.owner_id !== userId) {
    return new Response(JSON.stringify({ error: 'Not authorized' }), { status: 403 });
  }

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

export const DELETE: APIRoute = async ({ params, locals }) => {
  const { createAdminClient } = await import('../../../lib/supabase');
  const { id } = params;
  const userId = locals.user?.id;
  const supabase = createAdminClient();

  // Verify ownership
  const { data: tour } = await supabase.from('tours').select('owner_id').eq('id', id).single();
  if (!tour || tour.owner_id !== userId) {
    return new Response(JSON.stringify({ error: 'Not authorized' }), { status: 403 });
  }

  const { error } = await supabase.from('tours').delete().eq('id', id);
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  return new Response(JSON.stringify({ success: true }), { status: 200 });
};
