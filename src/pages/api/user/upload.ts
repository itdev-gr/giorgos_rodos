export const prerender = false;

import type { APIRoute } from 'astro';
import sharp from 'sharp';
import { createAdminClient, createPublicClient } from '../../../lib/supabase';


export const POST: APIRoute = async ({ request, locals }) => {
  const userId = locals.user?.id;
  if (!userId) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });

  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file || !file.name) {
      return new Response(JSON.stringify({ error: 'No file provided' }), { status: 400 });
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      return new Response(JSON.stringify({ error: 'Only JPEG, PNG and WebP images are allowed' }), { status: 400 });
    }

    // Raise original-file ceiling now that we compress; Sharp handles anything within memory.
    if (file.size > 20 * 1024 * 1024) {
      return new Response(JSON.stringify({ error: 'Image must be under 20MB' }), { status: 400 });
    }

    // Use admin client (service role) to bypass RLS on storage
    const supabase = createAdminClient();
    if (!supabase) {
      console.error('Upload failed: createAdminClient() returned null. SUPABASE_SERVICE_ROLE_KEY missing from environment.');
      console.error('Available SUPABASE env vars:', Object.keys(process.env).filter(k => k.toLowerCase().includes('supabase')));
      return new Response(JSON.stringify({
        error: 'Server configuration error: storage service unavailable. Please contact the administrator.'
      }), { status: 500 });
    }

    return await doUpload(supabase, file, userId);
  } catch (err: any) {
    console.error('Upload handler error:', err);
    return new Response(JSON.stringify({ error: 'Server error: ' + (err?.message || String(err)) }), { status: 500 });
  }
};

async function doUpload(supabase: any, file: File, userId: string) {
  const BUCKET = 'tour-images';

  // Ensure bucket exists
  try {
    const { data: buckets } = await supabase.storage.listBuckets();
    const exists = buckets?.some((b: any) => b.name === BUCKET);
    if (!exists) {
      const { error: createErr } = await supabase.storage.createBucket(BUCKET, {
        public: true,
        fileSizeLimit: 5 * 1024 * 1024,
        allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
      });
      if (createErr) {
        console.error('Bucket creation failed:', createErr);
        return new Response(JSON.stringify({ error: 'Storage bucket setup failed: ' + createErr.message }), { status: 500 });
      }
    }
  } catch (bucketErr: any) {
    console.error('Bucket check failed:', bucketErr);
    // Continue anyway — bucket might exist but listBuckets may require different permissions
  }

  const fileName = `${userId}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.webp`;

  // Read input, then compress via Sharp (resize to 1920px max long edge, encode WebP q80).
  let compressed: Buffer;
  try {
    const arrayBuffer = await file.arrayBuffer();
    compressed = await sharp(Buffer.from(arrayBuffer))
      .rotate() // honour EXIF orientation then strip it
      .resize({ width: 1920, height: 1920, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 80 })
      .toBuffer();
  } catch (bufErr: any) {
    console.error('Image compression failed:', bufErr);
    return new Response(JSON.stringify({ error: 'Failed to process image: ' + bufErr.message }), { status: 500 });
  }

  const { error: uploadError } = await supabase.storage
    .from(BUCKET)
    .upload(fileName, compressed, {
      contentType: 'image/webp',
      upsert: false,
    });

  if (uploadError) {
    console.error('Supabase upload error:', uploadError);
    return new Response(JSON.stringify({ error: 'Upload failed: ' + uploadError.message }), { status: 500 });
  }

  const { data: { publicUrl } } = supabase.storage.from(BUCKET).getPublicUrl(fileName);

  return new Response(JSON.stringify({ url: publicUrl }), { status: 200 });
}
