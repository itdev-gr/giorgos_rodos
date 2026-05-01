import type { APIRoute } from 'astro';
import posts from '../data/data-post.json';

const SITE = 'https://rhodesrentaboat.com';

const STATIC_PATHS = [
  '/',
  '/about',
  '/contact',
  '/faq',
  '/blog',
  '/things-to-do',
  '/service',
  '/service/rhodes-rent-a-boat',
  '/service/rodos-boat-tours',
  '/service/rhodes-boat-trips',
  '/service/rodos-boat-cruises',
  '/service/rhodes-catamaran-tours',
  '/service/rhodes-sailing-trips',
  '/service/rodos-charter',
  '/service/rhodes-mice-events',
  '/service/rodos-tender-boat',
  '/service/rhodes-transfers',
];

export const GET: APIRoute = () => {
  const today = new Date().toISOString().slice(0, 10);
  const urls = [
    ...STATIC_PATHS.map((p) => ({ loc: `${SITE}${p}`, lastmod: today })),
    ...posts.map((p: { id: string | number }) => ({
      loc: `${SITE}/blog/${p.id}`,
      lastmod: today,
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
