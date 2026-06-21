import { DEFAULT_LOCALE, type Locale } from './locales';
import { de } from './messages/de';
import { en } from './messages/en';
import { fr } from './messages/fr';
import { he } from './messages/he';
import { it } from './messages/it';
import { nl } from './messages/nl';
import { pl } from './messages/pl';
import { ru } from './messages/ru';
import type { ServiceMeta, SiteMessages } from './messages/types';
import { uk } from './messages/uk';

const CATALOG: Record<Locale, SiteMessages> = {
  en,
  de,
  it,
  fr,
  ru,
  he,
  nl,
  pl,
  uk,
};

export function getMessages(locale: Locale | string | undefined): SiteMessages {
  const key = locale && locale in CATALOG ? (locale as Locale) : DEFAULT_LOCALE;
  return CATALOG[key];
}

export function getServiceMeta(slug: string, locale: Locale | string | undefined): ServiceMeta | undefined {
  return getMessages(locale).services[slug];
}

export { type SiteMessages, type ServiceMeta } from './messages/types';
