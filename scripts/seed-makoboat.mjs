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

const EMAIL = 'info@makoboat.gr';
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
    full_name: 'Mako Boat',
    company_name: 'Mako Boat Rhodes',
    phone: '+30 6996670442',
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
  const path = `${userId}/makoboat-${destName}`;
  const { error } = await supabase.storage
    .from('tour-images')
    .upload(path, buf, { contentType, upsert: true });
  if (error) throw error;
  const { data } = supabase.storage.from('tour-images').getPublicUrl(path);
  return data.publicUrl;
}

const TOURS = [
  {
    slug: 'self-drive-boat-rental',
    title: 'Mako Boat Self-Drive Rental \u2014 No Licence Required',
    service_page: 'rhodes-rent-a-boat',
    badge_label: 'No Licence',
    price: 'From \u20AC130',
    duration: '2\u20138 Hours',
    guests: 'Up to 5 Guests',
    category: 'rent_a_boat',
    description:
      'Rent a 30Hp RIB boat from Tsambika Beach and explore the East coast of Rhodes at your own pace \u2014 no boat licence required. Choose from 2-hour (\u20AC130), 4-hour (\u20AC210), 6-hour (\u20AC300) or full-day 8-hour (\u20AC320) rentals. All boats reach up to 28mph and come with fuel (25L + 10L reserve), mini refrigerator with ice, water, soft drinks and fresh fruit salads. Ages 18+. Operating hours 09:00\u201320:00. Optional captain available at +\u20AC10/hour. Premium black boat variant also available.',
    highlights: [
      'No boat licence required \u2014 ages 18+',
      'Self-drive RIB boat reaching 28mph',
      'Flexible durations: 2, 4, 6 or 8 hours',
      'Fuel, mini fridge with drinks and fruit salads included',
      'Depart from Tsambika Beach',
    ],
    inclusions: [
      'Fuel (25L main tank + 10L reserve)',
      'Mini refrigerator with ice, water, soft drinks and fruit salads',
      'Safety equipment',
      'Onboard toilet',
    ],
    exclusions: [
      'Captain (+\u20AC10/hour optional)',
      'Additional fuel beyond included tanks',
    ],
    itinerary:
      'Self-drive from Tsambika Beach. Explore the East coast of Rhodes at your own pace \u2014 visit Anthony Quinn Bay, Red Sand Beach, hidden coves, swim and snorkel. Return to Tsambika Beach within your rental period.',
    meeting_point: 'Tsambika Beach, Rhodes, Greece',
    departure_time: '09:00',
    return_time: '20:00',
    sourceImages: [
      'https://makoboat.gr/wp-content/uploads/2025/04/2_hours.jpg',
      'https://makoboat.gr/wp-content/uploads/2025/04/4_hours.jpg',
      'https://makoboat.gr/wp-content/uploads/2025/04/6_hours.jpg',
      'https://makoboat.gr/wp-content/uploads/2025/04/8_hours.jpg',
      'https://makoboat.gr/wp-content/uploads/2025/03/tsambika-beach.jpg',
    ],
  },
  {
    slug: 'private-rhodes-coast-cruise',
    title: 'Private Rhodes Coast Cruise \u2014 Speedboat with Captain',
    service_page: 'rhodes-rent-a-boat',
    badge_label: 'Private',
    price: 'From \u20AC400',
    duration: '2\u20138 Hours',
    guests: 'Up to 5 Guests',
    category: 'rent_a_boat',
    description:
      'Private speedboat cruise along the East coast of Rhodes with your own captain. Choose from 2-hour, 4-hour, 6-hour or full-day 8-hour itineraries departing from Kolympia. Visit Anthony Quinn Bay, Tsambika Beach, Red Sand Beach, Lindos, Navarone Bay and even Prasonisi where the Aegean meets the Mediterranean. Snacks, cocktails, soft drinks included on all trips. Full meal included on 6-hour and 8-hour cruises.',
    highlights: [
      'Private speedboat with professional captain',
      'Flexible itineraries: 2, 4, 6 or 8 hours',
      'Visit Anthony Quinn Bay, Tsambika, Lindos, Navarone Bay',
      'Snacks, cocktails and soft drinks included',
      'Full meal included on 6hr and 8hr cruises',
    ],
    inclusions: [
      'Professional captain',
      'Snacks, cocktails and soft drinks',
      'Water',
      'Full meal (6hr and 8hr cruises)',
      'Fuel and safety equipment',
    ],
    exclusions: ['Hotel transfers'],
    itinerary:
      '2hr: Anthony Quinn Bay or Tsambika Beach & Red Sand Beach. 4hr: Tsambika, Red Sand Beach, Lindos and Navarone Bay. 6hr: Tsambika, Red Sand Beach, Lindos and Navarone Bay with full meal. 8hr: Anthony Quinn Bay, Tsambika, Red Sand Beach, Lindos, Navarone Bay and Prasonisi with full meal.',
    meeting_point: 'Kolympia, Rhodes, Greece',
    departure_time: 'Flexible',
    return_time: 'Flexible',
    sourceImages: [
      'https://makoboat.gr/wp-content/uploads/2025/03/Anthony-Quinn-Bay.jpg',
      'https://makoboat.gr/wp-content/uploads/2025/03/lindos.jpg',
      'https://makoboat.gr/wp-content/uploads/2025/03/navarone.jpg',
      'https://makoboat.gr/wp-content/uploads/2025/03/red-sand.jpg',
      'https://makoboat.gr/wp-content/uploads/2025/03/prasonisi.jpg',
    ],
  },
  {
    slug: 'symi-island-trip',
    title: 'Symi Island Day Trip \u2014 Speedboat from Rhodes',
    service_page: 'rhodes-rent-a-boat',
    badge_label: 'Island Hop',
    price: 'From \u20AC800',
    duration: 'Full Day',
    guests: 'Up to 5 Guests',
    category: 'rent_a_boat',
    description:
      'Full-day speedboat trip from Rhodes to Symi \u2014 discover the hidden gem of the Aegean. Visit Panormitis Monastery, explore Symi\u2019s colourful village and shops, dine at a local seaside taverna and return to Rhodes with stunning sunset views. One light meal and drink of choice, water, soft drinks, juice, snacks, safety equipment and fuel all included. 10% discount for advance payment.',
    highlights: [
      'High-speed RIB boat to Symi Island',
      'Visit Panormitis Monastery',
      'Explore Symi\u2019s colourful harbour and village',
      'Dine at a local seaside taverna',
      'Sunset views on the return journey',
    ],
    inclusions: [
      'One light meal and drink of choice',
      'Water, soft drinks, juice and snacks',
      'Safety equipment',
      'Fuel',
    ],
    exclusions: ['Hotel transfers', 'Additional meals and drinks'],
    itinerary:
      'Depart Rhodes. Stop at Panormitis Monastery. Explore Symi village, shops and beaches. Dine at a local seaside taverna. Return to Rhodes with sunset views.',
    meeting_point: 'Tsambika Beach, Rhodes, Greece',
    departure_time: 'On request',
    return_time: 'On request',
    sourceImages: [
      'https://makoboat.gr/wp-content/uploads/2025/04/symi.png',
      'https://makoboat.gr/wp-content/uploads/2025/03/symi-island-1.jpg',
      'https://makoboat.gr/wp-content/uploads/2025/03/stegna.jpg',
    ],
  },
  {
    slug: 'chalki-island-escape',
    title: 'Chalki Island Escape \u2014 Speedboat from Rhodes',
    service_page: 'rhodes-rent-a-boat',
    badge_label: 'Island Hop',
    price: 'From \u20AC800',
    duration: 'Full Day',
    guests: 'Up to 5 Guests',
    category: 'rent_a_boat',
    description:
      'Escape to the untouched beauty of Chalki on a fast and comfortable RIB boat from Rhodes. Swim at Alimia Island on the way, explore Chalki\u2019s picturesque village streets, relax on serene beaches and dine at a local taverna. Potential dolphin sightings on the crossing. One light meal and drink of choice, water, soft drinks, juice, snacks, safety equipment and fuel included. 10% discount for advance payment.',
    highlights: [
      'High-speed RIB boat to Chalki Island',
      'Swimming stop at Alimia Island',
      'Explore Chalki\u2019s picturesque village',
      'Potential dolphin sightings on the crossing',
      'Dine at a local taverna',
    ],
    inclusions: [
      'One light meal and drink of choice',
      'Water, soft drinks, juice and snacks',
      'Safety equipment',
      'Fuel',
    ],
    exclusions: ['Hotel transfers', 'Additional meals and drinks'],
    itinerary:
      'Depart Rhodes. Stop at Alimia Island for swimming. Arrive at Chalki village for exploration. Beach time and taverna dining. Return to Rhodes with potential dolphin sightings.',
    meeting_point: 'Tsambika Beach, Rhodes, Greece',
    departure_time: 'On request',
    return_time: 'On request',
    sourceImages: [
      'https://makoboat.gr/wp-content/uploads/2025/04/chalki.png',
      'https://makoboat.gr/wp-content/uploads/2025/03/chalki-island.jpg',
      'https://makoboat.gr/wp-content/uploads/2025/04/chalki.jpg',
    ],
  },
  {
    slug: 'kastellorizo-getaway',
    title: 'Kastellorizo Island Getaway \u2014 Speedboat from Rhodes',
    service_page: 'rhodes-rent-a-boat',
    badge_label: 'Island Hop',
    price: 'From \u20AC800',
    duration: 'Full Day',
    guests: 'Up to 5 Guests',
    category: 'rent_a_boat',
    description:
      'Set sail from Rhodes to the stunning island of Kastellorizo on a premium RIB boat. Discover the famous Blue Cave, explore the vibrant colourful harbour and village, swim and snorkel in pristine waters, and visit historic landmarks. One light meal and drink of choice, water, soft drinks, juice, snacks, safety equipment and fuel included. 10% discount for advance payment.',
    highlights: [
      'High-speed RIB boat to Kastellorizo',
      'Explore the famous Blue Cave',
      'Vibrant colourful harbour and village',
      'Swimming and snorkeling in pristine waters',
      'Historic landmarks to explore',
    ],
    inclusions: [
      'One light meal and drink of choice',
      'Water, soft drinks, juice and snacks',
      'Safety equipment',
      'Fuel',
    ],
    exclusions: ['Hotel transfers', 'Additional meals and drinks'],
    itinerary:
      'Depart Rhodes. Explore the famous Blue Cave. Visit Kastellorizo\u2019s vibrant harbour and colourful village. Swimming and snorkeling. Explore historic landmarks. Return to Rhodes.',
    meeting_point: 'Tsambika Beach, Rhodes, Greece',
    departure_time: 'On request',
    return_time: 'On request',
    sourceImages: [
      'https://makoboat.gr/wp-content/uploads/2025/04/kastelorizo.png',
      'https://makoboat.gr/wp-content/uploads/2025/03/kastellorizo.jpg',
    ],
  },
  {
    slug: 'bbq-trip-red-sand-beach',
    title: 'Red Sand Beach BBQ Trip \u2014 Every Sunday',
    service_page: 'rhodes-rent-a-boat',
    badge_label: 'BBQ',
    price: '\u20AC80 / person',
    duration: '7 Hours',
    guests: 'Group Trip',
    category: 'rent_a_boat',
    description:
      'Every Sunday, join Mako Boat for a unique RIB boat trip to Red Sand Beach \u2014 one of Rhodes\u2019 best-kept secrets, accessible only by boat. Spend the day swimming, snorkeling and enjoying a beachside BBQ with traditional Greek souvlaki, ice-cold beers and bottled water. Striking red sand, crystal-clear turquoise waters and a relaxed atmosphere with music and Wi-Fi. 10% discount for advance payment.',
    highlights: [
      'Red Sand Beach \u2014 accessible only by boat',
      'Traditional Greek souvlaki BBQ on the beach',
      'Ice-cold beers and bottled water included',
      'Snorkeling gear, Wi-Fi and music on board',
      'Every Sunday, 11:00 AM to 6:00 PM',
    ],
    inclusions: [
      'Traditional Greek souvlaki',
      'Ice-cold beers and bottled water',
      'BBQ equipment',
      'Snorkeling gear',
      'Onboard toilet',
      'Wi-Fi and music',
    ],
    exclusions: ['Hotel transfers', 'Additional food and drinks'],
    itinerary:
      '11:00 depart for Red Sand Beach by RIB boat. Arrive at the stunning red sand beach accessible only by boat. Swimming, snorkeling and beachside BBQ. Music and relaxation. 18:00 return.',
    meeting_point: 'Tsambika Beach, Rhodes, Greece',
    departure_time: '11:00',
    return_time: '18:00',
    sourceImages: [
      'https://makoboat.gr/wp-content/uploads/2025/06/RED-SAND-BEACH.jpg',
      'https://makoboat.gr/wp-content/uploads/2025/06/bbq-trip-.jpg',
      'https://makoboat.gr/wp-content/uploads/2025/06/swimming-.jpg',
      'https://makoboat.gr/wp-content/uploads/2025/03/red-sand.jpg',
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
