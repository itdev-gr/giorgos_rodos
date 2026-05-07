// One-shot: upload a compressed hero video to Supabase storage and switch the
// media-slot to point at it. Keeps the original file in storage so reverting
// is trivial (just point the slot back at the old URL).
//
// Usage:
//   node scripts/swap-hero-video.mjs <slot-key> <local-mp4-path> [optional-webm-path]
// Example:
//   node scripts/swap-hero-video.mjs service.boat-tours.hero.video /tmp/video-compress/compressed.mp4

import { createClient } from '@supabase/supabase-js';
import { readFileSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, basename } from 'node:path';

const envPath = join(dirname(fileURLToPath(import.meta.url)), '..', '.env');
const env = Object.fromEntries(
  readFileSync(envPath, 'utf8')
    .split('\n')
    .filter((l) => l && !l.startsWith('#') && l.includes('='))
    .map((l) => {
      const i = l.indexOf('=');
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
    })
);

const [, , slotKey, mp4Path] = process.argv;
if (!slotKey || !mp4Path) {
  console.error('Usage: node scripts/swap-hero-video.mjs <slot-key> <local-mp4-path>');
  process.exit(1);
}

const supabase = createClient(env.PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

// 1. Upload the compressed file to site-media bucket.
const ts = Date.now();
const random = Math.random().toString(36).slice(2, 8);
const ext = mp4Path.endsWith('.webm') ? 'webm' : 'mp4';
const storagePath = `videos/${slotKey}/${ts}-${random}-compressed.${ext}`;
console.log(`Uploading ${(statSync(mp4Path).size / 1048576).toFixed(2)} MB to site-media/${storagePath}`);

const fileBuf = readFileSync(mp4Path);
const { error: upErr } = await supabase.storage
  .from('site-media')
  .upload(storagePath, fileBuf, {
    contentType: ext === 'webm' ? 'video/webm' : 'video/mp4',
    upsert: false,
    cacheControl: '31536000',
  });
if (upErr) {
  console.error('Upload failed:', upErr);
  process.exit(1);
}

const { data: pub } = supabase.storage.from('site-media').getPublicUrl(storagePath);
const newUrl = pub.publicUrl;
console.log(`✓ Uploaded: ${newUrl}`);

// 2. Update the media-slots.json file in site-config bucket.
const { data: slotsBlob } = supabase.storage.from('site-config').getPublicUrl('media-slots.json');
const slotsRes = await fetch(slotsBlob.publicUrl + '?t=' + Date.now());
if (!slotsRes.ok) {
  console.error('Failed to fetch media-slots.json:', slotsRes.status);
  process.exit(1);
}
const slots = await slotsRes.json();
const slot = slots.find((s) => s.key === slotKey);
if (!slot) {
  console.error(`Slot "${slotKey}" not found in media-slots.json`);
  console.error('Available keys:', slots.map((s) => s.key).join(', '));
  process.exit(1);
}

const previousUrl = slot.url;
slot.url = newUrl;

// 3. Re-upload the JSON.
const json = JSON.stringify(slots, null, 2);
const { error: jsonErr } = await supabase.storage
  .from('site-config')
  .upload('media-slots.json', new Blob([json], { type: 'application/json' }), {
    contentType: 'application/json',
    upsert: true,
    cacheControl: '0',
  });
if (jsonErr) {
  console.error('Failed to write media-slots.json:', jsonErr);
  process.exit(1);
}

console.log(`\n✓ media-slot "${slotKey}" updated`);
console.log(`  previous URL : ${previousUrl}`);
console.log(`  new URL      : ${newUrl}`);
console.log('\nLive in <30 seconds (media-slot cache TTL).');
console.log(`To revert: re-run with the previous URL, or update the slot in the admin UI.`);
