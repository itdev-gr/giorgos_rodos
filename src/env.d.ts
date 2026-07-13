/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    locale?: import('./i18n/locales').Locale;
    user?: import('@supabase/supabase-js').User;
    profile?: Record<string, unknown> | null;
    accessToken?: string;
  }
}

// GSAP + ScrollTrigger are lazy-loaded onto `window` in BaseLayout, so the
// scroll/parallax scripts read them off the global object.
interface Window {
  gsap?: typeof import('gsap').gsap;
  ScrollTrigger?: typeof import('gsap/ScrollTrigger').ScrollTrigger;
}

// Swiper ships CSS with no type declarations; these are side-effect imports.
declare module 'swiper/css';
declare module 'swiper/css/*';
