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

    const supabase = createAdminClient() || createPublicClient();

    // Check if bucket exists, create if not
    const { data: buckets } = await supabase.storage.listBuckets();
    const bucketExists = buckets?.some((b: any) => b.name === 'tour-images');
    if (!bucketExists) {
      const { error: createError } = await supabase.storage.createBucket('tour-images', {
        public: true,
        fileSizeLimit: 5 * 1024 * 1024,
        allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
      });
      if (createError) {
        console.error('Bucket creation error:', createError);
        return new Response(JSON.stringify({ error: 'Storage setup failed: ' + createError.message }), { status: 500 });
      }
    }

    const ext = file.name.split('.').pop() || 'jpg';
    const fileName = `${userId}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;

    // Convert File to ArrayBuffer for Supabase compatibility
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    const { error: uploadError } = await supabase.storage
      .from('tour-images')
      .upload(fileName, buffer, {
        contentType: file.type,
        upsert: false,
      });

    if (uploadError) {
      console.error('Upload error:', uploadError);
      return new Response(JSON.stringify({ error: 'Upload failed: ' + uploadError.message }), { status: 500 });
    }

    const { data: { publicUrl } } = supabase.storage.from('tour-images').getPublicUrl(fileName);

    return new Response(JSON.stringify({ url: publicUrl }), { status: 200 });
  } catch (err: any) {
    console.error('Upload handler error:', err);
    return new Response(JSON.stringify({ error: 'Server error: ' + (err?.message || 'Unknown error') }), { status: 500 });
  }
};
