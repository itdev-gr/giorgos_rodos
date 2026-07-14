import type { PageContent } from './en';

export const nl: PageContent = {
  boatTripsIntro: {
    hiddenTitle: 'Overzicht van boottrips op Rhodos',
    ledeHtml:
      '<strong>Boottrips op Rhodos</strong> omvatten dagcruises naar Symi, expressroutes naar Lindos en zwemdagen aan de oostkust bij Anthony Quinn Bay, Kalithea en Ladiko. We helpen je kiezen tussen <a href="/service/rhodes-boat-cruises">gedeelde dagcruises</a> (beste prijs per persoon) en <a href="#boat-trips-catalog">privétochten met schipper</a> (jouw route, jouw tempo) — eerlijk, sinds 1998.',
    table: {
      caption: 'Vergelijk boottrip-formats op Rhodos',
      columns: { type: 'Type trip', bestFor: 'Beste voor', price: 'Gebruikelijke prijs', book: 'Waar boeken' },
      rows: [
        { type: 'Gedeelde dagcruise naar Symi', bestFor: 'Budget, eerste keer', price: '€45–70 / persoon', bookHtml: '<a href="/service/rhodes-boat-cruises">Bootcruises</a>' },
        { type: 'Privé speedboot naar Symi', bestFor: 'Groepen van 4–6, flexibele tijden', price: '€1.000–1.300 / boot', bookHtml: '<a href="#boat-trips-catalog">Privécatalogus</a>' },
        { type: 'Lindos express cruise', bestFor: 'Korte tijd aan wal in Lindos', price: '€39–100 / persoon', bookHtml: '<a href="/service/rhodes-boat-cruises">Bootcruises</a>' },
        { type: 'Privé dag oostkust', bestFor: 'Families, eigen tempo', price: 'vanaf €350 / boot', bookHtml: '<a href="#boat-trips-catalog">Privécatalogus</a>' },
      ],
    },
  },
  home: {
    categoriesTitle: 'Onze diensten',
    categoryCards: [
      { slug: 'rhodes-boat-tours', title: 'Rhodos boottours', description: 'Begeleide zeiltochten langs de prachtige kust van Rhodos en nabijgelegen eilanden.' },
      { slug: 'rhodes-boat-trips', title: 'Rhodos boottrips', description: 'Privé zeiljachttrips met ervaren crews door de Dodekanesos.' },
      { slug: 'rhodes-boat-cruises', title: 'Rhodos bootcruises', description: 'All-inclusive dag- en zonsondergangscruises met zwemmen, eten en muziek.' },
      { slug: 'rhodes-rent-a-boat', title: 'Rhodos bootverhuur', description: 'Vaar zelf langs de kust, geen vaarbewijs nodig, volledige vrijheid.' },
      { slug: 'rhodes-catamaran-tours', title: 'Rhodos catamarancruises', description: 'Ruime catamarans voor groepscruises, events en island-hopping avonturen.' },
      { slug: 'rhodes-charter', title: 'Rhodos jachtcharter', description: 'Meer dan 80 zeiljachten en catamarans. Bareboat of met crew, de Dodekanesos is van jou.' },
      { slug: 'rhodes-sailing-trips', title: 'Zeiltochten Rhodos', description: 'Dagtochten op zeiljachten met professionele schipper langs de oostkust van Rhodos.' },
      { slug: 'rhodes-mice-events', title: 'Rhodos MICE & incentive events', description: 'Zakelijke events, incentive trips en team-building op het water.' },
    ],
    whyTitle: 'Waarom gasten ons vertrouwen',
    whyItems: [
      { title: 'Lokale kennis', text: 'We wonen en werken op Rhodos. We kennen elke baai, elke route en elke kapitein persoonlijk.' },
      { title: 'Zorgvuldig geselecteerde boten', text: 'Elke boot die we aanraden is persoonlijk beoordeeld door ons team op kwaliteit, veiligheid en comfort.' },
      { title: 'Veiligheid eerst', text: 'Alle schepen zijn volledig vergund en verzekerd, met ervaren crews voor alle omstandigheden.' },
      { title: 'Persoonlijke ondersteuning', text: 'Echte mensen beantwoorden je vragen voor, tijdens en na je trip. Geen chatbots, geen callcenters.' },
      { title: 'Directe afspraken', text: 'We regelen elke ervaring direct met kapiteins en operators die we kennen, zonder anonieme platforms.' },
      { title: 'Eerlijk advies', text: 'We zeggen eerlijk welke boot, route of ervaring past bij jouw groep en budget.' },
    ],
    rentABoat: {
      imageAlt: 'Gasten genieten van een speedbootcruise op Rhodos',
      heading: 'Wat onze gasten aan ons waarderen',
      paragraphs: [
        'Elk jaar ontdekken duizenden tevreden gasten Rhodos vanaf zee. Een ochtendduik in een verborgen baai, rustig varen langs de oostkust, lunchen in een taverna aan het strand: zo ziet een perfecte bootdag er hier uit.',
        'Of je nu een boot zonder vaarbewijs voor twee wilt of een trip met schipper voor het hele gezin, wij helpen je de juiste keuze maken met eerlijk advies en zonder verkoopdruk. Echte boten, lokale kennis en gasten die met een glimlach vertrekken. Dat is waar wij om geven.',
      ],
      ctaPrimary: 'Nu boeken',
      ctaSecondary: 'Verhuur bekijken',
    },
    experiences: {
      title: 'Bootervaringen op Rhodos',
      navigationLabel: 'Carrouselnavigatie',
      previousLabel: 'Vorige ervaringen',
      nextLabel: 'Volgende ervaringen',
      browseCta: 'Bekijk alle bootervaringen op Rhodos →',
      fullCatalogCta: 'Bekijk volledige catalogus met filters',
    },
  },
  about: {
    h1: 'Wij zijn Rhodes Rent a Boat',
    founder: {
      eyebrow: 'Sinds 1998',
      title: 'Maak kennis met de oprichter',
      lead: 'Giorgos R., Kapitein & Oprichter',
      paragraphs: [
        'Giorgos verzorgt sinds 1998 bootervaringen vanaf Rhodos. Begonnen met één zeilboot in de haven van Mandraki, bouwde hij Rhodes Rent a Boat uit tot een volledige maritieme operatie met boottours, privécharters en jachtverhuur in de hele Dodekanesos.',
        'Hij werkt nog steeds zoals toen: eerst luisteren naar mensen, begrijpen wat ze van de zee verwachten, en ze daarna eerlijk koppelen aan de juiste lokale schipper of boot, zonder de duurste optie op te dringen.',
      ],
      note: 'Wij zijn geen boekingsmarktplaats. Wij zijn het lokale team waarmee bezoekers spreken voordat ze aan boord stappen.',
    },
    philosophy: {
      eyebrow: 'Hoe wij werken',
      title: 'Onze filosofie',
      quote: 'Rhodos beleef je via mensen, niet via anonieme listings.',
      paragraphs: [
        'Deze website is gemaakt door lokale professionals die al jaren op zee en in het toerisme op het eiland werken. We kennen de boten, routes, crews en de mensen achter elke ervaring.',
        'We geloven dat kleine lokale bedrijven, familieboten en ervaren crews enkele van de beste ervaringen op het eiland bieden. Daarom selecteren we de ervaringen en partners op deze website zorgvuldig.',
        'Dit platform is niet gebaseerd op algoritmes, advertenties of gesponsorde vermeldingen. Het is gebaseerd op lokale kennis, echte ervaring en persoonlijke aanbevelingen.',
      ],
      highlight: 'We proberen je niet de duurste tour te verkopen. We helpen je de juiste ervaring te kiezen.',
      ctaServices: 'Onze diensten',
      ctaContact: 'Neem contact op',
    },
    whyBuilt: {
      eyebrow: 'Onze missie',
      title: 'Waarom we deze website bouwden',
      paragraphs: [
        'Deze website is gemaakt door mensen die op Rhodos wonen en werken en het grootste deel van hun leven op zee doorbrengen.',
        'Na jaren in toerisme en bootactiviteiten op het eiland merkten we dat veel bezoekers moeite hebben om het verschil te begrijpen tussen de vele boottours, boottrips en zee-ervaringen op Rhodos. Online lijken ze vaak op elkaar, maar in werkelijkheid kunnen ze heel verschillend zijn.',
        'Daarom besloten we een website te maken waar bezoekers duidelijke informatie vinden over zee-ervaringen op Rhodos en geselecteerde boten, tours en lokale bedrijven ontdekken die volgens ons een zeer goede totale ervaring bieden.',
        'Ons doel is niet om zoveel mogelijk tours te verkopen. Ons doel is om bezoekers te helpen de juiste ervaring te vinden en direct in contact te komen met lokale mensen die van hun werk houden.',
      ],
      quote: 'Rhodos is een plek die je vanaf zee beleeft, en we hopen dat deze website je helpt die kant van het eiland te ontdekken.',
    },
    story: {
      title: 'Ons verhaal',
      subtitle: 'Een lokaal verhaal, verteld op het water',
      paragraphs: [
        'Wat begon met één zeilboot en een passie voor de Dodekanesos is uitgegroeid tot een complete maritieme operatie: jachtcharters, dagcruises, speedboottours, verhuur zonder vaarbewijs en professionele maritieme ondersteuning. Maar hoe groot we ook werden, de filosofie bleef hetzelfde: eerst luisteren, begrijpen wat mensen willen, en het vervolgens op zee mogelijk maken.',
        'Onze schippers kennen elke verborgen baai tussen Rhodos en Kastellorizo. Ons team kent de beste tavernes, de rustigste ankerplekken en het perfecte moment van de dag voor elke locatie. Die kennis komt niet uit een reisgids, maar uit een leven hier.',
      ],
      cta: 'Meer informatie',
    },
    safety: {
      title: 'Veiligheid en eerlijkheid staan voorop',
      subtitle: 'We verliezen liever een boeking dan je op de verkeerde boot te zetten',
      paragraphs: [
        'Elk schip dat we gebruiken of aanbevelen wordt regelmatig geïnspecteerd en is volledig uitgerust met moderne veiligheidsuitrusting. Onze schippers hebben professionele maritieme licenties en zijn getraind voor alle zeeomstandigheden. Als je aan boord stapt, kun je ontspannen: alles is zorgvuldig gecontroleerd en voorbereid.',
        'We geloven ook in transparante prijzen. De prijs die we noemen is de prijs die je betaalt: geen verborgen kosten, geen verrassingen bij de steiger. Als iets niet inbegrepen is, vertellen we dat vooraf. Die eerlijkheid is de basis van elke relatie die we opbouwen.',
      ],
      cta: 'Neem contact op',
    },
    difference: {
      title: 'Wat ons anders maakt',
      subtitle: 'Direct, persoonlijk en altijd bereikbaar',
      paragraphs: [
        'Als je via ons boekt, heb je contact met de mensen die de boten echt runnen. Geen callcenters, geen tussenpersonen, geen boekingsportals tussen jou en ons. Jij stuurt een bericht, wij antwoorden. Een vraag in de haven? We zijn één telefoontje verwijderd. Die directheid is zeldzaam in deze sector, en onze gasten merken dat meteen.',
        'We geloven ook niet in one-size-fits-all. Een stel dat een rustige sunset cruise zoekt heeft iets heel anders nodig dan een gezin met jonge kinderen of een vriendengroep die verborgen stranden wil verkennen. We luisteren, adviseren en zorgen dat de ervaring bij de mensen past.',
      ],
      cta: 'Diensten ontdekken',
    },
    experiences: {
      title: 'Een paar dingen die we doen',
      items: [
        { title: 'Zonsondergangscruises', desc: 'De kust van Rhodos in het gouden uur, drankjes op het dek, een vurige lucht en alleen genieten van het moment.' },
        { title: 'Island hopping', desc: 'Zeil van Rhodos naar Symi, Halki of Tilos. Elk eiland heeft zijn eigen karakter, en wij kennen ze allemaal.' },
        { title: 'Jachtcharters', desc: 'Jouw eigen jacht, jouw eigen schipper, jouw eigen schema. De meest persoonlijke manier om de Dodekanesos te beleven.' },
        { title: 'Zee-avonturen', desc: 'Snorkelen boven verborgen riffen, zwemmen in baaien zonder wegtoegang of simpelweg drijven in water dat onwerkelijk helder is.' },
      ],
    },
    ctaCards: {
      charter: { title: 'Jachtcharters', desc: 'Jouw jacht, jouw route, jouw tempo. Vertel ons wat je wilt en wij regelen het.', cta: 'Ontdek meer' },
      tours: { title: 'Boottours', desc: 'Ga mee op een dagcruise, huur een speedboot of kies een boot met schipper. We hebben opties voor elke zeeliefhebber.', cta: 'Ontdek meer' },
    },
  },
  contact: {
    formIntro:
      'Voor vragen of informatie over onze diensten, vul het onderstaande formulier in — we nemen zo snel mogelijk contact met u op.',
    infoIntro:
      'Ons team is elke dag bereikbaar via telefoon, WhatsApp of e-mail. We antwoorden persoonlijk met duidelijk advies, eerlijke prijzen en boten die we goed kennen.',
    location: {
      eyebrow: 'Ons vinden',
      title: 'Hoe u ons kantoor in Rhodes-stad bereikt',
      text: 'Ons kantoor bevindt zich aan Ionos Dragoumi 39, in het centrum van Rhodes-stad. Kom langs voor advies, papierwerk of uw veiligheidsbriefing — vanaf hier begeleiden we u naar uw boot voor vertrek.',
      listItems: [
        '<strong>Vanaf Rhodes Airport (RHO):</strong> 14 km / 25 minuten met de auto. We kunnen een privétransfer regelen, zie <a href="https://www.rhodestransfer24.com/" target="_blank" rel="noopener noreferrer">Rhodes Transfers</a>.',
        '<strong>Vanaf de cruisehaven (Akandia / Kolona):</strong> 5 minuten met de taxi of 15 minuten lopen langs de boulevard.',
        '<strong>Vanuit de Oude Stad:</strong> loop door de Vrijheidspoort (Eleftherias Pyli); Ionos Dragoumi loopt door de Nieuwe Stad, een paar minuten lopen landinwaarts.',
        '<strong>Parkeren:</strong> openbare parkeerplaatsen bij de Nieuwe Markt (Nea Agora) en het Eleftherias-plein, beide op enkele minuten lopen.',
        '<strong>Bootvertrekken:</strong> we ontmoeten u eerst op kantoor en lopen daarna samen naar de kade, zodat u precies weet waar u aan boord gaat.',
      ],
      card: {
        businessName: 'Rhodes Rent a Boat',
        labels: {
          address: 'Adres',
          phone: 'Telefoon',
          whatsapp: 'WhatsApp',
          email: 'E-mail',
          hours: 'Openingstijden',
        },
        hoursValue: '24/7 bereikbaar, bellen en berichten',
        mapsLink: 'Openen in Google Maps',
      },
      mapTitle: 'Rhodes Rent a Boat, Ionos Dragoumi 39, Rhodes',
    },
  },
  thingsToDo: {
    h1: 'Alle bootervaringen op Rhodes',
    hiddenH2: 'Alle goedgekeurde bootervaringen op Rhodes',
    schemaName: 'Alle bootervaringen op Rhodes: bladeren en filteren',
    schemaDescription:
      'Bekijk alle goedgekeurde bootervaringen op Rhodes — zeiltochten, dagcruises, privéboten, catamarantours en verhuur zonder vaarbewijs. Vergelijk en kies.',
    emptyTitle: 'Nog geen tours beschikbaar',
    emptyText:
      'We voegen momenteel nieuwe bootervaringen toe aan deze pagina. Kom binnenkort terug of neem contact met ons op voor persoonlijke aanbevelingen.',
  },
};
