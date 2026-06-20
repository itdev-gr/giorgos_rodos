/** Page body content per service — paired with service-seo.ts for meta. */

export interface ServiceFeature {
  icon: string;
  title: string;
  text: string;
}

export interface ServicePanel {
  eyebrow: string;
  title: string;
  lead?: string;
  paragraphs: string[];
  note?: string;
  imageKey?: string;
  reversed?: boolean;
}

export interface ServiceSplit {
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  reversed?: boolean;
  cta?: { label: string; href: string; external?: boolean };
}

export interface ServicePageContent {
  introQuote: string;
  features: ServiceFeature[];
  footnote?: string;
  panel?: ServicePanel;
  catalogTitle?: string;
  catalogSubtitle?: string;
  splits?: ServiceSplit[];
  ctaTitle?: string;
  ctaText?: string;
  routeGuide?: {
    title: string;
    intro: string;
    routes: { heading: string; body: string }[];
    closing: string;
  };
}

export const SERVICE_CONTENT: Record<string, ServicePageContent> = {
  'rhodes-boat-tours': {
    introQuote: 'Not all boat tours are the same. The boat, the crew and the atmosphere make the difference.',
    features: [
      { icon: 'fas fa-water', title: 'Guided Sightseeing', text: 'Small-group tours with a professional skipper — island hops, coastal routes and sunset sails, not large all-inclusive cruise boats.' },
      { icon: 'fas fa-check-circle', title: 'Handpicked Tours', text: 'From all the tours available in Rhodes, we have selected those with quality boats, experienced crews and fair prices.' },
      { icon: 'fas fa-map-marked-alt', title: 'Local Guidance', text: 'Tell us your group size and dates — we match you to the tour format and route that fit best.' },
    ],
    panel: {
      eyebrow: 'Local experts since 1998',
      title: 'Guided tours, honestly recommended',
      lead: 'We know the skippers, the boats and the routes.',
      paragraphs: [
        'Rhodes boat tours range from small sailing groups to faster sightseeing trips along the east coast. We help you understand the difference before you book — group size, duration, what is included and whether a tour or a private trip suits you better.',
        'Every tour on this page is from an operator we know personally. No anonymous listings, no paid placements — just honest advice from people who work the harbour every day.',
      ],
      imageKey: 'hero',
      reversed: false,
    },
    catalogTitle: 'Available Boat Tours',
    catalogSubtitle: 'Handpicked guided experiences departing from Rhodes',
    ctaTitle: 'Not sure which tour fits your group?',
    ctaText: 'Tell us your dates and who is travelling — we will suggest the best option honestly, without pressure.',
  },
  'rhodes-boat-cruises': {
    introQuote: 'Boat cruises are one of the best ways to explore the coastline, visit famous bays and spend a full day on the sea.',
    features: [
      { icon: 'fas fa-anchor', title: 'All-Inclusive Day Cruises', text: 'Larger boats with fixed routes to Symi, Lindos or along the east coast — swimming stops, lunch and drinks included.' },
      { icon: 'fas fa-map-signs', title: 'Multiple Departure Points', text: 'Cruises depart from Mandraki Harbour, Faliraki, Kolymbia and Lindos depending on route and destination.' },
      { icon: 'fas fa-map-marked-alt', title: 'Local Guidance', text: 'We help you pick the right cruise for your hotel location, group size and how much time you want at sea.' },
    ],
    panel: {
      eyebrow: 'Symi · Lindos · East coast',
      title: 'Organised day cruises from Rhodes',
      paragraphs: [
        'Day boat cruises are the most popular way for visitors to see Symi, Lindos and the east-coast bays in one trip — with lunch, drinks and several swim stops built in.',
        'We work with trusted local operators and help you choose by departure point, hull type and whether you prefer a shared cruise or something more private.',
      ],
      imageKey: 'hero',
    },
    catalogTitle: 'Available Day Cruises',
    catalogSubtitle: 'Symi, Lindos, Anthony Quinn Bay and east-coast routes',
    ctaTitle: 'Need help choosing a cruise?',
    ctaText: 'Share your hotel area and group size — we will point you to the right departure and route.',
  },
  'rhodes-catamaran-tours': {
    introQuote: 'Catamarans are spacious, stable and comfortable — the most relaxing way to spend a day on the sea.',
    features: [
      { icon: 'fas fa-sun', title: 'Day Catamaran Cruises', text: 'Full-day tours with swimming stops, lunch, drinks and time on the bow nets. Shared or private options.' },
      { icon: 'fas fa-moon', title: 'Sunset Catamaran Tours', text: 'Evening sails with drinks and light dinner as the sun goes down — ideal for couples and celebrations.' },
      { icon: 'fas fa-users', title: 'Family-Friendly Stability', text: 'Twin hulls mean less roll in light chop — the format most guests prefer for swimming-and-lunch days.' },
    ],
    panel: {
      eyebrow: 'Stable · spacious · all-inclusive',
      title: 'Catamaran cruises in Rhodes',
      paragraphs: [
        'Catamaran day cruises along the Rhodes east coast combine comfort with inclusivity — lunch, drinks, snorkelling gear and multiple swim stops on a flat, stable platform.',
        'We handpick operators with well-maintained cats and professional crews, and help you decide between shared day cruises, sunset sails and private catamaran charter.',
      ],
      imageKey: 'hero',
    },
    catalogTitle: 'Catamaran Tours & Cruises',
    catalogSubtitle: 'Shared day sails and private catamaran experiences',
    ctaTitle: 'Want a catamaran for your group only?',
    ctaText: 'Private catamaran charters are available — message us with your dates and group size.',
  },
  'rhodes-sailing-trips': {
    introQuote: 'Sailing is not about speed — it is about the journey. The wind decides the route.',
    features: [
      { icon: 'fas fa-wind', title: 'Under Sail', text: 'Monohull sailing yachts — slower, quieter and more connected to the sea than motor cruises.' },
      { icon: 'fas fa-users', title: 'Shared & Private', text: 'Join a small group trip or charter a yacht for your group for the day. For weekly holidays see yacht charter.' },
      { icon: 'fas fa-map-marked-alt', title: 'East Coast Routes', text: 'Half-day and full-day sails along the Rhodes coastline with a professional skipper on every departure.' },
    ],
    panel: {
      eyebrow: 'Half-day & full-day',
      title: 'Authentic sailing days from Rhodes',
      paragraphs: [
        'Sailing trips in Rhodes are skippered day experiences on monohull yachts — half-day coastal hops or full-day routes when the wind allows.',
        'No sailing experience needed: the skipper handles the boat while you swim, sunbathe and enjoy the ride. If you hold a licence and want to skipper yourself, we arrange bareboat charter separately.',
      ],
      imageKey: 'hero',
      reversed: true,
    },
    catalogTitle: 'Sailing Trips Available',
    catalogSubtitle: 'Shared and private day sails with professional skippers',
    ctaTitle: 'Curious about sailing but not sure?',
    ctaText: 'Describe your group and comfort level — we will recommend the right sail format honestly.',
  },
  'rhodes-boat-trips': {
    introQuote: 'A private boat trip is one of the most personal ways to experience Rhodes — your route, your pace, your group only.',
    features: [
      { icon: 'fas fa-ship', title: 'Your Private Boat', text: 'A skippered boat reserved for your group — flexible 2–8 hour trips, not a shared tour or large cruise vessel.' },
      { icon: 'fas fa-check-circle', title: 'Handpicked Boats', text: 'Speedboats, RIBs and small catamarans from operators we know — quality vessels and experienced skippers.' },
      { icon: 'fas fa-map-marked-alt', title: 'Flexible Routes', text: 'Anthony Quinn Bay, Lindos, south coast or east-coast swims — you choose with the skipper on the day.' },
    ],
    panel: {
      eyebrow: 'Private · skippered · flexible',
      title: 'Private boat trips for your group',
      paragraphs: [
        'Private boat trips in Rhodes mean your own skipper, your chosen duration and a route tailored to your group — couples, families and friends who want the boat to themselves.',
        'Prices typically start around €350 for a half-day. Tell us your dates and preferences and we connect you with the right vessel and crew.',
      ],
      imageKey: 'hero',
    },
    catalogTitle: 'Private Boat Trips',
    catalogSubtitle: 'Skippered experiences reserved for your group',
    routeGuide: {
      title: 'Popular Rhodes Boat Trip Routes',
      intro: 'Rhodes boat trips cover everything from budget-friendly shared day cruises to fully private speedboat charters. Most visitors ask about Symi, Lindos and the east-coast swim bays — here is how the main routes compare, and where shared and private options fit.',
      routes: [
        {
          heading: 'Rhodes boat trip to Symi',
          body: 'The Symi day trip is the most booked boat route from Rhodes. Shared cruises leave Mandraki around 09:00, cross in roughly 75–90 minutes and give you four to five hours in the pastel harbour of Gialos before returning by about 18:00. Expect €45–€70 per person on organised day boats with a swim stop en route. Private speedboat trips to Symi suit groups who want faster crossings, Panormitis Monastery or flexible timing — typically €1,000–€1,300 per vessel for up to six guests. Browse <a href="/service/rhodes-boat-cruises">Symi day cruises</a> for shared departures or the private options in our catalog below.',
        },
        {
          heading: 'Rhodes boat trip to Lindos',
          body: 'Lindos boat trips combine swimming at St Paul\'s Bay with free time in the village beneath the Acropolis. Shared cruises from Rhodes Town or Kolymbia often run €39–€100 per person depending on duration and lunch. Express routes focus on Lindos ashore; fuller day cruises add east-coast swim stops at Anthony Quinn Bay or Kalithea Springs on the return leg. Private speedboat trips to Lindos start around €460 for a half-day and €700+ for a full day with lunch on deck — ideal when you want to control how long you stay in the village. See <a href="/service/rhodes-boat-cruises">Lindos and east-coast cruises</a> or enquire about a private Lindos day.',
        },
        {
          heading: 'East coast swim trips (Anthony Quinn, Kalithea, Ladiko)',
          body: 'Not every Rhodes boat trip crosses to another island. Half-day and full-day east-coast routes stay along the sheltered shoreline — Anthony Quinn Bay, Kalithea Springs, Ladiko and Traganou Caves are the classic swim-and-snorkel stops. Shared all-inclusive cruises run €45–€75 per person with lunch and drinks on board. Private half-day trips from €350 let your group hit two or three bays at your own pace without a fixed timetable. These routes suit first-time visitors who want turquoise water without an open-sea crossing.',
        },
        {
          heading: 'Boat trips from Kolymbia and Faliraki',
          body: 'If you stay on the east coast, departures from Kolymbia or Faliraki shorten transfer time to Symi, Lindos and local swim bays. Express boats to Symi from Kolymbia often leave later than Mandraki services and include a swim stop at St George\'s Bay. Faliraki sea shuttles connect the resort strip with Rhodes Town harbour for guests who prefer not to drive. When you enquire, tell us your hotel area — we match you to the nearest sensible departure rather than sending you across the island unnecessarily.',
        },
      ],
      closing: 'Shared day cruises offer the best per-person value; private skippered trips give you the boat, route and timing to yourselves. We have curated both since 1998 — <a href="/service/rhodes-boat-cruises">compare shared Rhodes boat cruises</a>, browse the private trips below, or <a href="/contact">ask us</a> which format fits your dates and group.',
    },
    ctaTitle: 'Planning a private day on the water?',
    ctaText: 'Send your dates, group size and ideas — we will quote the best options available.',
  },
  'rhodes-rent-a-boat': {
    introQuote: 'Drive your own boat along the Rhodes coast — no licence needed for boats up to 30 HP.',
    features: [
      { icon: 'fas fa-id-card', title: 'No Licence Required', text: 'Greek law allows anyone 18+ to operate pleasure craft up to 30 HP without a formal boating licence.' },
      { icon: 'fas fa-map', title: 'Coastal Freedom', text: 'Explore east-coast bays at your own pace — Anthony Quinn, Ladiko, Kalithea and sheltered swims within the permitted zone.' },
      { icon: 'fas fa-check-circle', title: 'Handpicked Operators', text: 'We work with trusted rental bases we know personally — briefing, fuel, map and safety equipment included.' },
    ],
    panel: {
      eyebrow: 'Self-drive · east coast',
      title: 'License-free boat rental in Rhodes',
      paragraphs: [
        'Renting your own boat is the most independent way to see Rhodes from the sea — stop when you want, swim where you like and return when you are ready.',
        'Before you leave the dock you receive a safety briefing and a chart of your permitted sailing area. We help you pick the right boat size and duration for your group honestly.',
      ],
      imageKey: 'hero',
    },
    catalogTitle: 'Available Rental Boats',
    catalogSubtitle: 'License-free self-drive boats along the Rhodes coast',
    ctaTitle: 'Not sure which rental fits your group?',
    ctaText: 'Tell us your dates and how many people — we will recommend the right boat and base.',
  },
  'rhodes-charter': {
    introQuote: 'Yacht charter is a different kind of sea holiday — multi-day sailing, island hopping and the freedom of the open Aegean.',
    features: [
      { icon: 'fas fa-compass', title: 'Bareboat Charter', text: 'Sailing yacht without skipper — for experienced sailors with a valid licence who plan their own Dodecanese route.' },
      { icon: 'fas fa-user-shield', title: 'Skippered Charter', text: 'Professional skipper on board — no sailing experience needed, they handle navigation and anchorages.' },
      { icon: 'fas fa-map-marked-alt', title: 'Local Guidance', text: 'We connect you with the right charter company and yacht class for your crew, dates and route.' },
    ],
    panel: {
      eyebrow: 'Weekly · Dodecanese',
      title: 'Yacht charter from Rhodes Marina',
      paragraphs: [
        'Weekly yacht charter from Rhodes opens the Dodecanese — Symi, Halki, Kos, Nisyros and quiet anchorages only reachable by sail.',
        'Choose bareboat if you hold a recognised licence, or skippered if you prefer a professional captain. We advise on season, yacht type and realistic routes for your crew.',
      ],
      imageKey: 'hero',
      reversed: true,
    },
    catalogTitle: 'Charter Yachts & Options',
    catalogSubtitle: 'Bareboat and skippered weekly sailing holidays',
    ctaTitle: 'Planning a Dodecanese sailing holiday?',
    ctaText: 'Tell us your dates, experience level and group — we will match you with the right charter partner.',
  },
  'rhodes-mice-events': {
    introQuote: 'Rhodes combines coastline, history, resorts and marinas — everything needed for complete corporate and incentive programmes.',
    features: [
      { icon: 'fas fa-building', title: 'Corporate Events', text: 'Incentive trips, team building, conferences, product launches and VIP celebrations in Rhodes.' },
      { icon: 'fas fa-ship', title: 'Boat Experiences', text: 'Fleet days, catamaran cruises, yacht charters and sailing trips organised for groups of any size.' },
      { icon: 'fas fa-handshake', title: 'Local Network', text: 'We connect planners with trusted boats, venues, transfers and service providers across the island.' },
    ],
    panel: {
      eyebrow: 'MICE · Incentive · Corporate',
      title: 'Events and incentives on the water',
      paragraphs: [
        'Rhodes is a natural MICE destination: resorts, marinas, the medieval Old Town and a full range of sea experiences within easy reach.',
        'From fleet regattas and catamaran days to VIP yacht dinners and combined land-and-sea programmes — we coordinate through our local network so your event runs smoothly.',
      ],
      imageKey: 'hero',
    },
    ctaTitle: 'Planning a corporate event in Rhodes?',
    ctaText: 'Share your group size, dates and objectives — we will outline realistic options on the water.',
  },
  'rhodes-tender-boat': {
    introQuote: 'Professional shore-to-ship transfers across Rhodes harbours and bays — reliable, punctual, around the clock in season.',
    features: [
      { icon: 'fas fa-bolt', title: 'Rapid Response', text: 'On-demand transfers with typical response under 15 minutes in peak harbour zones.' },
      { icon: 'fas fa-shield-alt', title: 'Safe & Licensed', text: 'Well-maintained tenders with professional operators trained for all conditions.' },
      { icon: 'fas fa-calendar-check', title: 'Scheduled or On-Demand', text: 'Pre-arrange regular transfers or call for immediate dispatch when you need it.' },
    ],
    panel: {
      eyebrow: 'Marine transfers',
      title: 'Tender boat service in Rhodes',
      paragraphs: [
        'Tender boats bridge the gap between shore and ship — cruise passengers, superyacht guests, marina transfers and harbour-to-yacht runs across Rhodes.',
        'We work with licensed local operators who know every pier, timing constraint and weather consideration in Mandraki, Rhodes Marina and the east-coast anchorages.',
      ],
      imageKey: 'hero',
      reversed: true,
    },
    ctaTitle: 'Need a tender transfer in Rhodes?',
    ctaText: 'Tell us your harbour, timing and passenger count — we will connect you with the right operator.',
  },
};

export function getServiceContent(slug: string): ServicePageContent | undefined {
  const normalized = slug === 'rent-a-boat' ? 'rhodes-rent-a-boat' : slug;
  return SERVICE_CONTENT[normalized];
}
