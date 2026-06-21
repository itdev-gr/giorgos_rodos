import type { ServicePageContent } from '../../lib/service-content';

export const nl: Record<string, ServicePageContent> = {
  'rhodes-boat-tours': {
    introQuote:
      'Niet alle boottours zijn hetzelfde. De boot, de bemanning en de sfeer maken het verschil.',
    features: [
      {
        icon: 'fas fa-water',
        title: 'Rondvaarten met gids',
        text: "Kleinschalige tours met een professionele schipper - eilandhops, kustroutes en zonsondergangtochten, geen grote all-inclusive cruiseschepen.",
      },
      {
        icon: 'fas fa-check-circle',
        title: 'Zorgvuldig geselecteerde tours',
        text: 'Uit alle tours op Rhodos hebben we alleen opties gekozen met kwaliteitsboten, ervaren crews en eerlijke prijzen.',
      },
      {
        icon: 'fas fa-map-marked-alt',
        title: 'Lokaal advies',
        text: 'Geef je groepsgrootte en reisdata door - wij koppelen je aan het tourtype en de route die het best passen.',
      },
    ],
    panel: {
      eyebrow: 'Lokale experts sinds 1998',
      title: 'Rondvaarten met gids, eerlijk aanbevolen',
      lead: 'Wij kennen de schippers, de boten en de routes.',
      paragraphs: [
        'Boottours op Rhodos lopen uiteen van kleine zeilgroepen tot snellere sightseeingtrips langs de oostkust. We helpen je het verschil te begrijpen voordat je boekt: groepsgrootte, duur, wat inbegrepen is en of een tour of privetrip beter bij je past.',
        'Elke tour op deze pagina is van een aanbieder die wij persoonlijk kennen. Geen anonieme listings, geen betaalde plaatsingen - alleen eerlijk advies van mensen die elke dag in de haven werken.',
      ],
      imageKey: 'hero',
      reversed: false,
    },
    catalogTitle: 'Beschikbare boottours',
    catalogSubtitle: 'Geselecteerde begeleide ervaringen met vertrek vanaf Rhodos',
    ctaTitle: 'Twijfel je welke tour bij je groep past?',
    ctaText:
      'Vertel ons je data en met wie je reist - we adviseren de beste optie, eerlijk en zonder druk.',
  },
  'rhodes-boat-cruises': {
    introQuote:
      'Bootcruises zijn een van de beste manieren om de kustlijn te verkennen, bekende baaien te bezoeken en een volledige dag op zee door te brengen.',
    features: [
      {
        icon: 'fas fa-anchor',
        title: 'All-inclusive dagcruises',
        text: 'Grotere boten met vaste routes naar Symi, Lindos of langs de oostkust - zwemstops, lunch en drankjes inbegrepen.',
      },
      {
        icon: 'fas fa-map-signs',
        title: 'Meerdere vertrekpunten',
        text: 'Cruises vertrekken vanuit Mandraki-haven, Faliraki, Kolymbia en Lindos, afhankelijk van route en bestemming.',
      },
      {
        icon: 'fas fa-map-marked-alt',
        title: 'Lokaal advies',
        text: 'Wij helpen je de juiste cruise te kiezen op basis van je hotelregio, groepsgrootte en hoeveel tijd je op zee wilt doorbrengen.',
      },
    ],
    panel: {
      eyebrow: 'Symi · Lindos · Oostkust',
      title: 'Georganiseerde dagcruises vanaf Rhodos',
      paragraphs: [
        'Dagcruises zijn de populairste manier voor bezoekers om Symi, Lindos en de baaien van de oostkust in een reis te zien - met lunch, drankjes en meerdere zwemstops inbegrepen.',
        'We werken met betrouwbare lokale operators en helpen je kiezen op vertrekpunt, romptype en of je liever een gedeelde cruise of iets privaters wilt.',
      ],
      imageKey: 'hero',
    },
    catalogTitle: 'Beschikbare dagcruises',
    catalogSubtitle: 'Symi, Lindos, Anthony Quinn Bay en routes langs de oostkust',
    ctaTitle: 'Hulp nodig bij het kiezen van een cruise?',
    ctaText:
      'Deel je hotelgebied en groepsgrootte - wij wijzen je naar de juiste vertrekhaven en route.',
  },
  'rhodes-catamaran-tours': {
    introQuote:
      'Catamarans zijn ruim, stabiel en comfortabel - de meest ontspannen manier om een dag op zee door te brengen.',
    features: [
      {
        icon: 'fas fa-sun',
        title: 'Catamaran dagcruises',
        text: 'Volledige dagtours met zwemstops, lunch, drankjes en tijd op de boegnetten. Gedeelde en privé-opties beschikbaar.',
      },
      {
        icon: 'fas fa-moon',
        title: 'Catamaran sunset tours',
        text: 'Avondtochten met drankjes en een lichte maaltijd tijdens zonsondergang - ideaal voor koppels en vieringen.',
      },
      {
        icon: 'fas fa-users',
        title: 'Stabiel en gezinsvriendelijk',
        text: 'Twee rompen betekenen minder rollen bij lichte golfslag - het format dat de meeste gasten prefereren voor zwem- en lunchdagen.',
      },
    ],
    panel: {
      eyebrow: 'Stabiel · ruim · all-inclusive',
      title: 'Catamarancruises op Rhodos',
      paragraphs: [
        'Catamaran dagcruises langs de oostkust van Rhodos combineren comfort met complete inclusies - lunch, drankjes, snorkeluitrusting en meerdere zwemstops op een vlak en stabiel platform.',
        'We selecteren operators met goed onderhouden catamarans en professionele crews, en helpen je kiezen tussen gedeelde dagcruises, sunset sails en prive catamarancharter.',
      ],
      imageKey: 'hero',
    },
    catalogTitle: 'Catamaran tours en cruises',
    catalogSubtitle: 'Gedeelde dagtochten en prive-ervaringen met catamaran',
    ctaTitle: 'Wil je een catamaran alleen voor je eigen groep?',
    ctaText:
      'Privé catamarancharters zijn beschikbaar - stuur ons je data en groepsgrootte.',
  },
  'rhodes-sailing-trips': {
    introQuote:
      'Zeilen draait niet om snelheid - het gaat om de reis. De wind bepaalt de route.',
    features: [
      {
        icon: 'fas fa-wind',
        title: 'Onder zeil',
        text: 'Monohull zeiljachten - langzamer, stiller en meer verbonden met de zee dan motorcruises.',
      },
      {
        icon: 'fas fa-users',
        title: 'Gedeeld en privé',
        text: 'Sluit je aan bij een kleine groepstocht of charter een jacht voor je groep voor een dag. Voor weekvakanties: zie yacht charter.',
      },
      {
        icon: 'fas fa-map-marked-alt',
        title: 'Routes langs de oostkust',
        text: 'Halve- en hele-dag zeiltochten langs de kust van Rhodos met een professionele schipper bij elk vertrek.',
      },
    ],
    panel: {
      eyebrow: 'Halve dag en hele dag',
      title: 'Authentieke zeildagen vanaf Rhodos',
      paragraphs: [
        'Zeiltrips op Rhodos zijn dagervaringen met schipper op monohull jachten - halve dag langs de kust of hele dag routes wanneer de wind het toelaat.',
        'Geen zeilervaring nodig: de schipper regelt de boot terwijl jij zwemt, zonnebaadt en geniet van de tocht. Heb je een vaarbewijs en wil je zelf schipperen, dan regelen we bareboat charter apart.',
      ],
      imageKey: 'hero',
      reversed: true,
    },
    catalogTitle: 'Beschikbare zeiltrips',
    catalogSubtitle: 'Gedeelde en privé dagtochten met professionele schippers',
    ctaTitle: 'Benieuwd naar zeilen maar nog niet zeker?',
    ctaText:
      'Beschrijf je groep en comfortniveau - wij adviseren eerlijk het juiste zeilformat.',
  },
  'rhodes-boat-trips': {
    introQuote:
      'Een privé boottrip is een van de meest persoonlijke manieren om Rhodos te beleven - jouw route, jouw tempo, alleen jouw groep.',
    features: [
      {
        icon: 'fas fa-ship',
        title: 'Jouw privéboot',
        text: 'Een boot met schipper exclusief voor je groep - flexibele trips van 2-8 uur, geen gedeelde tour of groot cruiseschip.',
      },
      {
        icon: 'fas fa-check-circle',
        title: 'Geselecteerde boten',
        text: 'Speedboten, RIBs en kleine catamarans van operators die we kennen - kwaliteitsvaartuigen en ervaren schippers.',
      },
      {
        icon: 'fas fa-map-marked-alt',
        title: 'Flexibele routes',
        text: 'Anthony Quinn Bay, Lindos, zuidkust of zwemstops langs de oostkust - je kiest samen met de schipper op de dag zelf.',
      },
    ],
    panel: {
      eyebrow: 'Privé · met schipper · flexibel',
      title: 'Privé boottrips voor je groep',
      paragraphs: [
        'Privé boottrips op Rhodos betekenen je eigen schipper, je gewenste duur en een route op maat voor je groep - koppels, families en vrienden die de boot voor zichzelf willen.',
        'Prijzen starten meestal rond €350 voor een halve dag. Geef je data en voorkeuren door en wij koppelen je aan het juiste schip en de juiste crew.',
      ],
      imageKey: 'hero',
    },
    catalogTitle: 'Privé boottrips',
    catalogSubtitle: 'Ervaringen met schipper, exclusief voor je groep',
    routeGuide: {
      title: 'Populaire boottriproutes op Rhodos',
      intro:
        'Boottrips op Rhodos lopen uiteen van budgetvriendelijke gedeelde dagcruises tot volledig privé speedbootcharters. De meeste bezoekers vragen naar Symi, Lindos en de zwembaaien van de oostkust - dit is hoe de belangrijkste routes zich tot elkaar verhouden en waar gedeelde en privé-opties passen.',
      routes: [
        {
          heading: 'Boottrip van Rhodos naar Symi',
          body: 'De dagtrip naar Symi is de meest geboekte bootroute vanaf Rhodos. Gedeelde cruises vertrekken rond 09:00 vanuit Mandraki, steken in ongeveer 75-90 minuten over en geven je vier tot vijf uur in de pastelgekleurde haven van Gialos voordat je rond 18:00 terugkeert. Reken op €45-€70 per persoon voor georganiseerde dagboten met onderweg een zwemstop. Privé speedboottrips naar Symi zijn geschikt voor groepen die snellere overtochten willen, Panormitis-klooster willen bezoeken of flexibelere tijden wensen - meestal €1,000-€1,300 per boot voor maximaal zes gasten. Bekijk <a href="/service/rhodes-boat-cruises">dagcruises naar Symi</a> voor gedeelde vertrekken of de privé-opties in onze catalogus hieronder.',
        },
        {
          heading: 'Boottrip van Rhodos naar Lindos',
          body: 'Boottrips naar Lindos combineren zwemmen bij St Paul\'s Bay met vrije tijd in het dorp onder de Akropolis. Gedeelde cruises vanuit Rhodes Town of Kolymbia liggen vaak tussen €39 en €100 per persoon, afhankelijk van duur en lunch. Expressroutes focussen op tijd aan wal in Lindos; uitgebreidere dagcruises voegen zwemstops toe bij Anthony Quinn Bay of Kalithea Springs op de terugweg. Privé speedboottrips naar Lindos beginnen rond €460 voor een halve dag en €700+ voor een volledige dag met lunch aan dek - ideaal als je zelf wilt bepalen hoe lang je in het dorp blijft. Bekijk <a href="/service/rhodes-boat-cruises">cruises naar Lindos en de oostkust</a> of vraag naar een privé dagtrip naar Lindos.',
        },
        {
          heading: 'Zwemtrips oostkust (Anthony Quinn, Kalithea, Ladiko)',
          body: 'Niet elke boottrip op Rhodos steekt over naar een ander eiland. Halve- en hele-dag routes langs de oostkust blijven dicht bij de beschutte kustlijn - Anthony Quinn Bay, Kalithea Springs, Ladiko en Traganou Caves zijn de klassieke stops voor zwemmen en snorkelen. Gedeelde all-inclusive cruises kosten €45-€75 per persoon met lunch en drankjes aan boord. Privé halve-dag trips vanaf €350 laten je groep twee of drie baaien op eigen tempo bezoeken zonder strak tijdschema. Deze routes zijn ideaal voor bezoekers die voor het eerst komen en turquoise water willen zonder oversteek op open zee.',
        },
        {
          heading: 'Boottrips vanuit Kolymbia en Faliraki',
          body: 'Als je aan de oostkust verblijft, verkorten vertrekken vanuit Kolymbia of Faliraki de transfertijd naar Symi, Lindos en lokale zwembaaien. Expressboten naar Symi vanuit Kolymbia vertrekken vaak later dan diensten vanuit Mandraki en bevatten een zwemstop bij St George\'s Bay. De zee-shuttles van Faliraki verbinden de resortstrip met de haven van Rhodes Town voor gasten die liever niet rijden. Vermeld bij je aanvraag je hotelgebied - wij matchen je met het meest logische vertrekpunt, zonder onnodig over het eiland te reizen.',
        },
      ],
      closing:
        'Gedeelde dagcruises bieden de beste prijs per persoon; privé trips met schipper geven je de boot, route en timing helemaal voor jezelf. We selecteren beide formats sinds 1998 - <a href="/service/rhodes-boat-cruises">vergelijk gedeelde bootcruises op Rhodos</a>, bekijk de privé-trips hieronder of <a href="/contact">vraag ons</a> welk format past bij je data en groep.',
    },
    ctaTitle: 'Plan je een privé dag op het water?',
    ctaText:
      'Stuur je data, groepsgrootte en ideeën door - wij geven je een offerte met de beste beschikbare opties.',
  },
  'rhodes-rent-a-boat': {
    introQuote:
      'Vaar zelf langs de kust van Rhodos - geen vaarbewijs nodig voor boten tot 30 HP.',
    features: [
      {
        icon: 'fas fa-id-card',
        title: 'Geen vaarbewijs vereist',
        text: 'Volgens de Griekse wet mag iedereen van 18+ een pleziervaartuig tot 30 HP besturen zonder officieel vaarbewijs.',
      },
      {
        icon: 'fas fa-map',
        title: 'Vrijheid langs de kust',
        text: 'Verken baaien aan de oostkust op je eigen tempo - Anthony Quinn, Ladiko, Kalithea en beschutte zwemlocaties binnen de toegestane zone.',
      },
      {
        icon: 'fas fa-check-circle',
        title: 'Geselecteerde verhuurpartners',
        text: 'Wij werken met betrouwbare verhuurbases die we persoonlijk kennen - briefing, brandstof, kaart en veiligheidsuitrusting inbegrepen.',
      },
    ],
    panel: {
      eyebrow: 'Zelf varen · oostkust',
      title: 'Bootverhuur zonder vaarbewijs op Rhodos',
      paragraphs: [
        'Een eigen boot huren is de meest onafhankelijke manier om Rhodos vanaf zee te ontdekken - stop waar je wilt, zwem waar je wilt en keer terug wanneer je klaar bent.',
        'Voor vertrek krijg je een veiligheidsbriefing en een kaart van het toegestane vaargebied. Wij helpen je eerlijk de juiste bootmaat en duur voor je groep te kiezen.',
      ],
      imageKey: 'hero',
    },
    catalogTitle: 'Beschikbare huurboten',
    catalogSubtitle: 'Zelf te varen boten zonder vaarbewijs langs de kust van Rhodos',
    ctaTitle: 'Niet zeker welke huurboot bij je groep past?',
    ctaText:
      'Vertel ons je data en met hoeveel personen je bent - wij adviseren de juiste boot en basis.',
  },
  'rhodes-charter': {
    introQuote:
      'Yacht charter is een ander soort zeevakantie - meerdaags zeilen, island hopping en de vrijheid van de open Egeische Zee.',
    features: [
      {
        icon: 'fas fa-compass',
        title: 'Bareboat charter',
        text: 'Zeiljacht zonder schipper - voor ervaren zeilers met een geldig vaarbewijs die hun eigen Dodekanesos-route plannen.',
      },
      {
        icon: 'fas fa-user-shield',
        title: 'Charter met schipper',
        text: 'Professionele schipper aan boord - geen zeilervaring nodig, hij regelt navigatie en ankerplaatsen.',
      },
      {
        icon: 'fas fa-map-marked-alt',
        title: 'Lokaal advies',
        text: 'Wij verbinden je met het juiste charterbedrijf en de passende jachtklasse voor je crew, data en route.',
      },
    ],
    panel: {
      eyebrow: 'Wekelijks · Dodekanesos',
      title: 'Yacht charter vanuit Rhodes Marina',
      paragraphs: [
        'Wekelijkse yacht charter vanaf Rhodos opent de Dodekanesos - Symi, Halki, Kos, Nisyros en stille ankerplaatsen die alleen per zeil bereikbaar zijn.',
        'Kies bareboat als je een erkend vaarbewijs hebt, of met schipper als je liever een professionele kapitein aan boord hebt. Wij adviseren over seizoen, jachttype en realistische routes voor je crew.',
      ],
      imageKey: 'hero',
      reversed: true,
    },
    catalogTitle: 'Charterjachten en opties',
    catalogSubtitle: 'Wekelijkse zeilvakanties bareboat of met schipper',
    ctaTitle: 'Plan je een zeilvakantie in de Dodekanesos?',
    ctaText:
      'Deel je data, ervaringsniveau en groep - wij matchen je met de juiste charterpartner.',
  },
  'rhodes-mice-events': {
    introQuote:
      "Rhodos combineert kustlijn, historie, resorts en jachthavens - alles wat nodig is voor complete corporate- en incentiveprogramma's.",
    features: [
      {
        icon: 'fas fa-building',
        title: 'Corporate events',
        text: 'Incentivereizen, teambuilding, conferenties, productlanceringen en VIP-vieringen op Rhodos.',
      },
      {
        icon: 'fas fa-ship',
        title: 'Bootervaringen',
        text: 'Fleet days, catamarancruises, yacht charters en zeiltrips georganiseerd voor groepen van elke omvang.',
      },
      {
        icon: 'fas fa-handshake',
        title: 'Lokaal netwerk',
        text: 'Wij brengen planners in contact met betrouwbare boten, locaties, transfers en dienstverleners op het hele eiland.',
      },
    ],
    panel: {
      eyebrow: 'MICE · Incentive · Corporate',
      title: 'Events en incentives op het water',
      paragraphs: [
        'Rhodos is een natuurlijke MICE-bestemming: resorts, jachthavens, de middeleeuwse oude stad en een volledig aanbod aan zee-ervaringen binnen handbereik.',
        "Van fleet regatta's en catamarandagen tot VIP-yachtdiners en gecombineerde land-en-zeeprogramma's - wij coördineren via ons lokale netwerk zodat je event soepel verloopt.",
      ],
      imageKey: 'hero',
    },
    ctaTitle: 'Plan je een corporate event op Rhodos?',
    ctaText:
      'Deel je groepsgrootte, data en doelstellingen - wij schetsen realistische opties op het water.',
  },
  'rhodes-tender-boat': {
    introQuote:
      'Professionele transfers van wal naar schip in havens en baaien van Rhodos - betrouwbaar, punctueel en in het seizoen 24/7 beschikbaar.',
    features: [
      {
        icon: 'fas fa-bolt',
        title: 'Snelle respons',
        text: 'On-demand transfers met een typische responstijd onder 15 minuten in drukke havenzones.',
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Veilig en gelicentieerd',
        text: 'Goed onderhouden tenders met professionele operators die getraind zijn voor alle omstandigheden.',
      },
      {
        icon: 'fas fa-calendar-check',
        title: 'Gepland of on-demand',
        text: 'Plan regelmatige transfers vooraf of bel voor directe dispatch wanneer nodig.',
      },
    ],
    panel: {
      eyebrow: 'Maritieme transfers',
      title: 'Tenderbootservice op Rhodos',
      paragraphs: [
        'Tenderboten overbruggen de afstand tussen wal en schip - cruisepassagiers, superjachtgasten, marina-transfers en haven-naar-jacht runs op Rhodos.',
        'Wij werken met gelicentieerde lokale operators die elke steiger, tijdsbeperking en weersfactor kennen in Mandraki, Rhodes Marina en de ankerplaatsen langs de oostkust.',
      ],
      imageKey: 'hero',
      reversed: true,
    },
    ctaTitle: 'Tendertransfer nodig op Rhodos?',
    ctaText:
      'Geef je haven, timing en passagiersaantal door - wij verbinden je met de juiste operator.',
  },
};
