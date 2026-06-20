/** Legacy public/ paths → current paths after asset reorganisation. */
const LEGACY_PREFIXES: ReadonlyArray<readonly [string, string]> = [
  ['/assets/img/hero/', '/assets/img/heroes/'],
  ['/assets/img/about/', '/assets/img/pages/about/'],
  ['/assets/img/blog/', '/assets/img/pages/blog/'],
  ['/assets/img/destinations/', '/assets/img/locations/'],
  ['/assets/img/destination/', '/assets/img/locations/'],
  ['/assets/img/tender/', '/assets/img/operations/tender/'],
  ['/assets/img/transfers/', '/assets/img/operations/transfers/'],
  ['/assets/img/skipper/', '/assets/img/operations/skipper/'],
  ['/assets/img/license-free/', '/assets/img/operations/license-free/'],
  ['/assets/img/icon/', '/assets/img/ui/icons/'],
  ['/assets/img/shape/', '/assets/img/ui/shapes/'],
  ['/assets/img/bg/', '/assets/img/ui/backgrounds/'],
  ['/assets/img/theme-img/', '/assets/img/ui/theme/'],
  ['/assets/img/team/', '/assets/img/ui/template/team/'],
  ['/assets/img/testimonial/', '/assets/img/ui/template/testimonial/'],
  ['/assets/img/normal/', '/assets/img/ui/template/normal/'],
  ['/assets/img/tour/', '/assets/img/ui/template/tour/'],
];

/** Map bundled asset URLs to current public/ paths (CMS may still store old values). */
export function normalizeBundledAssetUrl(url: string): string {
  if (!url.startsWith('/assets/')) return url;

  for (const [from, to] of LEGACY_PREFIXES) {
    if (url.startsWith(from)) {
      return to + url.slice(from.length);
    }
  }

  return url;
}
