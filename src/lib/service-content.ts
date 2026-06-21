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
    routeGuide: {
      title: 'Rhodes Boat Tours: Routes, Destinations and What to Expect',
      intro: 'A Rhodes boat tour is the easiest way to reach the island\'s best swimming bays, sea caves and neighbouring islands without renting a car or joining a crowded coach excursion. Most guided tours depart from Mandraki Harbour in Rhodes Town and run from spring through October. Below is how the main routes compare, what is included, and how to choose the boat tour that fits your group.',
      routes: [
        {
          heading: 'What is included on a Rhodes boat tour',
          body: 'Most guided Rhodes boat tours are all-inclusive, which keeps the day simple. A typical tour includes the round trip, swimming stops at two or three bays, snorkelling gear, soft drinks and water, and on full-day cruises a cooked lunch or Greek buffet on board. Prices for our handpicked tours usually start from around €75 per adult, with children\'s rates and family discounts on most departures. What you will not find is hidden fees or pressure selling — we quote the full price up front. Because we have worked Mandraki Harbour since 1998, we only list tours run on well-maintained boats with experienced, English-speaking crews. If you have a specific need — shade on deck, a quieter boat, easy access for older guests, or a stable catamaran for anyone prone to seasickness — tell us and we will match you to the right vessel rather than the first one with space.',
        },
        {
          heading: 'Rhodes boat tours to Symi island',
          body: 'The day tour to Symi is the most popular boat tour from Rhodes. Boats leave Mandraki in the morning, cross in around 75–90 minutes and give you several hours in the pastel harbour of Gialos, with a swim stop on the way. Symi is famous for its neoclassical houses, the Panormitis Monastery and crystal-clear water, which makes it ideal for photography and a relaxed lunch ashore. Our <a href="/tour-detail/all-inclusive-luxury-cruise-to-symi">all-inclusive luxury cruise to Symi</a> adds food and drinks on board so you can settle in for the crossing. If you prefer a smaller group or your own timing, ask about a private trip and we will arrange a faster speedboat for up to six guests.',
        },
        {
          heading: 'Boat tours to Lindos',
          body: 'A boat tour to Lindos pairs the medieval village and its Acropolis with swimming below the cliffs at St Paul\'s Bay. Approaching Lindos from the sea is the most scenic way to arrive, and many guests rate it the highlight of their trip. Our <a href="/tour-detail/luxury-cruise-to-lindos-with-lunch-and-drinks">luxury cruise to Lindos with lunch and drinks</a> includes time ashore in the village plus swim stops along the east coast on the way. Bring comfortable shoes if you plan to walk up to the Acropolis, and a hat — the village has little shade at midday. For larger groups or special occasions, a private Lindos cruise lets you decide how long to linger.',
        },
        {
          heading: 'East coast swimming tours — Anthony Quinn Bay & Kallithea',
          body: 'Not every Rhodes boat tour crosses to another island. East-coast swimming tours stay along the sheltered shoreline, stopping at Anthony Quinn Bay, Kallithea Springs, Ladiko and the Traganou sea caves — the classic snorkel-and-swim spots in calm, turquoise water. These tours suit first-time visitors and families who want beautiful bays without an open-sea crossing. Our <a href="/tour-detail/semi-private-top-rated-swimming-trip-4-hours-all-inclusive">semi-private 4-hour all-inclusive swimming trip</a> keeps groups small so the boat is never crowded, while the <a href="/tour-detail/yachting-4-hours-east-coast-cruise-with-greek-buffet">4-hour east-coast yachting cruise with Greek buffet</a> adds a relaxed sailing feel and food on deck. Both leave from Rhodes Town and return by mid-afternoon.',
        },
        {
          heading: 'Sunset boat tours in Rhodes',
          body: 'Sunset boat tours are the most romantic way to end a day in Rhodes. Departing in the late afternoon, they sail the calm western and northern waters as the light turns gold, usually with a swim stop and drinks on board. Our <a href="/tour-detail/sunset-cruise-shared-or-private">sunset cruise, shared or private</a> works equally well for couples, friends and small groups. Shared departures are the better value, while a private sunset charter gives you the deck to yourselves for a proposal, anniversary or birthday. Bring a light layer — it cools down on the water once the sun drops below the horizon.',
        },
        {
          heading: 'Red Sand Beach BBQ boat tour',
          body: 'For something different, the <a href="/tour-detail/red-sand-beach-bbq-trip-every-sunday">Red Sand Beach BBQ trip runs every Sunday</a> and combines a coastal cruise with a barbecue lunch ashore at one of the island\'s most striking beaches. It is a full-day, all-inclusive experience built around swimming, food and a relaxed group atmosphere rather than a tight sightseeing schedule. Because it only runs once a week and fills up quickly in July and August, it is worth booking ahead. Tell us your dates early and we will hold a place if there is still space.',
        },
        {
          heading: 'Shared, semi-private or private boat tours?',
          body: 'Rhodes boat tours come in three formats. Shared tours are the most affordable, joining other travellers on a set route and timetable — ideal if you want a full day out without organising anything yourself. Semi-private tours cap the number of guests so the boat stays comfortable and the crew has time for everyone. Fully private tours give you the boat, route and timing to yourselves, which suits families, groups of friends and special occasions. If you would rather skipper yourself, see <a href="/service/rhodes-rent-a-boat">rent a boat in Rhodes</a> (no licence needed for smaller engines), or browse organised <a href="/service/rhodes-boat-cruises">Rhodes boat cruises</a> for larger all-inclusive day boats.',
        },
        {
          heading: 'Where Rhodes boat tours depart from',
          body: 'Most of our Rhodes boat tours depart from Mandraki Harbour in Rhodes Town, a short walk from the old town and easy to reach from nearby resorts. If you are staying further down the east coast in Faliraki, Kolymbia or Lindos, let us know your hotel area when you enquire and we will point you to the nearest sensible departure rather than sending you across the island. The season runs roughly from late April to October, with the calmest seas and warmest water from June to September. Mornings are best for swimming tours, while afternoons suit sunset sailings.',
        },
      ],
      closing: 'We have been matching visitors to the right Rhodes boat tours since 1998 — honestly, with no booking fees and no pressure. Browse the handpicked tours below, <a href="/service/rhodes-boat-cruises">compare full-day boat cruises</a>, or <a href="/contact">tell us your dates</a> and we will suggest the best option for your group.',
    },
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
    routeGuide: {
      title: 'Rhodes Boat Cruises: All-Inclusive Day & Sunset Cruises Explained',
      intro: 'A Rhodes boat cruise is the easy, all-inclusive way to spend a day or an evening at sea — larger organised boats with fixed routes, swimming stops and food and drinks on board. Most cruises depart from Mandraki Harbour in Rhodes Town and run from spring through October. Below is how the main cruises compare, what is included, and how to pick the right one for your group.',
      routes: [
        {
          heading: 'What is included on an all-inclusive Rhodes boat cruise',
          body: 'Most Rhodes boat cruises are all-inclusive, which is exactly why they are so popular: you pay once and everything is sorted. A typical day cruise includes the route, two or three swimming and snorkelling stops, a cooked lunch or Greek buffet, and unlimited soft drinks — many sunset cruises add wine, beer and live music. Prices usually run from about €30–€80 per person depending on the boat and duration, with children\'s rates and family discounts on most departures. There are no hidden fees: we quote the full price up front and you book direct, with no booking-platform mark-up. Because we have worked Mandraki Harbour since 1998, we only list cruises on well-run boats with experienced crews. Tell us your group size and dates and we will match you to the right cruise.',
        },
        {
          heading: 'All-inclusive day cruises',
          body: 'Full-day cruises are the classic Rhodes day out: a relaxed boat ride along the coast with several swimming stops, lunch and drinks included, and time to do nothing but enjoy the sea. The <a href="/tour-detail/east-coast-of-rhodes-group-cruise">East Coast of Rhodes group cruise</a> and the easy-going <a href="/tour-detail/fun-in-the-sun">Fun in the Sun</a> cruise are popular shared options that suit families, couples and groups alike. These cruises trade the speed of a private trip for a sociable, all-inclusive atmosphere at the lowest price per person. If you would rather a smaller boat, ask about the semi-private alternatives below.',
        },
        {
          heading: 'Sunset cruises in Rhodes',
          body: 'Sunset cruises are the most romantic Rhodes boat cruise — sailing the calm evening waters with drinks, a Greek BBQ or buffet and often live music as the sky turns gold. The <a href="/tour-detail/a-sunset-remedy-all-inclusive-sunset-cruise">A Sunset Remedy all-inclusive sunset cruise</a> on the El Greco and the <a href="/tour-detail/sunset-cruise-lindos-calypso">Calypso all-inclusive sunset cruise from Lindos</a> are favourites, while the <a href="/tour-detail/golden-hour-yacht-experience-semi-private">Golden Hour semi-private yacht experience</a> keeps numbers small for a more intimate evening. Bring a light layer — it cools on the water once the sun drops. Sunset cruises fill quickly in July and August, so it is worth booking ahead.',
        },
        {
          heading: 'Day cruise to Symi',
          body: 'The day cruise to Symi is one of the most booked from Rhodes. Boats leave Mandraki in the morning, cross in around 75–90 minutes and give you several hours in the pastel harbour of Gialos, usually with a swim stop on the way. Symi is famous for its neoclassical houses, the Panormitis Monastery and crystal-clear water — ideal for photos and a relaxed lunch ashore. Shared all-inclusive cruises are the best-value way to see it; if you want flexible timing or a smaller group, ask about <a href="/service/rhodes-boat-trips">private boat trips</a> instead.',
        },
        {
          heading: 'Day cruise to Lindos',
          body: 'A day cruise to Lindos pairs the medieval village and its Acropolis with swimming below the cliffs at St Paul\'s Bay. Approaching Lindos from the sea is the most scenic way to arrive. The <a href="/tour-detail/lazy-day-cruise-in-lindos">Lazy Day cruise in Lindos</a> is a relaxed, all-inclusive option with time ashore in the village and swim stops along the east coast. Bring comfortable shoes if you plan to walk up to the Acropolis, and a hat — the village has little shade at midday.',
        },
        {
          heading: 'East coast cruises — Anthony Quinn Bay & Kallithea',
          body: 'Not every Rhodes boat cruise crosses to another island. East-coast cruises stay along the sheltered shoreline, stopping at Anthony Quinn Bay, Kallithea Springs, Ladiko and the Traganou sea caves — the classic snorkel-and-swim spots in calm, turquoise water. These cruises suit first-time visitors and families who want beautiful bays without an open-sea crossing, with lunch and drinks included on board. They are also a great choice if anyone in your group prefers a shorter, sheltered route over a long crossing.',
        },
        {
          heading: 'Where Rhodes boat cruises depart from',
          body: 'Most organised cruises depart from Mandraki Harbour in Rhodes Town, but several also leave from Faliraki, Kolymbia and Lindos depending on the route and destination. If you are staying down the east coast, choosing a closer departure point saves a long transfer at the start and end of the day. Tell us your hotel area when you enquire and we will point you to the nearest sensible departure rather than sending you across the island. The cruise season runs from late April to October, with the calmest seas and warmest water from June to September.',
        },
        {
          heading: 'Which cruise is right for you?',
          body: 'Shared all-inclusive cruises offer the best value and a sociable atmosphere on larger boats. Semi-private cruises like the <a href="/tour-detail/golden-hour-yacht-experience-semi-private">Golden Hour yacht experience</a> cap the numbers for more space and a calmer pace. If you want the boat, route and timing entirely to yourselves, a <a href="/service/rhodes-boat-trips">private boat trip</a> or <a href="/service/rhodes-charter">yacht charter</a> is the better fit, and a <a href="/service/rhodes-catamaran-tours">catamaran tour</a> adds extra stability and deck space. Not sure which to pick? Tell us your dates and group and we will recommend honestly, without pressure.',
        },
      ],
      closing: 'We have matched visitors to the right Rhodes boat cruises since 1998 — all-inclusive, honestly recommended, with direct booking and no platform fees. Browse the day and sunset cruises below, compare <a href="/service/rhodes-boat-tours">guided boat tours</a> or <a href="/service/rhodes-boat-trips">private boat trips</a>, or <a href="/contact">tell us your dates</a> and we will suggest the best cruise for your group.',
    },
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
        {
          heading: 'What is included and typical boat trip prices',
          body: 'Pricing depends on whether you join a shared boat trip or book a private one. Shared day cruises start from about €39 per person and usually cover the route, swim stops, snorkelling gear and, on full-day cruises, lunch and drinks on board. Private skippered trips start from around €350 for a half-day and €700+ for a full day, priced per boat rather than per person — so the more of you there are, the better the value. Private rates typically include fuel, the skipper, swimming and snorkelling stops, and flexible timing. What you will not see are hidden extras: we quote the full price before you book. Tell us your group size and dates and we will give you an honest like-for-like comparison between shared and private options, rather than pushing the most expensive boat.',
        },
        {
          heading: 'Speedboat, RIB or sailing catamaran — which boat trip?',
          body: 'The type of boat shapes the whole day. Speedboats and power RIBs are fast and agile — ideal for reaching Symi or several east-coast bays in a half-day without losing time in transit. Sailing catamarans trade speed for space and stability: more deck, shade and a relaxed pace, perfect for families or anyone prone to seasickness. Larger organised boats suit those who want a fixed all-inclusive day out at the lowest price. If you are unsure, tell us how many you are and what matters most — speed, comfort or budget — and we will point you to the right hull. You can also <a href="/service/rhodes-rent-a-boat">rent a self-drive boat</a> if you would rather skipper yourself, or browse organised <a href="/service/rhodes-boat-cruises">day cruises</a> for larger groups.',
        },
        {
          heading: 'When to go and what to bring',
          body: 'The Rhodes boat trip season runs from late April to October, with the calmest seas and warmest water between June and September. Mornings usually have the lightest wind, which matters for open-sea crossings to Symi; afternoons can be breezier on the exposed routes. Bring swimwear, a towel, reef-safe sunscreen, a hat and a light layer for the return leg, plus a waterproof phone case if you are on a speedboat or RIB. Most boats provide water and snorkelling gear, but it is worth checking before you go. If anyone in your group is sensitive to motion, choose a catamaran or a sheltered east-coast route over an open crossing. Not sure which trip fits? <a href="/contact">Send us your dates</a> and we will recommend the right route and boat.',
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
    routeGuide: {
      title: 'Rhodes Rent a Boat: Self-Drive Rentals Without a Licence',
      intro: 'Renting a self-drive boat is the most flexible way to explore the Rhodes coast — your own boat, your own timing and no fixed route. No boating licence is needed, fuel and equipment are included, and you book direct with no platform fees. Below is everything you need to know: prices, what is included, where you can go, and how to choose the right rental for your group.',
      routes: [
        {
          heading: 'Do you need a licence to rent a boat in Rhodes?',
          body: 'No — our rental boats are licence-free. Under Greek law you can skipper a boat with an engine up to a set power limit without a boating licence, which covers every self-drive boat in our fleet. You just need to be over 18 and comfortable on the water; we give every renter a full safety briefing, show you the controls and mark the best routes on a map before you set off. No previous boating experience is required, and the boats are easy to handle in the calm morning sea. If anyone in your group already holds a licence, larger and faster boats open up — ask us and we will match the boat to your experience.',
        },
        {
          heading: 'Rental prices and durations',
          body: 'Self-drive rentals are priced by duration, so you only pay for the time you need. Choose from a 2-hour rental (€140), 4-hour (€230), 6-hour (€330) or a full-day 8-hour rental (€380). Half-day options suit a quick swim and a couple of nearby bays, while the full day lets you reach further along the coast at a relaxed pace. Prices are per boat, not per person — so for a family or group of friends the cost per head drops quickly. There are no booking-platform fees: you book direct with us and pay the price we quote. Tell us your group size and dates and we will recommend the duration that fits your plans.',
        },
        {
          heading: 'What is included with your rental boat',
          body: 'Every self-drive rental comes ready to go. Fuel is included — the boats carry a 25-litre tank plus a 10-litre reserve, enough for a full day of cruising the bays. You also get a mini refrigerator with ice, water and soft drinks on board, plus safety equipment and life jackets for everyone, and shade where fitted. The boats reach up to 28 mph, so you can cover distance when you want to and idle slowly when you find a quiet cove. We hand over a clean, well-maintained boat, a route map and a contact number in case you need anything while you are out.',
        },
        {
          heading: 'Where you can go on a self-drive boat',
          body: 'From our base you can reach the best swim and snorkel spots along the east coast at your own pace. Popular stops include Kallithea Springs, Anthony Quinn Bay, Ladiko and the Traganou sea caves — calm, sheltered water that is ideal for self-drive. With a half-day rental most people visit two or three bays; a full day lets you go further and linger longer. We mark the recommended route and the safe range for the day depending on wind, so you always know where to head and when to turn back. If you would rather not drive, see our skippered <a href="/service/rhodes-boat-trips">private boat trips</a> instead.',
        },
        {
          heading: 'Self-drive rental or a skippered trip?',
          body: 'A self-drive rental gives you total freedom and is the best value for a family or group who want to explore independently. If you would prefer to relax and let someone else handle the boat, a skippered option fits better: browse our guided <a href="/service/rhodes-boat-tours">boat tours</a>, all-inclusive <a href="/service/rhodes-boat-cruises">day cruises</a>, or a fully private <a href="/service/rhodes-charter">yacht charter</a> for a longer trip. Not sure which suits you? Tell us your group and what you want from the day and we will recommend honestly, without pressure.',
        },
        {
          heading: 'Best time to rent and weather safety',
          body: 'The rental season runs from late April to October, with the calmest seas and warmest water from June to September. Mornings usually have the lightest wind, so we recommend an early start for the smoothest ride and the clearest water. The east-coast bays are sheltered and well suited to self-drive even on breezier afternoons. We check the daily forecast and will tell you honestly if conditions are not right for a self-drive boat — and suggest an alternative rather than send you out in a strong meltemi wind. Your safety briefing covers what to do if the weather changes while you are out.',
        },
        {
          heading: 'Who self-drive rentals are for',
          body: 'Self-drive boat rental in Rhodes suits couples wanting a private day on the water, families looking for an affordable group outing, and first-time visitors who want to see the coast without a fixed tour schedule. Because no licence is needed and the boats are easy to handle, you do not need any boating background — just a sense of adventure. Groups of friends often find a rental the most fun and best-value way to spend a day, swapping who drives between bays. If you have children, tell us their ages and we will make sure the boat and route are a comfortable fit.',
        },
        {
          heading: 'How to book your Rhodes boat rental',
          body: 'Booking is simple and direct — no third-party platforms and no hidden fees. Send us your dates, group size and preferred duration and we will confirm availability and the best boat for you. We are based at Mandraki, in Rhodes Town, an easy walk from the old town and a short drive from the nearby resorts. In July and August the boats book up fast, so it is worth reserving ahead. <a href="/contact">Get in touch</a> with your dates and we will sort the rest.',
        },
      ],
      closing: 'We have rented boats to visitors in Rhodes since 1998 — licence-free, fairly priced and booked direct with no platform fees. Browse the available rental boats below, compare a <a href="/service/rhodes-boat-trips">private skippered trip</a> or a guided <a href="/service/rhodes-boat-tours">boat tour</a>, or <a href="/contact">tell us your dates</a> and we will recommend the right boat and base for your group.',
    },
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
