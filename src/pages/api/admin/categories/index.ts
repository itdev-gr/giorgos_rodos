export const prerender = false;

import type { APIRoute } from 'astro';
import { createAdminClient, createPublicClient } from '../../../../lib/supabase';

const BUCKET = 'site-config';
const FILE = 'service-categories.json';

// GET — return current categories
export const GET: APIRoute = async () => {
  const supabase = createAdminClient() || createPublicClient();
  const { data: urlData } = supabase.storage.from(BUCKET).getPublicUrl(FILE);

  try {
    const res = await fetch(urlData.publicUrl + '?t=' + Date.now());
    if (!res.ok) return new Response(JSON.stringify([]), { status: 200 });
    const data = await res.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch {
    return new Response(JSON.stringify([]), { status: 200 });
  }
};

// PUT — update a single category's image (by slug)
export const PUT: APIRoute = async ({ request }) => {
  const supabase = createAdminClient();
  if (!supabase) {
    return new Response(JSON.stringify({ error: 'Admin client unavailable' }), { status: 500 });
  }

  const body = await request.json();
  const { slug, image } = body;

  if (!slug || !image) {
    return new Response(JSON.stringify({ error: 'slug and image are required' }), { status: 400 });
  }

  // Fetch current categories
  const { data: urlData } = supabase.storage.from(BUCKET).getPublicUrl(FILE);
  let categories: any[] = [];
  try {
    const res = await fetch(urlData.publicUrl + '?t=' + Date.now());
    if (res.ok) categories = await res.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Failed to load categories' }), { status: 500 });
  }

  // Update the matching category
  const index = categories.findIndex((c: any) => c.slug === slug);
  if (index === -1) {
    return new Response(JSON.stringify({ error: 'Category not found' }), { status: 404 });
  }

  categories[index].image = image;

  // Save back to storage
  const json = JSON.stringify(categories, null, 2);
  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(FILE, json, { contentType: 'application/json', upsert: true });

  if (error) {
    return new Response(JSON.stringify({ error: 'Failed to save: ' + error.message }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true, category: categories[index] }), { status: 200 });
};
