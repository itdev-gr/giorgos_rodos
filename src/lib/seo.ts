export const SITE_URL = 'https://rhodesrentaboat.com';
export const SITE_NAME = 'Rhodes Rent a Boat';
export const SITE_ALTERNATE_NAME = 'Rhodes Boat Tours';
export const FOUNDING_YEAR = '1998';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/img/hero/hero_bg_1_1.jpg`;

export function buildCanonical(pathname: string): string {
  const clean = pathname.split('?')[0].split('#')[0];
  return `${SITE_URL}${clean === '/' ? '' : clean.replace(/\/$/, '')}`;
}
