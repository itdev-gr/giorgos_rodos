export const prerender = false;

import type { APIRoute } from 'astro';
import { createAdminClient, createPublicClient } from '../../../../lib/supabase';
import { invalidateMediaCache } from '../../../../lib/media';
import { requireAdmin } from '../../../../lib/api-auth';

const BUCKET = 'site-config';
const FILE = 'media-slots.json';

async function loadSlots(supabase: any): Promise<any[]> {
  const { data: urlData } = supabase.storage.from(BUCKET).getPublicUrl(FILE);
  try {
    const res = await fetch(urlData.publicUrl + '?t=' + Date.now());
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

async function saveSlots(supabase: any, slots: any[]) {
  const json = JSON.stringify(slots, null, 2);
  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(FILE, new Blob([json], { type: 'application/json' }), {
      contentType: 'application/json',
      upsert: true,
    });
  if (error) throw error;
}

// GET — return all slots
export const GET: APIRoute = async () => {
  const supabase = createAdminClient() || createPublicClient();
  if (!supabase) return new Response(JSON.stringify([]), { status: 200 });
  const slots = await loadSlots(supabase);
  return new Response(JSON.stringify(slots), {
    status: 200,
    headers: { 'Cache-Control': 'no-store' },
  });
};

// PUT — update one slot's url by key  { key, url }
export const PUT: APIRoute = async ({ request, locals }) => {
  const denied = requireAdmin(locals);
  if (denied) return denied;

  const supabase = createAdminClient();
  if (!supabase) return new Response(JSON.stringify({ error: 'Admin client unavailable' }), { status: 500 });

  const body = await request.json().catch(() => null);
  if (!body?.key || !body?.url) {
    return new Response(JSON.stringify({ error: 'key and url are required' }), { status: 400 });
  }

  const slots = await loadSlots(supabase);
  const idx = slots.findIndex((s) => s.key === body.key);
  if (idx === -1) return new Response(JSON.stringify({ error: 'Slot not found' }), { status: 404 });

  slots[idx].url = body.url;

  try {
    await saveSlots(supabase, slots);
    invalidateMediaCache();
  } catch (e: any) {
    console.error('media-slots PUT save failed:', e?.message);
    return new Response(JSON.stringify({ error: 'Save failed' }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true, slot: slots[idx] }), { status: 200 });
};

// POST — reset one slot to its default { action: 'reset', key }
export const POST: APIRoute = async ({ request, locals }) => {
  const denied = requireAdmin(locals);
  if (denied) return denied;

  const supabase = createAdminClient();
  if (!supabase) return new Response(JSON.stringify({ error: 'Admin client unavailable' }), { status: 500 });

  const body = await request.json().catch(() => null);
  if (body?.action !== 'reset' || !body?.key) {
    return new Response(JSON.stringify({ error: 'Invalid request' }), { status: 400 });
  }

  const slots = await loadSlots(supabase);
  const idx = slots.findIndex((s) => s.key === body.key);
  if (idx === -1) return new Response(JSON.stringify({ error: 'Slot not found' }), { status: 404 });

  slots[idx].url = slots[idx].defaultUrl;

  try {
    await saveSlots(supabase, slots);
    invalidateMediaCache();
  } catch (e: any) {
    console.error('media-slots POST save failed:', e?.message);
    return new Response(JSON.stringify({ error: 'Save failed' }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true, slot: slots[idx] }), { status: 200 });
};
