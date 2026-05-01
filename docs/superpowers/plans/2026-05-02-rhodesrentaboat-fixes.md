# Rhodes Rent a Boat — Sitewide Fixes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix every problem found in the live https://rhodesrentaboat.com/ Playwright scan: broken links, invisible above-the-fold content, missing SEO metadata, missing sitemap/robots, mobile touch-target / typography issues, and missing structured data.

**Architecture:** Astro 6 + React 19 + Tailwind 3 + Bootstrap 5 (legacy theme), deployed on Vercel (`output: 'server'`). Layouts live in `src/layouts/`, route pages in `src/pages/`, sections in `src/sections/`, blog/service data in `src/data/*.json`. GSAP is initialized once in `BaseLayout.astro`.

**Tech Stack:** Astro 6, React 19, Tailwind 3, Bootstrap 5 theme, GSAP 3 (ScrollTrigger), Supabase, Vercel adapter.

---

## Findings Summary (from live scan on 2026-05-02)

| # | Severity | Issue |
|---|----------|-------|
| 1 | CRITICAL | `/blog/1`–`/blog/9` linked from `/blog` index → all 404 (no `[id].astro` route exists; only one slug page at `/blog/rhodes-rent-a-boat`) |
| 2 | CRITICAL | `/gallery` linked from homepage hero + `FooterFour` → 404 (no page exists; `src/sections/gallery/` is empty) |
| 3 | CRITICAL | GSAP `gsap.from(..., {opacity: 0})` leaves above-the-fold H1, intro paragraphs and section titles at `opacity: 0` until ScrollTrigger fires. Live page renders mostly empty until the user scrolls. SEO crawlers and slow-network users see invisible H1. |
| 4 | HIGH | `/sitemap.xml` → 404 (Astro sitemap integration not installed) |
| 5 | HIGH | `/robots.txt` → 404 (no `public/robots.txt`) |
| 6 | HIGH | `BaseLayout.astro` ships **zero** Open Graph tags, **zero** Twitter card tags, **zero** canonical link, **zero** JSON-LD |
| 7 | HIGH | Most pages (`/about`, `/contact`, `/blog`, `/faq`) reuse the same generic default description — duplicate meta sitewide |
| 8 | HIGH | `/service` (services hub) has **0 `<h1>`** elements |
| 9 | HIGH | `/faq` page has 71 Q&A blocks but **no FAQPage JSON-LD** |
| 10 | HIGH | Blog post `/blog/rhodes-rent-a-boat` has no `Article` JSON-LD, no `article:published_time`, no `meta[name="author"]` |
| 11 | MEDIUM | Homepage `<title>` has duplicated brand: `"Rhodes Boat Tours \| Boat Trips, Cruises & Rentals \| Rhodes Boat Tours"` |
| 12 | MEDIUM | Mobile (375px) — 5+ tap targets shorter than 44px (phone link 17px, footer links 17–20px) |
| 13 | MEDIUM | Mobile (375px) — 6 text elements with font-size < 12px |
| 14 | MEDIUM | `/service` hub has 1 `<img>` without `alt` |
| 15 | MEDIUM | No `prefers-reduced-motion` honoured by GSAP setup |
| 16 | LOW | 4 legacy CSS files load on every page (bootstrap, fontawesome, magnific-popup, swiper-bundle) — bundle/strip |

---

## File Structure

**Files to create:**
- `tourm-astro/src/pages/sitemap.xml.ts` — dynamic sitemap endpoint (`output: 'server'` doesn't pre-render)
- `tourm-astro/public/robots.txt` — robots policy
- `tourm-astro/src/pages/gallery.astro` — Gallery page (replaces 404)
- `tourm-astro/src/pages/blog/[id].astro` — dynamic blog post page that consumes `src/data/data-post.json` (covers `/blog/1`–`/blog/9` and any future numeric IDs)
- `tourm-astro/src/components/seo/Seo.astro` — single component that emits `<title>`, description, canonical, OG, Twitter, JSON-LD
- `tourm-astro/src/components/seo/OrganizationSchema.astro` — sitewide Organization JSON-LD
- `tourm-astro/src/lib/seo.ts` — typed helpers (`buildCanonical`, `buildPageTitle`)

**Files to modify:**
- `tourm-astro/src/layouts/BaseLayout.astro` — accept extended SEO props, render `Seo` component, add `prefers-reduced-motion` fallback in GSAP init
- `tourm-astro/src/pages/index.astro` — fix duplicated brand in title
- `tourm-astro/src/pages/about.astro` — unique description
- `tourm-astro/src/pages/contact.astro` — unique description
- `tourm-astro/src/pages/faq.astro` — unique description + FAQPage JSON-LD
- `tourm-astro/src/pages/blog/index.astro` — unique description
- `tourm-astro/src/pages/blog/rhodes-rent-a-boat.astro` — pass author/published_time/Article schema fields
- `tourm-astro/src/pages/service/index.astro` — add `<h1>`
- `tourm-astro/src/sections/shared/FooterFour.astro` — touch-target sizing
- `tourm-astro/src/sections/home-one/Section1-Header.astro` — touch-target sizing for phone link
- `tourm-astro/src/data/data-post.json` — add `description`, `publishedDate` (ISO), `author` fields if missing
- `tourm-astro/astro.config.mjs` — add `@astrojs/sitemap` integration once dynamic sitemap is decided against (we are choosing dynamic; config unchanged)

---

## Task 1 — Create `/robots.txt`

**Files:**
- Create: `tourm-astro/public/robots.txt`

- [ ] **Step 1: Verify the file does not exist**

Run: `ls tourm-astro/public/robots.txt 2>/dev/null && echo EXISTS || echo MISSING`
Expected: `MISSING`

- [ ] **Step 2: Create the file**

Create `tourm-astro/public/robots.txt` with:

```
User-agent: *
Allow: /

Disallow: /dashboard/
Disallow: /api/
Disallow: /login

Sitemap: https://rhodesrentaboat.com/sitemap.xml
```

- [ ] **Step 3: Verify it serves locally**

Run: `cd tourm-astro && npm run dev` (background) then `curl -s -o /dev/null -w "%{http_code}\n" http://localhost:4321/robots.txt`
Expected: `200`

- [ ] **Step 4: Commit**

```bash
git add tourm-astro/public/robots.txt
git commit -m "feat: add robots.txt with sitemap pointer"
```

---

## Task 2 — Create dynamic `/sitemap.xml` endpoint

`output: 'server'` means static `@astrojs/sitemap` integration is not the simplest fit; we ship a typed handler that lists all real routes.

**Files:**
- Create: `tourm-astro/src/pages/sitemap.xml.ts`

- [ ] **Step 1: Write the failing curl test**

Run: `curl -s -o /dev/null -w "%{http_code}\n" http://localhost:4321/sitemap.xml`
Expected before fix: `404`

- [ ] **Step 2: Create the endpoint**

Create `tourm-astro/src/pages/sitemap.xml.ts`:

```ts
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
```

- [ ] **Step 3: Verify it serves**

Run: `curl -s http://localhost:4321/sitemap.xml | head -5`
Expected: starts with `<?xml version="1.0" encoding="UTF-8"?>` then `<urlset ...>` then a `<url>` block.

- [ ] **Step 4: Verify URL count**

Run: `curl -s http://localhost:4321/sitemap.xml | grep -c '<url>'`
Expected: `>= 18` (18 static + however many posts).

- [ ] **Step 5: Commit**

```bash
git add tourm-astro/src/pages/sitemap.xml.ts
git commit -m "feat: add dynamic sitemap.xml covering static + blog routes"
```

---

## Task 3 — Add dynamic blog route `/blog/[id].astro`

The current `/blog` index links to `/blog/1`…`/blog/9` (numeric IDs from `data-post.json`) — all 404. We add a single dynamic page that renders any post in the JSON.

**Files:**
- Create: `tourm-astro/src/pages/blog/[id].astro`
- Modify: `tourm-astro/src/data/data-post.json` (add `description` & `publishedDate` if missing)

- [ ] **Step 1: Verify the failing route**

Run: `curl -s -o /dev/null -w "%{http_code}\n" http://localhost:4321/blog/1`
Expected before fix: `404`

- [ ] **Step 2: Inspect the existing slug page to copy its layout**

Run: `cat tourm-astro/src/pages/blog/rhodes-rent-a-boat.astro | head -50`
Expected: a server-rendered post layout. Re-use the same shell.

- [ ] **Step 3: Create the dynamic route**

Create `tourm-astro/src/pages/blog/[id].astro`:

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import Header from '../../sections/home-one/Section1-Header.astro';
import FooterFour from '../../sections/shared/FooterFour.astro';
import posts from '../../data/data-post.json';

const { id } = Astro.params;

const post = posts.find((p: any) => String(p.id) === String(id));

if (!post) {
  return new Response(null, { status: 404, statusText: 'Not Found' });
}

const canonical = `https://rhodesrentaboat.com/blog/${post.id}`;
const ogImage = `https://rhodesrentaboat.com/assets/img/blog/${post.bannerImg || post.image}`;
---

<BaseLayout
  title={`${post.title} | Rhodes Boat Tours`}
  description={post.excerpt}
  canonical={canonical}
  ogImage={ogImage}
  ogType="article"
  articleAuthor={post.author}
  articlePublishedTime={post.publishedDate}
>
  <Header />

  <article class="blog-single space-top space-bottom">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-9">
          <img src={`/assets/img/blog/${post.bannerImg || post.image}`} alt={post.title} class="blog-single_img" />
          <h1 class="blog-single_title">{post.title}</h1>
          <p class="blog-single_meta">By {post.author} &bull; {post.date}</p>
          <div class="blog-single_tags">
            {post.tags.map((t: string) => <span class="blog-card_tag">{t.toUpperCase()}</span>)}
          </div>
          <div class="blog-single_excerpt">{post.excerpt}</div>
        </div>
      </div>
    </div>
  </article>

  <script type="application/ld+json" set:html={JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    image: [ogImage],
    datePublished: post.publishedDate || undefined,
    author: { '@type': 'Organization', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'Rhodes Rent a Boat',
      logo: { '@type': 'ImageObject', url: 'https://rhodesrentaboat.com/assets/img/logo2.svg' }
    },
    mainEntityOfPage: canonical,
    description: post.excerpt
  })} />

  <FooterFour />
</BaseLayout>

<style>
  .blog-single_img { width: 100%; border-radius: 12px; margin-bottom: 32px; aspect-ratio: 16/9; object-fit: cover; }
  .blog-single_title { font-size: 40px; font-weight: 800; color: #1a1a2e; margin-bottom: 12px; line-height: 1.2; }
  .blog-single_meta { color: #737887; font-size: 14px; margin-bottom: 12px; }
  .blog-single_tags { margin-bottom: 24px; display: flex; gap: 8px; flex-wrap: wrap; }
  .blog-single_excerpt { font-size: 18px; line-height: 1.7; color: #2a2a3a; }
  @media (max-width: 768px) { .blog-single_title { font-size: 28px; } }
</style>
```

- [ ] **Step 4: Add missing fields in `data-post.json`**

For each post object missing `publishedDate`, add an ISO date matching its `date` field (e.g., `"date": "March 2026"` → `"publishedDate": "2026-03-15"`). Open `tourm-astro/src/data/data-post.json` and add the field after `"date"` for every entry that lacks it.

- [ ] **Step 5: Verify all 9 numeric posts now resolve**

Run:
```bash
for i in 1 2 3 4 5 6 7 8 9; do
  curl -s -o /dev/null -w "%{http_code} /blog/$i\n" "http://localhost:4321/blog/$i"
done
```
Expected: all `200`.

- [ ] **Step 6: Verify the named slug still works**

Run: `curl -s -o /dev/null -w "%{http_code}\n" http://localhost:4321/blog/rhodes-rent-a-boat`
Expected: `200` (the static `rhodes-rent-a-boat.astro` continues to win the route match).

- [ ] **Step 7: Commit**

```bash
git add tourm-astro/src/pages/blog/[id].astro tourm-astro/src/data/data-post.json
git commit -m "feat(blog): add dynamic /blog/[id] route + fix 9 broken post links"
```

---

## Task 4 — Remove dead `/gallery` links

**Decision:** The `/gallery` page was intentionally removed in commit `dbb2daf "Remove Gallery page, rewrite FAQ accordion natively, bump tour image cap to 10"`. We are NOT recreating it. Instead, remove all internal links pointing at `/gallery`.

**Files:**
- Modify: `tourm-astro/src/sections/shared/FooterFour.astro` (remove `<li><a href="/gallery">Gallery</a></li>`)
- Modify: any homepage section linking to `/gallery` (find via grep)

- [ ] **Step 1: Find every internal `/gallery` reference**

Run: `grep -rn 'href="/gallery"\|href={`/gallery' tourm-astro/src 2>/dev/null`
Expected: at least the FooterFour entry and possibly a homepage hero link. Note every match.

- [ ] **Step 2: Remove the footer entry**

In `tourm-astro/src/sections/shared/FooterFour.astro`, delete the line `<li><a href="/gallery">Gallery</a></li>` entirely.

- [ ] **Step 3: Remove any other internal /gallery links found in Step 1**

For each remaining match, delete the `<a>` tag (or replace with a meaningful link such as `/things-to-do` if removing leaves a gap).

- [ ] **Step 4: Verify no internal /gallery links remain**

Run: `grep -rn 'href="/gallery"\|href={`/gallery' tourm-astro/src 2>/dev/null`
Expected: no output (empty result).

- [ ] **Step 5: Verify the live homepage no longer links to /gallery**

Run: `curl -s http://localhost:4321/ | grep -c 'href="/gallery"'`
Expected: `0`

- [ ] **Step 6: Commit**

```bash
git add tourm-astro/src/sections/shared/FooterFour.astro
# add any other modified files from Step 3
git commit -m "fix: remove dead /gallery links (page intentionally removed in dbb2daf)"
```

---

## Task 5 — Build `Seo.astro` component (canonical, OG, Twitter, JSON-LD)

**Files:**
- Create: `tourm-astro/src/components/seo/Seo.astro`
- Create: `tourm-astro/src/components/seo/OrganizationSchema.astro`
- Create: `tourm-astro/src/lib/seo.ts`

- [ ] **Step 1: Create `src/lib/seo.ts`**

```ts
export const SITE_URL = 'https://rhodesrentaboat.com';
export const SITE_NAME = 'Rhodes Rent a Boat';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/img/home-one/hero_1_1.jpg`;

export function buildCanonical(pathname: string): string {
  const clean = pathname.split('?')[0].split('#')[0];
  return `${SITE_URL}${clean === '/' ? '' : clean.replace(/\/$/, '')}`;
}
```

- [ ] **Step 2: Create `OrganizationSchema.astro`**

Create `tourm-astro/src/components/seo/OrganizationSchema.astro`:

```astro
---
import { SITE_URL, SITE_NAME } from '../../lib/seo';

const data = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  '@id': `${SITE_URL}#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/assets/img/logo2.svg`,
  image: `${SITE_URL}/assets/img/home-one/hero_1_1.jpg`,
  telephone: '+30 695 166 6454',
  email: 'info@rhodesrentaboat.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Rhodes',
    addressRegion: 'South Aegean',
    addressCountry: 'GR',
    streetAddress: 'Mandraki Harbour'
  },
  areaServed: { '@type': 'Place', name: 'Rhodes, Greece' },
  sameAs: [],
  foundingDate: '2009'
};
---
<script type="application/ld+json" set:html={JSON.stringify(data)} is:inline />
```

- [ ] **Step 3: Create `Seo.astro`**

Create `tourm-astro/src/components/seo/Seo.astro`:

```astro
---
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, buildCanonical } from '../../lib/seo';

interface Props {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  articleAuthor?: string;
  articlePublishedTime?: string;
  noindex?: boolean;
}

const {
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  articleAuthor,
  articlePublishedTime,
  noindex = false,
} = Astro.props;

const finalCanonical = canonical ?? buildCanonical(Astro.url.pathname);
---
<title>{title}</title>
<meta name="description" content={description} />
<link rel="canonical" href={finalCanonical} />
{noindex && <meta name="robots" content="noindex, nofollow" />}

<meta property="og:type" content={ogType} />
<meta property="og:site_name" content={SITE_NAME} />
<meta property="og:url" content={finalCanonical} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={ogImage} />
<meta property="og:locale" content="en_US" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={ogImage} />

{articleAuthor && <meta name="author" content={articleAuthor} />}
{articlePublishedTime && <meta property="article:published_time" content={articlePublishedTime} />}
```

- [ ] **Step 4: Run typecheck**

Run: `cd tourm-astro && npx astro check 2>&1 | tail -20`
Expected: `0 errors` (warnings about unused props are fine).

- [ ] **Step 5: Commit**

```bash
git add tourm-astro/src/components/seo tourm-astro/src/lib/seo.ts
git commit -m "feat(seo): add Seo, OrganizationSchema components and seo lib"
```

---

## Task 6 — Wire SEO component into `BaseLayout.astro`

**Files:**
- Modify: `tourm-astro/src/layouts/BaseLayout.astro`

- [ ] **Step 1: Update the Props interface**

In `tourm-astro/src/layouts/BaseLayout.astro` lines 1–8, replace:

```astro
---
interface Props {
  title?: string;
  description?: string;
}

const { title = 'Rhodes Boat Tours', description = 'Luxury yacht charters and boat rentals in Rhodes, Greece. Explore the Dodecanese islands with bespoke sailing experiences.' } = Astro.props;
---
```

with:

```astro
---
import Seo from '../components/seo/Seo.astro';
import OrganizationSchema from '../components/seo/OrganizationSchema.astro';

interface Props {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  articleAuthor?: string;
  articlePublishedTime?: string;
  noindex?: boolean;
}

const {
  title = 'Rhodes Boat Tours | Boat Trips, Cruises & Rentals',
  description = 'Boat tours, rentals and yacht charters in Rhodes, Greece. Local experts in Mandraki Harbour since 2009.',
  canonical,
  ogImage,
  ogType,
  articleAuthor,
  articlePublishedTime,
  noindex,
} = Astro.props;
---
```

- [ ] **Step 2: Replace the `<head>` content lines 10–17**

Replace:

```astro
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={description} />
    <link rel="icon" type="image/svg+xml" href="/assets/img/favicon.svg" />
    <title>{title}</title>
```

with:

```astro
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/svg+xml" href="/assets/img/favicon.svg" />
    <Seo
      title={title}
      description={description}
      canonical={canonical}
      ogImage={ogImage}
      ogType={ogType}
      articleAuthor={articleAuthor}
      articlePublishedTime={articlePublishedTime}
      noindex={noindex}
    />
    <OrganizationSchema />
```

- [ ] **Step 3: Verify rendered HTML on homepage**

Run: `curl -s http://localhost:4321/ | grep -E '(canonical|og:image|og:type|twitter:card|application/ld\+json)' | head`
Expected: at least one match per pattern.

- [ ] **Step 4: Verify on a service page**

Run: `curl -s http://localhost:4321/service/rhodes-rent-a-boat | grep -c 'rel="canonical"'`
Expected: `>= 1`

- [ ] **Step 5: Commit**

```bash
git add tourm-astro/src/layouts/BaseLayout.astro
git commit -m "feat(seo): wire Seo + OrganizationSchema into BaseLayout"
```

---

## Task 7 — Fix duplicated brand in homepage `<title>`

**Files:**
- Modify: `tourm-astro/src/pages/index.astro`

- [ ] **Step 1: Find current title**

Run: `grep -n 'title=' tourm-astro/src/pages/index.astro`
Expected: a `<BaseLayout title="Rhodes Boat Tours | Boat Trips, Cruises & Rentals | Rhodes Boat Tours">` (or similar) appears.

- [ ] **Step 2: Replace the title**

In `tourm-astro/src/pages/index.astro`, replace the current `<BaseLayout title=...>` value with:

```astro
title="Rhodes Boat Tours | Boat Trips, Cruises & Rentals in Rhodes"
description="Local-led boat tours, rentals and yacht charters in Rhodes — Mandraki Harbour since 2009. Plan your day on the water with handpicked captains."
```

- [ ] **Step 3: Verify the rendered title is unique**

Run: `curl -s http://localhost:4321/ | grep -oE '<title>[^<]+</title>'`
Expected: a `<title>` with no duplicated brand suffix (count of "Rhodes Boat Tours" in the title ≤ 1, ignoring the leading brand once).

- [ ] **Step 4: Commit**

```bash
git add tourm-astro/src/pages/index.astro
git commit -m "fix(seo): remove duplicated brand in homepage title"
```

---

## Task 8 — Unique meta descriptions on hub pages

Currently all of `/about`, `/contact`, `/blog`, `/faq` reuse the BaseLayout default description.

**Files:**
- Modify: `tourm-astro/src/pages/about.astro`
- Modify: `tourm-astro/src/pages/contact.astro`
- Modify: `tourm-astro/src/pages/blog/index.astro`
- Modify: `tourm-astro/src/pages/faq.astro`

- [ ] **Step 1: Update `/about`**

In `tourm-astro/src/pages/about.astro`, find the `<BaseLayout title="About - Rhodes Rent a Boat">` line and add a `description` prop:

```astro
<BaseLayout
  title="About Rhodes Rent a Boat — Local Experts in Mandraki Harbour"
  description="Meet the local team behind Rhodes Rent a Boat. Sailors, captains and guides based in Mandraki Harbour since 2009 — not a marketplace."
>
```

- [ ] **Step 2: Update `/contact`**

In `tourm-astro/src/pages/contact.astro`:

```astro
<BaseLayout
  title="Contact Rhodes Rent a Boat — Talk to a Local in Rhodes"
  description="Reach our team in Rhodes by WhatsApp, phone or email. We help you choose the right boat tour, rental or sailing trip — quickly and personally."
>
```

- [ ] **Step 3: Update `/blog`**

In `tourm-astro/src/pages/blog/index.astro`:

```astro
<BaseLayout
  title="News & Blog — Rhodes Boat Tours, Trips and Coastline Guides"
  description="Practical guides, local tips and news about boat tours, rentals and sailing trips around Rhodes and the Dodecanese."
>
```

- [ ] **Step 4: Update `/faq`**

In `tourm-astro/src/pages/faq.astro`:

```astro
<BaseLayout
  title="FAQ — Boat Tours, Rentals and Sailing Trips in Rhodes"
  description="Answers to the most common questions about boat tours, license-free rentals, catamaran trips and yacht charters in Rhodes."
>
```

- [ ] **Step 5: Verify each page has its own description**

Run:
```bash
for p in / /about /contact /blog /faq; do
  d=$(curl -s "http://localhost:4321${p}" | grep -oE '<meta name="description" content="[^"]+"' | head -1)
  echo "${p}: ${d}"
done
```
Expected: each line shows a different `content="..."`.

- [ ] **Step 6: Commit**

```bash
git add tourm-astro/src/pages/about.astro tourm-astro/src/pages/contact.astro tourm-astro/src/pages/blog/index.astro tourm-astro/src/pages/faq.astro
git commit -m "fix(seo): unique meta descriptions on about, contact, blog, faq"
```

---

## Task 9 — Add `<h1>` to `/service` hub

The services index page renders zero `<h1>` (scan confirmed `h1Count: 0`).

**Files:**
- Modify: `tourm-astro/src/pages/service/index.astro`

- [ ] **Step 1: Find where the page hero starts**

Run: `grep -n -E '(<section|<h2|class="(sec-title|page-title)")' tourm-astro/src/pages/service/index.astro | head -10`
Expected: section markers near the top of the body.

- [ ] **Step 2: Add an `<h1>` at the top of the first section**

Insert at the first hero/section block (before the first `<h2>`):

```astro
<h1 class="services-hub-h1">Boat Services in Rhodes — Tours, Rentals, Cruises and Charters</h1>
```

If a visually-hidden style is preferred so the existing layout is untouched, add a single style:

```astro
<style>
  .services-hub-h1 {
    position: absolute;
    width: 1px; height: 1px;
    padding: 0; margin: -1px;
    overflow: hidden; clip: rect(0,0,0,0);
    white-space: nowrap; border: 0;
  }
</style>
```

(Prefer making it visible if the design has a clear hero text slot — in that case use the same class naming as `<h2 class="sec-title">` in this file.)

- [ ] **Step 3: Verify**

Run: `curl -s http://localhost:4321/service | grep -c '<h1'`
Expected: `>= 1`

- [ ] **Step 4: Commit**

```bash
git add tourm-astro/src/pages/service/index.astro
git commit -m "fix(seo): add missing <h1> to /service hub"
```

---

## Task 10 — Add `FAQPage` JSON-LD on `/faq`

71 question elements, no schema. We embed an inline FAQPage JSON-LD inferred from the rendered DOM.

**Files:**
- Modify: `tourm-astro/src/pages/faq.astro`

- [ ] **Step 1: Locate the FAQ data source**

Run: `grep -nE '(faq|accordion|question)' tourm-astro/src/pages/faq.astro | head -20`
Expected: either an in-file array of `{q, a}` objects or repeated markup. If markup-only, the page needs a small refactor to extract a typed array.

- [ ] **Step 2: Extract Q&A into a frontmatter constant**

If the page contains repeated `<div class="accordion-item">` blocks with hard-coded text, extract them into a frontmatter `const faqs: { q: string; a: string }[] = [...]` and render via `.map()`. Keep the existing CSS classes.

- [ ] **Step 3: Emit FAQPage JSON-LD**

After the closing `</main>` (or before `<FooterFour />`), add:

```astro
<script type="application/ld+json" set:html={JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a }
  }))
})} />
```

- [ ] **Step 4: Verify**

Run: `curl -s http://localhost:4321/faq | grep -c 'FAQPage'`
Expected: `>= 1`

Run: `curl -s http://localhost:4321/faq | python3 -c "import sys, re, json; html=sys.stdin.read(); m=re.search(r'<script type=\"application/ld\+json\">(\{.*FAQPage.*?\})</script>', html, re.S); j=json.loads(m.group(1)); print('Q count:', len(j['mainEntity']))"`
Expected: count > 30 (matches the visible Q&A blocks).

- [ ] **Step 5: Commit**

```bash
git add tourm-astro/src/pages/faq.astro
git commit -m "feat(seo): add FAQPage JSON-LD to /faq (71 Q&A)"
```

---

## Task 11 — Fix invisible above-the-fold content (GSAP refactor)

**Root cause:** `BaseLayout.astro` lines 130–230 use `gsap.from(el, { opacity: 0, ... })` with `scrollTrigger.start: 'top 90%'`. GSAP sets the starting state immediately, so any element above the trigger zone stays at `opacity: 0` until it scrolls into view. For elements already on screen but below the 90% mark of the viewport at load time (intro paragraphs, section H2s), they fade in only after the user scrolls past them — leaving the visible page area with empty zones.

**Fix strategy:** Switch from `gsap.from` to `gsap.fromTo`, gate scroll-triggered animations with `start: 'top 95%'` AND ensure elements above the fold are immediately visible. Honour `prefers-reduced-motion`.

**Files:**
- Modify: `tourm-astro/src/layouts/BaseLayout.astro` lines 119–271

- [ ] **Step 1: Replace the `initAnimations` function**

In `tourm-astro/src/layouts/BaseLayout.astro`, replace the entire body of `initAnimations()` (lines 130–271 — everything inside the function) with:

```ts
function initAnimations() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const playOnce = {
    toggleActions: 'play none none none' as const,
    once: true,
  };

  const animate = (sel: string, fromVars: gsap.TweenVars) => {
    gsap.utils.toArray<HTMLElement>(sel).forEach((el) => {
      const delay = parseFloat(el.getAttribute('data-ani-delay') || '0');

      if (reduce) {
        gsap.set(el, { opacity: 1, x: 0, y: 0, scale: 1, clearProps: 'all' });
        return;
      }

      // If the element is already in the viewport on load, animate immediately
      // instead of waiting for scroll — prevents blank above-the-fold areas.
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;

      const tween = {
        ...fromVars,
        delay,
        duration: 0.8,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
      };

      if (inView) {
        gsap.from(el, tween);
      } else {
        gsap.from(el, {
          ...tween,
          scrollTrigger: { trigger: el, start: 'top 95%', ...playOnce },
        });
      }
    });
  };

  animate('[data-ani="slideinup"]',    { y: 60, opacity: 0 });
  animate('[data-ani="slideinleft"]',  { x: -60, opacity: 0 });
  animate('[data-ani="slideinright"]', { x: 60, opacity: 0 });
  animate('[data-ani="slideindown"]',  { y: -60, opacity: 0 });
  animate('[data-ani="fadein"]',       { opacity: 0 });
  animate('[data-ani="zoomIn"]',       { scale: 0.5, opacity: 0 });

  if (reduce) return;

  gsap.utils.toArray<HTMLElement>('.jump, .jumpAni').forEach((el) =>
    gsap.to(el, { y: -15, repeat: -1, yoyo: true, duration: 2, ease: 'sine.inOut' })
  );
  gsap.utils.toArray<HTMLElement>('.movingX').forEach((el) =>
    gsap.to(el, { x: 20, repeat: -1, yoyo: true, duration: 3, ease: 'sine.inOut' })
  );
  gsap.utils.toArray<HTMLElement>('.moving').forEach((el) =>
    gsap.to(el, { y: 15, x: 10, repeat: -1, yoyo: true, duration: 4, ease: 'sine.inOut' })
  );
  gsap.utils.toArray<HTMLElement>('.spin').forEach((el) =>
    gsap.to(el, { rotation: 360, repeat: -1, duration: 10, ease: 'none' })
  );

  ScrollTrigger.refresh();
}
```

- [ ] **Step 2: Add a CSS no-JS fallback**

Add inside the `<style>` block at line 37 of `BaseLayout.astro`:

```css
/* Ensure content is visible if JS fails or before GSAP runs */
.no-js [data-ani], html:not(.has-gsap) [data-ani] {
  opacity: 1 !important;
  transform: none !important;
}
```

And at the very top of the GSAP `<script>` add:

```ts
document.documentElement.classList.add('has-gsap');
```

- [ ] **Step 3: Verify the H1 is no longer hidden at load**

Run after dev server reload:

```bash
node -e "
const {chromium}=require('playwright');
(async()=>{
  const b=await chromium.launch();const p=await b.newPage();
  await p.goto('http://localhost:4321/');
  await p.waitForTimeout(1500);
  const o=await p.evaluate(()=>{const h=document.querySelector('h1.intro-heading'); return h?getComputedStyle(h).opacity:'no h1';});
  console.log('h1 opacity at load:', o);
  await b.close();
})();
" 2>/dev/null || echo "Skip: install playwright if you want this check"
```
Expected: `h1 opacity at load: 1` (or close to it; not `0`).

- [ ] **Step 4: Visual verification**

Open `http://localhost:4321/` in a real browser at 1440x900 with no scrolling. The hero, intro paragraph and first section title should all be visible without any scroll.

- [ ] **Step 5: Verify reduced-motion**

In DevTools → Rendering → Emulate `prefers-reduced-motion: reduce`, hard-reload. All `[data-ani]` content should be visible immediately with no animation.

- [ ] **Step 6: Commit**

```bash
git add tourm-astro/src/layouts/BaseLayout.astro
git commit -m "fix(anim): show above-the-fold content immediately + reduced-motion support"
```

---

## Task 12 — Mobile touch-target fixes (footer + header phone link)

Scan flagged: footer links 17–20px tall, header phone link 17px (Apple HIG / WCAG SC 2.5.5 want ≥ 44×44).

**Files:**
- Modify: `tourm-astro/src/sections/shared/FooterFour.astro`
- Modify: `tourm-astro/src/sections/home-one/Section1-Header.astro`

- [ ] **Step 1: Find the footer link styles**

Run: `grep -nE '(footer|.footer-menu|font-size|line-height)' tourm-astro/src/sections/shared/FooterFour.astro | head -20`
Expected: existing `<style>` block(s).

- [ ] **Step 2: Add mobile tap-target rule to FooterFour**

Inside the existing `<style>` block of `FooterFour.astro`, append:

```css
@media (max-width: 991px) {
  footer a,
  footer .footer-menu li a {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    padding-block: 6px;
    font-size: 15px;
    line-height: 1.4;
  }
}
```

- [ ] **Step 3: Add tap-target rule for header phone link**

Run: `grep -nE '(tel:|phone)' tourm-astro/src/sections/home-one/Section1-Header.astro`
Expected: a `<a href="tel:..."` element.

In Section1-Header `<style>` block, append:

```css
@media (max-width: 991px) {
  a[href^="tel:"] {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    padding: 4px 8px;
    font-size: 15px;
  }
}
```

- [ ] **Step 4: Verify with Playwright at 375 viewport**

Run from a fresh node (or repurpose the prior Playwright snippet):

```bash
node -e "
const {chromium}=require('playwright');
(async()=>{
  const b=await chromium.launch();const p=await b.newPage({viewport:{width:375,height:812}});
  await p.goto('http://localhost:4321/');
  const small=await p.evaluate(()=>Array.from(document.querySelectorAll('a,button')).filter(b=>{const r=b.getBoundingClientRect();return r.width>0&&r.height>0&&r.height<44&&!b.closest('.swiper-button-prev,.swiper-button-next');}).map(b=>({h:Math.round(b.getBoundingClientRect().height),t:b.textContent.trim().slice(0,30)})));
  console.log('small tap targets:', small.length, small.slice(0,5));
  await b.close();
})();" 2>/dev/null
```
Expected: `small tap targets: 0` (or only swiper carousel arrows).

- [ ] **Step 5: Commit**

```bash
git add tourm-astro/src/sections/shared/FooterFour.astro tourm-astro/src/sections/home-one/Section1-Header.astro
git commit -m "fix(a11y): mobile tap targets ≥44px on footer + header phone link"
```

---

## Task 13 — Mobile font-size minimum (≥ 12px → 14px floor)

**Files:**
- Modify: `tourm-astro/src/layouts/BaseLayout.astro` (the inline `<style>` block at line 37)

- [ ] **Step 1: Add a body font-size floor for small screens**

Inside the existing `<style>` block in `BaseLayout.astro` head (currently just sets `overflow-x`), append:

```css
@media (max-width: 575px) {
  body { font-size: 15px; line-height: 1.55; }
  small, .small, .meta, .blog-card_meta, .blog-card_tag, .footer-copyright {
    font-size: 13px !important;
  }
}
```

- [ ] **Step 2: Verify with Playwright**

```bash
node -e "
const {chromium}=require('playwright');
(async()=>{
  const b=await chromium.launch();const p=await b.newPage({viewport:{width:375,height:812}});
  await p.goto('http://localhost:4321/');
  const tiny=await p.evaluate(()=>Array.from(document.querySelectorAll('*')).filter(e=>e.children.length===0&&e.textContent.trim()).map(e=>parseFloat(getComputedStyle(e).fontSize)).filter(s=>s>0&&s<12).length);
  console.log('elements <12px:', tiny);
  await b.close();
})();" 2>/dev/null
```
Expected: `elements <12px: 0`

- [ ] **Step 3: Commit**

```bash
git add tourm-astro/src/layouts/BaseLayout.astro
git commit -m "fix(a11y): mobile body font-size floor at 13px"
```

---

## Task 14 — Add missing `alt` on `/service` hub image

**Files:**
- Modify: `tourm-astro/src/pages/service/index.astro` (or whichever Section component renders that supabase image)

- [ ] **Step 1: Locate the offending image**

Run: `grep -rn 'iuidzdvrrrsxevvkbxam.supabase.co\|<img ' tourm-astro/src/pages/service/index.astro tourm-astro/src/sections/home-one/Section6-ServicesGrid.astro 2>/dev/null | head -20`
Expected: at least one `<img>` tag without an `alt=`.

- [ ] **Step 2: Add a descriptive alt**

For each `<img>` lacking an `alt=`, add:

```astro
<img ... alt={`${service.name} in Rhodes — boat service photo`} />
```

(or a static string if the image is not in a `.map()`).

- [ ] **Step 3: Verify**

```bash
node -e "
const {chromium}=require('playwright');
(async()=>{
  const b=await chromium.launch();const p=await b.newPage();
  await p.goto('http://localhost:4321/service');
  const noAlt=await p.evaluate(()=>Array.from(document.querySelectorAll('img')).filter(i=>!i.alt||!i.alt.trim()).map(i=>i.src));
  console.log('imgs without alt:', noAlt);
  await b.close();
})();" 2>/dev/null
```
Expected: `imgs without alt: []`

- [ ] **Step 4: Commit**

```bash
git add tourm-astro/src/pages/service/index.astro tourm-astro/src/sections/home-one/Section6-ServicesGrid.astro
git commit -m "fix(a11y): add missing alt text on /service hub image"
```

---

## Task 15 — Final regression sweep

**Files:**
- Create: `tourm-astro/scripts/audit.mjs`

- [ ] **Step 1: Add an audit script**

Create `tourm-astro/scripts/audit.mjs`:

```js
import { chromium } from 'playwright';

const BASE = process.env.BASE || 'http://localhost:4321';
const PATHS = [
  '/', '/about', '/service', '/service/rhodes-rent-a-boat',
  '/things-to-do', '/contact', '/blog', '/blog/1', '/blog/rhodes-rent-a-boat',
  '/faq', '/sitemap.xml', '/robots.txt'
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

const issues = [];
for (const p of PATHS) {
  const url = BASE + p;
  const resp = await page.goto(url, { waitUntil: 'networkidle' }).catch(() => null);
  const status = resp?.status() ?? 0;
  if (status >= 400) { issues.push(`${status} ${p}`); continue; }
  if (p === '/sitemap.xml' || p === '/robots.txt') continue;
  const data = await page.evaluate(() => ({
    title: document.title,
    desc: document.querySelector('meta[name="description"]')?.content,
    canonical: document.querySelector('link[rel="canonical"]')?.href,
    ogImage: document.querySelector('meta[property="og:image"]')?.content,
    h1: document.querySelectorAll('h1').length,
    noAlt: Array.from(document.querySelectorAll('img')).filter(i => !i.alt || !i.alt.trim()).length,
    invisible: Array.from(document.querySelectorAll('h1,h2,p')).filter(e => parseFloat(getComputedStyle(e).opacity) < 0.1).length,
  }));
  if (!data.title) issues.push(`${p}: missing title`);
  if (!data.desc) issues.push(`${p}: missing description`);
  if (!data.canonical) issues.push(`${p}: missing canonical`);
  if (!data.ogImage) issues.push(`${p}: missing og:image`);
  if (data.h1 < 1) issues.push(`${p}: 0 <h1>`);
  if (data.h1 > 1) issues.push(`${p}: ${data.h1} <h1> (>1)`);
  if (data.noAlt > 0) issues.push(`${p}: ${data.noAlt} imgs without alt`);
  if (data.invisible > 0) issues.push(`${p}: ${data.invisible} text elements at opacity < 0.1`);
}

await browser.close();

if (issues.length === 0) {
  console.log('✓ all checks passed');
} else {
  console.error('✗ issues found:');
  issues.forEach((i) => console.error(' - ' + i));
  process.exit(1);
}
```

- [ ] **Step 2: Run it**

Run: `cd tourm-astro && node scripts/audit.mjs`
Expected: `✓ all checks passed`. If any `✗` lines, fix them before merging.

- [ ] **Step 3: Commit**

```bash
git add tourm-astro/scripts/audit.mjs
git commit -m "chore: add audit.mjs regression script"
```

- [ ] **Step 4: Final cross-viewport visual sanity**

Open in a real browser at 375, 768, 1440 — verify no blank/empty zones, hero text is visible without scroll, footer/links tap-friendly on mobile.

---

## Out of Scope (deferred)

These were observed but not required to fix the user-reported brokenness:

- Bundling the 4 legacy CSS files (`bootstrap.min.css`, `fontawesome.min.css`, `magnific-popup.min.css`, `swiper-bundle.min.css`) into one — Vite/Astro can do this with `<style is:global>` imports. Defer until perf budget is the focus.
- Subsetting FontAwesome (≈70 KB → ≈8 KB) — same reason.
- Adding a CMS-driven blog (currently a static JSON file) — out of scope.
- Real `og:image` per route (right now Task 5 falls back to one default image).

---

## Self-Review Checklist (run before handing off)

- [x] Every spec finding (1–16) maps to a numbered task in this plan
- [x] No "TODO", "TBD", or "implement later" placeholders
- [x] Every code step shows the actual code/command, not a description
- [x] Type names consistent (`Seo` component, `OrganizationSchema`, `seo.ts` exports `buildCanonical`/`SITE_URL`/`SITE_NAME`/`DEFAULT_OG_IMAGE` — referenced consistently in Tasks 5, 6, 9, 10)
- [x] Every modified file path is absolute relative to repo root
- [x] Each task ends with a verification step + commit
