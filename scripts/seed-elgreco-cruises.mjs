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

const EMAIL = 'info@elgrecocruises.gr';
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
    full_name: 'El Greco Cruises',
    company_name: 'El Greco Entertainment Cruises',
    phone: '+30 693 458 9903',
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
  const path = `${userId}/elgreco-${destName}`;
  const { error } = await supabase.storage
    .from('tour-images')
    .upload(path, buf, { contentType, upsert: true });
  if (error) throw error;
  const { data } = supabase.storage.from('tour-images').getPublicUrl(path);
  return data.publicUrl;
}

const TOURS = [
  {
    slug: 'fun-in-the-sun',
    title: 'Fun In The Sun with El Greco',
    service_page: 'rodos-boat-cruises',
    badge_label: 'Full Day',
    price: 'From \u20AC65',
    duration: '6.5 Hours',
    guests: 'Up to 99 Guests',
    category: 'cruise',
    description:
      'The ultimate 6.5-hour boat experience aboard El Greco, the only traditional Greek gulet wooden boat in Rhodes. Built in Samos in 1950 and 30 metres long, she cruises the East coast with stops at Anthony Quinn Bay, the exclusive Fun Island at Ladiko, and Kallithea Springs. At Fun Island \u2014 accessible only to El Greco guests \u2014 enjoy floating platforms, sea toys, inflatable couches, free SUPs, canoes and snorkeling. A traditional homemade Greek lunch is served on board with unlimited water, soft drinks and local wines.',
    highlights: [
      'Cruise on a traditional 30m Greek gulet wooden boat',
      'Swim at Anthony Quinn Bay \u2014 crystal-clear emerald waters',
      '2 hours at exclusive Fun Island with floating platforms and water toys',
      'Free canoes, SUPs, snorkeling gear and inflatable couches',
      'Traditional Greek lunch with unlimited drinks',
    ],
    inclusions: [
      'Traditional Greek lunch (moussaka or pastitsio, Greek salad, tzatziki, olives, bread)',
      'Unlimited water, soft drinks and local wines (white and ros\u00E9)',
      'Seasonal fresh fruits',
      'Snorkeling equipment',
      'SUPs and canoes',
      'Floating toys and inflatable couches',
      'Free Wi-Fi',
      'Life vests',
    ],
    exclusions: [
      'Coffee, beer, frozen granites, cocktails (available for purchase)',
      'Snacks',
      'Hotel transfers',
    ],
    itinerary:
      '10:00 depart Mandraki Harbor. Stop 1 \u2014 Anthony Quinn Bay (40 min swimming and snorkeling). Stop 2 \u2014 Fun Island at Ladiko (2 hours \u2014 water sports, activities and Greek lunch). Stop 3 \u2014 Kallithea Springs (photo opportunity and swimming). 16:30 return to Mandraki Harbor.',
    meeting_point: 'Mandraki Harbor, opposite Eleftherias Square, Rhodes Town',
    departure_time: '10:00',
    return_time: '16:30',
    sourceImages: [
      'https://www.rhodesinblue.com/wp-content/uploads/2024/03/El-Greco-Tour-1024x768.jpg',
      'https://www.rhodesinblue.com/wp-content/uploads/2024/03/DJI_20230927151107_0409_D-frame-at-0m1s.jpg',
      'https://images.musement.com/cover/0170/83/thumb_16982398_cover_header.jpg',
    ],
  },
  {
    slug: 'a-sunset-remedy-el-greco-sunset-cruise',
    title: 'A Sunset Remedy \u2014 El Greco All Inclusive Sunset Cruise',
    service_page: 'rodos-boat-cruises',
    badge_label: 'Sunset',
    price: 'From \u20AC39',
    duration: '3 Hours',
    guests: 'Up to 99 Guests',
    category: 'sunset_cruise',
    description:
      'A 3-hour all-inclusive sunset cruise aboard the traditional Greek gulet El Greco. Depart Mandraki Harbor and cruise around the bays of Kalithea, Faliraki and Ladiko, admiring the stunning blue waters. Relax with chilled drinks, enjoy a finger food buffet, swim and snorkel in crystal-clear waters, and watch the spectacular Aegean sunset with views of the Medieval Castle of Rhodes. Departure and return times adjusted to the time of the sunset.',
    highlights: [
      'Sunset views over the Medieval Castle of Rhodes',
      'Cruise around Kalithea, Faliraki and Ladiko bays',
      'Swimming and snorkeling in crystal-clear waters',
      'Finger food buffet included',
      'Serene, romantic atmosphere on a traditional gulet',
    ],
    inclusions: [
      'Finger food buffet',
      'Cruising along the coastline of Rhodes',
      'Swimming and snorkeling stop',
      'Free Wi-Fi',
      'Life vests',
    ],
    exclusions: [
      'Prosecco, bottled wine, spirits (available for purchase)',
      'Cocktails and snacks (available for purchase)',
      'Hotel transfers',
    ],
    itinerary:
      'Depart Mandraki Harbor (time adjusted to sunset, approx. 17:15). Cruise around the bays of Kalithea, Faliraki and Ladiko. Swimming and snorkeling stop. Chase the sunset along the East coast with views of the Medieval Castle. Return to Mandraki Harbor (approx. 20:30).',
    meeting_point: 'Mandraki Harbor, opposite Eleftherias Square, Rhodes Town',
    departure_time: '17:15',
    return_time: '20:30',
    sourceImages: [
      'https://images.musement.com/cover/0169/91/thumb_16890930_cover_header.jpg',
      'https://www.rhodesinblue.com/wp-content/uploads/2024/03/El-Greco-Tour-1024x768.jpg',
      'https://www.rhodesinblue.com/wp-content/uploads/2024/03/DJI_20230927151107_0409_D-frame-at-0m1s.jpg',
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
      const rawExt = (src.split('.').pop() || 'jpg').toLowerCase().split('?')[0];
      const safeExt = ['jpg', 'jpeg', 'png', 'webp'].includes(rawExt) ? rawExt : 'jpg';
      try {
        const url = await uploadImage(userId, src, `${t.slug}-${i + 1}.${safeExt}`);
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
