import { DEFAULT_LOCALE, type Locale } from './locales';
import { localizedPath } from './routing';

export type FaqIntroKey =
  | 'boatTrips'
  | 'boatTours'
  | 'boatCruises'
  | 'catamaran'
  | 'sailing'
  | 'charter'
  | 'rentABoat'
  | 'thingsToDo';

type IntroFactory = (links: { faq: string; charter: string }) => string;

const INTROS: Record<Locale, Record<FaqIntroKey, IntroFactory>> = {
  en: {
    boatTrips: ({ faq }) =>
      `Common questions about Rhodes boat trips — shared cruises and private skippered days. For booking see the <a href="${faq}">full FAQ</a>.`,
    boatTours: ({ faq }) =>
      `Common questions about guided boat tours in Rhodes. For booking and weather see the <a href="${faq}">full FAQ</a>.`,
    boatCruises: ({ faq }) =>
      `Common questions about day cruises from Rhodes. For booking see the <a href="${faq}">full FAQ</a>.`,
    catamaran: ({ faq }) =>
      `Common questions about catamaran day and sunset cruises. See the <a href="${faq}">full FAQ</a> for more.`,
    sailing: ({ faq, charter }) =>
      `Common questions about sailing day trips. For weekly charter see <a href="${charter}">yacht charter</a> or the <a href="${faq}">full FAQ</a>.`,
    charter: ({ faq }) =>
      `Common questions from charterers heading to the Dodecanese. See the <a href="${faq}">full FAQ</a> for more.`,
    rentABoat: ({ faq }) =>
      `Common questions about license-free rentals. For booking see the <a href="${faq}">full FAQ</a>.`,
    thingsToDo: ({ faq }) =>
      `Quick answers for first-time visitors. For booking, weather and licence questions see the <a href="${faq}">full FAQ</a>.`,
  },
  de: {
    boatTrips: ({ faq }) =>
      `Häufige Fragen zu Bootsausflügen auf Rhodos — geteilte Kreuzfahrten und private Skippertage. Zur Buchung siehe <a href="${faq}">vollständige FAQ</a>.`,
    boatTours: ({ faq }) =>
      `Häufige Fragen zu geführten Bootstouren auf Rhodos. Zu Buchung und Wetter siehe <a href="${faq}">vollständige FAQ</a>.`,
    boatCruises: ({ faq }) =>
      `Häufige Fragen zu Tageskreuzfahrten ab Rhodos. Zur Buchung siehe <a href="${faq}">vollständige FAQ</a>.`,
    catamaran: ({ faq }) =>
      `Häufige Fragen zu Katamaran-Tages- und Sonnenuntergangsfahrten. Mehr in der <a href="${faq}">vollständigen FAQ</a>.`,
    sailing: ({ faq, charter }) =>
      `Häufige Fragen zu Segeltagesausflügen. Für Wochencharter siehe <a href="${charter}">Yachtcharter</a> oder <a href="${faq}">vollständige FAQ</a>.`,
    charter: ({ faq }) =>
      `Häufige Fragen von Charterern in Richtung Dodekanes. Mehr in der <a href="${faq}">vollständigen FAQ</a>.`,
    rentABoat: ({ faq }) =>
      `Häufige Fragen zu führerscheinfreien Mietbooten. Zur Buchung siehe <a href="${faq}">vollständige FAQ</a>.`,
    thingsToDo: ({ faq }) =>
      `Kurze Antworten für Erstbesucher. Zu Buchung, Wetter und Führerschein siehe <a href="${faq}">vollständige FAQ</a>.`,
  },
  it: {
    boatTrips: ({ faq }) =>
      `Domande frequenti su escursioni in barca a Rodi — crociere condivise e giornate private con skipper. Per prenotare consulta le <a href="${faq}">FAQ complete</a>.`,
    boatTours: ({ faq }) =>
      `Domande frequenti sui tour guidati in barca a Rodi. Per prenotazione e meteo consulta le <a href="${faq}">FAQ complete</a>.`,
    boatCruises: ({ faq }) =>
      `Domande frequenti sulle crociere giornaliere da Rodi. Per prenotare consulta le <a href="${faq}">FAQ complete</a>.`,
    catamaran: ({ faq }) =>
      `Domande frequenti su crociere diurne e al tramonto in catamarano. Per saperne di più consulta le <a href="${faq}">FAQ complete</a>.`,
    sailing: ({ faq, charter }) =>
      `Domande frequenti sulle uscite in barca a vela. Per charter settimanali vedi <a href="${charter}">yacht charter</a> o le <a href="${faq}">FAQ complete</a>.`,
    charter: ({ faq }) =>
      `Domande frequenti da chi noleggia yacht verso il Dodecaneso. Per saperne di più consulta le <a href="${faq}">FAQ complete</a>.`,
    rentABoat: ({ faq }) =>
      `Domande frequenti sul noleggio senza patente. Per prenotare consulta le <a href="${faq}">FAQ complete</a>.`,
    thingsToDo: ({ faq }) =>
      `Risposte rapide per chi visita per la prima volta. Per prenotazione, meteo e patente consulta le <a href="${faq}">FAQ complete</a>.`,
  },
  fr: {
    boatTrips: ({ faq }) =>
      `Questions fréquentes sur les excursions en bateau à Rhodes — croisières partagées et journées privées avec skipper. Pour réserver, voir la <a href="${faq}">FAQ complète</a>.`,
    boatTours: ({ faq }) =>
      `Questions fréquentes sur les visites guidées en bateau à Rhodes. Pour la réservation et la météo, voir la <a href="${faq}">FAQ complète</a>.`,
    boatCruises: ({ faq }) =>
      `Questions fréquentes sur les croisières à la journée au départ de Rhodes. Pour réserver, voir la <a href="${faq}">FAQ complète</a>.`,
    catamaran: ({ faq }) =>
      `Questions fréquentes sur les croisières en catamaran de jour et au coucher du soleil. Voir la <a href="${faq}">FAQ complète</a> pour en savoir plus.`,
    sailing: ({ faq, charter }) =>
      `Questions fréquentes sur les sorties à la voile à la journée. Pour un charter hebdomadaire, voir <a href="${charter}">location de yacht</a> ou la <a href="${faq}">FAQ complète</a>.`,
    charter: ({ faq }) =>
      `Questions fréquentes des clients en charter vers le Dodécanèse. Voir la <a href="${faq}">FAQ complète</a> pour en savoir plus.`,
    rentABoat: ({ faq }) =>
      `Questions fréquentes sur la location sans permis. Pour réserver, voir la <a href="${faq}">FAQ complète</a>.`,
    thingsToDo: ({ faq }) =>
      `Réponses rapides pour les visiteurs débutants. Pour la réservation, la météo et le permis, voir la <a href="${faq}">FAQ complète</a>.`,
  },
  ru: {
    boatTrips: ({ faq }) =>
      `Частые вопросы о морских поездках на Родосе — групповые круизы и частные дни со шкипером. Для бронирования см. <a href="${faq}">полный FAQ</a>.`,
    boatTours: ({ faq }) =>
      `Частые вопросы об экскурсиях на лодке на Родосе. О бронировании и погоде см. <a href="${faq}">полный FAQ</a>.`,
    boatCruises: ({ faq }) =>
      `Частые вопросы о дневных круизах с Родоса. Для бронирования см. <a href="${faq}">полный FAQ</a>.`,
    catamaran: ({ faq }) =>
      `Частые вопросы о дневных и закатных круизах на катамаране. Подробнее в <a href="${faq}">полном FAQ</a>.`,
    sailing: ({ faq, charter }) =>
      `Частые вопросы о дневных парусных поездках. Для недельного чартера см. <a href="${charter}">аренду яхты</a> или <a href="${faq}">полный FAQ</a>.`,
    charter: ({ faq }) =>
      `Частые вопросы от чартерных клиентов, направляющихся в Додеканес. Подробнее в <a href="${faq}">полном FAQ</a>.`,
    rentABoat: ({ faq }) =>
      `Частые вопросы об аренде лодки без лицензии. Для бронирования см. <a href="${faq}">полный FAQ</a>.`,
    thingsToDo: ({ faq }) =>
      `Краткие ответы для первых посетителей. О бронировании, погоде и лицензии см. <a href="${faq}">полный FAQ</a>.`,
  },
  he: {
    boatTrips: ({ faq }) =>
      `שאלות נפוצות על טיולי סירות ברודוס — הפלגות משותפות וימים פרטיים עם סקיפר. לפרטי הזמנה ראו <a href="${faq}">שאלות נפוצות מלאות</a>.`,
    boatTours: ({ faq }) =>
      `שאלות נפוצות על סיורי סירות מודרכים ברודוס. לגבי הזמנה ומזג אוויר ראו <a href="${faq}">שאלות נפוצות מלאות</a>.`,
    boatCruises: ({ faq }) =>
      `שאלות נפוצות על הפלגות יום מרודוס. לפרטי הזמנה ראו <a href="${faq}">שאלות נפוצות מלאות</a>.`,
    catamaran: ({ faq }) =>
      `שאלות נפוצות על הפלגות קטמרן יום ושקיעה. למידע נוסף ראו <a href="${faq}">שאלות נפוצות מלאות</a>.`,
    sailing: ({ faq, charter }) =>
      `שאלות נפוצות על ימי שייט. לצ'ארטר שבועי ראו <a href="${charter}">צ'ארטר יאcht</a> או <a href="${faq}">שאלות נפוצות מלאות</a>.`,
    charter: ({ faq }) =>
      `שאלות נפוצות מצ'ארטרים בדרך לדודקנז. למידע נוסף ראו <a href="${faq}">שאלות נפוצות מלאות</a>.`,
    rentABoat: ({ faq }) =>
      `שאלות נפוצות על השכרת סירות ללא רישיון. לפרטי הזמנה ראו <a href="${faq}">שאלות נפוצות מלאות</a>.`,
    thingsToDo: ({ faq }) =>
      `תשובות מהירות למבקרים בפעם הראשונה. לגבי הזמנה, מזג אוויר ורישיון ראו <a href="${faq}">שאלות נפוצות מלאות</a>.`,
  },
  nl: {
    boatTrips: ({ faq }) =>
      `Veelgestelde vragen over boottrips op Rhodos — gedeelde cruises en privédagen met schipper. Voor boeken zie de <a href="${faq}">volledige FAQ</a>.`,
    boatTours: ({ faq }) =>
      `Veelgestelde vragen over begeleide boottours op Rhodos. Voor boeken en weer zie de <a href="${faq}">volledige FAQ</a>.`,
    boatCruises: ({ faq }) =>
      `Veelgestelde vragen over dagcruises vanaf Rhodos. Voor boeken zie de <a href="${faq}">volledige FAQ</a>.`,
    catamaran: ({ faq }) =>
      `Veelgestelde vragen over catamaran dag- en zonsondergangcruises. Meer in de <a href="${faq}">volledige FAQ</a>.`,
    sailing: ({ faq, charter }) =>
      `Veelgestelde vragen over zeildagtrips. Voor weekcharter zie <a href="${charter}">jachtcharter</a> of de <a href="${faq}">volledige FAQ</a>.`,
    charter: ({ faq }) =>
      `Veelgestelde vragen van charterklanten richting de Dodekanesos. Meer in de <a href="${faq}">volledige FAQ</a>.`,
    rentABoat: ({ faq }) =>
      `Veelgestelde vragen over verhuur zonder vaarbewijs. Voor boeken zie de <a href="${faq}">volledige FAQ</a>.`,
    thingsToDo: ({ faq }) =>
      `Snelle antwoorden voor eerste bezoekers. Voor boeken, weer en vaarbewijs zie de <a href="${faq}">volledige FAQ</a>.`,
  },
  pl: {
    boatTrips: ({ faq }) =>
      `Częste pytania o wycieczki łodzią na Rodos — wspólne rejsy i prywatne dni ze skiperem. W sprawie rezerwacji zob. <a href="${faq}">pełne FAQ</a>.`,
    boatTours: ({ faq }) =>
      `Częste pytania o wycieczki łodzią z przewodnikiem na Rodos. O rezerwacji i pogodzie zob. <a href="${faq}">pełne FAQ</a>.`,
    boatCruises: ({ faq }) =>
      `Częste pytania o rejsy dzienne z Rodos. W sprawie rezerwacji zob. <a href="${faq}">pełne FAQ</a>.`,
    catamaran: ({ faq }) =>
      `Częste pytania o rejsy katamaranem w ciągu dnia i o zachodzie słońca. Więcej w <a href="${faq}">pełnym FAQ</a>.`,
    sailing: ({ faq, charter }) =>
      `Częste pytania o jednodniowe rejsy żaglowe. W sprawie tygodniowego czarteru zob. <a href="${charter}">czarter jachtu</a> lub <a href="${faq}">pełne FAQ</a>.`,
    charter: ({ faq }) =>
      `Częste pytania od czarterujących kierujących się na Dodekanez. Więcej w <a href="${faq}">pełnym FAQ</a>.`,
    rentABoat: ({ faq }) =>
      `Częste pytania o wynajem bez patentu. W sprawie rezerwacji zob. <a href="${faq}">pełne FAQ</a>.`,
    thingsToDo: ({ faq }) =>
      `Szybkie odpowiedzi dla pierwszych gości. O rezerwacji, pogodzie i licencji zob. <a href="${faq}">pełne FAQ</a>.`,
  },
};

export function getFaqIntro(key: FaqIntroKey, locale: Locale | string | undefined): string {
  const loc =
    locale && locale in INTROS ? (locale as Locale) : DEFAULT_LOCALE;
  const links = {
    faq: localizedPath('/faq', loc),
    charter: localizedPath('/service/rhodes-charter', loc),
  };
  return INTROS[loc][key](links);
}

export const FAQ_SECTION_TITLES: Record<Locale, Record<'thingsToDo', string>> = {
  en: { thingsToDo: 'Choosing the Right Boat Experience in Rhodes' },
  de: { thingsToDo: 'Das passende Boaterlebnis auf Rhodos wählen' },
  it: { thingsToDo: 'Scegliere la giusta esperienza in barca a Rodi' },
  fr: { thingsToDo: 'Choisir la bonne expérience en bateau à Rhodes' },
  ru: { thingsToDo: 'Как выбрать подходящий морской опыт на Родосе' },
  he: { thingsToDo: 'איך לבחור את חוויית הסירה המתאימה ברודוס' },
  nl: { thingsToDo: 'De juiste bootervaring op Rhodos kiezen' },
  pl: { thingsToDo: 'Jak wybrać odpowiednie doświadczenie łodzią na Rodos' },
};

export function getFaqSectionTitle(
  key: 'thingsToDo',
  locale: Locale | string | undefined,
): string {
  const loc =
    locale && locale in FAQ_SECTION_TITLES ? (locale as Locale) : DEFAULT_LOCALE;
  return FAQ_SECTION_TITLES[loc][key];
}
