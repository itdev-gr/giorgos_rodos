import type { APIRoute } from 'astro';
import posts from '../data/data-post.json';
import services from '../data/data-service.json';
import { createPublicClient } from '../lib/supabase';

const SITE = 'https://rhodesrentaboat.com';

type Entry = {
  loc: string;
  lastmod?: string;
  image?: { loc: string; title?: string; caption?: string };
};

// Static entries — no changefreq or priority (Google ignores both)
// /service/rhodes-boat-cruises is excluded (301 → /service/rhodes-boat-tours)
// /things-to-do/rhodes-sidecar-tours excluded (canonical → /service/rhodes-sidecar-tours)
// /things-to-do excluded (noindex)
const STATIC_ENTRIES: Omit<Entry, 'lastmod'>[] = [
  { loc: '/' },
  { loc: '/about' },
  { loc: '/contact' },
  { loc: '/faq' },
  { loc: '/blog' },
  { loc: '/service' },
  { loc: '/service/rhodes-rent-a-boat' },
  { loc: '/service/rhodes-boat-tours' },
  { loc: '/service/rhodes-boat-trips' },
  { loc: '/service/rhodes-catamaran-tours' },
  { loc: '/service/rhodes-sailing-trips' },
  { loc: '/service/rhodes-charter' },
  { loc: '/service/rhodes-mice-events' },
  { loc: '/service/rhodes-tender-boat' },
  { loc: '/service/rhodes-transfers' },
  { loc: '/service/rhodes-sidecar-tours' },
  { loc: '/privacy' },
  { loc: '/terms' },
];

// Static lastmod dates — use real update dates where known
const STATIC_LASTMOD: Record<string, string> = {
  '/': '2026-04-20',
  '/about': '2026-03-01',
  '/contact': '2026-03-01',
  '/faq': '2026-04-10',
  '/blog': '2026-04-15',
  '/service': '2026-04-10',
  '/service/rhodes-rent-a-boat': '2026-04-10',
  '/service/rhodes-boat-tours': '2026-04-10',
  '/service/rhodes-boat-trips': '2026-04-10',
  '/service/rhodes-catamaran-tours': '2026-04-10',
  '/service/rhodes-sailing-trips': '2026-04-10',
  '/service/rhodes-charter': '2026-04-10',
  '/service/rhodes-mice-events': '2026-03-15',
  '/service/rhodes-tender-boat': '2026-03-15',
  '/service/rhodes-transfers': '2026-03-15',
  '/service/rhodes-sidecar-tours': '2026-03-15',
  '/privacy': '2026-05-01',
  '/terms': '2026-05-01',
};

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
  ];
  if (e.lastmod) parts.push(`    <lastmod>${e.lastmod}</lastmod>`);
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
  const entries: Entry[] = STATIC_ENTRIES.map((s) => ({
    ...s,
    loc: `${SITE}${s.loc}`,
    lastmod: STATIC_LASTMOD[s.loc] || undefined,
  }));

  // Service pages with image (from data-service.json)
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

  // Blog posts — use publishedDate as lastmod (real date)
  for (const p of posts as any[]) {
    const slug = p.slug;
    if (!slug) continue;
    // Skip slug collision with service page
    if (slug === 'rhodes-rent-a-boat') continue;
    const lastmod = (p.publishedDate as string) || undefined;
    entries.push({
      loc: `${SITE}/blog/${slug}`,
      lastmod,
      image: p.bannerImg || p.image
        ? { loc: `${SITE}/assets/img/blog/${p.bannerImg || p.image}`, title: p.title, caption: p.excerpt }
        : undefined,
    });
  }

  // Dynamic tour-detail pages from Supabase — use updated_at as lastmod
  try {
    const supabase = createPublicClient();
    if (supabase) {
      const { data } = await supabase
        .from('tours')
        .select('id, slug, title, description, images, image_url, updated_at, created_at')
        .eq('status', 'approved');
      for (const t of (data || []) as any[]) {
        const rawDate = (t.updated_at || t.created_at || '') as string;
        const lastmod = rawDate ? rawDate.slice(0, 10) : undefined;
        const img = (Array.isArray(t.images) && t.images[0]) || t.image_url || null;
        entries.push({
          loc: `${SITE}/tour-detail/${t.slug || t.id}`,
          lastmod,
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
