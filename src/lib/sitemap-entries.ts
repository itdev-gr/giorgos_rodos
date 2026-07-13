import posts from '../data/data-post.json';
import services from '../data/data-service.json';
import { LOCALES } from '../i18n/locales';
import { localizedPath, isLocalizableRoute } from '../i18n/routing';
import {
  assertAllServicePagesInSitemap,
  SERVICE_PAGE_SLUGS,
} from './service-page-slugs';
import { createPublicClient } from './supabase';

export const SITE = 'https://rhodesrentaboat.com';

export type SitemapImage = { loc: string; title?: string; caption?: string };

export type SitemapAlternate = { hreflang: string; href: string };

export type SitemapEntry = {
  loc: string;
  lastmod?: string;
  images: SitemapImage[];
  alternates?: SitemapAlternate[];
};

/**
 * Build the full hreflang alternate set for a localizable path (all LOCALES +
 * x-default). Attached to every language version of the page so the XML sitemap
 * carries reciprocal hreflang annotations alongside the <head> tags.
 */
// Absolute URL with no trailing slash on the homepage — must match
// buildCanonical() in lib/seo.ts, otherwise the sitemap advertises
// `${SITE}/` while the page's own canonical is `${SITE}` (inconsistent x-default).
function absUrl(path: string): string {
  return `${SITE}${path === '/' ? '' : path.replace(/\/$/, '')}`;
}

function buildAlternates(path: string): SitemapAlternate[] | undefined {
  if (!isLocalizableRoute(path)) return undefined;
  const alternates: SitemapAlternate[] = LOCALES.map((locale) => ({
    hreflang: locale,
    href: absUrl(localizedPath(path, locale)),
  }));
  alternates.push({ hreflang: 'x-default', href: absUrl(localizedPath(path, 'en')) });
  return alternates;
}

const CORE_STATIC_PATHS = [
  '/',
  '/about',
  '/contact',
  '/faq',
  '/blog',
  '/service',
  '/privacy',
  '/terms',
  '/things-to-do',
];

const SERVICE_PATHS = SERVICE_PAGE_SLUGS.map((slug) => `/service/${slug}`);

const STATIC_PATHS = [...CORE_STATIC_PATHS, ...SERVICE_PATHS];

const STATIC_LASTMOD: Record<string, string> = {
  '/': '2026-04-20',
  '/about': '2026-03-01',
  '/contact': '2026-03-01',
  '/faq': '2026-04-10',
  '/blog': '2026-04-15',
  '/service': '2026-04-10',
  '/service/rhodes-boat-tours': '2026-04-10',
  '/service/rhodes-boat-trips': '2026-04-10',
  '/service/rhodes-boat-cruises': '2026-04-10',
  '/service/rhodes-catamaran-tours': '2026-04-10',
  '/service/rhodes-sailing-trips': '2026-04-10',
  '/service/rhodes-rent-a-boat': '2026-04-10',
  '/service/rhodes-charter': '2026-04-10',
  '/service/rhodes-mice-events': '2026-03-15',
  '/service/rhodes-tender-boat': '2026-03-15',
  '/privacy': '2026-05-01',
  '/terms': '2026-05-01',
  '/things-to-do': '2026-04-15',
};

const STATIC_PAGE_IMAGES: Record<string, SitemapImage[]> = {
  '/': [{ loc: `${SITE}/assets/img/heroes/hero_bg_1_1.jpg`, title: 'Rhodes Rent a Boat, boat tours in Rhodes' }],
  '/about': [{ loc: `${SITE}/assets/img/pages/about/about-hero-boy-sailboat.jpg`, title: 'About Rhodes Rent a Boat' }],
  '/service': [{ loc: `${SITE}/assets/img/gallery/yacht/crystal-water-1.jpg`, title: 'Boat services in Rhodes' }],
};

function absImageUrl(img: string): string {
  return img.startsWith('http') ? img : `${SITE}${img.startsWith('/') ? '' : '/'}${img}`;
}

/** Collect all sitemap entries with attached image metadata. */
export async function collectSitemapEntries(): Promise<SitemapEntry[]> {
  const baseEntries: SitemapEntry[] = STATIC_PATHS.map((path) => ({
    loc: absUrl(path),
    lastmod: STATIC_LASTMOD[path],
    images: STATIC_PAGE_IMAGES[path] ? [...STATIC_PAGE_IMAGES[path]] : [],
    alternates: buildAlternates(path),
  }));

  const entries: SitemapEntry[] = [...baseEntries];

  for (const path of STATIC_PATHS) {
    if (!isLocalizableRoute(path)) continue;

    const alternates = buildAlternates(path);
    for (const locale of LOCALES) {
      if (locale === 'en') continue;
      const localized = localizedPath(path, locale);
      entries.push({
        loc: `${SITE}${localized}`,
        lastmod: STATIC_LASTMOD[path],
        images: STATIC_PAGE_IMAGES[path] ? [...STATIC_PAGE_IMAGES[path]] : [],
        alternates,
      });
    }
  }

  const serviceMap = new Map(services.map((s: any) => [s.slug, s]));
  for (const entry of entries) {
    const m = entry.loc.match(/\/service\/([^/]+)$/);
    if (!m) continue;
    const svc = serviceMap.get(m[1]);
    if (svc?.image) {
      entry.images.push({
        loc: absImageUrl(svc.image),
        title: svc.title,
        caption: svc.item,
      });
    }
  }

  for (const p of posts as any[]) {
    const slug = p.slug;
    if (!slug || slug === 'rhodes-rent-a-boat') continue;
    const imgFile = p.bannerImg || p.image;
    entries.push({
      loc: `${SITE}/blog/${slug}`,
      lastmod: (p.publishedDate as string) || undefined,
      images: imgFile
        ? [{
            loc: `${SITE}/assets/img/pages/blog/${imgFile}`,
            title: p.title,
            caption: p.excerpt,
          }]
        : [],
    });
  }

  try {
    const supabase = createPublicClient();
    if (supabase) {
      const { data } = await supabase
        .from('tours')
        .select('id, slug, title, description, images, image_url, updated_at, created_at')
        .eq('status', 'approved');
      for (const t of (data || []) as any[]) {
        const rawDate = (t.updated_at || t.created_at || '') as string;
        const imgs: string[] = Array.isArray(t.images) && t.images.length
          ? t.images
          : t.image_url
            ? [t.image_url]
            : [];
        entries.push({
          loc: `${SITE}/tour-detail/${t.slug || t.id}`,
          lastmod: rawDate ? rawDate.slice(0, 10) : undefined,
          images: imgs.map((img) => ({
            loc: absImageUrl(img),
            title: t.title,
            caption: t.description,
          })),
        });
      }
    }
  } catch (err) {
    console.error('[sitemap] failed to fetch tours from Supabase', err);
  }

  assertAllServicePagesInSitemap(entries, SITE);

  return entries;
}
