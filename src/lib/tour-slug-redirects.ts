/** Legacy tour-detail slugs → canonical slug (301 at request time). */
export const TOUR_SLUG_REDIRECTS: Record<string, string> = {
  'all-inclusive-sunset-cruise-a-sunset-remedy': 'sunset-cruise-lindos-calypso',
};

export function resolveTourSlugRedirect(slug: string | undefined): string | null {
  if (!slug) return null;
  return TOUR_SLUG_REDIRECTS[slug] ?? null;
}
