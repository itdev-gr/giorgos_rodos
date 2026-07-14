import type { PageContent } from './en';

export const de: PageContent = {
  boatTripsIntro: {
    hiddenTitle: 'Überblick zu Bootsausflügen auf Rhodos',
    ledeHtml:
      '<strong>Bootsausflüge auf Rhodos</strong> umfassen Tageskreuzfahrten nach Symi, Expressrouten nach Lindos und Badetage an der Ostküste bei Anthony Quinn Bay, Kalithea und Ladiko. Wir helfen dir bei der Wahl zwischen <a href="/service/rhodes-boat-cruises">geteilten Tageskreuzfahrten</a> (bestes Preis-Leistungs-Verhältnis pro Person) und <a href="#boat-trips-catalog">privaten Skippertrips</a> (deine Route, dein Tempo) — ehrlich, seit 1998.',
    table: {
      caption: 'Formate für Bootsausflüge auf Rhodos vergleichen',
      columns: {
        type: 'Ausflugstyp',
        bestFor: 'Am besten für',
        price: 'Typischer Preis',
        book: 'Wo buchen',
      },
      rows: [
        {
          type: 'Geteilte Symi-Tageskreuzfahrt',
          bestFor: 'Kleines Budget, Erstbesucher',
          price: '45–70 € / Person',
          bookHtml: '<a href="/service/rhodes-boat-cruises">Bootskreuzfahrten</a>',
        },
        {
          type: 'Privates Symi-Speedboot',
          bestFor: 'Gruppen von 4–6, flexible Zeiten',
          price: '1.000–1.300 € / Boot',
          bookHtml: '<a href="#boat-trips-catalog">Privater Katalog</a>',
        },
        {
          type: 'Lindos-Expresskreuzfahrt',
          bestFor: 'Kurze Landzeit in Lindos',
          price: '39–100 € / Person',
          bookHtml: '<a href="/service/rhodes-boat-cruises">Bootskreuzfahrten</a>',
        },
        {
          type: 'Privater Ostküsten-Tag',
          bestFor: 'Familien, eigenes Tempo',
          price: 'ab 350 € / Boot',
          bookHtml: '<a href="#boat-trips-catalog">Privater Katalog</a>',
        },
      ],
    },
  },
  home: {
    categoriesTitle: 'Unsere Services',
    categoryCards: [
      { slug: 'rhodes-boat-tours', title: 'Rhodos Bootstouren', description: 'Geführte Segeltouren entlang der beeindruckenden Küste von Rhodos und zu nahegelegenen Inseln.' },
      { slug: 'rhodes-boat-trips', title: 'Rhodos Bootsausflüge', description: 'Private Segelyacht-Ausflüge mit erfahrenen Crews in der gesamten Dodekanes-Region.' },
      { slug: 'rhodes-boat-cruises', title: 'Rhodos Bootskreuzfahrten', description: 'All-inclusive Tages- und Sonnenuntergangsfahrten mit Schwimmen, Essen und Musik.' },
      { slug: 'rhodes-rent-a-boat', title: 'Rhodos Boot mieten', description: 'Steuere dein eigenes Boot entlang der Küste, ohne Führerschein, mit voller Freiheit.' },
      { slug: 'rhodes-catamaran-tours', title: 'Rhodos Katamaran-Kreuzfahrten', description: 'Geräumige Katamarane für Gruppenfahrten, Events und Inselhopping-Abenteuer.' },
      { slug: 'rhodes-charter', title: 'Rhodos Yachtcharter', description: 'Über 80 Segelyachten und Katamarane. Bareboat oder mit Crew, der Dodekanes gehört dir.' },
      { slug: 'rhodes-sailing-trips', title: 'Segeltörns Rhodos', description: 'Tagestörns auf Segelyachten mit professionellem Skipper entlang der Ostküste von Rhodos.' },
      { slug: 'rhodes-mice-events', title: 'Rhodos MICE- & Incentive-Events', description: 'Firmenevents, Incentive-Reisen und Teambuilding-Erlebnisse auf dem Wasser.' },
    ],
    whyTitle: 'Warum Gäste uns vertrauen',
    whyItems: [
      { title: 'Lokales Wissen', text: 'Wir leben und arbeiten auf Rhodos. Wir kennen jede Bucht, jede Route und jeden Kapitän persönlich.' },
      { title: 'Sorgfältig ausgewählte Boote', text: 'Jedes empfohlene Boot wurde von unserem Team persönlich auf Qualität, Sicherheit und Komfort geprüft.' },
      { title: 'Sicherheit zuerst', text: 'Alle Schiffe sind vollständig lizenziert und versichert, mit erfahrenen Crews für alle Bedingungen.' },
      { title: 'Persönlicher Support', text: 'Echte Menschen beantworten deine Fragen vor, während und nach der Tour. Keine Chatbots, keine Callcenter.' },
      { title: 'Direkte Organisation', text: 'Wir organisieren jedes Erlebnis direkt mit Kapitänen und Betreibern, die wir kennen, ohne anonyme Portale.' },
      { title: 'Ehrliche Beratung', text: 'Wir sagen dir offen, welches Boot, welche Route oder welches Erlebnis zu deiner Gruppe und deinem Budget passt.' },
    ],
    rentABoat: {
      imageAlt: 'Gäste genießen eine Speedbootfahrt auf Rhodos',
      heading: 'Was unsere Gäste an uns lieben',
      paragraphs: [
        'Tausende zufriedene Gäste entdecken Rhodos jedes Jahr vom Meer aus. Ein Morgenschwimmen in einer versteckten Bucht, eine ruhige Fahrt entlang der Ostküste, Mittagessen in einer Strandtaverne: so sieht hier ein perfekter Bootstag aus.',
        'Ob führerscheinfreies Boot zu zweit oder Skippertour für die ganze Familie, wir helfen dir mit ehrlicher Beratung und ohne Verkaufsdruck bei der richtigen Wahl. Echte Boote, lokales Wissen und Gäste, die lächelnd zurückkommen. Darauf kommt es uns an.',
      ],
      ctaPrimary: 'Jetzt buchen',
      ctaSecondary: 'Mietboote entdecken',
    },
    experiences: {
      title: 'Bootserlebnisse auf Rhodos',
      navigationLabel: 'Karussell-Navigation',
      previousLabel: 'Vorherige Erlebnisse',
      nextLabel: 'Nächste Erlebnisse',
      browseCta: 'Alle Bootserlebnisse auf Rhodos ansehen →',
      fullCatalogCta: 'Vollständigen Katalog mit Filtern ansehen',
    },
  },
  about: {
    h1: 'Wir sind Rhodes Rent a Boat',
    founder: {
      eyebrow: 'Seit 1998',
      title: 'Lerne den Gründer kennen',
      lead: 'Giorgos R., Kapitän & Gründer',
      paragraphs: [
        'Giorgos bietet seit 1998 Bootserlebnisse auf Rhodos an. Ausgehend von einem einzigen Segelboot im Mandraki-Hafen hat er Rhodes Rent a Boat zu einem umfassenden maritimen Unternehmen für Bootstouren, private Charter und Yachtvermietung im gesamten Dodekanes aufgebaut.',
        'Er arbeitet noch immer wie am Anfang: zuerst zuhören, verstehen, was Menschen vom Meer erwarten, und sie dann ehrlich mit dem passenden lokalen Skipper oder Schiff verbinden, ohne die teuerste Option aufzudrängen.',
      ],
      note: 'Wir sind kein Buchungs-Marktplatz. Wir sind das lokale Team, mit dem Besucher sprechen, bevor sie an Bord gehen.',
    },
    philosophy: {
      eyebrow: 'So arbeiten wir',
      title: 'Unsere Philosophie',
      quote: 'Rhodos erlebt man durch Menschen, nicht durch anonyme Einträge.',
      paragraphs: [
        'Diese Website wurde von lokalen Fachleuten erstellt, die viele Jahre auf See und im Tourismus auf der Insel gearbeitet haben. Wir kennen die Boote, die Routen, die Crews und die Menschen hinter jedem Erlebnis.',
        'Wir glauben, dass kleine lokale Unternehmen, Familienboote und erfahrene Crews einige der besten Erlebnisse auf der Insel bieten. Deshalb wählen wir die Erlebnisse und Partner auf dieser Website sorgfältig aus.',
        'Diese Plattform basiert nicht auf Algorithmen, Werbung oder gesponserten Einträgen. Sie basiert auf lokalem Wissen, echter Erfahrung und persönlichen Empfehlungen.',
      ],
      highlight: 'Wir versuchen nicht, dir die teuerste Tour zu verkaufen. Wir helfen dir, das richtige Erlebnis für dich zu finden.',
      ctaServices: 'Unsere Services',
      ctaContact: 'Kontakt',
    },
    whyBuilt: {
      eyebrow: 'Unsere Mission',
      title: 'Warum wir diese Website gebaut haben',
      paragraphs: [
        'Diese Website wurde von Menschen erstellt, die auf Rhodos leben und arbeiten und den Großteil ihres Lebens auf dem Meer verbringen.',
        'Nach vielen Jahren im Tourismus und im Bootsbereich auf der Insel haben wir erkannt, dass es für viele Besucher schwer ist, die Unterschiede zwischen den zahlreichen Bootstouren, Ausflügen und Meer-Erlebnissen auf Rhodos zu verstehen. Online wirkt vieles ähnlich, in der Realität aber oft sehr unterschiedlich.',
        'Deshalb wollten wir eine Website schaffen, auf der Besucher klare Informationen über Meer-Erlebnisse auf Rhodos finden und ausgewählte Boote, Touren und lokale Anbieter entdecken können, die aus unserer Sicht ein sehr gutes Gesamterlebnis bieten.',
        'Unser Ziel ist nicht, möglichst viele Touren zu verkaufen. Unser Ziel ist, Besuchern zu helfen, das richtige Erlebnis zu finden und direkt mit lokalen Menschen in Kontakt zu kommen, die ihre Arbeit lieben.',
      ],
      quote: 'Rhodos ist ein Ort, den man vom Meer aus erlebt, und wir hoffen, dass diese Website dir hilft, diese Seite der Insel zu entdecken.',
    },
    story: {
      title: 'Unsere Geschichte',
      subtitle: 'Eine lokale Geschichte, auf dem Wasser erzählt',
      paragraphs: [
        'Was mit einem einzigen Segelboot und der Leidenschaft für den Dodekanes begann, ist zu einem vollständigen maritimen Betrieb gewachsen: Yachtcharter, Tageskreuzfahrten, Speedboot-Touren, führerscheinfreie Vermietungen und professioneller Marine-Support. Doch unsere Philosophie blieb gleich: zuerst zuhören, verstehen, was Menschen möchten, und es dann auf dem Meer möglich machen.',
        'Unsere Skipper kennen jede versteckte Bucht zwischen Rhodos und Kastellorizo. Unser Team kennt die besten Tavernen, die ruhigsten Ankerplätze und die perfekte Tageszeit für jeden Spot. Dieses Wissen kommt nicht aus einem Reiseführer, sondern aus einem Leben hier.',
      ],
      cta: 'Mehr erfahren',
    },
    safety: {
      title: 'Sicherheit und Ehrlichkeit an erster Stelle',
      subtitle: 'Lieber verlieren wir eine Buchung, als dich auf das falsche Boot zu setzen',
      paragraphs: [
        'Jedes Schiff, das wir betreiben oder empfehlen, wird regelmäßig geprüft und ist vollständig mit moderner Sicherheitsausrüstung ausgestattet. Unsere Skipper haben professionelle Seefahrtslizenzen und sind für alle Bedingungen geschult. Wenn du an Bord gehst, kannst du dich entspannen: Alles wurde sorgfältig geprüft und vorbereitet.',
        'Wir glauben auch an transparente Preise. Der Preis, den wir nennen, ist der Preis, den du zahlst: keine versteckten Gebühren, keine Überraschungen am Steg. Wenn etwas nicht enthalten ist, sagen wir es dir im Voraus. Diese Ehrlichkeit ist die Basis jeder Beziehung, die wir aufbauen.',
      ],
      cta: 'Kontakt aufnehmen',
    },
    difference: {
      title: 'Was uns unterscheidet',
      subtitle: 'Direkt, persönlich und immer erreichbar',
      paragraphs: [
        'Wenn du bei uns buchst, hast du Kontakt zu den Menschen, die die Boote tatsächlich betreiben. Keine Callcenter, keine Zwischenhändler, keine Buchungsportale zwischen dir und uns. Du schreibst uns, wir antworten. Du hast eine Frage im Hafen, wir sind nur einen Anruf entfernt. Diese Direktheit ist in der Branche selten und unsere Gäste merken das sofort.',
        'Wir glauben außerdem nicht an Lösungen von der Stange. Ein Paar, das eine ruhige Sunset Cruise sucht, braucht ein ganz anderes Erlebnis als eine Familie mit kleinen Kindern oder eine Freundesgruppe, die versteckte Strände entdecken will. Wir hören zu, beraten und sorgen dafür, dass das Erlebnis zu den Menschen passt.',
      ],
      cta: 'Services entdecken',
    },
    experiences: {
      title: 'Ein paar Dinge, die wir anbieten',
      items: [
        { title: 'Sonnenuntergangs-Kreuzfahrten', desc: 'Die Küste von Rhodos zur goldenen Stunde, Drinks an Deck, ein brennender Himmel, und sonst nur genießen.' },
        { title: 'Inselhopping', desc: 'Segle von Rhodos nach Symi, Halki oder Tilos. Jede Insel hat ihren eigenen Charakter, und wir kennen sie alle aus dem Effeff.' },
        { title: 'Yachtcharter', desc: 'Deine eigene Yacht, dein eigener Skipper, dein eigener Zeitplan. Die persönlichste Art, den Dodekanes zu erleben.' },
        { title: 'Meeresabenteuer', desc: 'Schnorcheln über versteckten Riffen, baden in Buchten ohne Straßenanbindung oder einfach im kristallklaren Wasser treiben.' },
      ],
    },
    ctaCards: {
      charter: {
        title: 'Yachtcharter',
        desc: 'Deine Yacht, deine Route, dein Tempo. Sag uns, was du möchtest, und wir machen es möglich.',
        cta: 'Mehr entdecken',
      },
      tours: {
        title: 'Bootstouren',
        desc: 'Nimm an einer Tageskreuzfahrt teil, miete ein Speedboot oder buche ein Boot mit Skipper. Wir haben Optionen für jeden Meeresliebhaber.',
        cta: 'Mehr entdecken',
      },
    },
  },
  contact: {
    formIntro:
      'Bei Fragen oder Informationen zu unseren Leistungen füllen Sie bitte das Formular aus — wir melden uns so schnell wie möglich.',
    infoIntro:
      'Unser Team ist täglich per Telefon, WhatsApp oder E-Mail erreichbar. Wir antworten persönlich mit klarer Beratung, fairen Preisen und Booten, die wir gut kennen.',
    location: {
      eyebrow: 'So finden Sie uns',
      title: 'So erreichen Sie unser Büro in Rhodos-Stadt',
      text: 'Unser Büro befindet sich in der Ionos Dragoumi 39 im Zentrum von Rhodos-Stadt. Kommen Sie vorbei für Beratung, Unterlagen oder Ihre Sicherheitseinweisung — von hier führen wir Sie zu Ihrem Boot.',
      listItems: [
        '<strong>Vom Flughafen Rhodos (RHO):</strong> 14 km / 25 Minuten mit dem Auto. Privattransfer auf Anfrage, siehe <a href="https://www.rhodestransfer24.com/" target="_blank" rel="noopener noreferrer">Rhodes Transfers</a>.',
        '<strong>Vom Kreuzfahrthafen (Akandia / Kolona):</strong> 5 Minuten mit dem Taxi oder 15 Minuten zu Fuß entlang der Promenade.',
        '<strong>Von der Altstadt:</strong> durch das Freiheits-Tor (Eleftherias Pyli); die Ionos Dragoumi führt durch die Neustadt, wenige Gehminuten landeinwärts.',
        '<strong>Parken:</strong> öffentliche Plätze nahe dem Neumarkt (Nea Agora) und dem Eleftherias-Platz, beide wenige Minuten zu Fuß.',
        '<strong>Bootsabfahrten:</strong> wir treffen uns zuerst im Büro und gehen gemeinsam zum Steg, damit Sie genau wissen, wo Sie einsteigen.',
      ],
      card: {
        businessName: 'Rhodes Rent a Boat',
        labels: {
          address: 'Adresse',
          phone: 'Telefon',
          whatsapp: 'WhatsApp',
          email: 'E-Mail',
          hours: 'Erreichbarkeit',
        },
        hoursValue: '24/7 erreichbar, Anrufe und Nachrichten',
        mapsLink: 'In Google Maps öffnen',
      },
      mapTitle: 'Rhodes Rent a Boat, Ionos Dragoumi 39, Rhodos',
    },
  },
  thingsToDo: {
    h1: 'Alle Boaterlebnisse auf Rhodos',
    hiddenH2: 'Alle genehmigten Boaterlebnisse auf Rhodos',
    schemaName: 'Alle Boaterlebnisse auf Rhodos: Durchsuchen & Filtern',
    schemaDescription:
      'Entdecken Sie alle genehmigten Boaterlebnisse auf Rhodos — Segeltörns, Tageskreuzfahrten, private Boote, Katamaran-Touren und Selbstfahrer-Mieten. Vergleichen und wählen.',
    emptyTitle: 'Noch keine Touren verfügbar',
    emptyText:
      'Wir fügen derzeit neue Boaterlebnisse hinzu. Schauen Sie bald wieder vorbei oder kontaktieren Sie uns für persönliche Empfehlungen.',
  },
};
