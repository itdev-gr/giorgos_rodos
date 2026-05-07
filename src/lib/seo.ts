export const SITE_URL = 'https://rhodesrentaboat.com';
export const SITE_NAME = 'Rhodes Rent a Boat';
export const SITE_ALTERNATE_NAME = 'Rhodes Boat Tours';
export const FOUNDING_YEAR = '1998';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/img/hero/hero_bg_1_1.jpg`;

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
