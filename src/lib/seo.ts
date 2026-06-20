export const SITE_URL = 'https://rhodesrentaboat.com';
export const SITE_NAME = 'Rhodes Rent a Boat';
export const SITE_ALTERNATE_NAME = 'Rhodes Rent a Boat';
export const FOUNDING_YEAR = '1998';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/img/heroes/hero_bg_1_1.jpg`;

const BRAND_SUFFIX = ` | ${SITE_NAME}`;

export interface BuildPageTitleOptions {
  /** When false, never append "| Rhodes Rent a Boat" (service pages). Default true. */
  addBrand?: boolean;
}

/** Append brand suffix when base title is ≤45 chars and the full title fits SERP (~60 chars). */
export function buildPageTitle(title: string, options: BuildPageTitleOptions = {}): string {
  const { addBrand = true } = options;
  const base = title.endsWith(BRAND_SUFFIX)
    ? title.slice(0, -BRAND_SUFFIX.length)
    : title;

  if (!addBrand) {
    return base;
  }

  if (base.length <= 45 && base.length + BRAND_SUFFIX.length <= 60) {
    return `${base}${BRAND_SUFFIX}`;
  }
  return base;
}

export function buildCanonical(pathname: string): string {
  const clean = pathname.split('?')[0].split('#')[0];
  return `${SITE_URL}${clean === '/' ? '' : clean.replace(/\/$/, '')}`;
}

// Prefer the SEO slug; fall back to UUID for tours that haven't been backfilled
// yet. The tour-detail route accepts both and 301s UUIDs to slugs.
export function tourPath(tour: { slug?: string | null; id: string }): string {
  return `/tour-detail/${tour.slug || tour.id}`;
}

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
export function looksLikeUuid(s: string | undefined | null): boolean {
  return !!s && UUID_RE.test(s);
}
