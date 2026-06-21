import faqEn from '../../data/faq.json';
import de from './de.json';
import fr from './fr.json';
import he from './he.json';
import it from './it.json';
import nl from './nl.json';
import pl from './pl.json';
import ru from './ru.json';
import uk from './uk.json';
import { DEFAULT_LOCALE, type Locale } from '../locales';
import { localizeHtmlLinks } from '../localize-links';

export type FaqItem = { question: string; answer: string };

export type FaqData = typeof faqEn;

export type FaqSection = keyof FaqData;

const CATALOG: Record<Locale, FaqData> = {
  en: faqEn as FaqData,
  de: de as FaqData,
  it: it as FaqData,
  fr: fr as FaqData,
  ru: ru as FaqData,
  he: he as FaqData,
  nl: nl as FaqData,
  pl: pl as FaqData,
  uk: uk as FaqData,
};

function resolveLocale(locale: Locale | string | undefined): Locale {
  return locale && locale in CATALOG ? (locale as Locale) : DEFAULT_LOCALE;
}

function localizeItems(items: FaqItem[], locale: Locale): FaqItem[] {
  return items.map((item) => ({
    question: item.question,
    answer: localizeHtmlLinks(item.answer, locale),
  }));
}

export function getFaqSection(section: FaqSection, locale: Locale | string | undefined): FaqItem[] {
  const key = resolveLocale(locale);
  const data = CATALOG[key] ?? CATALOG.en;
  return localizeItems(data[section] as FaqItem[], key);
}

/** Main FAQ page: head terms + main body questions. */
export function getMainFaq(locale: Locale | string | undefined): FaqItem[] {
  const key = resolveLocale(locale);
  const data = CATALOG[key] ?? CATALOG.en;
  return localizeItems([...(data.headTerms as FaqItem[]), ...(data.main as FaqItem[])], key);
}

export function getCruisesFaq(locale: Locale | string | undefined): FaqItem[] {
  const head = getFaqSection('headTerms', locale);
  const symi = head[2];
  const cruises = getFaqSection('cruises', locale).filter((item) => item.question !== symi?.question);
  return symi ? [symi, ...cruises] : cruises;
}

export function getThingsToDoFaq(locale: Locale | string | undefined): FaqItem[] {
  const head = getFaqSection('headTerms', locale);
  const best = head[1];
  const items = getFaqSection('thingsToDo', locale).filter((item) => item.question !== best?.question);
  return best ? [best, ...items] : items;
}

export function getHomeFaq(locale: Locale | string | undefined): FaqItem[] {
  return getFaqSection('home', locale);
}
