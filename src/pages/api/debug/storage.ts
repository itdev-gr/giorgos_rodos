export const prerender = false;

import type { APIRoute } from 'astro';
import { createAdminClient, createPublicClient } from '../../../lib/supabase';

export const GET: APIRoute = async ({ locals }) => {
  const checks: Record<string, any> = {};

  // Check env vars (existence only, not values)
  checks.env = {
    PUBLIC_SUPABASE_URL: !!(import.meta.env.PUBLIC_SUPABASE_URL || process.env.PUBLIC_SUPABASE_URL),
    PUBLIC_SUPABASE_ANON_KEY: !!(import.meta.env.PUBLIC_SUPABASE_ANON_KEY || process.env.PUBLIC_SUPABASE_ANON_KEY),
    SUPABASE_SERVICE_ROLE_KEY: !!(import.meta.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY),
  };

  // Check clients
  const adminClient = createAdminClient();
  const publicClient = createPublicClient();
  checks.clients = {
    adminClient: !!adminClient,
    publicClient: !!publicClient,
  };

  // Check auth
  checks.auth = {
    userId: locals.user?.id || null,
    hasProfile: !!locals.profile,
  };

  // Check storage buckets
  const supabase = adminClient || publicClient;
  if (supabase) {
    try {
      const { data: buckets, error } = await supabase.storage.listBuckets();
      checks.storage = {
        listBucketsError: error?.message || null,
        buckets: buckets?.map((b: any) => ({ name: b.name, public: b.public })) || [],
        tourImagesBucketExists: buckets?.some((b: any) => b.name === 'tour-images') || false,
      };
    } catch (err: any) {
      checks.storage = { error: err?.message || String(err) };
    }

    // Try a test upload if bucket exists
    if (checks.storage?.tourImagesBucketExists) {
      try {
        const testData = new Uint8Array([137, 80, 78, 71]); // PNG header bytes
        const testPath = `_test/${Date.now()}.test`;
        const { error: uploadErr } = await supabase.storage
          .from('tour-images')
          .upload(testPath, testData, { contentType: 'image/png' });
        checks.testUpload = {
          error: uploadErr?.message || null,
          success: !uploadErr,
        };
        // Clean up test file
        if (!uploadErr) {
          await supabase.storage.from('tour-images').remove([testPath]);
        }
      } catch (err: any) {
        checks.testUpload = { error: err?.message || String(err) };
      }
    }
  }

  return new Response(JSON.stringify(checks, null, 2), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
