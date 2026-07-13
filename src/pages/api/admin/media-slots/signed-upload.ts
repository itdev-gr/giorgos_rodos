export const prerender = false;

import type { APIRoute } from 'astro';
import { createAdminClient } from '../../../../lib/supabase';
import { requireAdmin } from '../../../../lib/api-auth';

const BUCKET = 'site-media';
const ALLOWED = new Set(['video/mp4', 'video/webm', 'video/quicktime']);

// POST — issue a signed upload URL for a video file uploaded direct-to-Supabase.
// Body: { key: string, filename: string, contentType: string }
// Returns: { uploadUrl: string, path: string, publicUrl: string, token: string }
export const POST: APIRoute = async ({ request, locals }) => {
  const denied = requireAdmin(locals);
  if (denied) return denied;

  const supabase = createAdminClient();
  if (!supabase) return new Response(JSON.stringify({ error: 'Admin client unavailable' }), { status: 500 });

  const body = await request.json().catch(() => null);
  if (!body?.key || !body?.filename || !body?.contentType) {
    return new Response(JSON.stringify({ error: 'key, filename and contentType are required' }), { status: 400 });
  }
  if (!ALLOWED.has(body.contentType)) {
    return new Response(JSON.stringify({ error: 'Only MP4, WebM and MOV videos are supported' }), { status: 400 });
  }

  // Ensure bucket exists (public).
  try {
    const { data: buckets } = await supabase.storage.listBuckets();
    if (!buckets?.some((b: any) => b.name === BUCKET)) {
      await supabase.storage.createBucket(BUCKET, {
        public: true,
        fileSizeLimit: 500 * 1024 * 1024,
      });
    }
  } catch {
    // continue; bucket may exist already
  }

  const safeKey = String(body.key).replace(/[^a-z0-9._-]/gi, '-');
  const extMatch = String(body.filename).match(/\.([a-z0-9]{2,5})$/i);
  const ext = extMatch ? extMatch[1].toLowerCase() : 'mp4';
  const path = `videos/${safeKey}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;

  const { data, error } = await supabase.storage.from(BUCKET).createSignedUploadUrl(path);
  if (error || !data) {
    console.error('signed-upload createSignedUploadUrl failed:', error?.message);
    return new Response(JSON.stringify({ error: 'Failed to create upload URL' }), { status: 500 });
  }

  const { data: pub } = supabase.storage.from(BUCKET).getPublicUrl(path);

  return new Response(
    JSON.stringify({
      uploadUrl: data.signedUrl,
      token: data.token,
      path,
      publicUrl: pub.publicUrl,
    }),
    { status: 200 }
  );
};
