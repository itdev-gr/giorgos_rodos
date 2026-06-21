import type { ServicePageContent } from '../../lib/service-content';
import { SERVICE_CONTENT, getServiceContent as getEnglishServiceContent } from '../../lib/service-content';
import { DEFAULT_LOCALE, type Locale } from '../locales';
import { localizeHtmlLinks } from '../localize-links';
import { de } from './de';
import { fr } from './fr';
import { he } from './he';
import { it } from './it';
import { nl } from './nl';
import { pl } from './pl';
import { ru } from './ru';

export type ServiceContentCatalog = Record<string, ServicePageContent>;

const CATALOG: Record<Locale, ServiceContentCatalog> = {
  en: SERVICE_CONTENT,
  de,
  it,
  fr,
  ru,
  he,
  nl,
  pl,
};

function normalizeSlug(slug: string): string {
  return slug === 'rent-a-boat' ? 'rhodes-rent-a-boat' : slug;
}

function localizeServiceContent(content: ServicePageContent, locale: Locale): ServicePageContent {
  const localized: ServicePageContent = {
    ...content,
    routeGuide: content.routeGuide
      ? {
          ...content.routeGuide,
          routes: content.routeGuide.routes.map((r) => ({
            ...r,
            body: localizeHtmlLinks(r.body, locale),
          })),
          closing: localizeHtmlLinks(content.routeGuide.closing, locale),
        }
      : undefined,
  };
  return localized;
}

export function getLocalizedServiceContent(
  slug: string,
  locale: Locale | string | undefined,
): ServicePageContent | undefined {
  const key = locale && locale in CATALOG ? (locale as Locale) : DEFAULT_LOCALE;
  const normalized = normalizeSlug(slug);
  const catalog = CATALOG[key] ?? CATALOG[DEFAULT_LOCALE];
  const content = catalog[normalized] ?? getEnglishServiceContent(normalized);
  if (!content) return undefined;
  if (key === DEFAULT_LOCALE) return content;
  return localizeServiceContent(content, key);
}
