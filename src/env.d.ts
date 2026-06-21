/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    locale?: import('./i18n/locales').Locale;
    user?: import('@supabase/supabase-js').User;
    profile?: Record<string, unknown> | null;
    accessToken?: string;
  }
}
