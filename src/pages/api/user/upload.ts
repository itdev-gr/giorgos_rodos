export const prerender = false;

import type { APIRoute } from 'astro';
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

    // Max 5MB
    if (file.size > 5 * 1024 * 1024) {
      return new Response(JSON.stringify({ error: 'Image must be under 5MB' }), { status: 400 });
    }

    // Use admin client (service role) to bypass RLS on storage
    const supabase = createAdminClient();
    if (!supabase) {
      // Fallback to public client if service key not available
      const publicClient = createPublicClient();
      if (!publicClient) {
        return new Response(JSON.stringify({ error: 'Database connection failed. Check server configuration.' }), { status: 500 });
      }
      // Try with public client but warn
      return await doUpload(publicClient, file, userId);
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

  const ext = file.name.split('.').pop() || 'jpg';
  const fileName = `${userId}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;

  // Convert File to buffer — required for Vercel serverless
  let fileData: Uint8Array;
  try {
    const arrayBuffer = await file.arrayBuffer();
    fileData = new Uint8Array(arrayBuffer);
  } catch (bufErr: any) {
    console.error('File buffer conversion failed:', bufErr);
    return new Response(JSON.stringify({ error: 'Failed to process file: ' + bufErr.message }), { status: 500 });
  }

  const { error: uploadError } = await supabase.storage
    .from(BUCKET)
    .upload(fileName, fileData, {
      contentType: file.type,
      upsert: false,
    });

  if (uploadError) {
    console.error('Supabase upload error:', uploadError);
    return new Response(JSON.stringify({ error: 'Upload failed: ' + uploadError.message }), { status: 500 });
  }

  const { data: { publicUrl } } = supabase.storage.from(BUCKET).getPublicUrl(fileName);

  return new Response(JSON.stringify({ url: publicUrl }), { status: 200 });
}
