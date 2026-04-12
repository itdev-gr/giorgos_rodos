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

const EMAIL = 'info@catamarancruisesrhodes.gr';
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
    full_name: 'Catamaran Cruises Rhodes',
    company_name: 'Catamaran Cruises Rhodes',
    phone: '+30 698 0139655',
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
  const path = `${userId}/catamaran-${destName}`;
  const { error } = await supabase.storage
    .from('tour-images')
    .upload(path, buf, { contentType, upsert: true });
  if (error) throw error;
  const { data } = supabase.storage.from('tour-images').getPublicUrl(path);
  return data.publicUrl;
}

const TOURS = [
  {
    slug: 'day-cruise',
    title: 'Catamaran Day Cruise — East Coast of Rhodes',
    service_page: 'rhodes-catamaran-tours',
    badge_label: 'Full Day',
    price: 'Contact for pricing',
    duration: '6 Hours',
    guests: 'Up to 40 Guests',
    category: 'catamaran_tour',
    description:
      'Set sail from Mandraki Harbor aboard a luxury catamaran and enjoy sailing along the East coast beaches of Rhodes. Visit 3–4 swimming spots — Anthony Quinn Bay, Afandou Caves, Ladiko Bay and Kalithea Bay — with approximately one hour at each location. The catamaran anchors offshore; shore access is by swimming. Includes a full Greek buffet lunch, unlimited drinks, breakfast, seasonal fresh fruits, snorkeling gear, floating noodles and life jackets.',
    highlights: [
      'Sail the East coast of Rhodes on a luxury catamaran',
      'Swim at Anthony Quinn Bay, famous from "Guns of Navarone"',
      'Explore Afandou Caves for underwater snorkeling',
      'Relax in the calm, shallow waters of Ladiko Bay',
      'Visit Kalithea Bay with its cave access',
    ],
    inclusions: [
      'Full Greek buffet lunch (grilled chicken, Mediterranean noodles, Greek salad, tzatziki, hummus, feta, local bread)',
      'Unlimited drinks (soft drinks, water, local beer, local white wine)',
      'Breakfast (tortilla/toast/baguette with cheese and vegetables)',
      'Seasonal fresh fruits',
      'Snorkeling gear',
      'Floating noodles and life jackets',
    ],
    exclusions: ['Hotel transfers'],
    itinerary:
      'Depart Mandraki Harbor, Rhodes. Stop 1 — Anthony Quinn Bay (approx. 1 hour swimming and snorkeling). Stop 2 — Afandou Caves (underwater exploration). Stop 3 — Ladiko Bay (calm waters, swimming). Stop 4 — Kalithea Bay (cave access, snorkeling). Return to Mandraki Harbor.',
    meeting_point: 'Mandraki Harbor, Rhodes, Greece',
    departure_time: '09:30',
    return_time: '15:30',
    sourceImages: [
      'https://catamarancruisesrhodes.gr/wp-content/uploads/2021/01/F464EC12-DAC1-4478-B352-6FF7EA7DA269.jpg',
      'https://catamarancruisesrhodes.gr/wp-content/uploads/2021/01/IMG_03471-1.jpg',
      'https://catamarancruisesrhodes.gr/wp-content/uploads/2020/02/5.jpg',
      'https://catamarancruisesrhodes.gr/wp-content/uploads/2020/02/8.jpg',
      'https://catamarancruisesrhodes.gr/wp-content/uploads/2021/01/IMG_07961.jpg',
    ],
  },
  {
    slug: 'sunset-cruise',
    title: 'Catamaran Sunset Cruise — Kalithea & Aegean Sunset',
    service_page: 'rhodes-catamaran-tours',
    badge_label: 'Sunset',
    price: 'Contact for pricing',
    duration: '4 Hours',
    guests: 'Up to 40 Guests',
    category: 'sunset_cruise',
    description:
      'The Sunset Cruise will delight your senses. Depart Mandraki Harbor and sail to Kalithea Springs for swimming, relaxation and snorkeling. Then cruise along the East coast of Rhodes as the spectacular colours of the world-famous Aegean sunset fill the sky. Enjoy a full Greek buffet, unlimited drinks, and nighttime stargazing under the moonlight.',
    highlights: [
      'Swimming and snorkeling at Kalithea Springs',
      'Watch the spectacular Aegean sunset from the water',
      'Full Greek buffet and unlimited drinks on board',
      'Nighttime stargazing under the moonlight',
      'Photo-friendly catamaran experience',
    ],
    inclusions: [
      'Full Greek buffet (grilled chicken, Mediterranean noodles, Greek salad, tzatziki, hummus, feta, local bread)',
      'Unlimited drinks (soft drinks, water, local beer, local white wine)',
      'Snorkeling gear',
      'Floating noodles and life jackets',
    ],
    exclusions: ['Hotel transfers'],
    itinerary:
      'Depart Mandraki Harbor. Sail to Kalithea Springs for swimming and snorkeling. Cruise along the East coast of Rhodes while the Aegean sun sets. Return to Mandraki Harbor under the stars.',
    meeting_point: 'Mandraki Harbor, Rhodes, Greece',
    departure_time: '17:30',
    return_time: '21:30',
    sourceImages: [
      'https://catamarancruisesrhodes.gr/wp-content/uploads/2021/01/IMG_06581.jpeg',
      'https://catamarancruisesrhodes.gr/wp-content/uploads/2020/02/IMG_6862.jpg',
      'https://catamarancruisesrhodes.gr/wp-content/uploads/2021/01/IMG_1399.jpeg',
      'https://catamarancruisesrhodes.gr/wp-content/uploads/2020/02/IMG_6872-1.jpg',
      'https://catamarancruisesrhodes.gr/wp-content/uploads/2020/02/IMG_6874.jpg',
    ],
  },
  {
    slug: 'power-catamaran-boss',
    title: 'Power Catamaran BOSS — Private Charter',
    service_page: 'rhodes-sailing-trips',
    badge_label: 'Power Cat',
    price: 'Contact for pricing',
    duration: 'Full Day / Half Day',
    guests: '4 Guest Cabins · 2 Bathrooms',
    category: 'charter',
    description:
      'Luxury power catamaran available for private charter in Rhodes. The BOSS is a 13.05m power catamaran with 520Hp engines, featuring a flybridge with panoramic views, sunbathing lounges, indoor saloon, deck saloon, front suite, fully equipped kitchen, sound system, USB charging ports and outdoor shower. Perfect for private cruises along the coast of Rhodes with family or friends.',
    highlights: [
      'Powerful 520Hp engines for swift, smooth cruising',
      'Flybridge with panoramic sea views',
      'Multiple sunbathing and seating areas',
      'Indoor and deck saloons for comfort in any weather',
      'Fully equipped kitchen and 2 bathrooms on board',
    ],
    inclusions: [
      'Private charter with professional crew',
      'Use of all onboard facilities and amenities',
      'Sound system and USB charging',
      'Outdoor shower',
    ],
    exclusions: ['Food and beverages (can be arranged)', 'Hotel transfers'],
    itinerary:
      'Custom itinerary tailored to your preferences. Depart Mandraki Harbor and cruise along the East or West coast of Rhodes, with swimming stops at your choice of bays and beaches.',
    meeting_point: 'Mandraki Harbor, Rhodes, Greece',
    departure_time: 'Flexible',
    return_time: 'Flexible',
    sourceImages: [
      'https://catamarancruisesrhodes.gr/wp-content/uploads/2023/11/IMG_7057-scaled.jpg',
      'https://catamarancruisesrhodes.gr/wp-content/uploads/2023/11/IMG_7061.jpg',
      'https://catamarancruisesrhodes.gr/wp-content/uploads/2023/11/IMG_7064.jpg',
      'https://catamarancruisesrhodes.gr/wp-content/uploads/2023/11/IMG_7069.jpg',
      'https://catamarancruisesrhodes.gr/wp-content/uploads/2023/11/IMG_7082.jpg',
    ],
  },
  {
    slug: 'sailing-catamaran-wind',
    title: 'Sailing Catamaran WIND — Private Charter',
    service_page: 'rhodes-sailing-trips',
    badge_label: 'Sailing Cat',
    price: 'Contact for pricing',
    duration: 'Full Day / Half Day',
    guests: '4 Guest Cabins · 4 Bathrooms',
    category: 'charter',
    description:
      'Sailing catamaran available for private charter in Rhodes. The WIND is a 13.61m sailing catamaran (Lagoon 440) with sunbathing lounge nets, indoor saloon, front suite with flybridge, deck saloon, fully equipped kitchen, sound system, USB charging ports and outdoor shower. 4 guest cabins and 4 bathrooms for maximum comfort. Ideal for sailing enthusiasts who want a genuine wind-powered experience around Rhodes.',
    highlights: [
      'Authentic sailing experience on a Lagoon 440 catamaran',
      'Spacious sunbathing lounge nets between the hulls',
      'Flybridge for panoramic views while sailing',
      '4 guest cabins and 4 bathrooms for comfort',
      'Fully equipped kitchen and indoor saloon',
    ],
    inclusions: [
      'Private charter with professional crew',
      'Use of all onboard facilities and amenities',
      'Sound system and USB charging',
      'Outdoor shower',
    ],
    exclusions: ['Food and beverages (can be arranged)', 'Hotel transfers'],
    itinerary:
      'Custom itinerary tailored to your preferences. Sail from Mandraki Harbor along the coast of Rhodes with swimming stops at secluded bays and beaches of your choice.',
    meeting_point: 'Mandraki Harbor, Rhodes, Greece',
    departure_time: 'Flexible',
    return_time: 'Flexible',
    sourceImages: [
      'https://catamarancruisesrhodes.gr/wp-content/uploads/2023/11/IMG_2051.jpeg',
      'https://catamarancruisesrhodes.gr/wp-content/uploads/2023/11/IMG_7380.jpg',
      'https://catamarancruisesrhodes.gr/wp-content/uploads/2023/11/IMG_5161.jpg',
      'https://catamarancruisesrhodes.gr/wp-content/uploads/2023/11/IMG_5162.jpg',
      'https://catamarancruisesrhodes.gr/wp-content/uploads/2020/02/Lagoon-440-floor-plan.jpg',
    ],
  },
  {
    slug: 'sailing-catamaran-freedom',
    title: 'Sailing Catamaran FREEDOM — Private Charter',
    service_page: 'rhodes-sailing-trips',
    badge_label: 'Sailing Cat',
    price: 'Contact for pricing',
    duration: 'Full Day / Half Day',
    guests: '4 Guest Cabins · 4 Bathrooms',
    category: 'charter',
    description:
      'Sailing catamaran available for private charter in Rhodes. The FREEDOM is a 12.10m sailing catamaran with multiple seating zones, sunbathing areas, interior saloon, deck saloon, front suite, fully equipped kitchen, sound system, USB charging ports and outdoor shower. With 4 guest cabins and 4 bathrooms, she offers plenty of space for groups looking for a private sailing experience around Rhodes.',
    highlights: [
      'Intimate 12.10m sailing catamaran for private groups',
      'Multiple seating zones and sunbathing areas',
      '4 guest cabins and 4 bathrooms',
      'Interior and deck saloons for all-weather comfort',
      'Fully equipped kitchen and outdoor shower',
    ],
    inclusions: [
      'Private charter with professional crew',
      'Use of all onboard facilities and amenities',
      'Sound system and USB charging',
      'Outdoor shower',
    ],
    exclusions: ['Food and beverages (can be arranged)', 'Hotel transfers'],
    itinerary:
      'Custom itinerary tailored to your preferences. Sail from Mandraki Harbor and explore the coastline of Rhodes with swimming stops at your preferred bays.',
    meeting_point: 'Mandraki Harbor, Rhodes, Greece',
    departure_time: 'Flexible',
    return_time: 'Flexible',
    sourceImages: [
      'https://catamarancruisesrhodes.gr/wp-content/uploads/2023/12/image0.jpeg',
      'https://catamarancruisesrhodes.gr/wp-content/uploads/2023/12/image1.jpeg',
      'https://catamarancruisesrhodes.gr/wp-content/uploads/2023/12/image2.jpeg',
      'https://catamarancruisesrhodes.gr/wp-content/uploads/2023/12/image3.jpeg',
      'https://catamarancruisesrhodes.gr/wp-content/uploads/2023/12/image4.jpeg',
    ],
  },
  {
    slug: 'sailing-catamaran-lagoon-450',
    title: 'Sailing Catamaran Lagoon 450 — Private Charter',
    service_page: 'rhodes-sailing-trips',
    badge_label: 'New 2026',
    price: 'Contact for pricing',
    duration: 'Full Day / Half Day',
    guests: '4 Guest Cabins · 4 Bathrooms',
    category: 'charter',
    description:
      'Brand new sailing catamaran available from 2026. The Lagoon 450 is a 13.96m premium sailing catamaran with spacious sunbathing lounge nets, flybridge, indoor saloon, deck saloon, fully equipped kitchen, sound system, USB charging ports and outdoor shower. With 4 guest cabins and 4 bathrooms, she is the newest and largest addition to the Catamaran Cruises Rhodes fleet.',
    highlights: [
      'Brand new Lagoon 450 — newest in the fleet',
      'Largest catamaran at 13.96m with 7.87m beam',
      'Spacious sunbathing lounge nets and flybridge',
      '4 guest cabins and 4 bathrooms',
      'Premium interior with fully equipped kitchen',
    ],
    inclusions: [
      'Private charter with professional crew',
      'Use of all onboard facilities and amenities',
      'Sound system and USB charging',
      'Outdoor shower',
    ],
    exclusions: ['Food and beverages (can be arranged)', 'Hotel transfers'],
    itinerary:
      'Custom itinerary tailored to your preferences. Sail from Mandraki Harbor and explore the coastline of Rhodes with swimming stops at your preferred bays.',
    meeting_point: 'Mandraki Harbor, Rhodes, Greece',
    departure_time: 'Flexible',
    return_time: 'Flexible',
    sourceImages: [
      'https://catamarancruisesrhodes.gr/wp-content/uploads/2023/11/IMG_7057-scaled.jpg',
      'https://catamarancruisesrhodes.gr/wp-content/uploads/2023/11/IMG_2051.jpeg',
      'https://catamarancruisesrhodes.gr/wp-content/uploads/2023/11/IMG_7380.jpg',
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
      const ext = (src.split('.').pop() || 'jpg').toLowerCase().split('?')[0];
      const safeExt = ['jpg', 'jpeg', 'png', 'webp'].includes(ext) ? ext : 'jpg';
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
