export const prerender = false;

import type { APIRoute } from 'astro';
import { createAdminClient } from '../../../../lib/supabase';

const TARGETS = [
  { name: 'site-media', fileSizeLimit: 500 * 1024 * 1024 },
  { name: 'tour-images', fileSizeLimit: 50 * 1024 * 1024 },
];

export const POST: APIRoute = async () => {
  const supabase = createAdminClient();
  if (!supabase) {
    return new Response(JSON.stringify({ error: 'Admin client unavailable (SUPABASE_SERVICE_ROLE_KEY missing).' }), { status: 500 });
  }

  const results: Array<{ bucket: string; limitMB: number; status: 'updated' | 'created' | 'error'; message?: string }> = [];

  const { data: existing, error: listErr } = await supabase.storage.listBuckets();
  if (listErr) {
    return new Response(JSON.stringify({ error: 'Could not list buckets: ' + listErr.message }), { status: 500 });
  }
  const existingNames = new Set((existing || []).map((b: any) => b.name));

  for (const target of TARGETS) {
    const limitMB = Math.round(target.fileSizeLimit / (1024 * 1024));
    if (existingNames.has(target.name)) {
      const { error } = await supabase.storage.updateBucket(target.name, {
        public: true,
        fileSizeLimit: target.fileSizeLimit,
      });
      results.push({
        bucket: target.name,
        limitMB,
        status: error ? 'error' : 'updated',
        message: error?.message,
      });
    } else {
      const { error } = await supabase.storage.createBucket(target.name, {
        public: true,
        fileSizeLimit: target.fileSizeLimit,
      });
      results.push({
        bucket: target.name,
        limitMB,
        status: error ? 'error' : 'created',
        message: error?.message,
      });
    }
  }

  const ok = results.every((r) => r.status !== 'error');
  return new Response(JSON.stringify({ ok, results }, null, 2), {
    status: ok ? 200 : 500,
    headers: { 'Content-Type': 'application/json' },
  });
};
