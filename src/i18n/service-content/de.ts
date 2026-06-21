import type { ServicePageContent } from '../../lib/service-content';

export const de: Record<string, ServicePageContent> = {
  'rhodes-boat-tours': {
    introQuote:
      'Nicht alle Bootstouren sind gleich. Das Boot, die Crew und die Stimmung machen den Unterschied.',
    features: [
      {
        icon: 'fas fa-water',
        title: 'Geführte Besichtigungstouren',
        text: 'Kleingruppen-Touren mit professionellem Skipper - Inselhüpfen, Küstenrouten und Sunset-Sails statt grosser All-inclusive-Kreuzfahrtschiffe.',
      },
      {
        icon: 'fas fa-check-circle',
        title: 'Sorgfaeltig ausgewählte Touren',
        text: 'Aus allen auf Rhodos verfügbaren Touren haben wir jene mit hochwertigen Booten, erfahrenen Crews und fairen Preisen ausgewählt.',
      },
      {
        icon: 'fas fa-map-marked-alt',
        title: 'Lokale Beratung',
        text: 'Nennen Sie uns Gruppengröße und Reisedaten - wir empfehlen Ihnen das Tourformat und die Route, die am besten passen.',
      },
    ],
    panel: {
      eyebrow: 'Lokale Experten seit 1998',
      title: 'Geführte Touren, ehrlich empfohlen',
      lead: 'Wir kennen die Skipper, die Boote und die Routen.',
      paragraphs: [
        'Bootstouren auf Rhodos reichen von kleinen Segelgruppen bis zu schnelleren Sightseeing-Fahrten entlang der Ostküste. Wir erklären Ihnen vor der Buchung die Unterschiede - Gruppengröße, Dauer, Inklusivleistungen und ob eine Tour oder ein privater Ausflug besser zu Ihnen passt.',
        'Jede Tour auf dieser Seite stammt von einem Anbieter, den wir persoenlich kennen. Keine anonymen Eintraege, keine bezahlten Platzierungen - nur ehrliche Beratung von Menschen, die taeglich im Hafen arbeiten.',
      ],
      imageKey: 'hero',
      reversed: false,
    },
    catalogTitle: 'Verfuegbare Bootstouren',
    catalogSubtitle: 'Ausgewaehlte geführte Erlebnisse mit Abfahrt ab Rhodos',
    ctaTitle: 'Unsicher, welche Tour zu Ihrer Gruppe passt?',
    ctaText:
      'Nennen Sie uns Ihre Daten und wer mitreist - wir empfehlen Ihnen ehrlich und ohne Druck die beste Option.',
  },
  'rhodes-boat-cruises': {
    introQuote:
      'Bootskreuzfahrten sind eine der besten Möglichkeiten, die Küste zu entdecken, bekannte Buchten zu besuchen und einen ganzen Tag auf dem Meer zu verbringen.',
    features: [
      {
        icon: 'fas fa-anchor',
        title: 'All-inclusive-Tageskreuzfahrten',
        text: 'Groessere Boote mit festen Routen nach Symi, Lindos oder entlang der Ostküste - Badestopps, Mittagessen und Getraenke inklusive.',
      },
      {
        icon: 'fas fa-map-signs',
        title: 'Mehrere Abfahrtshaefen',
        text: 'Abfahrten erfolgen je nach Route und Ziel ab Mandraki Harbour, Faliraki, Kolymbia und Lindos.',
      },
      {
        icon: 'fas fa-map-marked-alt',
        title: 'Lokale Beratung',
        text: 'Wir helfen Ihnen bei der passenden Kreuzfahrt nach Hotellage, Gruppengröße und der gewünschten Zeit auf dem Meer.',
      },
    ],
    panel: {
      eyebrow: 'Symi · Lindos · Ostküste',
      title: 'Organisierte Tageskreuzfahrten ab Rhodos',
      paragraphs: [
        'Tageskreuzfahrten sind die beliebteste Art, Symi, Lindos und die Buchten der Ostküste in einer Fahrt zu erleben - inklusive Mittagessen, Getränken und mehreren Badestopps.',
        'Wir arbeiten mit verlaesslichen lokalen Veranstaltern zusammen und helfen Ihnen bei der Wahl nach Abfahrtspunkt, Bootstyp und ob Sie eine gemeinsame Kreuzfahrt oder etwas Privateres bevorzugen.',
      ],
      imageKey: 'hero',
    },
    catalogTitle: 'Verfuegbare Tageskreuzfahrten',
    catalogSubtitle: 'Symi, Lindos, Anthony Quinn Bay und Routen entlang der Ostküste',
    ctaTitle: 'Brauchen Sie Hilfe bei der Kreuzfahrtwahl?',
    ctaText:
      'Teilen Sie uns Ihre Hotelregion und Gruppengröße mit - wir zeigen Ihnen die passende Abfahrt und Route.',
  },
  'rhodes-catamaran-tours': {
    introQuote:
      'Katamarane sind geraeumig, stabil und komfortabel - die entspannteste Art, einen Tag auf dem Meer zu verbringen.',
    features: [
      {
        icon: 'fas fa-sun',
        title: 'Katamaran-Tageskreuzfahrten',
        text: 'Ganztagestouren mit Badestopps, Mittagessen, Getränken und Zeit auf den Bugnetzen. Als gemeinsame oder private Option buchbar.',
      },
      {
        icon: 'fas fa-moon',
        title: 'Katamaran-Sunset-Touren',
        text: 'Abendfahrten mit Getränken und leichtem Dinner bei Sonnenuntergang - ideal für Paare und besondere Anlaesse.',
      },
      {
        icon: 'fas fa-users',
        title: 'Familienfreundliche Stabilitaet',
        text: 'Die zwei Rumpfe sorgen für weniger Schaukeln bei leichtem Wellengang - genau das Format, das Gaeste für Bade- und Lunchtage bevorzugen.',
      },
    ],
    panel: {
      eyebrow: 'Stabil · geraeumig · all-inclusive',
      title: 'Katamaran-Kreuzfahrten auf Rhodos',
      paragraphs: [
        'Katamaran-Tageskreuzfahrten entlang der Ostküste von Rhodos verbinden Komfort mit Inklusivleistungen - Mittagessen, Getraenke, Schnorchelausruestung und mehrere Badestopps auf einer flachen, stabilen Plattform.',
        'Wir waehlen Betreiber mit gepflegten Katamaranen und professionellen Crews aus und helfen bei der Entscheidung zwischen gemeinsamen Tagesfahrten, Sunset-Sails und privatem Katamaran-Charter.',
      ],
      imageKey: 'hero',
    },
    catalogTitle: 'Katamaran-Touren und -Kreuzfahrten',
    catalogSubtitle: 'Gemeinsame Tagesfahrten und private Katamaran-Erlebnisse',
    ctaTitle: 'Moechten Sie einen Katamaran nur für Ihre Gruppe?',
    ctaText:
      'Private Katamaran-Charter sind verfügbar - schreiben Sie uns mit Ihren Daten und Ihrer Gruppengröße.',
  },
  'rhodes-sailing-trips': {
    introQuote:
      'Beim Segeln geht es nicht um Geschwindigkeit - es geht um die Reise. Der Wind bestimmt die Route.',
    features: [
      {
        icon: 'fas fa-wind',
        title: 'Unter Segeln',
        text: 'Einrumpf-Segelyachten - langsamer, ruhiger und naeher am Meer als Motor-Kreuzfahrten.',
      },
      {
        icon: 'fas fa-users',
        title: 'Gemeinsam oder privat',
        text: 'Nehmen Sie an einer Kleingruppenfahrt teil oder chartern Sie eine Yacht für den Tag nur für Ihre Gruppe. Fuer Wochenurlaube siehe Yachtcharter.',
      },
      {
        icon: 'fas fa-map-marked-alt',
        title: 'Routen an der Ostküste',
        text: 'Halbtags- und Ganztags-Segelfahrten entlang der Küste von Rhodos mit professionellem Skipper bei jeder Abfahrt.',
      },
    ],
    panel: {
      eyebrow: 'Halbtag & Ganztag',
      title: 'Authentische Segeltage ab Rhodos',
      paragraphs: [
        'Segelausflüge auf Rhodos sind Tageserlebnisse mit Skipper auf Einrumpf-Yachten - halbtags entlang der Küste oder ganztags, wenn der Wind es erlaubt.',
        'Segelerfahrung ist nicht nötig: Der Skipper führt das Boot, waehrend Sie schwimmen, sonnenbaden und die Fahrt geniessen. Wenn Sie einen Führerschein haben und selbst steuern moechten, organisieren wir Bareboat-Charter separat.',
      ],
      imageKey: 'hero',
      reversed: true,
    },
    catalogTitle: 'Verfuegbare Segelausflüge',
    catalogSubtitle: 'Gemeinsame und private Tagesfahrten mit professionellen Skippern',
    ctaTitle: 'Neugierig aufs Segeln, aber noch unsicher?',
    ctaText:
      'Beschreiben Sie uns Ihre Gruppe und Ihr Komfortniveau - wir empfehlen ehrlich das passende Segelformat.',
  },
  'rhodes-boat-trips': {
    introQuote:
      'Ein privater Bootsausflug ist eine der persoenlichsten Arten, Rhodos zu erleben - Ihre Route, Ihr Tempo, nur Ihre Gruppe.',
    features: [
      {
        icon: 'fas fa-ship',
        title: 'Ihr privates Boot',
        text: 'Ein Boot mit Skipper, ausschliesslich für Ihre Gruppe - flexible Ausfluege von 2 bis 8 Stunden, keine gemeinsame Tour und kein grosses Kreuzfahrtschiff.',
      },
      {
        icon: 'fas fa-check-circle',
        title: 'Sorgfaeltig ausgewählte Boote',
        text: 'Speedboote, RIBs und kleine Katamarane von Anbietern, die wir kennen - hochwertige Boote und erfahrene Skipper.',
      },
      {
        icon: 'fas fa-map-marked-alt',
        title: 'Flexible Routen',
        text: 'Anthony Quinn Bay, Lindos, Suedkueste oder Badestopps an der Ostküste - Sie entscheiden gemeinsam mit dem Skipper am Tag selbst.',
      },
    ],
    panel: {
      eyebrow: 'Privat · mit Skipper · flexibel',
      title: 'Private Bootsausfluege für Ihre Gruppe',
      paragraphs: [
        'Private Bootsausfluege auf Rhodos bedeuten eigener Skipper, frei waehlbare Dauer und eine auf Ihre Gruppe zugeschnittene Route - ideal für Paare, Familien und Freunde, die das Boot für sich allein moechten.',
        'Die Preise beginnen in der Regel bei etwa €350 für einen halben Tag. Teilen Sie uns Daten und Wuensche mit, und wir verbinden Sie mit dem passenden Boot und der richtigen Crew.',
      ],
      imageKey: 'hero',
    },
    catalogTitle: 'Private Bootsausfluege',
    catalogSubtitle: 'Erlebnisse mit Skipper, exklusiv für Ihre Gruppe',
    routeGuide: {
      title: 'Beliebte Bootsausflug-Routen ab Rhodos',
      intro:
        'Bootsausfluege auf Rhodos reichen von guenstigen gemeinsamen Tageskreuzfahrten bis zu komplett privaten Speedboot-Chartern. Die meisten Gaeste fragen nach Symi, Lindos und den Badebuchten der Ostküste - hier sehen Sie den Vergleich der wichtigsten Routen und wo gemeinsame bzw. private Optionen passen.',
      routes: [
        {
          heading: 'Rhodos-Bootsausflug nach Symi',
          body: 'Der Tagesausflug nach Symi ist die meistgebuchte Bootsroute ab Rhodos. Gemeinsame Kreuzfahrten starten gegen 09:00 in Mandraki, ueberqueren die Strecke in etwa 75-90 Minuten und geben Ihnen vier bis fuenf Stunden im pastellfarbenen Hafen von Gialos, bevor es gegen 18:00 zurueckgeht. Rechnen Sie mit €45-€70 pro Person auf organisierten Tagesbooten mit Badestopp unterwegs. Private Speedboot-Ausfluege nach Symi eignen sich für Gruppen, die schnelle Ueberfahrten, das Panormitis-Kloster oder flexible Zeiten wuenschen - typischerweise €1.000-€1.300 pro Boot für bis zu sechs Gaeste. Sehen Sie sich <a href="/service/rhodes-boat-cruises">Symi-Tageskreuzfahrten</a> für gemeinsame Abfahrten oder die privaten Optionen in unserem Katalog unten an.',
        },
        {
          heading: 'Rhodos-Bootsausflug nach Lindos',
          body: "Bootsausfluege nach Lindos verbinden Schwimmen in St Paul's Bay mit Freizeit im Dorf unterhalb der Akropolis. Gemeinsame Kreuzfahrten ab Rhodos-Stadt oder Kolymbia liegen je nach Dauer und Mittagessen oft bei €39-€100 pro Person. Express-Routen fokussieren auf Lindos an Land; umfassendere Tageskreuzfahrten ergaenzen auf dem Rueckweg Badestopps in Anthony Quinn Bay oder Kalithea Springs. Private Speedboot-Ausfluege nach Lindos beginnen bei rund €460 für einen halben Tag und bei €700+ für einen ganzen Tag mit Lunch an Deck - ideal, wenn Sie die Aufenthaltsdauer im Dorf selbst bestimmen moechten. Entdecken Sie <a href=\"/service/rhodes-boat-cruises\">Lindos- und Ostküsten-Kreuzfahrten</a> oder fragen Sie einen privaten Lindos-Tagesausflug an.",
        },
        {
          heading: 'Badetouren an der Ostküste (Anthony Quinn, Kalithea, Ladiko)',
          body: 'Nicht jeder Bootsausflug ab Rhodos führt zu einer anderen Insel. Halbtags- und Ganztagsrouten entlang der Ostküste bleiben in geschützten Küstenabschnitten - Anthony Quinn Bay, Kalithea Springs, Ladiko und die Traganou-Höhlen sind klassische Bade- und Schnorchelstopps. Gemeinsame All-inclusive-Kreuzfahrten kosten €45-€75 pro Person mit Mittagessen und Getränken an Bord. Private Halbtagsfahrten ab €350 ermöglichen Ihrer Gruppe zwei bis drei Buchten im eigenen Tempo ohne festen Zeitplan. Diese Routen sind ideal für Erstbesucher, die türkisfarbenes Wasser ohne offene Seepassage suchen.',
        },
        {
          heading: 'Bootsausfluege ab Kolymbia und Faliraki',
          body: "Wenn Sie an der Ostküste wohnen, verkuerzen Abfahrten ab Kolymbia oder Faliraki die Transferzeit nach Symi, Lindos und zu lokalen Badebuchten. Expressboote nach Symi ab Kolymbia starten oft spaeter als Verbindungen ab Mandraki und beinhalten einen Badestopp in St George's Bay. Sea-Shuttles ab Faliraki verbinden die Resortzone mit dem Hafen von Rhodos-Stadt für Gaeste, die nicht fahren moechten. Teilen Sie uns bei Ihrer Anfrage Ihre Hotelregion mit - wir empfehlen die sinnvoll naechste Abfahrt, statt Sie unnötig ueber die Insel zu schicken.",
        },
      ],
      closing:
        'Gemeinsame Tageskreuzfahrten bieten den besten Preis pro Person; private Ausfluege mit Skipper geben Ihnen Boot, Route und Zeitplan ganz für sich. Wir kuratieren beides seit 1998 - <a href="/service/rhodes-boat-cruises">vergleichen Sie gemeinsame Rhodos-Bootskreuzfahrten</a>, entdecken Sie unten die privaten Ausfluege oder <a href="/contact">fragen Sie uns</a>, welches Format zu Ihren Daten und Ihrer Gruppe passt.',
    },
    ctaTitle: 'Planen Sie einen privaten Tag auf dem Wasser?',
    ctaText:
      'Senden Sie uns Ihre Daten, Gruppengröße und Ideen - wir erstellen ein Angebot mit den besten verfügbaren Optionen.',
  },
  'rhodes-rent-a-boat': {
    introQuote:
      'Steuern Sie Ihr eigenes Boot entlang der Küste von Rhodos - für Boote bis 30 PS ist kein Führerschein nötig.',
    features: [
      {
        icon: 'fas fa-id-card',
        title: 'Kein Führerschein erforderlich',
        text: 'Nach griechischem Recht duerfen alle Personen ab 18 Jahren Freizeitboote bis 30 PS ohne offiziellen Bootsfuehrerschein steuern.',
      },
      {
        icon: 'fas fa-map',
        title: 'Freiheit entlang der Küste',
        text: 'Entdecken Sie Buchten der Ostküste in Ihrem eigenen Tempo - Anthony Quinn, Ladiko, Kalithea und geschuetzte Badeplaetze innerhalb der erlaubten Zone.',
      },
      {
        icon: 'fas fa-check-circle',
        title: 'Sorgfaeltig ausgewählte Anbieter',
        text: 'Wir arbeiten mit verlaesslichen Vermietstationen, die wir persoenlich kennen - Einweisung, Treibstoff, Karte und Sicherheitsausruestung inklusive.',
      },
    ],
    panel: {
      eyebrow: 'Selbstfahrer · Ostküste',
      title: 'Führerscheinfreie Bootsvermietung auf Rhodos',
      paragraphs: [
        'Ein eigenes Mietboot ist die unabhaengigste Art, Rhodos vom Meer aus zu sehen - stoppen, wann Sie moechten, schwimmen, wo es Ihnen gefaellt, und zurueckkehren, wenn Sie bereit sind.',
        'Vor dem Ablegen erhalten Sie eine Sicherheitseinweisung und eine Karte Ihres erlaubten Fahrgebiets. Wir helfen Ihnen ehrlich bei der Wahl der richtigen Bootsgroesse und Mietdauer für Ihre Gruppe.',
      ],
      imageKey: 'hero',
    },
    catalogTitle: 'Verfuegbare Mietboote',
    catalogSubtitle: 'Führerscheinfreie Selbstfahrer-Boote entlang der Küste von Rhodos',
    ctaTitle: 'Unsicher, welches Mietboot zu Ihrer Gruppe passt?',
    ctaText:
      'Nennen Sie uns Ihre Daten und Personenzahl - wir empfehlen das passende Boot und die richtige Basis.',
  },
  'rhodes-charter': {
    introQuote:
      'Yachtcharter ist eine andere Art von Meeresurlaub - mehrtaegiges Segeln, Inselhüpfen und die Freiheit der offenen Aegaeis.',
    features: [
      {
        icon: 'fas fa-compass',
        title: 'Bareboat-Charter',
        text: 'Segelyacht ohne Skipper - für erfahrene Segler mit gueltiger Lizenz, die ihre eigene Dodekanes-Route planen.',
      },
      {
        icon: 'fas fa-user-shield',
        title: 'Charter mit Skipper',
        text: 'Professioneller Skipper an Bord - keine Segelerfahrung erforderlich, Navigation und Ankerplaetze werden komplett uebernommen.',
      },
      {
        icon: 'fas fa-map-marked-alt',
        title: 'Lokale Beratung',
        text: 'Wir verbinden Sie mit dem passenden Charterunternehmen und der richtigen Yachtklasse für Crew, Daten und Route.',
      },
    ],
    panel: {
      eyebrow: 'Wochencharter · Dodekanes',
      title: 'Yachtcharter ab Rhodes Marina',
      paragraphs: [
        'Ein woechentlicher Yachtcharter ab Rhodos erschliesst den Dodekanes - Symi, Chalki, Kos, Nisyros und ruhige Ankerplaetze, die nur unter Segeln erreichbar sind.',
        'Waehlen Sie Bareboat mit anerkannter Lizenz oder Charter mit Skipper für maximalen Komfort. Wir beraten zu Saison, Yachttyp und realistischen Routen für Ihre Crew.',
      ],
      imageKey: 'hero',
      reversed: true,
    },
    catalogTitle: 'Charter-Yachten und Optionen',
    catalogSubtitle: 'Bareboat- und Skipper-Wochencharter für Segelurlaube',
    ctaTitle: 'Planen Sie einen Segelurlaub im Dodekanes?',
    ctaText:
      'Teilen Sie uns Ihre Daten, Erfahrung und Gruppengröße mit - wir finden den passenden Charter-Partner.',
  },
  'rhodes-mice-events': {
    introQuote:
      'Rhodos vereint Küste, Geschichte, Resorts und Marinas - alles, was für komplette Corporate- und Incentive-Programme nötig ist.',
    features: [
      {
        icon: 'fas fa-building',
        title: 'Corporate Events',
        text: 'Incentive-Reisen, Teambuilding, Konferenzen, Produktlaunches und VIP-Feiern auf Rhodos.',
      },
      {
        icon: 'fas fa-ship',
        title: 'Bootserlebnisse',
        text: 'Fleet-Days, Katamaran-Kreuzfahrten, Yachtcharter und Segeltrips für Gruppen jeder Groesse.',
      },
      {
        icon: 'fas fa-handshake',
        title: 'Lokales Netzwerk',
        text: 'Wir verbinden Planer mit verlaesslichen Booten, Locations, Transfers und Dienstleistern auf der ganzen Insel.',
      },
    ],
    panel: {
      eyebrow: 'MICE · Incentive · Corporate',
      title: 'Events und Incentives auf dem Wasser',
      paragraphs: [
        'Rhodos ist ein natuerliches MICE-Ziel: Resorts, Marinas, die mittelalterliche Altstadt und ein breites Spektrum an Meereserlebnissen in unmittelbarer Naehe.',
        'Von Flotten-Regatten und Katamaran-Tagen bis zu VIP-Yacht-Dinners und kombinierten Land-und-See-Programmen - wir koordinieren ueber unser lokales Netzwerk, damit Ihr Event reibungslos laeuft.',
      ],
      imageKey: 'hero',
    },
    catalogTitle: 'MICE- und Eventformate',
    catalogSubtitle: 'Wasserbasierte Corporate- und Incentive-Programme auf Rhodos',
    ctaTitle: 'Planen Sie ein Corporate Event auf Rhodos?',
    ctaText:
      'Teilen Sie uns Gruppengröße, Termine und Ziele mit - wir skizzieren realistische Optionen auf dem Wasser.',
  },
  'rhodes-tender-boat': {
    introQuote:
      'Professionelle Shore-to-Ship-Transfers in den Haefen und Buchten von Rhodos - zuverlaessig, puenktlich und in der Saison rund um die Uhr.',
    features: [
      {
        icon: 'fas fa-bolt',
        title: 'Schnelle Reaktionszeit',
        text: 'Transfers auf Abruf mit typischer Reaktionszeit unter 15 Minuten in den wichtigsten Hafenbereichen.',
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Sicher und lizenziert',
        text: 'Gepflegte Tenderboote mit professionellen Operatoren, die für alle Bedingungen geschult sind.',
      },
      {
        icon: 'fas fa-calendar-check',
        title: 'Geplant oder auf Abruf',
        text: 'Regelmaessige Transfers vorab planen oder sofortige Abholung bei Bedarf anfordern.',
      },
    ],
    panel: {
      eyebrow: 'Marine-Transfers',
      title: 'Tenderboot-Service auf Rhodos',
      paragraphs: [
        'Tenderboote überbrücken die Distanz zwischen Küste und Schiff - für Kreuzfahrtgäste, Superyacht-Gaeste, Marina-Transfers und Hafen-zu-Yacht-Fahrten rund um Rhodos.',
        'Wir arbeiten mit lizenzierten lokalen Betreibern zusammen, die jeden Pier, jede Zeitvorgabe und jede Wettersituation in Mandraki, Rhodes Marina und den Ankerplaetzen der Ostküste kennen.',
      ],
      imageKey: 'hero',
      reversed: true,
    },
    catalogTitle: 'Verfuegbare Tender-Services',
    catalogSubtitle: 'Shore-to-Ship-Transfers in Mandraki, Rhodes Marina und den Buchten der Ostküste',
    ctaTitle: 'Benötigen Sie einen Tender-Transfer auf Rhodos?',
    ctaText:
      'Nennen Sie uns Hafen, Uhrzeit und Passagierzahl - wir verbinden Sie mit dem passenden Betreiber.',
  },
};
