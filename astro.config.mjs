// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import { assertSitemapServices } from './integrations/assert-sitemap-services.ts';
import { assertImgAlt } from './integrations/assert-img-alt.ts';
import { vercelWwwRedirect } from './integrations/vercel-www-redirect.ts';
import { vercelLocaleRoutes } from './integrations/vercel-locale-routes.ts';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  // Inline component-scoped CSS (page styles, footer styles, etc.) into the
  // <head> instead of emitting render-blocking <link> tags for tiny CSS chunks.
  // 'always' is fine because we're only talking about per-page scoped styles —
  // the heavy framework CSS (bootstrap, theme) is loaded separately.
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    assertImgAlt(),
    assertSitemapServices(),
    vercelWwwRedirect(),
    vercelLocaleRoutes(),
  ],
  redirects: {
    '/tag/rhodes-day-cruise': { status: 301, destination: '/service/rhodes-boat-cruises' },
    '/tag/[...slug]': { status: 301, destination: '/blog' },
    '/why-daily-cruises-are-a-must-do-in-rhodes': { status: 301, destination: '/service/rhodes-boat-cruises' },
    '/our-fleet-comfortable-modern-boats-rent-a-boat-in-rhodes': { status: 301, destination: '/service/rhodes-rent-a-boat' },
    '/service/rodos-rent-a-boat': { status: 301, destination: '/service/rhodes-rent-a-boat' },
    '/tour-detail/all-inclusive-sunset-cruise-a-sunset-remedy': { status: 301, destination: '/tour-detail/sunset-cruise-lindos-calypso' },
    '/blog/1': { status: 301, destination: '/blog/best-boat-trips-rhodes' },
    '/blog/2': { status: 301, destination: '/blog/boat-trip-symi-from-rhodes' },
    '/blog/3': { status: 301, destination: '/blog/boat-trip-lindos-acropolis' },
    '/blog/4': { status: 301, destination: '/blog/anthony-quinn-bay-by-boat' },
    '/blog/5': { status: 301, destination: '/blog/rent-a-boat-rhodes-first-timers-guide' },
    '/blog/6': { status: 301, destination: '/blog/private-boat-trip-rhodes-worth-it' },
    '/blog/7': { status: 301, destination: '/blog/best-beaches-rhodes-by-boat' },
    '/blog/8': { status: 301, destination: '/blog/sunset-cruise-rhodes' },
    '/blog/9': { status: 301, destination: '/blog/things-to-do-rhodes-water-guide' },
    // rodos-* → rhodes-* slug consolidation (May 2026): the 4 service URLs
    // that historically used the Greek romanisation are now in English to
    // match the rest of the site (rhodes-rent-a-boat, rhodes-catamaran-tours,
    // etc.). Any inbound link to the old slugs forwards to the new ones.
    '/service/rodos-boat-tours': { status: 301, destination: '/service/rhodes-boat-tours' },
    '/service/rodos-boat-cruises': { status: 301, destination: '/service/rhodes-boat-cruises' },
    '/service/rodos-charter': { status: 301, destination: '/service/rhodes-charter' },
    '/service/rodos-tender-boat': { status: 301, destination: '/service/rhodes-tender-boat' },
    '/service/rhodes-sidecar-tours': { status: 301, destination: 'https://rhodessidecartours.com/' },
    '/things-to-do/rhodes-sidecar-tours': { status: 301, destination: 'https://rhodessidecartours.com/' },
    '/service/rhodes-transfers': { status: 301, destination: 'https://www.rhodestransfer24.com/' },
  },
});
