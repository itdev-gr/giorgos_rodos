import { getServiceSeo, type ServiceSeo } from '../lib/service-seo';
import { getServiceMeta } from './index';
import type { Locale } from './locales';

/** Merge English service SEO record with locale-specific meta overrides. */
export function getLocalizedServiceSeo(slug: string, locale: Locale | string | undefined): ServiceSeo | undefined {
  const base = getServiceSeo(slug);
  const localized = getServiceMeta(slug, locale);
  if (!base) return undefined;
  if (!localized) return base;

  return {
    ...base,
    name: localized.name,
    metaTitle: localized.title,
    metaDescription: localized.description,
    schemaDescription: localized.schemaDescription,
    heroSubtitle: localized.heroSubtitle,
    serviceType: localized.serviceType,
  };
}
