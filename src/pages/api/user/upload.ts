export const prerender = false;

import type { APIRoute } from 'astro';


export const POST: APIRoute = async ({ request, locals }) => {
  const { createAdminClient } = await import('../../lib/supabase');
  const userId = locals.user?.id;
  if (!userId) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });

  const formData = await request.formData();
  const file = formData.get('file') as File;

  if (!file) return new Response(JSON.stringify({ error: 'No file provided' }), { status: 400 });

  // Validate file type
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
  if (!allowedTypes.includes(file.type)) {
    return new Response(JSON.stringify({ error: 'Only JPEG, PNG and WebP images are allowed' }), { status: 400 });
  }

  // Max 5MB
  if (file.size > 5 * 1024 * 1024) {
    return new Response(JSON.stringify({ error: 'Image must be under 5MB' }), { status: 400 });
  }

  const supabase = createAdminClient();
  const ext = file.name.split('.').pop();
  const fileName = `${userId}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;

  const { error } = await supabase.storage
    .from('tour-images')
    .upload(fileName, file, { contentType: file.type });

  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });

  const { data: { publicUrl } } = supabase.storage.from('tour-images').getPublicUrl(fileName);

  return new Response(JSON.stringify({ url: publicUrl }), { status: 200 });
};
