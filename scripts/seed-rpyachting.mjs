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

const EMAIL = 'info@rpyachting.gr';
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
    full_name: 'Rhodes Private Yachting',
    company_name: 'RP Yachting',
    phone: '+30 6932908858',
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
  const path = `${userId}/rpyachting-${destName}`;
  const { error } = await supabase.storage
    .from('tour-images')
    .upload(path, buf, { contentType, upsert: true });
  if (error) throw error;
  const { data } = supabase.storage.from('tour-images').getPublicUrl(path);
  return data.publicUrl;
}

const TOURS = [
  {
    slug: 'tsambika-beach-experience',
    title: 'Tsambika Beach Experience (Half-Day) \u2014 Power Rib Juliette',
    service_page: 'rhodes-boat-trips',
    badge_label: 'Half Day',
    price: 'Contact for pricing',
    duration: '4 Hours',
    guests: 'Up to 10 Guests',
    category: 'boat_tour',
    description:
      'Cruise to the most famous golden sand beach of Rhodes aboard the Juliette, a state-of-the-art Technohull Omega 41ft (13m) speedboat. Sail to Tsambika Beach and swim in warm, shallow, crystal-clear waters. Enjoy panoramic views of the rugged Rhodes coastline, deck sunbathing on two sunbeds, and snorkeling. Professional skipper and hostess, light meal and refreshments, snorkeling equipment all included. The vessel features a spacious sofa, standing shade, bucket seats, and an indoor cabin with bathroom. Ideal for families and small groups of up to 10 guests.',
    highlights: [
      'Sail to Tsambika Beach \u2014 Rhodes\u2019 most famous golden sand beach',
      'Swim in warm, shallow, crystal-clear waters',
      'Luxury 41ft speedboat with sunbeds, sofa and cabin',
      'Professional skipper and hostess service',
      'Light meal, refreshments and snorkeling gear included',
    ],
    inclusions: [
      'Professional skipper and hostess',
      'Light meal and refreshments',
      'Snorkeling equipment',
      'Fuel and all taxes',
    ],
    exclusions: ['Hotel transfers', 'Premium drinks'],
    itinerary:
      'Depart Mandraki Port aboard the Juliette speedboat. Cruise along the East coast of Rhodes with panoramic coastline views. Arrive at Tsambika Beach for swimming and sunbathing in crystal-clear shallow waters. Deck sunbathing and snorkeling. Return to Mandraki Port.',
    meeting_point: 'Mandraki Port, Rhodes',
    departure_time: 'Flexible',
    return_time: 'Flexible',
    sourceImages: [
      'https://travelotopos-assets.s3.eu-south-1.amazonaws.com/files/rpyachting/resources/2d4bc31ee6ed01f79d602aaa1d426957.jpg',
      'https://travelotopos-assets.s3.eu-south-1.amazonaws.com/files/rpyachting/resources/44205de5cbf68548bc2e3a4428d05102.jpg',
      'https://travelotopos-assets.s3.eu-south-1.amazonaws.com/files/rpyachting/resources/ecdbd5b32a9e58ffa293a8d79a05df14.jpg',
      'https://travelotopos-assets.s3.eu-south-1.amazonaws.com/files/rpyachting/resources/9ed845487edaaa39c8b1bc16117ac5ea.jpg',
      'https://travelotopos-assets.s3.eu-south-1.amazonaws.com/files/rpyachting/resources/a7606905c430a8cbeb3b913f1c5c9fe9.jpg',
    ],
  },
  {
    slug: 'rhodes-to-symi-full-day',
    title: 'Rhodes to Symi Island: Full-Day Escape \u2014 Speedboat Jost',
    service_page: 'rhodes-boat-trips',
    badge_label: 'Full Day',
    price: 'Contact for pricing',
    duration: '7 Hours',
    guests: 'Up to 10 Guests',
    category: 'boat_tour',
    description:
      'Full-day speedboat escape from Rhodes to the picturesque island of Symi. Voyage across the Aegean aboard the Jost, a luxury AXOPAR 37 Sun Top speedboat, and explore Symi\u2019s colourful neoclassical harbour, visit the historic Panormitis Monastery, and swim in the dramatic St George Disalonas Bay with its towering cliff formations. Professional skipper and hostess, light meals, snacks, fresh fruit, snorkeling and safety gear, fuel and international port fees all included. Ideal for families and small groups of up to 10 guests.',
    highlights: [
      'Speedboat voyage across the Aegean to Symi Island',
      'Explore Symi\u2019s colourful harbour and Panormitis Monastery',
      'Swim at St George Disalonas Bay with dramatic cliffs',
      'Luxury AXOPAR 37 speedboat with premium service',
      'Light meals, snacks, fresh fruit and snorkeling gear included',
    ],
    inclusions: [
      'Professional skipper and hostess',
      'Light meals, snacks and fresh fruit',
      'Snorkeling and safety gear',
      'Fuel and international port fees',
    ],
    exclusions: ['Hotel transfers', 'Premium drinks'],
    itinerary:
      '10:00 depart Mandraki Port aboard the Jost speedboat. Cruise across the Aegean to Symi Island. Visit the colourful main harbour or Panormitis Monastery. Swimming stop at St George Disalonas Bay with dramatic cliff formations. 17:00 return to Mandraki Port.',
    meeting_point: 'Mandraki Port, Rhodes',
    departure_time: '10:00',
    return_time: '17:00',
    sourceImages: [
      'https://travelotopos-assets.s3.eu-south-1.amazonaws.com/files/rpyachting/resources/bd4673f5c40f75a7a6c55b87a0e0b526.jpg',
      'https://travelotopos-assets.s3.eu-south-1.amazonaws.com/files/rpyachting/resources/60e92c11303718d6b46428519e4177c3.jpg',
      'https://travelotopos-assets.s3.eu-south-1.amazonaws.com/files/rpyachting/resources/fee4c9fa5e421a69c13b8a89c5c562d2.jpg',
      'https://travelotopos-assets.s3.eu-south-1.amazonaws.com/files/rpyachting/resources/8cff5875573b03dc27569aa665600429.jpg',
      'https://travelotopos-assets.s3.eu-south-1.amazonaws.com/files/rpyachting/resources/6b07b615a4e184af23dd1bd206f6758a.jpg',
    ],
  },
  {
    slug: 'half-day-private-cruise-phantom',
    title: 'Half-Day Private Cruise (4 Hours) \u2014 Phantom Power Rib',
    service_page: 'rhodes-boat-trips',
    badge_label: 'Private',
    price: 'Contact for pricing',
    duration: '4 Hours',
    guests: 'Up to 25 Guests',
    category: 'boat_tour',
    description:
      'Premium half-day private cruise aboard the Phantom, a 20-metre luxury power rib designed for larger groups of up to 25 guests. Visit three of the most famous spots on the East coast of Rhodes \u2014 Kallithea Springs with its mosaic architecture, the emerald waters of Anthony Quinn Bay, and the scenic cove of Ladiko Beach. Gourmet snacks, fresh meals, fruits, appetizers and an open bar (soft drinks, white wine, beer) are all included. Perfect for celebrations, pre-wedding events, birthday parties or luxury group transfers.',
    highlights: [
      'Luxury 20m Phantom power rib \u2014 fits up to 25 guests',
      'Swim at Kallithea Springs, Anthony Quinn Bay and Ladiko Beach',
      'Gourmet catering and open bar included',
      'Customisable music and route options',
      'Ideal for celebrations, parties and group events',
    ],
    inclusions: [
      'Professional skipper and safety crew',
      'Gourmet snacks, fresh meals, fruits and appetisers',
      'Open bar (soft drinks, white wine, beer)',
      'Snorkeling equipment',
      'Fuel and all taxes',
    ],
    exclusions: ['Hotel transfers', 'Premium spirits and cocktails'],
    itinerary:
      'Depart Mandraki Port aboard the Phantom. Cruise to Kallithea Springs for swimming and exploring the mosaic architecture. Continue to Anthony Quinn Bay for snorkeling in emerald waters. Final stop at Ladiko Beach scenic cove. Return to Mandraki Port.',
    meeting_point: 'Mandraki Port, Rhodes',
    departure_time: 'Flexible',
    return_time: 'Flexible',
    sourceImages: [
      'https://travelotopos-assets.s3.eu-south-1.amazonaws.com/files/rpyachting/resources/2e555a0900856d4846db71e21bed5801.jpg',
      'https://travelotopos-assets.s3.eu-south-1.amazonaws.com/files/rpyachting/resources/96541536a7ca08a17a1e4ebc72d43153.jpg',
      'https://travelotopos-assets.s3.eu-south-1.amazonaws.com/files/rpyachting/resources/c212946db5f5eaa36f124dd445163583.jpg',
      'https://travelotopos-assets.s3.eu-south-1.amazonaws.com/files/rpyachting/resources/83f55f61367a10e93487ed22c57bf2e4.jpg',
      'https://travelotopos-assets.s3.eu-south-1.amazonaws.com/files/rpyachting/resources/6c5ef01e1cc4ac02af9a65e2bcd70f38.jpg',
    ],
  },
  {
    slug: 'rhodes-to-lindos-full-day',
    title: 'Rhodes to Lindos: Full-Day Private Cruise \u2014 Speedboat Jost',
    service_page: 'rhodes-boat-trips',
    badge_label: 'Full Day',
    price: 'Contact for pricing',
    duration: '7 Hours',
    guests: 'Up to 10 Guests',
    category: 'boat_tour',
    description:
      'Full-day luxury private cruise from Rhodes to Lindos \u2014 the Jewel of Rhodes \u2014 aboard the Jost, a Norwegian AXOPAR 37ft (12m) speedboat. Sail along the stunning East coast, swim in the emerald waters of Anthony Quinn Bay, and arrive at historic Lindos with views of the Acropolis from the water. A traditional Mediterranean lunch is served on deck. Professional skipper and hostess, light meals, snacks, fruits, snorkeling equipment, towels, fuel and port taxes all included. Ideal for families and small groups of up to 10 guests.',
    highlights: [
      'Full-day luxury sailing to historic Lindos village',
      'Views of the Acropolis of Lindos from the water',
      'Swimming in Anthony Quinn Bay\u2019s emerald waters',
      'Traditional Mediterranean lunch served on deck',
      'AXOPAR 37ft speedboat with cabin, bathroom and sunbed',
    ],
    inclusions: [
      'Professional skipper and hostess',
      'Light meals, snacks and fruits',
      'Snorkeling equipment and towels',
      'Fuel, port taxes and VAT',
    ],
    exclusions: ['Hotel transfers', 'Premium drinks'],
    itinerary:
      '10:00 depart Mandraki Port aboard the Jost speedboat. Cruise along the East coast of Rhodes. Swimming stop at Anthony Quinn Bay. Continue to Lindos with views of the Acropolis. Mediterranean lunch on deck. Free time to explore Lindos village. 17:00 return to Mandraki Port.',
    meeting_point: 'Mandraki Port, Rhodes',
    departure_time: '10:00',
    return_time: '17:00',
    sourceImages: [
      'https://travelotopos-assets.s3.eu-south-1.amazonaws.com/files/rpyachting/resources/c56b2042b1fac248b36b921a6d7534fb.jpg',
      'https://travelotopos-assets.s3.eu-south-1.amazonaws.com/files/rpyachting/resources/90cd6db7454da2440479862f740fb4dc.jpg',
      'https://travelotopos-assets.s3.eu-south-1.amazonaws.com/files/rpyachting/resources/02412cb7a84dcd70679694e0f18c71b7.jpg',
      'https://travelotopos-assets.s3.eu-south-1.amazonaws.com/files/rpyachting/resources/8f6c4b36666491a86cb19f7f0975dcae.jpg',
      'https://travelotopos-assets.s3.eu-south-1.amazonaws.com/files/rpyachting/resources/0eed359644e88e680f5874b2aad6659c.jpg',
    ],
  },
  {
    slug: 'east-coast-gems-half-day',
    title: 'Rhodes East Coast Gems (Half-Day) \u2014 Power Rib Juliette',
    service_page: 'rhodes-boat-trips',
    badge_label: 'Half Day',
    price: 'Contact for pricing',
    duration: '4 Hours',
    guests: 'Up to 10 Guests',
    category: 'boat_tour',
    description:
      'The perfect quick but luxurious escape along the East coast of Rhodes aboard the Juliette, a Technohull Omega 41ft (13m) speedboat. Visit three iconic destinations \u2014 Kallithea Springs with its stunning Italian architecture, Anthony Quinn Bay named after the famous actor for snorkeling in crystal-clear waters, and the peaceful waters of Ladiko Bay. Professional skipper and hostess, light meal, snacks, fruits, towels, snorkeling gear, fuel and VAT all included. Ideal for families and small groups.',
    highlights: [
      'Kallithea Springs \u2014 stunning Italian architecture and swimming',
      'Anthony Quinn Bay \u2014 snorkeling in crystal-clear waters',
      'Ladiko Bay \u2014 relaxing in peaceful waters',
      'Luxury 41ft speedboat with sunbeds, sofa and cabin',
      'Light meal, snacks, fruits and snorkeling gear included',
    ],
    inclusions: [
      'Professional skipper and hostess',
      'Light meal, snacks and fruits',
      'Towels and snorkeling gear',
      'Fuel and VAT',
    ],
    exclusions: ['Hotel transfers', 'Premium drinks'],
    itinerary:
      'Depart Mandraki Port aboard the Juliette speedboat. Cruise to Kallithea Springs for swimming and exploring the Italian architecture. Continue to Anthony Quinn Bay for snorkeling. Final stop at Ladiko Bay for relaxing in peaceful waters. Return to Mandraki Port.',
    meeting_point: 'Mandraki Port, Rhodes',
    departure_time: 'Flexible',
    return_time: 'Flexible',
    sourceImages: [
      'https://travelotopos-assets.s3.eu-south-1.amazonaws.com/files/rpyachting/resources/6256ccdc83c1fba290c74a03ebd14c08.jpg',
      'https://travelotopos-assets.s3.eu-south-1.amazonaws.com/files/rpyachting/resources/8ae0355c7256e45de798fa01a3ae9268.jpg',
      'https://travelotopos-assets.s3.eu-south-1.amazonaws.com/files/rpyachting/resources/31b9534a59ad003ad355ed717bfc97f1.jpg',
      'https://travelotopos-assets.s3.eu-south-1.amazonaws.com/files/rpyachting/resources/48be349eda11319bb9050e71f886a4e1.jpg',
      'https://travelotopos-assets.s3.eu-south-1.amazonaws.com/files/rpyachting/resources/832d670a7551a63853011dc7d76e7893.jpg',
    ],
  },
  {
    slug: 'semi-private-swimming-trip',
    title: 'Semi-Private Top-Rated Swimming Trip \u2014 4 Hours All Inclusive',
    service_page: 'rhodes-boat-trips',
    badge_label: 'Best Seller',
    price: 'Contact for pricing',
    duration: '4 Hours',
    guests: 'Up to 25 Guests',
    category: 'boat_tour',
    description:
      'Top-rated semi-private swimming trip aboard the Phantom, the world\u2019s largest power rib boat \u2014 a 20-metre luxury vessel and one of only 7 available globally. Swim and snorkel in the three most picturesque bays of Rhodes: Traganou Caves, Kallithea Springs and Anthony Quinn Bay. All inclusive with a free meal (Greek salad, burger, sandwich, fruits) and unlimited drinks (wine, beers, soft drinks). Snorkeling equipment, water toys and Wi-Fi provided. Two crew members on board. Limited to 25 guests for an intimate experience. Just a 15-minute walk from the cruise port, near Old Town Rhodes.',
    highlights: [
      'World\u2019s largest power rib \u2014 20m Phantom, one of only 7 globally',
      'Swim at Traganou Caves, Kallithea Springs and Anthony Quinn Bay',
      'Free meal and unlimited drinks included',
      'Snorkeling equipment and water toys provided',
      'Semi-private \u2014 limited to 25 guests',
    ],
    inclusions: [
      'Greek salad, burger, sandwich and fruits',
      'Unlimited wine, beers and soft drinks',
      'Snorkeling equipment and water toys',
      'Wi-Fi on board',
      'Two crew members',
    ],
    exclusions: ['Hotel transfers', 'Premium spirits and cocktails'],
    itinerary:
      'Depart Mandraki Port aboard the Phantom. Cruise to Traganou Caves for swimming and exploration. Continue to Kallithea Springs for snorkeling. Final stop at Anthony Quinn Bay. Return to Mandraki Port.',
    meeting_point: 'Mandraki Port, Rhodes (15-minute walk from cruise port, near Old Town)',
    departure_time: 'Flexible',
    return_time: 'Flexible',
    sourceImages: [
      'https://travelotopos-assets.s3.eu-south-1.amazonaws.com/files/rpyachting/resources/d5a66587449a3c4b9e9d386fae30d131.jpg',
      'https://travelotopos-assets.s3.eu-south-1.amazonaws.com/files/rpyachting/resources/06db9d646cc844c34f8c07b069944a28.jpg',
      'https://travelotopos-assets.s3.eu-south-1.amazonaws.com/files/rpyachting/resources/5eaa658c54ab989c34306e381ac40e80.jpg',
      'https://travelotopos-assets.s3.eu-south-1.amazonaws.com/files/rpyachting/resources/d9d212116db67f539148573b9a6e194d.jpg',
      'https://travelotopos-assets.s3.eu-south-1.amazonaws.com/files/rpyachting/resources/95bae04fb5b2498351766e6ffa8382c3.jpg',
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
