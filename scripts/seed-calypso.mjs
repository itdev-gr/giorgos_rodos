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

const EMAIL = 'thecalypsoboat@gmail.com';
const PASSWORD = '123456789';

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
    full_name: 'Calypso Traditional Boat',
    company_name: 'Calypso Cruises',
    phone: '+30 693 458 9903',
    role: 'user',
  });
  if (error) throw error;
}

async function uploadImage(userId, sourceUrl, destName) {
  const res = await fetch(sourceUrl);
  if (!res.ok) throw new Error(`fetch ${sourceUrl} -> ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const path = `${userId}/calypso-${destName}`;
  const { error } = await supabase.storage
    .from('tour-images')
    .upload(path, buf, { contentType: 'image/jpeg', upsert: true });
  if (error) throw error;
  const { data } = supabase.storage.from('tour-images').getPublicUrl(path);
  return data.publicUrl;
}

const TOURS = [
  {
    slug: 'lazy-day-cruise-lindos',
    title: 'Lazy Day Cruise in Lindos',
    badge_label: 'Full Day',
    price: 'Contact for pricing',
    duration: 'Full Day',
    guests: 'Up to 80 Guests',
    category: 'boat_tour',
    description:
      "A full-day laid-back trip for everyone who wishes to relax and explore the waters of Lindos and the surrounding bay areas. Multiple stops for swimming as well as exploring the different bays and the seashore of Southern Rhodes. Soak up breathtaking views, snorkel in crystal-clear waters, and enjoy an authentic Greek lunch while sailing aboard our 80-person traditional boat.",
    highlights: [
      'Full day cruise around Southern Rhodes',
      'Multiple swimming and snorkeling stops',
      'Authentic Greek lunch on board',
      'Snorkeling equipment and life vests provided',
      'Music and swimming toys for guests',
    ],
    inclusions: [
      'Full traditional Greek lunch',
      '1 free beverage',
      'Snorkeling equipment',
      'Life vests for all ages',
      'Swimming toys',
      'On-board music',
    ],
    exclusions: ['Hotel transfers', 'Additional beverages', 'Gratuities'],
    itinerary:
      'Depart Saint Paul\u2019s Bay in Lindos, cruise along the Southern Rhodes coastline with multiple swimming and snorkeling stops in secluded bays, enjoy a full Greek lunch on board, then return to Lindos.',
    meeting_point: "Saint Paul's Bay, Lindos, Rhodes",
    departure_time: '10:00',
    return_time: '17:00',
    sourceImages: [
      'https://www.calypsocruises.gr/wp-content/uploads/2025/07/calypso_home1.jpg',
      'https://www.calypsocruises.gr/wp-content/uploads/2025/07/calypso_home2.jpg',
      'https://www.calypsocruises.gr/wp-content/uploads/2024/07/calypso_11_new.jpg',
      'https://www.calypsocruises.gr/wp-content/uploads/2024/07/calypso_8_new.jpg',
      'https://www.calypsocruises.gr/wp-content/uploads/2025/07/calypso_home3.jpg',
    ],
  },
  {
    slug: 'fun-in-the-sun-el-greco',
    title: 'Fun In The Sun with El Greco',
    badge_label: 'Popular',
    price: 'From \u20AC65',
    duration: '6 Hours',
    guests: 'Up to 80 Guests',
    category: 'boat_tour',
    description:
      'Get a fresh perspective on Southern Rhodes as you cruise with Calypso Boat and soak up views of the most famous beaches. A 6-hour boat trip with multiple stops for swimming and exploring different bays, including Guns of Navarone Bay, Haraki Beach, the Kamares Caves, and Agathi Beach. \u20AC65 adults (14+), \u20AC45 children (4\u201313), toddlers (0\u20133) free.',
    highlights: [
      '6-hour cruise along Southern Rhodes coast',
      'Swim at Lindos / Guns of Navarone Bay',
      'Visit Haraki Beach, soft golden sands',
      'Explore the Kamares sea caves',
      'Lunch stop at Agathi Beach',
    ],
    inclusions: [
      'Full traditional Greek lunch',
      'Seasonal fresh fruit',
      '1 free beverage (water, beer, or wine)',
      'Snorkeling equipment',
    ],
    exclusions: ['Hotel transfers', 'Additional beverages', 'Gratuities'],
    itinerary:
      "Stop 1 \u2014 Lindos Beach / Guns of Navarone Bay (30 min). Stop 2 \u2014 Haraki Beach (45 min). Stop 3 \u2014 Kamares Caves (40 min). Stop 4 \u2014 Agathi Beach (50 min) with lunch served on board.",
    meeting_point: "Saint Paul's Bay, Lindos (dock near the small church)",
    departure_time: '10:00',
    return_time: '16:00',
    sourceImages: [
      'https://www.calypsocruises.gr/wp-content/uploads/2025/07/calypso_coast_cruise3.jpg',
      'https://www.calypsocruises.gr/wp-content/uploads/2024/07/calypso_9.jpg',
      'https://www.calypsocruises.gr/wp-content/uploads/2024/04/calypso_10.jpg',
      'https://www.calypsocruises.gr/wp-content/uploads/2025/07/calypso_coast_cruise4.jpg',
      'https://www.calypsocruises.gr/wp-content/uploads/2024/04/calypso_12.jpg',
    ],
  },
  {
    slug: 'sunset-cruise-lindos-calypso',
    title: 'Sunset Cruise from Lindos — Calypso All Inclusive',
    badge_label: 'Sunset',
    price: 'From \u20AC39',
    duration: '2.5 Hours',
    guests: 'Up to 80 Guests',
    category: 'sunset_cruise',
    description:
      'Cruise around Southern Rhodes in style and watch the sunset from the water, accompanied by music. Set sail from Saint Paul\u2019s Bay in Lindos and enjoy open views of the Rhodes skyline with a magical sunset moment. \u20AC39 adults (14+), \u20AC29 children (4\u201313), toddlers (0\u20133) free.',
    highlights: [
      '2.5-hour sunset cruise',
      'Departure and return adjusted to sunset time',
      'Greek cuisine buffet on board',
      'Music on board',
      'Views of the Southern Rhodes skyline',
    ],
    inclusions: [
      'Greek cuisine buffet',
      '1 soft drink or glass of wine',
      'Fresh fruit platters',
      'On-board music',
    ],
    exclusions: [
      'Prosecco, bottled wine, spirits (available to purchase)',
      'Hotel transfers',
      'Gratuities',
    ],
    itinerary:
      'Depart Saint Paul\u2019s Bay and cruise the coastline of Southern Rhodes while the sun sets, enjoying a Greek cuisine buffet and music on board, then return to Lindos.',
    meeting_point: "Saint Paul's Bay, Lindos, Rhodes",
    departure_time: '18:00',
    return_time: '20:30',
    sourceImages: [
      'https://www.calypsocruises.gr/wp-content/uploads/2024/04/gallerylightbox_1000x1000_80_thumbnail_stpauls_bay_3.jpg',
      'https://www.calypsocruises.gr/wp-content/uploads/2024/04/calypso_17.jpg',
      'https://www.calypsocruises.gr/wp-content/uploads/2024/04/calypso_18.jpg',
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

    const toUpload = t.sourceImages.slice(0, 5);
    const urls = [];
    for (let i = 0; i < toUpload.length; i++) {
      const url = await uploadImage(userId, toUpload[i], `${t.slug}-${i + 1}.jpg`);
      urls.push(url);
    }

    const { error } = await supabase.from('tours').insert({
      owner_id: userId,
      title: t.title,
      description: t.description,
      service_page: 'rodos-boat-cruises',
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
