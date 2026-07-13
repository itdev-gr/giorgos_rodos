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

const EMAIL = 'info@charakirentalboatsrhodes.com';
const PASSWORD = env.SEED_USER_PASSWORD || process.env.SEED_USER_PASSWORD;
if (!PASSWORD) {
  throw new Error(
    "SEED_USER_PASSWORD is required. Set a strong value in .env before seeding — refusing to create accounts with a default password."
  );
}

async function ensureUser() {
  let page = 1;
  while (true) {
    const { data, error } = await supabase.auth.admin.listUsers({ page, perPage: 1000 });
    if (error) throw error;
    const hit = data.users.find((u) => u.email === EMAIL);
    if (hit) return hit.id;
    if (data.users.length < 1000) break;
    page++;
  }
  const { data, error } = await supabase.auth.admin.createUser({
    email: EMAIL,
    password: PASSWORD,
    email_confirm: true,
  });
  if (error) throw error;
  return data.user.id;
}

async function upsertProfile(userId) {
  const { error } = await supabase.from('profiles').upsert({
    id: userId,
    full_name: 'Charaki Rental Boats',
    company_name: 'Charaki Rental Boats Rhodes',
    phone: '+30 6943099827',
    role: 'user',
  });
  if (error) throw error;
}

async function uploadImage(userId, sourceUrl, destName) {
  const res = await fetch(sourceUrl);
  if (!res.ok) throw new Error(`fetch ${sourceUrl} -> ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const ext = destName.split('.').pop() || 'jpg';
  const contentType =
    ext === 'png' ? 'image/png' : ext === 'webp' ? 'image/webp' : 'image/jpeg';
  const path = `${userId}/charaki-${destName}`;
  const { error } = await supabase.storage
    .from('tour-images')
    .upload(path, buf, { contentType, upsert: true });
  if (error) throw error;
  const { data } = supabase.storage.from('tour-images').getPublicUrl(path);
  return data.publicUrl;
}

const TOURS = [
  {
    slug: 'medium-boat-rental',
    title: 'Charaki Medium Boat Rental \u2014 Nireus 4.90 Optima',
    service_page: 'rhodes-rent-a-boat',
    badge_label: 'No Licence',
    price: '\u20AC65 / hour',
    duration: '1\u20139 Hours',
    guests: 'Up to 4 Guests',
    category: 'rent_a_boat',
    description:
      'Rent a Nireus 4.90 Optima open motorboat from Charaki beach \u2014 no boat licence required. Three boats available, each equipped with a Mercury 30\u201340Hp engine and a 6Hp backup engine. Explore the stunning East coast of Rhodes at your own pace. Price includes all fares, fuel (25L main tank + 10L extra), safety equipment, GPS tracking, driving briefing, life jackets, cool box, boarding ladder, cushions, paddles, anchor and shade awning. Optional skipper available at \u20AC10/hour. Open daily 09:00\u201318:00.',
    highlights: [
      'No boat licence required under Greek maritime law',
      'Self-drive Nireus 4.90 Optima motorboat',
      'All fuel, fares and safety equipment included',
      'GPS tracking and full driving briefing provided',
      'Optional skipper at \u20AC10/hour',
    ],
    inclusions: [
      'All fares and fuel (25L + 10L extra tank)',
      'GPS tracking system',
      'Life jackets and safety equipment',
      'Cool box, cushions and shade awning',
      'Boarding ladder, paddles and anchor',
      'Third-party insurance',
      'Driving briefing',
    ],
    exclusions: [
      'Skipper (\u20AC10/hour optional)',
      'Additional fuel beyond included tanks',
      'Special requests',
    ],
    itinerary:
      'Self-drive from Charaki beach. Explore the East coast of Rhodes at your own pace \u2014 visit nearby coves, swim, snorkel and sunbathe. Return to Charaki beach within operating hours (09:00\u201318:00).',
    meeting_point: 'Charaki Beach, Rhodes Island, Greece',
    departure_time: '09:00',
    return_time: '18:00',
    sourceImages: [
      'https://charakirentalboatsrhodes.com/wp-content/uploads/2024/04/2.jpg',
      'https://charakirentalboatsrhodes.com/wp-content/uploads/2024/03/boat-demo.jpg',
      'https://charakirentalboatsrhodes.com/wp-content/uploads/2024/04/8.jpg',
      'https://charakirentalboatsrhodes.com/wp-content/uploads/2024/04/IMG_20190526_151121-scaled.jpg',
      'https://charakirentalboatsrhodes.com/wp-content/uploads/2024/04/DJI_0134-scaled.jpg',
    ],
  },
  {
    slug: 'large-boat-rental',
    title: 'Charaki Large Boat Rental \u2014 Karel Paxos 170',
    service_page: 'rhodes-rent-a-boat',
    badge_label: 'No Licence',
    price: '\u20AC90 / hour',
    duration: '1\u20139 Hours',
    guests: 'Up to 7 Guests',
    category: 'rent_a_boat',
    description:
      'Rent a Karel Paxos 170 open motorboat from Charaki beach \u2014 no boat licence required. Two boats available, each equipped with a Tohatsu 30\u201350Hp engine and a 6Hp backup engine. Perfect for larger groups exploring the East coast of Rhodes. Price includes all fares, fuel (25L main tank + 10L extra), safety equipment, GPS tracking, driving briefing, life jackets, cool box, boarding ladder, cushions, paddles, anchor and shade awning. Optional skipper available at \u20AC10/hour. Open daily 09:00\u201318:00.',
    highlights: [
      'No boat licence required under Greek maritime law',
      'Spacious Karel Paxos 170 for up to 7 guests',
      'All fuel, fares and safety equipment included',
      'GPS tracking and full driving briefing provided',
      'Optional skipper at \u20AC10/hour',
    ],
    inclusions: [
      'All fares and fuel (25L + 10L extra tank)',
      'GPS tracking system',
      'Life jackets and safety equipment',
      'Cool box, cushions and shade awning',
      'Boarding ladder, paddles and anchor',
      'Third-party insurance',
      'Driving briefing',
    ],
    exclusions: [
      'Skipper (\u20AC10/hour optional)',
      'Additional fuel beyond included tanks',
      'Special requests',
    ],
    itinerary:
      'Self-drive from Charaki beach. Explore the East coast of Rhodes at your own pace \u2014 visit nearby coves, swim, snorkel and sunbathe. Return to Charaki beach within operating hours (09:00\u201318:00).',
    meeting_point: 'Charaki Beach, Rhodes Island, Greece',
    departure_time: '09:00',
    return_time: '18:00',
    sourceImages: [
      'https://charakirentalboatsrhodes.com/wp-content/uploads/2024/03/DJI_0708-scaled.jpg',
      'https://charakirentalboatsrhodes.com/wp-content/uploads/2024/05/DJI_0710-scaled.jpg',
      'https://charakirentalboatsrhodes.com/wp-content/uploads/2024/04/DJI_0625-scaled.jpg',
      'https://charakirentalboatsrhodes.com/wp-content/uploads/2024/04/20210711-DJI_0314-scaled.jpg',
      'https://charakirentalboatsrhodes.com/wp-content/uploads/2024/04/7.jpg',
    ],
  },
];

async function main() {
  const userId = await ensureUser();
  console.log('user:', userId);
  await upsertProfile(userId);

  const { data: existing, error: exErr } = await supabase
    .from('tours')
    .select('id, title')
    .eq('owner_id', userId);
  if (exErr) throw exErr;
  const existingTitles = new Set((existing || []).map((t) => t.title));

  for (const t of TOURS) {
    if (existingTitles.has(t.title)) {
      console.log('skip (exists):', t.title);
      continue;
    }

    const urls = [];
    for (let i = 0; i < t.sourceImages.length; i++) {
      const src = t.sourceImages[i];
      try {
        const url = await uploadImage(userId, src, `${t.slug}-${i + 1}.jpg`);
        urls.push(url);
      } catch (err) {
        console.warn('image failed:', src, err.message);
      }
    }

    const { error } = await supabase.from('tours').insert({
      owner_id: userId,
      title: t.title,
      description: t.description,
      service_page: t.service_page,
      badge_label: t.badge_label,
      price: t.price,
      duration: t.duration,
      guests: t.guests,
      category: t.category,
      image_url: urls[0] || null,
      images: urls,
      highlights: t.highlights,
      inclusions: t.inclusions,
      exclusions: t.exclusions,
      itinerary: t.itinerary,
      meeting_point: t.meeting_point,
      departure_time: t.departure_time,
      return_time: t.return_time,
      status: 'approved',
    });
    if (error) throw error;
    console.log('inserted:', t.title);
  }

  console.log('done');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
