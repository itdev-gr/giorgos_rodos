import type { APIRoute } from 'astro';
import posts from '../data/data-post.json';
import services from '../data/data-service.json';
import { createPublicClient } from '../lib/supabase';

const SITE = 'https://rhodesrentaboat.com';

type Entry = {
  loc: string;
  lastmod: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: string;
  image?: { loc: string; title?: string; caption?: string };
};

const STATIC_ENTRIES: Omit<Entry, 'lastmod'>[] = [
  { loc: '/',                                changefreq: 'weekly',  priority: '1.0' },
  { loc: '/about',                           changefreq: 'monthly', priority: '0.8' },
  { loc: '/contact',                         changefreq: 'monthly', priority: '0.8' },
  { loc: '/faq',                             changefreq: 'monthly', priority: '0.7' },
  { loc: '/blog',                            changefreq: 'weekly',  priority: '0.8' },
  { loc: '/things-to-do',                    changefreq: 'weekly',  priority: '0.9' },
  { loc: '/things-to-do/rhodes-sidecar-tours', changefreq: 'monthly', priority: '0.7' },
  { loc: '/service',                         changefreq: 'weekly',  priority: '0.9' },
  { loc: '/service/rhodes-rent-a-boat',      changefreq: 'weekly',  priority: '0.9' },
  { loc: '/service/rodos-boat-tours',        changefreq: 'weekly',  priority: '0.9' },
  { loc: '/service/rhodes-boat-trips',       changefreq: 'weekly',  priority: '0.9' },
  { loc: '/service/rodos-boat-cruises',      changefreq: 'weekly',  priority: '0.9' },
  { loc: '/service/rhodes-catamaran-tours',  changefreq: 'weekly',  priority: '0.9' },
  { loc: '/service/rhodes-sailing-trips',    changefreq: 'weekly',  priority: '0.9' },
  { loc: '/service/rodos-charter',           changefreq: 'weekly',  priority: '0.9' },
  { loc: '/service/rhodes-mice-events',      changefreq: 'monthly', priority: '0.7' },
  { loc: '/service/rodos-tender-boat',       changefreq: 'monthly', priority: '0.7' },
  { loc: '/service/rhodes-transfers',        changefreq: 'monthly', priority: '0.7' },
  { loc: '/service/rhodes-sidecar-tours',    changefreq: 'monthly', priority: '0.8' },
];

function escapeXml(str: string): string {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function urlBlock(e: Entry): string {
  const parts = [
    `    <loc>${escapeXml(e.loc)}</loc>`,
    `    <lastmod>${e.lastmod}</lastmod>`,
  ];
  if (e.changefreq) parts.push(`    <changefreq>${e.changefreq}</changefreq>`);
  if (e.priority)   parts.push(`    <priority>${e.priority}</priority>`);
  if (e.image) {
    parts.push('    <image:image>');
    parts.push(`      <image:loc>${escapeXml(e.image.loc)}</image:loc>`);
    if (e.image.title)   parts.push(`      <image:title>${escapeXml(e.image.title)}</image:title>`);
    if (e.image.caption) parts.push(`      <image:caption>${escapeXml(e.image.caption)}</image:caption>`);
    parts.push('    </image:image>');
  }
  return `  <url>\n${parts.join('\n')}\n  </url>`;
}

export const GET: APIRoute = async () => {
  const today = new Date().toISOString().slice(0, 10);

  const entries: Entry[] = STATIC_ENTRIES.map((s) => ({ ...s, loc: `${SITE}${s.loc}`, lastmod: today }));

  // Service pages with image (from data-service.json) — overrides priority + adds image entry
  const serviceMap = new Map(services.map((s: any) => [s.slug, s]));
  entries.forEach((e) => {
    const m = e.loc.match(/\/service\/([^/]+)$/);
    if (!m) return;
    const svc = serviceMap.get(m[1]);
    if (svc) {
      e.image = {
        loc: `${SITE}${svc.image}`,
        title: svc.title,
        caption: svc.item,
      };
    }
  });

  // Blog posts (static + dynamic from data-post.json)
  for (const p of posts as any[]) {
    const slug = p.slug;
    if (!slug) continue;
    const lastmod = (p.publishedDate as string) || today;
    entries.push({
      loc: `${SITE}/blog/${slug}`,
      lastmod,
      changefreq: 'monthly',
      priority: '0.6',
      image: p.bannerImg || p.image
        ? { loc: `${SITE}/assets/img/blog/${p.bannerImg || p.image}`, title: p.title, caption: p.excerpt }
        : undefined,
    });
  }

  // Dynamic tour-detail pages from Supabase
  try {
    const supabase = createPublicClient();
    if (supabase) {
      const { data } = await supabase
        .from('tours')
        .select('id, title, description, images, image_url, updated_at, created_at')
        .eq('status', 'approved');
      for (const t of (data || []) as any[]) {
        const lastmod = ((t.updated_at || t.created_at || '') as string).slice(0, 10) || today;
        const img = (Array.isArray(t.images) && t.images[0]) || t.image_url || null;
        entries.push({
          loc: `${SITE}/tour-detail/${t.id}`,
          lastmod,
          changefreq: 'weekly',
          priority: '0.7',
          image: img
            ? { loc: img.startsWith('http') ? img : `${SITE}${img}`, title: t.title, caption: t.description }
            : undefined,
        });
      }
    }
  } catch (err) {
    console.error('[sitemap] failed to fetch tours from Supabase', err);
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.map(urlBlock).join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      'X-Robots-Tag': 'noindex',
    },
  });
};
