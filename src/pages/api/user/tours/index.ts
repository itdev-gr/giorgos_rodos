export const prerender = false;

import type { APIRoute } from 'astro';
import { createAdminClient, createPublicClient } from '../../../../lib/supabase';
import { requireUser, readJsonBody } from '../../../../lib/api-auth';

export const GET: APIRoute = async ({ locals }) => {
  const denied = requireUser(locals);
  if (denied) return denied;

  const supabase = createAdminClient() || createPublicClient();
  if (!supabase) return new Response(JSON.stringify({ error: 'Service unavailable' }), { status: 503 });

  const { data, error } = await supabase
    .from('tours')
    .select('*')
    .eq('owner_id', locals.user!.id)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('user tours GET failed:', error.message);
    return new Response(JSON.stringify({ error: 'Could not load tours' }), { status: 400 });
  }
  return new Response(JSON.stringify(data), { status: 200 });
};

export const POST: APIRoute = async ({ request, locals }) => {
  const denied = requireUser(locals);
  if (denied) return denied;

  const body = await readJsonBody(request);
  if (!body) return new Response(JSON.stringify({ error: 'Invalid request body' }), { status: 400 });

  const supabase = createAdminClient() || createPublicClient();
  if (!supabase) return new Response(JSON.stringify({ error: 'Service unavailable' }), { status: 503 });

  const { error } = await supabase.from('tours').insert({
    owner_id: locals.user!.id,
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

  if (error) {
    console.error('user tours POST failed:', error.message);
    return new Response(JSON.stringify({ error: 'Could not create tour' }), { status: 400 });
  }
  return new Response(JSON.stringify({ success: true }), { status: 201 });
};
