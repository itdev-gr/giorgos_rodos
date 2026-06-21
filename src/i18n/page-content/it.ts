import type { PageContent } from './en';

export const it: PageContent = {
  boatTripsIntro: {
    hiddenTitle: 'Panoramica delle gite in barca a Rodi',
    ledeHtml:
      '<strong>Le gite in barca a Rodi</strong> includono crociere giornaliere a Symi, rotte rapide per Lindos e giornate di nuoto sulla costa est tra Anthony Quinn Bay, Kalithea e Ladiko. Ti aiutiamo a scegliere tra <a href="/service/rhodes-boat-cruises">crociere condivise</a> (miglior valore per persona) e <a href="#boat-trips-catalog">gite private con skipper</a> (il tuo itinerario, il tuo ritmo) — con onestà, dal 1998.',
    table: {
      caption: 'Confronta i formati delle gite in barca a Rodi',
      columns: { type: 'Tipo di gita', bestFor: 'Ideale per', price: 'Prezzo tipico', book: 'Dove prenotare' },
      rows: [
        { type: 'Crociera condivisa giornaliera a Symi', bestFor: 'Budget ridotto, prima esperienza', price: '€45–70 / persona', bookHtml: '<a href="/service/rhodes-boat-cruises">Crociere in barca</a>' },
        { type: 'Motoscafo privato per Symi', bestFor: 'Gruppi da 4–6, orari flessibili', price: '€1.000–1.300 / barca', bookHtml: '<a href="#boat-trips-catalog">Catalogo privato</a>' },
        { type: 'Crociera express per Lindos', bestFor: 'Sosta breve a Lindos', price: '€39–100 / persona', bookHtml: '<a href="/service/rhodes-boat-cruises">Crociere in barca</a>' },
        { type: 'Giornata privata sulla costa est', bestFor: 'Famiglie, ritmo personalizzato', price: 'da €350 / barca', bookHtml: '<a href="#boat-trips-catalog">Catalogo privato</a>' },
      ],
    },
  },
  home: {
    categoriesTitle: 'I nostri servizi',
    categoryCards: [
      { slug: 'rhodes-boat-tours', title: 'Tour in barca a Rodi', description: 'Tour in barca a vela guidati lungo la splendida costa di Rodi e le isole vicine.' },
      { slug: 'rhodes-boat-trips', title: 'Escursioni in barca a Rodi', description: 'Escursioni private in yacht a vela con equipaggi esperti nel Dodecaneso.' },
      { slug: 'rhodes-boat-cruises', title: 'Crociere in barca a Rodi', description: 'Crociere giornaliere e al tramonto all-inclusive con nuoto, pranzo e musica.' },
      { slug: 'rhodes-rent-a-boat', title: 'Noleggio barca a Rodi', description: 'Guida la tua barca lungo la costa, senza patente, in totale libertà.' },
      { slug: 'rhodes-catamaran-tours', title: 'Crociere in catamarano a Rodi', description: 'Catamarani spaziosi per gruppi, eventi e avventure tra le isole.' },
      { slug: 'rhodes-charter', title: 'Charter yacht a Rodi', description: 'Oltre 80 yacht a vela e catamarani. Bareboat o con equipaggio, il Dodecaneso è tuo.' },
      { slug: 'rhodes-tender-boat', title: 'Servizi tender a Rodi', description: 'Trasferimenti rapidi e affidabili da costa a nave nei porti e nelle baie di Rodi.' },
      { slug: 'rhodes-mice-events', title: 'Eventi MICE & incentive a Rodi', description: 'Eventi aziendali, viaggi incentive e team building in mare.' },
    ],
    whyTitle: 'Perché gli ospiti si fidano di noi',
    whyItems: [
      { title: 'Conoscenza locale', text: 'Viviamo e lavoriamo a Rodi. Conosciamo ogni baia, ogni rotta e ogni capitano di persona.' },
      { title: 'Barche selezionate', text: 'Ogni barca consigliata è verificata personalmente dal nostro team per qualità, sicurezza e comfort.' },
      { title: 'Sicurezza prima di tutto', text: 'Tutte le imbarcazioni sono regolarmente autorizzate e assicurate, con equipaggi esperti in ogni condizione.' },
      { title: 'Supporto personale', text: 'Persone reali rispondono alle tue domande prima, durante e dopo il tour. Niente chatbot, niente call center.' },
      { title: 'Accordi diretti', text: 'Organizziamo ogni esperienza direttamente con capitani e operatori che conosciamo, senza portali anonimi.' },
      { title: 'Consigli autentici', text: 'Ti diciamo con sincerità quale barca, rotta o esperienza è più adatta al tuo gruppo e al tuo budget.' },
    ],
    rentABoat: {
      imageAlt: 'Ospiti che si godono una crociera in motoscafo a Rodi',
      heading: 'Cosa amano di noi i nostri ospiti',
      paragraphs: [
        'Ogni anno migliaia di ospiti felici esplorano Rodi dal mare. Un bagno mattutino in una baia nascosta, una navigazione lenta lungo la costa est, pranzo in una taverna sul mare: così appare una giornata perfetta in barca qui.',
        'Che tu voglia una barca senza patente per due persone o una gita con skipper per tutta la famiglia, ti aiutiamo a scegliere l’opzione giusta con consigli onesti e senza pressione commerciale. Barche vere, conoscenza locale e ospiti che ripartono sorridendo. Questo è ciò che conta per noi.',
      ],
      ctaPrimary: 'Prenota ora',
      ctaSecondary: 'Scopri i noleggi',
    },
    experiences: {
      title: 'Esperienze in barca a Rodi',
      navigationLabel: 'Navigazione carosello',
      previousLabel: 'Esperienze precedenti',
      nextLabel: 'Esperienze successive',
      browseCta: 'Sfoglia tutte le esperienze in barca a Rodi →',
      fullCatalogCta: 'Vedi il catalogo completo con filtri',
    },
  },
  about: {
    h1: 'Siamo Rhodes Rent a Boat',
    founder: {
      eyebrow: 'Dal 1998',
      title: 'Incontra il fondatore',
      lead: 'Giorgos R., Capitano e Fondatore',
      paragraphs: [
        'Giorgos organizza esperienze in barca da Rodi dal 1998. Partendo da una sola barca a vela nel porto di Mandraki, ha trasformato Rhodes Rent a Boat in un’operazione marittima completa con tour in barca, charter privati e noleggio yacht nel Dodecaneso.',
        'Lavora ancora come all’inizio: prima ascolta le persone, capisce cosa cercano dal mare, poi le mette in contatto con lo skipper o la barca locale più adatta, con onestà e senza spingere l’opzione più costosa.',
      ],
      note: 'Non siamo un marketplace di prenotazioni. Siamo il team locale con cui i visitatori parlano prima di salire a bordo.',
    },
    philosophy: {
      eyebrow: 'Come lavoriamo',
      title: 'La nostra filosofia',
      quote: 'Rodi si vive attraverso le persone, non attraverso annunci anonimi.',
      paragraphs: [
        'Questo sito è stato creato da professionisti locali che hanno lavorato per molti anni in mare e nel turismo sull’isola. Conosciamo le barche, le rotte, gli equipaggi e le persone dietro ogni esperienza.',
        'Crediamo che le piccole attività locali, le barche familiari e gli equipaggi esperti offrano alcune delle migliori esperienze dell’isola. Per questo selezioniamo con attenzione le esperienze e i partner presenti su questo sito.',
        'Questa piattaforma non si basa su algoritmi, pubblicità o inserzioni sponsorizzate. Si basa su conoscenza locale, esperienza reale e raccomandazioni personali.',
      ],
      highlight: 'Non cerchiamo di venderti il tour più costoso. Cerchiamo di aiutarti a scegliere l’esperienza giusta per te.',
      ctaServices: 'I nostri servizi',
      ctaContact: 'Contattaci',
    },
    whyBuilt: {
      eyebrow: 'La nostra missione',
      title: 'Perché abbiamo creato questo sito',
      paragraphs: [
        'Questo sito è stato creato da persone che vivono e lavorano a Rodi e passano gran parte della loro vita in mare.',
        'Dopo molti anni nel turismo e nella nautica sull’isola, ci siamo accorti che molti visitatori fanno fatica a capire la differenza tra i tanti tour in barca, escursioni e attività in mare disponibili a Rodi. Online molte esperienze sembrano simili, ma nella realtà possono essere molto diverse.',
        'Per questo abbiamo deciso di creare un sito dove i visitatori possano trovare informazioni chiare sulle esperienze in mare a Rodi e scoprire barche, tour e attività locali selezionate che, secondo noi, offrono un’esperienza complessiva di alto livello.',
        'Il nostro obiettivo non è vendere il maggior numero possibile di tour. Il nostro obiettivo è aiutare i visitatori a trovare l’esperienza giusta e metterli in contatto diretto con persone locali che amano il loro lavoro.',
      ],
      quote: 'Rodi è un’isola da vivere dal mare, e speriamo che questo sito ti aiuti a scoprire questo lato dell’isola.',
    },
    story: {
      title: 'La nostra storia',
      subtitle: 'Una storia locale raccontata sull’acqua',
      paragraphs: [
        'Quello che è iniziato con una sola barca a vela e una passione per il Dodecaneso è cresciuto fino a diventare un’operazione marittima completa: charter yacht, crociere giornaliere, tour in motoscafo, noleggi senza patente e supporto marino professionale. Ma, anche crescendo, la filosofia è rimasta la stessa: ascoltare prima le persone, capire cosa vogliono e poi realizzarlo in mare.',
        'I nostri skipper conoscono ogni baia nascosta tra Rodi e Kastellorizo. Il nostro team conosce le migliori taverne, gli ancoraggi più tranquilli e l’orario perfetto per visitare ogni luogo. Questa conoscenza non arriva da una guida, ma da una vita passata qui.',
      ],
      cta: 'Scopri di più',
    },
    safety: {
      title: 'Sicurezza e onestà prima di tutto',
      subtitle: 'Preferiamo perdere una prenotazione piuttosto che metterti sulla barca sbagliata',
      paragraphs: [
        'Ogni imbarcazione che gestiamo o consigliamo viene controllata regolarmente ed è equipaggiata con moderne dotazioni di sicurezza. I nostri skipper possiedono licenze professionali marittime e sono preparati per ogni condizione del mare. Quando sali a bordo puoi rilassarti, sapendo che tutto è stato verificato e preparato con cura.',
        'Crediamo anche nella trasparenza dei prezzi. Il prezzo che ti indichiamo è quello che paghi: nessun costo nascosto, nessuna sorpresa al molo. Se qualcosa non è incluso, te lo diciamo in anticipo. Questa onestà è la base di ogni rapporto che costruiamo.',
      ],
      cta: 'Mettiti in contatto',
    },
    difference: {
      title: 'Cosa ci rende diversi',
      subtitle: 'Diretti, personali e sempre disponibili',
      paragraphs: [
        'Quando prenoti con noi, parli con le persone che gestiscono davvero le barche. Nessun call center, nessun intermediario, nessun portale tra te e noi. Tu scrivi, noi rispondiamo. Hai una domanda al porto? Siamo a una telefonata di distanza. Questa immediatezza è rara nel settore e i nostri ospiti la notano subito.',
        'Non crediamo nelle soluzioni uguali per tutti. Una coppia che cerca una crociera tranquilla al tramonto ha esigenze molto diverse da una famiglia con bambini piccoli o da un gruppo di amici che vuole esplorare spiagge nascoste. Ascoltiamo, consigliamo e adattiamo l’esperienza alle persone.',
      ],
      cta: 'Esplora i servizi',
    },
    experiences: {
      title: 'Alcune delle cose che facciamo',
      items: [
        { title: 'Crociere al tramonto', desc: 'La costa di Rodi all’ora dorata, drink sul ponte, il cielo infuocato e solo il momento da vivere.' },
        { title: 'Island hopping', desc: 'Naviga da Rodi verso Symi, Halki o Tilos. Ogni isola ha il suo carattere, e noi le conosciamo tutte a memoria.' },
        { title: 'Charter yacht', desc: 'Il tuo yacht, il tuo skipper, il tuo programma. Il modo più personale per vivere il Dodecaneso.' },
        { title: 'Avventure in mare', desc: 'Snorkeling su reef nascosti, nuotate in baie senza accesso stradale o semplicemente galleggiare in acque incredibilmente limpide.' },
      ],
    },
    ctaCards: {
      charter: { title: 'Charter yacht', desc: 'Il tuo yacht, la tua rotta, il tuo ritmo. Dicci cosa desideri e lo renderemo possibile.', cta: 'Scopri di più' },
      tours: { title: 'Tour in barca', desc: 'Partecipa a una crociera giornaliera, noleggia un motoscafo o scegli una barca con skipper. Abbiamo opzioni per ogni amante del mare.', cta: 'Scopri di più' },
    },
  },
  contact: {
    formIntro:
      'Per qualsiasi domanda o informazione sui nostri servizi, compila il modulo qui sotto e ti risponderemo il prima possibile.',
    infoIntro:
      'Il nostro team è disponibile ogni giorno per telefono, WhatsApp o e-mail. Rispondiamo personalmente con consigli chiari, prezzi equi e barche che conosciamo bene.',
    location: {
      eyebrow: 'Dove trovarci',
      title: 'Come raggiungere il nostro ufficio a Rodi città',
      text: 'Il nostro ufficio si trova in Ionos Dragoumi 39, nel centro di Rodi città. Passate per consigli, documentazione o briefing di sicurezza; da qui vi accompagneremo alla barca per la partenza.',
      listItems: [
        '<strong>Dall\'aeroporto di Rodi (RHO):</strong> 14 km / 25 minuti in auto. Possiamo organizzare un transfer privato, vedi <a href="https://www.rhodestransfer24.com/" target="_blank" rel="noopener noreferrer">Rhodes Transfers</a>.',
        '<strong>Dal porto crociere (Akandia / Kolona):</strong> 5 minuti in taxi o 15 minuti a piedi lungo il lungomare.',
        '<strong>Dalla Città Vecchia:</strong> attraversate la Porta della Libertà (Eleftherias Pyli); Ionos Dragoumi attraversa la Città Nuova a pochi minuti a piedi verso l\'entroterra.',
        '<strong>Parcheggio:</strong> parcheggi pubblici vicino al Nuovo Mercato (Nea Agora) e a Piazza Eleftherias, entrambi a pochi minuti a piedi.',
        '<strong>Partenze in barca:</strong> ci incontriamo prima in ufficio, poi andiamo insieme al molo così saprete esattamente dove imbarcarvi.',
      ],
      card: {
        businessName: 'Rhodes Rent a Boat',
        labels: {
          address: 'Indirizzo',
          phone: 'Telefono',
          whatsapp: 'WhatsApp',
          email: 'E-mail',
          hours: 'Orari',
        },
        hoursValue: 'Disponibili 24/7, chiamate e messaggi',
        mapsLink: 'Apri in Google Maps',
      },
      mapTitle: 'Rhodes Rent a Boat, Ionos Dragoumi 39, Rodi',
    },
  },
  thingsToDo: {
    h1: 'Tutte le esperienze in barca a Rodi',
    hiddenH2: 'Tutte le esperienze in barca approvate a Rodi',
    schemaName: 'Tutte le esperienze in barca a Rodi: sfoglia e filtra',
    schemaDescription:
      'Sfoglia tutte le esperienze in barca approvate a Rodi — uscite a vela, crociere giornaliere, barche private, tour in catamarano e noleggi senza patente. Confronta e scegli.',
    emptyTitle: 'Nessun tour disponibile al momento',
    emptyText:
      'Stiamo aggiungendo nuove esperienze in barca a questa pagina. Torna presto o contattaci per consigli personalizzati.',
  },
};
