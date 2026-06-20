import { getServiceSeo, servicePageUrl, type ServiceSeo } from './service-seo';

/** Legacy or alternate slugs stored on tour records. */
const SERVICE_PAGE_ALIASES: Record<string, string> = {
  'rodos-charter': 'rhodes-charter',
  'rodos-boat-tours': 'rhodes-boat-tours',
  'rodos-boat-trips': 'rhodes-boat-trips',
  'rodos-boat-cruises': 'rhodes-boat-cruises',
  'rodos-catamaran-tours': 'rhodes-catamaran-tours',
  'rodos-sailing-trips': 'rhodes-sailing-trips',
  'rodos-tender-boat': 'rhodes-tender-boat',
  'rodos-rent-a-boat': 'rhodes-rent-a-boat',
  'rent-a-boat': 'rhodes-rent-a-boat',
};

/** Normalize legacy /service/rodos-* hrefs to canonical /service/rhodes-* URLs. */
export function normalizeServiceHref(href: string | null | undefined): string {
  if (!href?.trim()) return href || '';
  const trimmed = href.trim();
  if (trimmed.startsWith('/service/rodos-')) {
    return trimmed.replace('/service/rodos-', '/service/rhodes-');
  }
  if (trimmed === '/service/rent-a-boat') {
    return '/service/rhodes-rent-a-boat';
  }
  return trimmed;
}

export interface InternalServiceLink {
  url: string;
  name: string;
  blurb: string;
  ctaLabel: string;
}

function toServiceLink(seo: ServiceSeo): InternalServiceLink {
  return {
    url: servicePageUrl(seo.slug),
    name: seo.name,
    blurb: seo.cardSummary,
    ctaLabel: `Explore ${seo.name}`,
  };
}

export function normalizeServicePageSlug(raw: string | null | undefined): string | undefined {
  if (!raw?.trim()) return undefined;
  const slug = raw.trim();
  return SERVICE_PAGE_ALIASES[slug] ?? slug;
}

export function getServiceLinkForTour(
  servicePage: string | null | undefined,
): InternalServiceLink | undefined {
  const slug = normalizeServicePageSlug(servicePage);
  if (!slug) return undefined;
  const seo = getServiceSeo(slug);
  return seo ? toServiceLink(seo) : undefined;
}

/** Primary service links surfaced on /things-to-do for internal linking. */
export const THINGS_TO_DO_SERVICE_LINKS: InternalServiceLink[] = [
  'rhodes-boat-tours',
  'rhodes-boat-cruises',
  'rhodes-boat-trips',
  'rhodes-catamaran-tours',
  'rhodes-sailing-trips',
  'rhodes-charter',
]
  .map((slug) => getServiceSeo(slug))
  .filter((seo): seo is ServiceSeo => Boolean(seo))
  .map(toServiceLink);

export const THINGS_TO_DO_CATALOG_LINK: InternalServiceLink = {
  url: '/things-to-do',
  name: 'All Boat Experiences in Rhodes',
  blurb: 'Compare every approved tour, cruise and rental in one catalog.',
  ctaLabel: 'Browse all boat experiences in Rhodes',
};
