import type { APIRoute } from 'astro';
import { collectSitemapEntries } from '../lib/sitemap-entries';
import { buildUrlsetXml } from '../lib/sitemap-xml';

/** Dedicated image sitemap, all page images, including multi-image tour galleries. */
export const GET: APIRoute = async () => {
  const entries = (await collectSitemapEntries()).filter((e) => e.images.length > 0);

  return new Response(buildUrlsetXml(entries, false), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
};
