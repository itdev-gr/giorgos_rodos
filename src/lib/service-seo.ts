/** Unique SEO positioning per service page — avoids keyword cannibalization. */

export interface ServiceSeo {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  schemaDescription: string;
  heroSubtitle: string;
  serviceType: string;
  cardSummary: string;
  breadcrumbName?: string;
}

export const RHODES_SIDECAR_TOURS_URL = 'https://rhodessidecartours.com/';
export const RHODES_TRANSFERS_URL = 'https://www.rhodestransfer24.com/';

export const SERVICE_HUB = {
  metaTitle: 'Boat Services in Rhodes | Tours, Charters & More',
  metaDescription:
    'Every boat service in Rhodes from local experts since 1998 — guided tours, day cruises, private trips, catamarans, sailing, yacht charter, transfers and more.',
  h1: 'Boat Services in Rhodes',
} as const;

export const SERVICE_SEO: Record<string, ServiceSeo> = {
  'rhodes-boat-tours': {
    slug: 'rhodes-boat-tours',
    name: 'Rhodes Boat Tours',
    metaTitle: 'Rhodes Boat Tours | Daily Tours from Mandraki by Local Sailor',
    metaDescription:
      'Rhodes boat tours since 1998 — daily tours to Symi, Lindos, Anthony Quinn Bay & Kallithea. Personally selected by sailing owner. Honest advice, no fees.',
    schemaDescription:
      'Rhodes boat tours since 1998 — daily tours to Symi, Lindos, Anthony Quinn Bay and Kallithea, personally selected by a local sailing owner.',
    heroSubtitle: 'Daily Tours from Mandraki by Local Sailor',
    serviceType: 'Guided Boat Tour',
    cardSummary: 'Daily guided boat tours with local skippers',
  },
  'rhodes-boat-cruises': {
    slug: 'rhodes-boat-cruises',
    name: 'Rhodes Boat Cruises',
    metaTitle: 'Rhodes Boat Cruises | All-Inclusive Day & Sunset Cruises',
    metaDescription:
      'Rhodes boat cruises — all-inclusive day trips & sunset cruises. Greek BBQ, drinks, swimming stops. Hand-picked by sailing owner since 1998. Direct booking.',
    schemaDescription:
      'Rhodes boat cruises — all-inclusive day trips and sunset cruises with Greek BBQ, drinks and swimming stops. Hand-picked by a local sailing owner since 1998.',
    heroSubtitle: 'All-Inclusive Day & Sunset Cruises',
    serviceType: 'Boat Cruise',
    cardSummary: 'All-inclusive day and sunset cruises',
  },
  'rhodes-catamaran-tours': {
    slug: 'rhodes-catamaran-tours',
    name: 'Rhodes Catamaran Cruises',
    metaTitle: 'Rhodes Catamaran Cruises | Day & Sunset',
    metaDescription:
      'Rhodes catamaran cruises along the east coast — catamaran tour Rhodes with lunch and swim stops. Luxury catamaran Rhodes for shared days and private groups.',
    schemaDescription:
      'Rhodes catamaran cruises — day and sunset catamaran tours with lunch, drinks and swim stops. Shared groups and private luxury catamaran charter.',
    heroSubtitle: 'Day & Sunset Catamaran Cruises',
    serviceType: 'Catamaran Cruise',
    cardSummary: 'Day and sunset catamaran cruises',
  },
  'rhodes-sailing-trips': {
    slug: 'rhodes-sailing-trips',
    name: 'Rhodes Sailing Trips',
    metaTitle: 'Rhodes Sailing Trips | Day Sailing Tours',
    metaDescription:
      'Rhodes sailing trips on monohull yachts — sailing tours Rhodes and sailing yacht Rhodes day experiences with a professional skipper. Half and full-day routes.',
    schemaDescription:
      'Rhodes sailing trips and sailing tours Rhodes — day sails on monohull yachts with a professional skipper along the east coast.',
    heroSubtitle: 'Sailing Tours & Day Trips Under Sail',
    serviceType: 'Sailing Trip',
    cardSummary: 'Sailing tours and day trips under sail',
  },
  'rhodes-boat-trips': {
    slug: 'rhodes-boat-trips',
    name: 'Rhodes Boat Trips',
    metaTitle: 'Rhodes Boat Trips | Private & Semi-Private Trips by Local Sailor',
    metaDescription:
      'Rhodes boat trips handpicked by a local sailor since 1998. Private skippered trips, custom routes, speedboats & yachts. 2-8 hours from €350. Book direct.',
    schemaDescription:
      'Rhodes boat trips handpicked by a local sailor since 1998 — private skippered trips, custom routes, speedboats and yachts. Flexible 2–8 hour experiences.',
    heroSubtitle: 'Private & Semi-Private Trips by Local Sailor',
    serviceType: 'Private Boat Trip',
    cardSummary: 'Private skippered boat trips Rhodes',
  },
  'rhodes-rent-a-boat': {
    slug: 'rhodes-rent-a-boat',
    name: 'Rhodes Rent a Boat',
    metaTitle: 'Rhodes Rent a Boat | No License Self-Drive',
    metaDescription:
      'License-free boat rental in Rhodes since 1998. Self-drive coastal boats with briefing, fuel and map included — personally selected by our local sailing owner.',
    schemaDescription:
      'License-free boat rental in Rhodes — self-drive coastal boats with safety briefing, fuel and equipment from trusted local operators since 1998.',
    heroSubtitle: 'No License Required — Self-Drive Coastal Boats',
    serviceType: 'Boat Rental',
    cardSummary: 'License-free self-drive boat rental in Rhodes',
  },
  'rhodes-charter': {
    slug: 'rhodes-charter',
    name: 'Rhodes Yacht Charter',
    metaTitle: 'Yacht Charter Rhodes | Weekly Bareboat',
    metaDescription:
      'Yacht charter Rhodes from Rhodes Marina — Rhodes yacht charter and luxury yacht rental Rhodes for weekly Dodecanese sailing. Bareboat and skippered options.',
    schemaDescription:
      'Yacht charter Rhodes and Rhodes yacht charter — weekly bareboat and crewed sailing holidays. Luxury yacht rental Rhodes for Dodecanese island-hopping.',
    heroSubtitle: 'Yacht Charter Rhodes — Weekly Sailing',
    serviceType: 'Yacht Charter',
    cardSummary: 'Yacht charter Rhodes — weekly bareboat',
  },
  'rhodes-mice-events': {
    slug: 'rhodes-mice-events',
    name: 'Rhodes MICE & Incentive Events',
    metaTitle: 'Rhodes MICE Events | Corporate & Incentive at Sea',
    metaDescription:
      'Corporate events and incentive programmes in Rhodes — yacht charters, fleet days, team building and VIP experiences for groups of 10–200 on the water.',
    schemaDescription:
      'MICE and incentive travel in Rhodes — corporate events, team building, fleet days and VIP yacht experiences for groups of 10–200 through our local network.',
    heroSubtitle: 'Corporate Events & Incentive Programmes',
    serviceType: 'MICE / Corporate Events',
    cardSummary: 'Corporate events and incentive trips at sea',
  },
  'rhodes-tender-boat': {
    slug: 'rhodes-tender-boat',
    name: 'Rhodes Tender Boat',
    metaTitle: 'Rhodes Tender Boat | Shore-to-Ship Transfers',
    metaDescription:
      'Tender boat service in Rhodes — fast shore-to-ship and harbour transfers for cruise passengers, superyachts and marina guests. Licensed crews, rapid response.',
    schemaDescription:
      'Professional tender boat transfers in Rhodes — shore-to-ship and harbour-to-yacht service for cruise passengers, superyachts and marina guests.',
    heroSubtitle: 'Shore-to-Ship & Harbour Transfers',
    serviceType: 'Tender Boat Transfer',
    cardSummary: 'Fast shore-to-ship tender transfers',
  },
  'rhodes-rent-a-car': {
    slug: 'rhodes-rent-a-car',
    name: 'Rhodes Rent a Car',
    metaTitle: 'Rhodes Rent a Car | Explore the Island by Road',
    metaDescription:
      'Rent a car in Rhodes through our trusted partner — airport delivery, modern fleet and fair rates. Explore Lindos, villages and beaches at your own pace.',
    schemaDescription:
      'Car rental in Rhodes through a trusted local partner — airport delivery, modern vehicles and island-wide coverage for independent exploration.',
    heroSubtitle: 'Explore Rhodes by Road',
    serviceType: 'Car Rental',
    cardSummary: 'Car rental through our trusted local partner',
  },
};

export function getServiceSeo(slug: string): ServiceSeo | undefined {
  const normalized = slug === 'rent-a-boat' ? 'rhodes-rent-a-boat' : slug;
  return SERVICE_SEO[normalized];
}

export function servicePageUrl(slug: string): string {
  return `/service/${slug}`;
}

export interface ServiceCard {
  id: number;
  slug: string;
  image: string;
  bannerImg?: string;
  title: string;
  item: string;
  href?: string;
  externalUrl?: string;
}

export function serviceCardHref(entry: ServiceCard): string {
  if (entry.externalUrl) return entry.externalUrl;
  if (entry.href) return entry.href;
  return servicePageUrl(entry.slug);
}

export function serviceCardAbsoluteUrl(entry: ServiceCard, siteUrl: string): string {
  const href = serviceCardHref(entry);
  if (href.startsWith('http')) return href;
  if (href.startsWith('#')) return `${siteUrl}/${href}`;
  return `${siteUrl}${href}`;
}
