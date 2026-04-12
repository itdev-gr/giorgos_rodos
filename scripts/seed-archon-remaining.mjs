import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

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

const supabase = createClient(
  env.PUBLIC_SUPABASE_URL,
  env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false } }
);

const EMAIL = 'info@archonyachting.com';

const BASE = 'https://archonyachting.com';

const boatsPath = join(dirname(fileURLToPath(import.meta.url)), 'archon-fleet-data.json');
const boats = JSON.parse(readFileSync(boatsPath, 'utf8'));

async function getUser() {
  let page = 1;
  while (true) {
    const { data, error } = await supabase.auth.admin.listUsers({ page, perPage: 1000 });
    if (error) throw error;
    const hit = data.users.find((u) => u.email === EMAIL);
    if (hit) return hit.id;
    if (data.users.length < 1000) break;
    page++;
  }
  throw new Error('User not found: ' + EMAIL);
}

async function uploadImage(userId, sourceUrl, destName) {
  const res = await fetch(sourceUrl);
  if (!res.ok) throw new Error(`fetch ${sourceUrl} -> ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const ext = destName.split('.').pop() || 'jpg';
  const contentType =
    ext === 'png' ? 'image/png' : ext === 'webp' ? 'image/webp' : 'image/jpeg';
  const path = `${userId}/archon-${destName}`;
  const { error } = await supabase.storage
    .from('tour-images')
    .upload(path, buf, { contentType, upsert: true });
  if (error) throw error;
  const { data } = supabase.storage.from('tour-images').getPublicUrl(path);
  return data.publicUrl;
}

async function main() {
  const userId = await getUser();
  console.log('user:', userId);

  const { data: existing, error: exErr } = await supabase
    .from('tours')
    .select('id, title')
    .eq('owner_id', userId);
  if (exErr) throw exErr;
  const existingTitles = new Set((existing || []).map((t) => t.title));

  let inserted = 0;
  let skipped = 0;

  for (const b of boats) {
    if (existingTitles.has(b.title)) {
      skipped++;
      continue;
    }

    const urls = [];
    if (b.img) {
      const src = b.img.startsWith('http') ? b.img : BASE + b.img;
      const rawExt = (b.img.split('.').pop() || 'jpg').toLowerCase().split('/')[0];
      const safeExt = ['jpg', 'jpeg', 'png', 'webp'].includes(rawExt) ? rawExt : 'jpg';
      try {
        const url = await uploadImage(userId, src, `${b.slug}-1.${safeExt}`);
        urls.push(url);
      } catch (err) {
        console.warn('image failed:', b.slug, err.message);
      }
    }

    const highlights = [
      `${b.built} ${b.type} \u2014 ${b.loa}m length`,
      `${b.guests}`,
      `Available from ${b.base}`,
      'Fully equipped for comfortable cruising',
      'Professional skipper available',
    ];

    const { error } = await supabase.from('tours').insert({
      owner_id: userId,
      title: b.title,
      description: b.description,
      service_page: 'rodos-charter',
      badge_label: b.badge,
      price: 'Contact for pricing',
      duration: 'Weekly Charter',
      guests: b.guests,
      category: 'charter',
      image_url: urls[0] || null,
      images: urls,
      highlights,
      inclusions: [
        'Skipper available (bareboat or skippered)',
        'Full navigation and safety equipment',
        'Dinghy with engine',
      ],
      exclusions: ['Provisioning', 'Fuel', 'Port fees'],
      itinerary: `Custom itinerary through the Greek islands. Depart from ${b.base} and explore the surrounding Aegean destinations at your own pace.`,
      meeting_point: b.base + ', Greece',
      departure_time: 'Flexible',
      return_time: 'Flexible',
      status: 'approved',
    });
    if (error) throw error;
    inserted++;
    console.log('inserted:', b.title);
  }

  console.log(`done: ${inserted} inserted, ${skipped} skipped`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
