// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

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
  ],
  redirects: {
    '/tag/rhodes-day-cruise': { status: 301, destination: '/service/rodos-boat-cruises' },
    '/tag/[...slug]': { status: 301, destination: '/blog' },
    '/why-daily-cruises-are-a-must-do-in-rhodes': { status: 301, destination: '/service/rodos-boat-cruises' },
    '/our-fleet-comfortable-modern-boats-rent-a-boat-in-rhodes': { status: 301, destination: '/service/rhodes-rent-a-boat' },
    '/blog/1': { status: 301, destination: '/blog/best-boat-trips-rhodes' },
    '/blog/2': { status: 301, destination: '/blog/boat-trip-symi-from-rhodes' },
    '/blog/3': { status: 301, destination: '/blog/boat-trip-lindos-acropolis' },
    '/blog/4': { status: 301, destination: '/blog/anthony-quinn-bay-by-boat' },
    '/blog/5': { status: 301, destination: '/blog/rent-a-boat-rhodes-first-timers-guide' },
    '/blog/6': { status: 301, destination: '/blog/private-boat-trip-rhodes-worth-it' },
    '/blog/7': { status: 301, destination: '/blog/best-beaches-rhodes-by-boat' },
    '/blog/8': { status: 301, destination: '/blog/sunset-cruise-rhodes' },
    '/blog/9': { status: 301, destination: '/blog/things-to-do-rhodes-water-guide' },
  },
});
