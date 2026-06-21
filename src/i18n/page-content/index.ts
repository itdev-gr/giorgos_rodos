import { DEFAULT_LOCALE, type Locale } from '../locales';
import { de } from './de';
import { en, type PageContent } from './en';
import { fr } from './fr';
import { he } from './he';
import { it } from './it';
import { nl } from './nl';
import { pl } from './pl';
import { ru } from './ru';
import { uk } from './uk';

const PAGE_CONTENT_CATALOG: Record<Locale, PageContent> = {
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

export function getPageContent(locale: Locale | string | undefined): PageContent {
  const key = locale && locale in PAGE_CONTENT_CATALOG ? (locale as Locale) : DEFAULT_LOCALE;
  return PAGE_CONTENT_CATALOG[key];
}

export type { PageContent };
