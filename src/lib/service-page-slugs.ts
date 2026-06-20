/** Service detail pages discovered at build time from src/pages/service/*.astro */
const servicePageModules = import.meta.glob('../pages/service/*.astro');

export const SERVICE_PAGE_SLUGS = Object.keys(servicePageModules)
  .map((path) => {
    const match = path.match(/\/service\/([^/]+)\.astro$/);
    return match?.[1];
  })
  .filter((slug): slug is string => Boolean(slug) && slug !== 'index')
  .sort();

/** Throws if filesystem slugs diverge from bundled glob keys (build-time guard). */
export function assertServicePageSlugParity(fsSlugs: string[]): void {
  const fsSet = new Set(fsSlugs);
  const missingFromBundle = fsSlugs.filter((s) => !SERVICE_PAGE_SLUGS.includes(s));
  const extraInBundle = SERVICE_PAGE_SLUGS.filter((s) => !fsSet.has(s));

  if (missingFromBundle.length || extraInBundle.length) {
    throw new Error(
      `[sitemap] Service page slug mismatch. Missing from bundle: ${missingFromBundle.join(', ') || 'none'}. Extra in bundle: ${extraInBundle.join(', ') || 'none'}`,
    );
  }
}

/** Throws if any service page slug is missing from collected sitemap entries. */
export function assertAllServicePagesInSitemap(
  entries: { loc: string }[],
  site: string,
): void {
  const paths = new Set(entries.map((e) => e.loc.replace(site, '')));
  const missing = SERVICE_PAGE_SLUGS.filter((slug) => !paths.has(`/service/${slug}`));

  if (missing.length) {
    throw new Error(`[sitemap] Missing service pages in sitemap: ${missing.join(', ')}`);
  }
}
