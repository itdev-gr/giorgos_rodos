import { DEFAULT_LOCALE, type Locale } from './locales';

export interface ContactFormLabels {
  title: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
  submit: string;
  eyebrow: string;
  sideTitle: string;
  officeAddress: string;
  boatPickup: string;
  boatPickupText: string;
  callUs: string;
  emailUs: string;
  homeInfoIntro: string;
  subjectLabel: string;
  subjectPlaceholder: string;
  subjects: {
    charter: string;
    tour: string;
    rental: string;
    event: string;
    other: string;
  };
}

export interface ThingsToDoSearchLabels {
  placeholder: string;
  all: string;
  foundOne: string;
  foundMany: string;
  emptyTitle: string;
  emptyHint: string;
}

const CONTACT_FORM: Record<Locale, ContactFormLabels> = {
  en: {
    title: 'Send us a message',
    firstName: 'First Name *',
    lastName: 'Last Name *',
    phone: 'Phone Number',
    email: 'Email *',
    message: 'Write a message *',
    submit: 'Send Message',
    eyebrow: 'Contact Us',
    sideTitle: 'Get In Touch',
    officeAddress: 'Office Address',
    boatPickup: 'Boat Pickup Location',
    boatPickupText: 'Mandraki Harbour & Rhodes marinas',
    callUs: 'Call Us',
    emailUs: 'Email Us',
    homeInfoIntro:
      'Tell us your dates and group size. We reply with clear advice, fair prices, and boats we know personally.',
    subjectLabel: "I'm interested in",
    subjectPlaceholder: 'Select an option',
    subjects: {
      charter: 'Private Yacht Charter',
      tour: 'Boat Tour / Cruise',
      rental: 'Boat Rental',
      event: 'Special Event',
      other: 'Something Else',
    },
  },
  de: {
    title: 'Schreiben Sie uns',
    firstName: 'Vorname *',
    lastName: 'Nachname *',
    phone: 'Telefonnummer',
    email: 'E-Mail *',
    message: 'Ihre Nachricht *',
    submit: 'Nachricht senden',
    eyebrow: 'Kontakt',
    sideTitle: 'Kontakt aufnehmen',
    officeAddress: 'Büroadresse',
    boatPickup: 'Bootsabholung',
    boatPickupText: 'Hafen Mandraki & Marinas auf Rhodos',
    callUs: 'Anrufen',
    emailUs: 'E-Mail schreiben',
    homeInfoIntro:
      'Nennen Sie uns Ihre Daten und Gruppengröße. Wir antworten mit klarer Beratung, fairen Preisen und Booten, die wir persönlich kennen.',
    subjectLabel: 'Ich interessiere mich für',
    subjectPlaceholder: 'Option wählen',
    subjects: {
      charter: 'Privater Yachtcharter',
      tour: 'Bootstour / Kreuzfahrt',
      rental: 'Boot mieten',
      event: 'Sonderveranstaltung',
      other: 'Etwas anderes',
    },
  },
  it: {
    title: 'Inviaci un messaggio',
    firstName: 'Nome *',
    lastName: 'Cognome *',
    phone: 'Telefono',
    email: 'Email *',
    message: 'Scrivi un messaggio *',
    submit: 'Invia messaggio',
    eyebrow: 'Contatti',
    sideTitle: 'Mettiti in contatto',
    officeAddress: 'Indirizzo ufficio',
    boatPickup: 'Punto imbarco',
    boatPickupText: 'Porto Mandraki e marine di Rodi',
    callUs: 'Chiamaci',
    emailUs: 'Scrivici',
    homeInfoIntro:
      'Indicaci date e numero di persone. Rispondiamo con consigli chiari, prezzi onesti e barche che conosciamo personalmente.',
    subjectLabel: 'Mi interessa',
    subjectPlaceholder: 'Seleziona un’opzione',
    subjects: {
      charter: 'Charter yacht privato',
      tour: 'Tour / crociera in barca',
      rental: 'Noleggio barca',
      event: 'Evento speciale',
      other: 'Altro',
    },
  },
  fr: {
    title: 'Envoyez-nous un message',
    firstName: 'Prénom *',
    lastName: 'Nom *',
    phone: 'Téléphone',
    email: 'E-mail *',
    message: 'Votre message *',
    submit: 'Envoyer le message',
    eyebrow: 'Contact',
    sideTitle: 'Nous contacter',
    officeAddress: 'Adresse du bureau',
    boatPickup: 'Point d’embarquement',
    boatPickupText: 'Port Mandraki et marinas de Rhodes',
    callUs: 'Nous appeler',
    emailUs: 'Nous écrire',
    homeInfoIntro:
      'Indiquez vos dates et la taille du groupe. Nous répondons avec des conseils clairs, des prix justes et des bateaux que nous connaissons personnellement.',
    subjectLabel: 'Je suis intéressé par',
    subjectPlaceholder: 'Choisir une option',
    subjects: {
      charter: 'Charter yacht privé',
      tour: 'Excursion / croisière en bateau',
      rental: 'Location de bateau',
      event: 'Événement spécial',
      other: 'Autre',
    },
  },
  ru: {
    title: 'Напишите нам',
    firstName: 'Имя *',
    lastName: 'Фамилия *',
    phone: 'Телефон',
    email: 'Email *',
    message: 'Сообщение *',
    submit: 'Отправить',
    eyebrow: 'Контакты',
    sideTitle: 'Связаться с нами',
    officeAddress: 'Адрес офиса',
    boatPickup: 'Место посадки на лодку',
    boatPickupText: 'Порт Мандраки и марины Родоса',
    callUs: 'Позвонить',
    emailUs: 'Написать на email',
    homeInfoIntro:
      'Укажите даты и размер группы. Мы ответим с чёткими рекомендациями, честными ценами и лодками, которые знаем лично.',
    subjectLabel: 'Меня интересует',
    subjectPlaceholder: 'Выберите вариант',
    subjects: {
      charter: 'Частный яхтенный чартер',
      tour: 'Морская экскурсия / круиз',
      rental: 'Аренда лодки',
      event: 'Особое мероприятие',
      other: 'Другое',
    },
  },
  he: {
    title: 'שלחו לנו הודעה',
    firstName: 'שם פרטי *',
    lastName: 'שם משפחה *',
    phone: 'טלפון',
    email: 'אימייל *',
    message: 'כתבו הודעה *',
    submit: 'שליחת הודעה',
    eyebrow: 'צור קשר',
    sideTitle: 'דברו איתנו',
    officeAddress: 'כתובת המשרד',
    boatPickup: 'נקודת עלייה לסירה',
    boatPickupText: 'נמל Mandraki ומרינות ברודוס',
    callUs: 'התקשרו',
    emailUs: 'שלחו אימייל',
    homeInfoIntro:
      'ספרו לנו על התאריכים וגודל הקבוצה. נחזור עם ייעוץ ברור, מחירים הוגנים וסירות שאנחנו מכירים באופן אישי.',
    subjectLabel: 'אני מתעניין/ת ב',
    subjectPlaceholder: 'בחרו אפשרות',
    subjects: {
      charter: 'צ\'ארטר יאכט פרטי',
      tour: 'סיור / הפלגה בסירה',
      rental: 'השכרת סירה',
      event: 'אירוע מיוחד',
      other: 'משהו אחר',
    },
  },
  nl: {
    title: 'Stuur ons een bericht',
    firstName: 'Voornaam *',
    lastName: 'Achternaam *',
    phone: 'Telefoonnummer',
    email: 'E-mail *',
    message: 'Schrijf een bericht *',
    submit: 'Bericht versturen',
    eyebrow: 'Contact',
    sideTitle: 'Neem contact op',
    officeAddress: 'Kantooradres',
    boatPickup: 'Opstaplocatie',
    boatPickupText: 'Haven Mandraki en jachthavens Rhodos',
    callUs: 'Bel ons',
    emailUs: 'E-mail ons',
    homeInfoIntro:
      'Vertel ons uw data en groepsgrootte. We antwoorden met duidelijk advies, eerlijke prijzen en boten die we persoonlijk kennen.',
    subjectLabel: 'Ik ben geïnteresseerd in',
    subjectPlaceholder: 'Kies een optie',
    subjects: {
      charter: 'Privé jachtcharter',
      tour: 'Boottocht / cruise',
      rental: 'Boot huren',
      event: 'Speciaal evenement',
      other: 'Iets anders',
    },
  },
  pl: {
    title: 'Wyślij nam wiadomość',
    firstName: 'Imię *',
    lastName: 'Nazwisko *',
    phone: 'Telefon',
    email: 'E-mail *',
    message: 'Wiadomość *',
    submit: 'Wyślij wiadomość',
    eyebrow: 'Kontakt',
    sideTitle: 'Skontaktuj się',
    officeAddress: 'Adres biura',
    boatPickup: 'Miejsce wejścia na łódź',
    boatPickupText: 'Port Mandraki i mariny Rodos',
    callUs: 'Zadzwoń',
    emailUs: 'Napisz e-mail',
    homeInfoIntro:
      'Podaj daty i wielkość grupy. Odpowiemy z jasną poradą, uczciwymi cenami i łodziami, które znamy osobiście.',
    subjectLabel: 'Interesuje mnie',
    subjectPlaceholder: 'Wybierz opcję',
    subjects: {
      charter: 'Prywatny czarter jachtu',
      tour: 'Wycieczka / rejs łodzią',
      rental: 'Wynajem łodzi',
      event: 'Wydarzenie specjalne',
      other: 'Coś innego',
    },
  },
};

const THINGS_SEARCH: Record<Locale, ThingsToDoSearchLabels> = {
  en: {
    placeholder: 'Search tours, boats, experiences...',
    all: 'All',
    foundOne: '{count} experience found',
    foundMany: '{count} experiences found',
    emptyTitle: 'No experiences found',
    emptyHint: 'Try a different search or filter.',
  },
  de: {
    placeholder: 'Touren, Boote, Erlebnisse suchen...',
    all: 'Alle',
    foundOne: '{count} Erlebnis gefunden',
    foundMany: '{count} Erlebnisse gefunden',
    emptyTitle: 'Keine Erlebnisse gefunden',
    emptyHint: 'Versuchen Sie eine andere Suche oder einen anderen Filter.',
  },
  it: {
    placeholder: 'Cerca tour, barche, esperienze...',
    all: 'Tutti',
    foundOne: '{count} esperienza trovata',
    foundMany: '{count} esperienze trovate',
    emptyTitle: 'Nessuna esperienza trovata',
    emptyHint: 'Prova una ricerca o un filtro diverso.',
  },
  fr: {
    placeholder: 'Rechercher tours, bateaux, expériences...',
    all: 'Tous',
    foundOne: '{count} expérience trouvée',
    foundMany: '{count} expériences trouvées',
    emptyTitle: 'Aucune expérience trouvée',
    emptyHint: 'Essayez une autre recherche ou un autre filtre.',
  },
  ru: {
    placeholder: 'Поиск туров, лодок, впечатлений...',
    all: 'Все',
    foundOne: 'Найдено: {count}',
    foundMany: 'Найдено: {count}',
    emptyTitle: 'Ничего не найдено',
    emptyHint: 'Попробуйте другой запрос или фильтр.',
  },
  he: {
    placeholder: 'חיפוש סיורים, סירות, חוויות...',
    all: 'הכל',
    foundOne: 'נמצאה חוויה {count}',
    foundMany: 'נמצאו {count} חוויות',
    emptyTitle: 'לא נמצאו חוויות',
    emptyHint: 'נסו חיפוש או מסנן אחר.',
  },
  nl: {
    placeholder: 'Zoek tours, boten, ervaringen...',
    all: 'Alle',
    foundOne: '{count} ervaring gevonden',
    foundMany: '{count} ervaringen gevonden',
    emptyTitle: 'Geen ervaringen gevonden',
    emptyHint: 'Probeer een andere zoekopdracht of filter.',
  },
  pl: {
    placeholder: 'Szukaj wycieczek, łodzi, doświadczeń...',
    all: 'Wszystkie',
    foundOne: 'Znaleziono {count} doświadczenie',
    foundMany: 'Znaleziono {count} doświadczeń',
    emptyTitle: 'Nie znaleziono doświadczeń',
    emptyHint: 'Spróbuj innego wyszukiwania lub filtra.',
  },
};

export function getContactFormLabels(locale: Locale | string | undefined): ContactFormLabels {
  const key = locale && locale in CONTACT_FORM ? (locale as Locale) : DEFAULT_LOCALE;
  return CONTACT_FORM[key];
}

export function getThingsToDoSearchLabels(locale: Locale | string | undefined): ThingsToDoSearchLabels {
  const key = locale && locale in THINGS_SEARCH ? (locale as Locale) : DEFAULT_LOCALE;
  return THINGS_SEARCH[key];
}

/** Map service_page slug → localized category label from nav services. */
export const SERVICE_PAGE_LABEL_KEYS: Record<string, keyof import('./messages/types').NavMessages['services']> = {
  'rhodes-boat-tours': 'boatTours',
  'rhodes-boat-trips': 'boatTrips',
  'rhodes-boat-cruises': 'boatCruises',
  'rhodes-catamaran-tours': 'catamaranTours',
  'rhodes-sailing-trips': 'sailingTrips',
  'rhodes-charter': 'yachtCharter',
  'rhodes-rent-a-boat': 'rentABoat',
};
