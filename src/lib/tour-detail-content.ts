export type TourFaqItem = { question: string; answer: string };

export type TourItineraryStep = { time?: string; title: string; detail: string };

export type EnrichedTourDetail = {
  inclusions: string[];
  exclusions: string[];
  inclusionsIntro: string;
  exclusionsIntro: string;
  itineraryIntro: string;
  itinerarySteps: TourItineraryStep[];
  meetingPoint: string;
  meetingNotes: string;
  experienceNotes: string;
  practicalTips: string;
  faq: TourFaqItem[];
};

type TourLike = {
  title: string;
  slug?: string | null;
  description?: string | null;
  service_page?: string | null;
  badge_label?: string | null;
  duration?: string | null;
  departure_time?: string | null;
  return_time?: string | null;
  meeting_point?: string | null;
  itinerary?: string | null;
  inclusions?: string[] | null;
  exclusions?: string[] | null;
  price?: string | null;
  guests?: string | null;
};

type TourKind =
  | 'symi'
  | 'lindos'
  | 'sunset'
  | 'east_coast'
  | 'charter'
  | 'private_trip'
  | 'sailing'
  | 'catamaran'
  | 'generic_cruise';

const DEFAULT_MEETING = 'Mandraki Harbour, Rhodes Old Town (near the deer statues at the harbour entrance)';

function haystack(tour: TourLike): string {
  return `${tour.title} ${tour.slug || ''} ${tour.description || ''} ${tour.badge_label || ''}`.toLowerCase();
}

function detectKind(tour: TourLike): TourKind {
  const h = haystack(tour);
  const sp = tour.service_page || '';

  if (/symi/.test(h)) return 'symi';
  if (/lindos|st paul|st\. paul/.test(h)) return 'lindos';
  if (/sunset|evening/.test(h) || /sunset/i.test(tour.badge_label || '')) return 'sunset';
  if (/east coast|anthony quinn|kalithea|ladiko|tsambika/.test(h)) return 'east_coast';

  if (sp.includes('charter')) return 'charter';
  if (sp.includes('boat-trips')) return 'private_trip';
  if (/\bprivate\b/.test(h) && (sp.includes('sailing') || sp.includes('catamaran') || sp.includes('boat-tours'))) {
    return 'private_trip';
  }
  if (sp.includes('sailing')) return 'sailing';
  if (sp.includes('catamaran')) return 'catamaran';
  if (sp.includes('boat-cruises') || sp.includes('boat-tours') || /cruise|day trip|all inclusive/.test(h)) {
    return 'generic_cruise';
  }
  return 'generic_cruise';
}

function defaultInclusions(kind: TourKind): string[] {
  switch (kind) {
    case 'symi':
      return [
        'Round-trip boat transfer from Rhodes to Symi',
        'Professional crew and licensed captain',
        'Swim stop en route (weather permitting)',
        'On-board toilets and shaded seating',
        'Life jackets for all ages',
        'Snorkelling equipment on most vessels',
      ];
    case 'lindos':
      return [
        'Coastal cruise along the east shore of Rhodes',
        'Swim stop at St Paul\'s Bay below the Acropolis',
        'Free time ashore in Lindos village (schedule permitting)',
        'Crew guidance on disembarkation and return times',
        'Life jackets and basic safety equipment',
      ];
    case 'sunset':
      return [
        'Sunset cruise along the Rhodes coastline',
        'Light buffet or finger food (operator dependent)',
        'Soft drinks and water',
        'Swimming stop when sea conditions allow',
        'Music on board and shaded deck areas',
      ];
    case 'charter':
      return [
        'Fully equipped yacht or catamaran',
        'Safety equipment and standard inventory',
        'Bed linen and towels on multi-day charters',
        'Skipper briefing and route planning (skippered)',
      ];
    case 'private_trip':
      return [
        'Private boat with professional skipper',
        'Fuel for the agreed route and duration',
        'Snorkelling gear and soft drinks on most boats',
        'Flexible swim stops along the east coast',
        'Life jackets for all passengers',
      ];
    case 'sailing':
      return [
        'Sailing yacht with qualified skipper',
        'Fuel for the published route',
        'Snorkelling equipment where available',
        'Light refreshments or water (check listing)',
      ];
    case 'catamaran':
      return [
        'Catamaran cruise with crew',
        'Lunch or light meal on day departures',
        'Unlimited soft drinks on many shared tours',
        'Multiple swimming stops',
        'Snorkelling masks and shaded trampolines',
      ];
    case 'east_coast':
      return [
        'Licensed captain and crew on a shared day vessel',
        'Multiple swimming stops along the east coast of Rhodes',
        'Buffet lunch with Greek salad, grilled options and bread',
        'Unlimited water and soft drinks throughout the day',
        'Snorkelling equipment and life jackets for all ages',
        'Shaded deck areas and on-board toilets',
        'Music on deck and time to relax between bays',
      ];
    default:
      return [
        'Licensed captain and crew',
        'Multiple swimming stops along the Rhodes coast',
        'Buffet lunch on full-day shared cruises',
        'Unlimited water and soft drinks (most operators)',
        'Snorkelling equipment and life jackets',
        'Shaded deck space and on-board toilets',
      ];
  }
}

function defaultExclusions(kind: TourKind): string[] {
  switch (kind) {
    case 'charter':
      return [
        'Fuel and marina fees (bareboat)',
        'Provisioning and meals unless arranged',
        'Skipper and hostess fees (if not included in quote)',
        'Travel insurance and personal expenses',
      ];
    case 'private_trip':
      return [
        'Hotel transfers to the marina',
        'Meals unless pre-arranged with the skipper',
        'Alcoholic beverages on some vessels',
        'Gratuities for crew (optional)',
      ];
    default:
      return [
        'Hotel pickup and drop-off (unless stated in your confirmation)',
        'Alcoholic drinks on some shared cruises (often available to buy)',
        'Personal travel insurance',
        'Optional shore expenses in Symi or Lindos',
      ];
  }
}

function defaultItinerary(kind: TourKind, tour: TourLike): { intro: string; steps: TourItineraryStep[] } {
  const depart = tour.departure_time || '09:00';
  const ret = tour.return_time || '18:00';

  switch (kind) {
    case 'symi':
      return {
        intro: 'A typical Symi day cruise follows a fixed rhythm: early departure from Rhodes Town, a scenic crossing with a swim stop, several hours free in Gialos harbour, then the return leg before sunset.',
        steps: [
          { time: depart, title: 'Departure from Mandraki', detail: 'Check in at the meeting point 20–30 minutes before departure. Board the vessel and receive a short safety briefing as you leave Rhodes harbour.' },
          { time: 'Mid-morning', title: 'Crossing and swim stop', detail: 'Enjoy the open-sea crossing toward Symi (75–90 minutes). Many boats pause at Agios Emilianos or a sheltered cove for swimming and snorkelling.' },
          { time: 'Late morning', title: 'Arrival in Symi (Gialos)', detail: 'Disembark at the pastel harbour front. Explore the Kali Strata steps, lunch at a taverna, and browse local shops before the return call.' },
          { time: ret, title: 'Return to Rhodes', detail: 'Sail back to Mandraki Harbour, often with a final swim stop if time and weather allow.' },
        ],
      };
    case 'lindos':
      return {
        intro: 'Lindos boat trips combine coastal cruising with time at St Paul\'s Bay and optional exploration of the whitewashed village above the Acropolis.',
        steps: [
          { time: depart, title: 'Depart Rhodes Town or Faliraki', detail: 'Cruise south along the east coast with views of Kalithea, Anthony Quinn Bay and the rocky shoreline toward Lindos.' },
          { time: 'Midday', title: 'St Paul\'s Bay swim stop', detail: 'Anchor in the turquoise bay beneath the Acropolis for swimming, snorkelling and photos from the water.' },
          { time: 'Afternoon', title: 'Lindos village time', detail: 'Go ashore if your tour includes it: climb to the Acropolis, wander the lanes, or relax at a café before reboarding.' },
          { time: ret, title: 'Return cruise', detail: 'Sail north along the coast back to your departure marina.' },
        ],
      };
    case 'sunset':
      return {
        intro: 'Sunset cruises are timed around golden hour. Departure shifts with the season so the boat is positioned west-facing as the sun drops behind Rhodes Town.',
        steps: [
          { time: tour.departure_time || '17:30', title: 'Evening departure', detail: 'Board at Mandraki or your operator\'s marina. Crew serves welcome drinks as you leave the harbour.' },
          { time: 'First hour', title: 'Coastal cruise', detail: 'Sail along Kalithea, Faliraki or Ladiko with background music. A swim stop may be offered if daylight and conditions allow.' },
          { time: 'Sunset', title: 'Golden hour at sea', detail: 'The captain positions the vessel for views of the medieval walls and west-facing coastline as the sky changes colour.' },
          { time: tour.return_time || '20:30', title: 'Return after dark', detail: 'Cruise back to harbour with lights along the Old Town waterfront. Bring a light layer for the return leg.' },
        ],
      };
    case 'charter':
      return {
        intro: 'Charter itineraries are tailored to your dates, crew experience and weather. The outline below shows a typical seven-day Dodecanese loop from Rhodes.',
        steps: [
          { time: 'Day 1', title: 'Rhodes marina briefing', detail: 'Provisioning, safety walk-through and route planning with your skipper or bareboat handover.' },
          { time: 'Day 2', title: 'Symi overnight', detail: 'Cross to Symi harbour, dinner ashore and a morning swim before continuing east.' },
          { time: 'Days 3–5', title: 'Island hopping', detail: 'Tilos, Halki, Nisyros or Kos depending on wind and your preferences.' },
          { time: 'Final day', title: 'Return to Rhodes', detail: 'Relaxed sail back with a final swim stop before marina check-out.' },
        ],
      };
    case 'private_trip':
      return {
        intro: 'Private boat trips are flexible by design. Your skipper adapts the route to your group, weather and how long you want at each bay.',
        steps: [
          { time: depart, title: 'Marina pickup', detail: 'Meet your skipper, stow your bags and agree on the day\'s priorities: swimming, sightseeing or a mix.' },
          { time: 'Mid-route', title: 'East coast bays', detail: 'Typical stops include Anthony Quinn Bay, Ladiko or quiet coves only reachable by boat.' },
          { time: 'Lunch break', title: 'Lunch and swim', detail: 'Anchor for a swim and onboard lunch or a taverna stop if arranged in advance.' },
          { time: ret, title: 'Return to base', detail: 'Cruise back along the coast with optional final snorkel stop.' },
        ],
      };
    case 'east_coast':
      return {
        intro: 'East coast day cruises focus on swimming, snorkelling and lunch on board without long open-sea crossings. The captain chooses bays based on wind and crowding, but Anthony Quinn, Kalithea and Ladiko appear on most full-day routes from Rhodes Town or resort marinas.',
        steps: [
          { time: depart, title: 'Harbour departure', detail: 'Leave Mandraki or a resort marina and head north-east along the sheltered coastline. Crew serves coffee or soft drinks as you pass the Old Town walls and open views toward Turkey.' },
          { time: 'Stop 1', title: 'Anthony Quinn Bay', detail: 'Crystal-clear water ideal for snorkelling and photos from the deck. The crew drops anchor for 45–60 minutes; use the ladder or platform to swim ashore where access allows.' },
          { time: 'Stop 2', title: 'Kalithea or Ladiko', detail: 'Second swim stop with time for the onboard buffet lunch and unlimited soft drinks. Vegetarian options are usually available if you mention dietary needs when booking.' },
          { time: 'Afternoon', title: 'Final bay or sun deck', detail: 'A third short stop or extended deck time depending on schedule. Music plays on many vessels while guests relax before the return leg.' },
          { time: ret, title: 'Afternoon return', detail: 'Sail back to harbour with views of the coast in the opposite direction. Disembark at the same meeting point; allow extra time for taxis in peak season.' },
        ],
      };
    default:
      return {
        intro: 'Shared day cruises in Rhodes follow a relaxed schedule: several swimming stops, lunch on board and plenty of time on the sun deck between bays.',
        steps: [
          { time: depart, title: 'Boarding and departure', detail: 'Arrive at the meeting point early, collect your spot on deck and listen to the crew safety briefing.' },
          { time: 'Mid-morning', title: 'First swim stop', detail: 'Anchor at a sheltered east-coast bay for swimming and snorkelling.' },
          { time: 'Midday', title: 'Lunch and second stop', detail: 'Buffet lunch is served on most full-day cruises, followed by another bay or photo stop.' },
          { time: ret, title: 'Return to harbour', detail: 'Sail back to Rhodes with music on deck and optional last swim if time allows.' },
        ],
      };
  }
}

function capitalizeFirst(s: string): string {
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
}

// Derive a bold title and optional supporting detail from one itinerary
// sentence. Never returns detail identical to the title.
function splitTitleDetail(text: string): { title: string; detail: string } {
  const t = text.trim().replace(/\s+/g, ' ').replace(/[.\s]+$/, '');

  // "A → B → C" chains: first leg is the title, the rest of the route the detail
  const arrowParts = t.split(/\s*→\s*/);
  if (arrowParts.length > 2) {
    return { title: capitalizeFirst(arrowParts[0]), detail: capitalizeFirst(arrowParts.slice(1).join(' → ')) };
  }

  // Trailing parenthetical reads best as supporting detail
  const paren = t.match(/^(.{8,}?)\s*\(([^()]{3,})\)$/);
  if (paren) {
    return { title: capitalizeFirst(paren[1].trim()), detail: capitalizeFirst(paren[2].trim()) };
  }

  // Em/en dash (or a spaced hyphen, so "Self-drive" stays intact) splits title from detail
  const dash = t.match(/\s+-\s+|\s*[—–]\s*/);
  if (dash && dash.index && dash.index >= 8) {
    const detail = t.slice(dash.index + dash[0].length).trim();
    if (detail.length >= 8) {
      return { title: capitalizeFirst(t.slice(0, dash.index).trim()), detail: capitalizeFirst(detail) };
    }
  }

  return { title: capitalizeFirst(t), detail: '' };
}

// One step from one sentence: pull a leading "18:00" / "Day 2" / "Morning:" /
// "2hr:" marker into the time slot, the rest becomes title + detail.
function parseStepSentence(sentence: string): TourItineraryStep {
  const s = sentence.trim().replace(/\s+/g, ' ');

  const timeMatch = s.match(/^(\d{1,2}:\d{2}|Day\s+\d+)\s*[—–:-]?\s+/i);
  if (timeMatch) {
    return { time: timeMatch[1], ...splitTitleDetail(s.slice(timeMatch[0].length)) };
  }

  const labelMatch = s.match(/^([A-Za-z0-9][A-Za-z0-9 ]{0,18}?):\s+(.+)$/);
  if (labelMatch) {
    return { time: labelMatch[1].trim(), ...splitTitleDetail(labelMatch[2]) };
  }

  return splitTitleDetail(s);
}

// Sentence boundary: a period followed by a capitalised word or digit, but not
// after common abbreviations ("approx. 1 hour", "St. Paul").
const SENTENCE_SPLIT = /(?<!\bapprox)(?<!\bSt)(?<!\bDr)(?<!\bMt)(?<!\betc)(?<!\bvs)\.\s+(?=[A-Z0-9])/;

export function parseItinerarySteps(raw: string): TourItineraryStep[] | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;

  // "Stop 1 — ... Stop 2 — ..." format: one step per stop, plus any
  // plain sentences before the first stop / after the last one.
  const stopParts = trimmed.split(/(?=Stop\s+\d+\s*[—–-])/i).map((p) => p.trim()).filter(Boolean);
  if (stopParts.length > 1) {
    return stopParts.flatMap((part) => {
      const m = part.match(/^Stop\s+\d+\s*[—–-]\s*(.*)$/is);
      if (!m) return part.split(SENTENCE_SPLIT).filter((s) => s.trim().length > 2).map(parseStepSentence);
      // A stop segment may carry trailing sentences ("... snorkeling). Return to port.")
      const sentences = m[1].split(SENTENCE_SPLIT).filter((s) => s.trim().length > 2);
      return sentences.map(parseStepSentence);
    });
  }

  const sentences = trimmed.split(SENTENCE_SPLIT).filter((s) => s.trim().length > 2);
  if (sentences.length >= 2) {
    return sentences.map(parseStepSentence);
  }

  return [{ title: 'Route overview', detail: trimmed }];
}

function defaultFaq(kind: TourKind, tour: TourLike): TourFaqItem[] {
  const price = tour.price ? ` (${tour.price})` : '';

  const common: TourFaqItem[] = [
    {
      question: 'How do I book this experience?',
      answer: `Send a booking request on this page or <a href="/contact">contact us</a> with your preferred date and group size. We confirm availability with the operator, usually within a few hours. July and August departures need at least one week ahead for shared cruises. Your confirmation includes meeting point, time and what to bring.`,
    },
    {
      question: 'What should I bring on the day?',
      answer: 'Swimwear, towel, high-SPF sunscreen, hat and sunglasses. Soft-soled shoes work best on deck; bring a light layer for the return trip. Take seasickness tablets before longer crossings if needed. Leave bulky luggage at your hotel.',
    },
    {
      question: 'What happens if the weather is bad?',
      answer: 'If conditions are unsafe, the operator reschedules during your stay or refunds according to their policy. Symi crossings and sunset trips may move when wind is strong. See our <a href="/faq">FAQ page</a> for general weather guidance.',
    },
  ];

  const kindSpecific: Record<TourKind, TourFaqItem> = {
    symi: {
      question: 'Can you visit Symi in one day from Rhodes?',
      answer: 'Yes. Most Symi day cruises leave Mandraki around 09:00, cross in 75–90 minutes and give you four to five hours in Gialos before returning by about 18:00. For more flexibility, ask about a <a href="/service/rhodes-boat-trips">private boat trip to Symi</a>.',
    },
    lindos: {
      question: 'Can I visit the Lindos Acropolis on this trip?',
      answer: 'Many Lindos tours include free time ashore, but the Acropolis climb takes 20–40 minutes each way and entry is paid separately. Tell us if the Acropolis is your priority so we match you to a tour with enough time ashore.',
    },
    sunset: {
      question: 'What time does a sunset cruise depart?',
      answer: 'Departure shifts with the season: roughly 17:15–18:00 in spring and autumn, later in midsummer. Arrive 20 minutes early. Compare options on our <a href="/service/rhodes-boat-cruises">Rhodes Boat Cruises</a> page.',
    },
    east_coast: {
      question: 'Is lunch included on this cruise?',
      answer: 'Full-day east coast shared cruises usually include buffet lunch, water and soft drinks, sometimes wine or beer. Menus vary by operator. Mention dietary needs when booking; your confirmation lists exact inclusions.',
    },
    charter: {
      question: 'Do I need a sailing licence for a bareboat charter?',
      answer: 'Bareboat charter requires a recognised sailing licence (ICC, RYA or equivalent) plus a short experience resume. If unsure, choose a skippered charter and let a professional captain handle navigation.',
    },
    private_trip: {
      question: 'Can we customise the route on a private trip?',
      answer: 'Yes—that is the main advantage. Your skipper adapts stops to your group: extra swimming, Lindos, quiet coves or a birthday setup on deck. Discuss priorities when you book so fuel and duration match your plan.',
    },
    sailing: {
      question: 'Is sailing suitable if I get seasick easily?',
      answer: 'Sailing feels different from a large motor cruise: more motion when sails fill, but catamarans are the most stable shared option. Morning departures in summer are gentler. Tell us about motion sensitivity and we recommend honestly.',
    },
    catamaran: {
      question: 'Why choose a catamaran over a traditional motor cruise?',
      answer: 'Catamarans offer wide decks, trampolines and much less rolling than monohulls—ideal for families. Shared day tours include lunch and swim stops similar to motor vessels. See <a href="/service/rhodes-boat-cruises">Rhodes Boat Cruises</a> for motor routes.',
    },
    generic_cruise: {
      question: 'Is the price per person or per boat?',
      answer: `The price shown${price || ''} is typically per person on shared day cruises unless stated otherwise. Private charters and boat hire are quoted per vessel for your group. Include children's ages in your request; we confirm the final price before you pay.`,
    },
  };

  return [common[0], kindSpecific[kind], common[1], common[2]];
}

function inclusionsIntro(kind: TourKind, tour: TourLike): string {
  switch (kind) {
    case 'symi':
      return 'Shared Symi day cruises from Rhodes include the essentials for a full day at sea: transport, crew, safety gear and usually a swim stop on the crossing. Exact extras such as snacks or snorkelling masks vary by vessel size, so we confirm the operator list when you book. Compare this listing with our other Symi departures if you want lunch included or a faster crossing.';
    case 'east_coast':
      return 'Full-day east coast cruises typically include buffet lunch, unlimited water and soft drinks, snorkelling gear and multiple swim stops along Anthony Quinn Bay, Kalithea and nearby coves. Exact menus and drink policies differ slightly by operator; we confirm the list when you enquire.';
    case 'charter':
      return 'Charter inclusions depend on bareboat versus skippered hire and the contract you sign at the marina. The items below reflect a typical equipped yacht; provisioning, fuel and crew fees may be quoted separately. We walk through every line before you pay a deposit.';
    default:
      return `The list below applies to ${tour.title} as operated by licensed crews from Rhodes. Shared day cruises usually bundle swim stops, meal service and soft drinks; private trips may differ. Your confirmation email is the final reference if an operator updates menus or equipment for a specific season.`;
  }
}

function exclusionsIntro(kind: TourKind): string {
  switch (kind) {
    case 'symi':
      return 'Symi day trips rarely include hotel transfers or meals ashore in Gialos; budget for taverna lunch and souvenirs in the harbour. Some boats sell drinks on board beyond water. Travel insurance and personal expenses are always your responsibility.';
    case 'charter':
      return 'Bareboat charters exclude skipper, hostess, fuel beyond an allowance, marina fees and onboard provisioning unless you add them to the quote. Damage deposits and optional insurance are handled at check-in.';
    default:
      return 'Unless your confirmation states otherwise, plan for hotel transfers, alcoholic drinks on board, tips for crew and any spending ashore at Lindos, Symi or resort marinas. We flag operator-specific extras when we reply to your enquiry.';
  }
}

function practicalTips(kind: TourKind, tour: TourLike): string {
  const title = tour.title;
  switch (kind) {
    case 'symi':
      return 'Boarding is on a first-come basis for the best deck spots on busy summer mornings. The open-sea leg toward Symi takes 75–90 minutes; sit mid-ship if you prefer less motion. Mobile signal drops briefly mid-crossing. Euros are accepted everywhere in Gialos. Toilets are on board but queues form before arrival in Symi, so use them during the swim stop when possible.';
    case 'lindos':
      return 'Lindos trips combine time on deck with a swim at St Paul\'s Bay; wear shoes you can remove easily for boarding. The village lanes are steep and hot at midday. If your tour includes ashore time, note the crew\'s return call on your phone. Sunscreen and water matter more than extra clothing.';
    case 'sunset':
      return 'Sunset sailings fill quickly in July and August. Arrive early, bring a light jacket for the return after dark, and expect gentle background music rather than a party atmosphere on most vessels. Photography is best from the stern or upper deck once the captain positions the boat west.';
    case 'east_coast':
      return 'East coast day cruises stay in sheltered water, so seasickness is uncommon. Lunch is often a buffet served while at anchor; grab a plate when service opens to avoid the rush. Bring reef-safe sunscreen if you snorkel near rocky coves.';
    case 'charter':
      return 'Allow a full morning for check-in, inventory and a weather briefing on embarkation day. Provisioning runs are easier the day before you sail. Keep passports handy for customs if your route leaves Greek waters.';
    case 'private_trip':
      return 'Private charters start when your group boards, not on a fixed public schedule. Tell the skipper about young children or non-swimmers so they pick calm bays. You can usually play your own music on smaller boats; ask about Bluetooth when you book.';
    default:
      return `${title} follows a relaxed island rhythm: several swim stops, time on the sun deck and a return to Rhodes before evening. Large shared vessels feel stable; smaller boats are quicker but move more in wind. Listen to the crew briefing and ask where life jackets are stored if you are travelling with children.`;
  }
}
function meetingNotes(kind: TourKind): string {
  switch (kind) {
    case 'symi':
      return 'Look for the operator\'s desk or banner along Mandraki quay. Check-in opens about 30 minutes before departure. Bring your confirmation and passport or ID if requested. In peak season, taxis from Ixia or Faliraki should allow extra travel time because Old Town streets fill quickly before morning departures.';
    case 'sunset':
      return 'Sunset departures use the same Mandraki meeting points as day cruises; boarding times change with the season, so rely on your confirmation email rather than a fixed clock time from a previous year.';
    case 'charter':
      return 'Charter briefings take place at the designated marina berth listed in your contract, usually Rhodes or Mandraki marinas. Allow time for inventory checks and provisioning on embarkation day.';
    case 'east_coast':
      return 'East coast departures use Mandraki or Faliraki/Kallithea marinas depending on the operator. Your confirmation states the exact pier; arrive 25 minutes early because boarding queues form in July and August. Resort pickups are not included unless explicitly listed.';
    default:
      return 'Arrive 20–30 minutes before departure. Parking near Mandraki is limited in summer; taxis or hotel transfers are often easier than driving into the Old Town.';
  }
}

function experienceNotes(kind: TourKind, tour: TourLike): string {
  const title = tour.title;
  switch (kind) {
    case 'symi':
      return `${title} is one of the most requested day trips from Rhodes. The neoclassical harbour of Gialos looks unlike anywhere else in the Dodecanese, with pastel mansions rising from the waterfront and small boats tied along the quay. The unhurried pace ashore is what guests remember most: coffee by the harbour, a climb up the Kali Strata steps, or lunch at a taverna before the return call. Shared boats offer the best value for couples and small groups; private speedboats suit those who want custom timing or a stop at St George Bay. We confirm operator, pier number and boarding time with you before travel so the morning runs smoothly.`;
    case 'lindos':
      return `${title} pairs coastal scenery with one of the island\'s iconic landmarks. Approaching St Paul\'s Bay from the sea gives a perspective you cannot get from the road, and the swim stop is often the highlight of the day. If you plan to climb to the Acropolis, wear sturdy shoes and carry water. We help you pick a departure with enough time ashore for your priorities.`;
    case 'sunset':
      return `${title} is timed around golden hour rather than distance. The crew focuses on positioning the vessel for west-facing views as Rhodes Town lights begin to glow. It is a relaxed, social atmosphere suited to couples and groups who already explored the island during the day. Dress in layers and book mid-week in peak season for a quieter deck.`;
    case 'charter':
      return `${title} is built around your dates and sailing experience. Rhodes is an ideal charter base for the Dodecanese: short hops to Symi and Halki or longer legs toward Kos and Patmos when the Meltemi allows. We match yacht type, bareboat versus skippered, and provisioning level before you commit a deposit.`;
    case 'private_trip':
      return `${title} keeps your group on a private vessel with a local skipper who knows which bays are calm on a given wind direction. You are not tied to a fixed buffet schedule or a crowded sun deck. Tell us if you prefer swimming, sightseeing or a special occasion setup and we align the quote accordingly.`;
    case 'east_coast':
      return `${title} stays on the sheltered east shore of Rhodes, so the day feels relaxed even when the Meltemi blows offshore. Expect multiple swim stops at famous bays such as Anthony Quinn and Kalithea, a buffet lunch on full-day departures, and plenty of deck time between anchors. It is a strong choice for families and first-time boat guests who want swimming and scenery without a long open-sea crossing. We match you to the operator and departure point listed below.`;
    default:
      return `${title} is operated by licensed crews from Rhodes marinas with routes that follow the sheltered east coast when possible. Shared departures include structured swim stops and meal service; the atmosphere is social and easy for first-time boat guests. We list what is included and excluded clearly below so you can compare like-for-like before booking.`;
  }
}

/** Merge DB tour fields with SEO-rich defaults so every detail page reaches full depth. */
export function enrichTourDetailContent(tour: TourLike): EnrichedTourDetail {
  const kind = detectKind(tour);

  const inclusions = tour.inclusions?.length ? tour.inclusions : defaultInclusions(kind);
  const exclusions = tour.exclusions?.length ? tour.exclusions : defaultExclusions(kind);

  const parsedSteps = tour.itinerary ? parseItinerarySteps(tour.itinerary) : null;
  const fallbackItinerary = defaultItinerary(kind, tour);

  const itinerarySteps = parsedSteps?.length ? parsedSteps : fallbackItinerary.steps;
  const itineraryIntro = tour.itinerary
    ? `This is the published route for ${tour.title}. Timings may shift slightly with weather, harbour traffic and the season.`
    : fallbackItinerary.intro;

  const meetingPoint = tour.meeting_point?.trim() || DEFAULT_MEETING;

  return {
    inclusions,
    exclusions,
    inclusionsIntro: inclusionsIntro(kind, tour),
    exclusionsIntro: exclusionsIntro(kind),
    itineraryIntro,
    itinerarySteps,
    meetingPoint,
    meetingNotes: meetingNotes(kind),
    experienceNotes: experienceNotes(kind, tour),
    practicalTips: practicalTips(kind, tour),
    faq: defaultFaq(kind, tour),
  };
}

/** Rough word count for build-time / QA checks. */
export function tourDetailWordCount(
  tour: TourLike,
  displayDescription: string,
  enriched: EnrichedTourDetail,
): number {
  const parts = [
    tour.title,
    displayDescription,
    enriched.inclusionsIntro,
    enriched.exclusionsIntro,
    enriched.itineraryIntro,
    ...enriched.itinerarySteps.flatMap((s) => [s.title, s.detail, s.time || '']),
    enriched.meetingPoint,
    enriched.meetingNotes,
    enriched.experienceNotes,
    enriched.practicalTips,
    ...enriched.inclusions,
    ...enriched.exclusions,
    ...enriched.faq.flatMap((f) => [f.question, f.answer.replace(/<[^>]+>/g, ' ')]),
  ];
  return parts.join(' ').split(/\s+/).filter(Boolean).length;
}
