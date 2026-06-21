import type { ServicePageContent } from '../../lib/service-content';

export const fr: Record<string, ServicePageContent> = {
  'rhodes-boat-tours': {
    introQuote:
      "Toutes les excursions en bateau ne se valent pas. Le bateau, l'équipage et l'ambiance font toute la difference.",
    features: [
      {
        icon: 'fas fa-water',
        title: 'Visites guidees',
        text: "Excursions en petit groupe avec skipper professionnel : sauts d'ile en ile, itineraires cotiers et sorties au coucher du soleil, et non de grands navires de croisiere all-inclusive.",
      },
      {
        icon: 'fas fa-check-circle',
        title: 'Excursions selectionnees',
        text: "Parmi toutes les excursions disponibles a Rhodes, nous avons retenu celles qui offrent des bateaux de qualite, des equipages experimentes et des prix justes.",
      },
      {
        icon: 'fas fa-map-marked-alt',
        title: 'Conseil local',
        text: "Indiquez la taille de votre groupe et vos dates : nous vous orientons vers le format d'excursion et l'itineraire les mieux adaptes.",
      },
    ],
    panel: {
      eyebrow: 'Experts locaux depuis 1998',
      title: 'Excursions guidees recommandees en toute transparence',
      lead: 'Nous connaissons les skippers, les bateaux et les itineraires.',
      paragraphs: [
        "Les excursions en bateau a Rhodes vont des petits groupes en voilier aux sorties sightseeing plus rapides le long de la cote est. Nous vous aidons a comprendre les differences avant de reserver : taille du groupe, duree, prestations incluses et choix entre excursion partagee ou sortie privee.",
        "Toutes les excursions presentes sur cette page sont operees par des partenaires que nous connaissons personnellement. Pas d'annonces anonymes, pas de placements payants : uniquement des conseils honnetes de professionnels presents au port chaque jour.",
      ],
      imageKey: 'hero',
      reversed: false,
    },
    catalogTitle: 'Excursions en bateau disponibles',
    catalogSubtitle: 'Experiences guidees selectionnees au depart de Rhodes',
    ctaTitle: 'Vous ne savez pas quelle excursion convient a votre groupe ?',
    ctaText:
      'Indiquez vos dates et les participants : nous vous recommanderons la meilleure option, en toute honnetete et sans pression.',
  },
  'rhodes-boat-cruises': {
    introQuote:
      "Les croisieres en bateau comptent parmi les meilleures facons d'explorer le littoral, visiter les baies emblematiques et profiter d'une journee complete en mer.",
    features: [
      {
        icon: 'fas fa-anchor',
        title: 'Croisieres a la journee all-inclusive',
        text: "Bateaux plus grands avec itineraires fixes vers Symi, Lindos ou la cote est : pauses baignade, dejeuner et boissons inclus.",
      },
      {
        icon: 'fas fa-map-signs',
        title: 'Plusieurs points de depart',
        text: 'Les croisieres partent du port de Mandraki, de Faliraki, de Kolymbia et de Lindos selon le parcours et la destination.',
      },
      {
        icon: 'fas fa-map-marked-alt',
        title: 'Conseil local',
        text: 'Nous vous aidons a choisir la croisiere adaptee a votre hotel, a la taille de votre groupe et au temps que vous souhaitez passer en mer.',
      },
    ],
    panel: {
      eyebrow: 'Symi · Lindos · Cote est',
      title: 'Croisieres a la journee organisees au depart de Rhodes',
      paragraphs: [
        "Les croisieres d'une journee sont la formule la plus populaire pour decouvrir Symi, Lindos et les baies de la cote est en une seule sortie, avec dejeuner, boissons et plusieurs pauses baignade inclus.",
        "Nous collaborons avec des operateurs locaux fiables et vous aidons a choisir selon le port de depart, le type de coque et votre preference entre croisiere partagee ou option plus privee.",
      ],
      imageKey: 'hero',
    },
    catalogTitle: 'Croisieres a la journee disponibles',
    catalogSubtitle: 'Symi, Lindos, baie Anthony Quinn et itineraires cote est',
    ctaTitle: 'Besoin d aide pour choisir une croisiere ?',
    ctaText:
      'Partagez la zone de votre hotel et la taille de votre groupe : nous vous orienterons vers le bon depart et le bon itineraire.',
  },
  'rhodes-catamaran-tours': {
    introQuote:
      'Les catamarans sont spacieux, stables et confortables : la facon la plus relaxante de passer une journee en mer.',
    features: [
      {
        icon: 'fas fa-sun',
        title: 'Croisieres catamaran de jour',
        text: 'Sorties a la journee avec pauses baignade, dejeuner, boissons et moments de detente sur les filets avant. Options partagees ou privees.',
      },
      {
        icon: 'fas fa-moon',
        title: 'Sorties catamaran au coucher du soleil',
        text: 'Navigations en soiree avec boissons et diner leger au soleil couchant : ideal pour les couples et les celebrations.',
      },
      {
        icon: 'fas fa-users',
        title: 'Stabilite ideale pour les familles',
        text: 'Les deux coques reduisent le roulis par mer peu formee : le format prefere de nombreux voyageurs pour les journees baignade et dejeuner.',
      },
    ],
    panel: {
      eyebrow: 'Stable · spacieux · all-inclusive',
      title: 'Croisieres en catamaran a Rhodes',
      paragraphs: [
        "Les croisieres catamaran a la journee le long de la cote est de Rhodes allient confort et prestations incluses : dejeuner, boissons, equipement de snorkeling et plusieurs arrets baignade, sur une plateforme stable et plane.",
        "Nous selectionnons des operateurs avec des catamarans bien entretenus et des equipages professionnels, et nous vous aidons a choisir entre croisiere partagee de jour, sortie sunset ou charter prive.",
      ],
      imageKey: 'hero',
    },
    catalogTitle: 'Excursions et croisieres en catamaran',
    catalogSubtitle: 'Sorties partagees de jour et experiences privees en catamaran',
    ctaTitle: 'Vous voulez un catamaran reserve uniquement a votre groupe ?',
    ctaText:
      'Des charters prives en catamaran sont disponibles : envoyez-nous vos dates et la taille de votre groupe.',
  },
  'rhodes-sailing-trips': {
    introQuote:
      "La voile n'est pas une question de vitesse : c'est le voyage qui compte. Le vent decide de la route.",
    features: [
      {
        icon: 'fas fa-wind',
        title: 'A la voile',
        text: 'Voiliers monocoques : plus lents, plus silencieux et plus proches de la mer que les croisieres a moteur.',
      },
      {
        icon: 'fas fa-users',
        title: 'Partage et prive',
        text: "Rejoignez une sortie en petit groupe ou affretez un voilier pour votre groupe sur la journee. Pour des vacances d'une semaine, voir le yacht charter.",
      },
      {
        icon: 'fas fa-map-marked-alt',
        title: 'Itineraires cote est',
        text: 'Sorties voile demi-journee et journee complete le long des cotes de Rhodes, avec skipper professionnel a chaque depart.',
      },
    ],
    panel: {
      eyebrow: 'Demi-journee et journee complete',
      title: 'Journees voile authentiques au depart de Rhodes',
      paragraphs: [
        "Les sorties voile a Rhodes sont des experiences a la journee avec skipper sur voiliers monocoques : cabotage en demi-journee ou itineraires a la journee complete, selon les conditions de vent.",
        "Aucune experience en voile n'est necessaire : le skipper s'occupe du bateau pendant que vous nagez, profitez du soleil et de la navigation. Si vous avez un permis et souhaitez skipper vous-meme, nous organisons le bareboat separement.",
      ],
      imageKey: 'hero',
      reversed: true,
    },
    catalogTitle: 'Sorties voile disponibles',
    catalogSubtitle: 'Navigations partagees et privees a la journee avec skippers professionnels',
    ctaTitle: 'La voile vous tente mais vous hesitez ?',
    ctaText:
      'Decrivez votre groupe et votre niveau de confort : nous vous recommanderons le format de voile le plus adapte en toute transparence.',
  },
  'rhodes-boat-trips': {
    introQuote:
      "Une sortie privee en bateau est l'une des facons les plus personnelles de decouvrir Rhodes : votre itineraire, votre rythme, votre groupe uniquement.",
    features: [
      {
        icon: 'fas fa-ship',
        title: 'Votre bateau prive',
        text: 'Un bateau avec skipper reserve a votre groupe : sorties flexibles de 2 a 8 heures, et non une excursion partagee ou un grand bateau de croisiere.',
      },
      {
        icon: 'fas fa-check-circle',
        title: 'Bateaux selectionnes',
        text: 'Speedboats, RIBs et petits catamarans d operateurs que nous connaissons : bateaux de qualite et skippers experimentes.',
      },
      {
        icon: 'fas fa-map-marked-alt',
        title: 'Itineraires flexibles',
        text: 'Baie Anthony Quinn, Lindos, cote sud ou baignades sur la cote est : vous choisissez avec le skipper le jour meme.',
      },
    ],
    panel: {
      eyebrow: 'Prive · avec skipper · flexible',
      title: 'Sorties privees en bateau pour votre groupe',
      paragraphs: [
        "A Rhodes, une sortie privee en bateau signifie votre propre skipper, la duree que vous choisissez et un itineraire adapte a votre groupe : couples, familles ou amis qui veulent le bateau pour eux seuls.",
        'Les prix commencent generalement autour de €350 pour une demi-journee. Indiquez vos dates et preferences, et nous vous mettrons en relation avec le bateau et l equipage les plus adaptes.',
      ],
      imageKey: 'hero',
    },
    catalogTitle: 'Sorties privees en bateau',
    catalogSubtitle: 'Experiences avec skipper reservees a votre groupe',
    routeGuide: {
      title: 'Itineraires populaires de sorties en bateau a Rhodes',
      intro:
        "Les sorties en bateau a Rhodes couvrent tout, des croisieres partagees abordables aux charters prives en speedboat. La plupart des visiteurs demandent Symi, Lindos et les baies de baignade de la cote est : voici comment comparer les principaux itineraires et ou se situent les options partagees et privees.",
      routes: [
        {
          heading: 'Sortie en bateau Rhodes - Symi',
          body: 'La sortie a la journee vers Symi est l itineraire le plus reserve depuis Rhodes. Les croisieres partagees quittent Mandraki vers 09:00, traversent en environ 75 a 90 minutes et vous laissent quatre a cinq heures dans le port pastel de Gialos avant un retour vers 18:00. Comptez €45-€70 par personne sur les bateaux organises, avec arret baignade en route. Les sorties privees en speedboat vers Symi conviennent aux groupes qui veulent une traversee plus rapide, une visite du monastere de Panormitis ou des horaires flexibles : en general €1,000-€1,300 par bateau pour jusqu a six passagers. Consultez les <a href="/service/rhodes-boat-cruises">croisieres a la journee vers Symi</a> pour les departs partages, ou les options privees dans notre catalogue ci-dessous.',
        },
        {
          heading: 'Sortie en bateau Rhodes - Lindos',
          body: 'Les sorties en bateau vers Lindos combinent baignade a St Paul\'s Bay et temps libre dans le village au pied de l Acropole. Les croisieres partagees depuis Rhodes Town ou Kolymbia sont souvent entre €39 et €100 par personne selon la duree et le dejeuner. Les liaisons express privilegient du temps a terre a Lindos ; les croisieres a la journee plus completes ajoutent des pauses baignade dans la baie Anthony Quinn ou a Kalithea Springs au retour. Les sorties privees en speedboat vers Lindos commencent autour de €460 pour une demi-journee et €700+ pour une journee complete avec dejeuner a bord : ideal si vous souhaitez controler la duree sur place. Voir les <a href="/service/rhodes-boat-cruises">croisieres Lindos et cote est</a> ou demandez une sortie privee a la journee vers Lindos.',
        },
        {
          heading: 'Sorties baignade cote est (Anthony Quinn, Kalithea, Ladiko)',
          body: "Toutes les sorties en bateau a Rhodes ne traversent pas vers une autre ile. Les itineraires demi-journee et journee complete sur la cote est restent le long d'un littoral abrite : baie Anthony Quinn, Kalithea Springs, Ladiko et grottes de Traganou sont les arrets classiques baignade et snorkeling. Les croisieres partagees all-inclusive coutent entre €45 et €75 par personne avec dejeuner et boissons a bord. Les sorties privees demi-journee a partir de €350 permettent a votre groupe de visiter deux ou trois baies a votre rythme, sans horaire fixe. Ces itineraires conviennent tres bien aux primo-visiteurs qui veulent une eau turquoise sans traversee en pleine mer.",
        },
        {
          heading: 'Sorties en bateau depuis Kolymbia et Faliraki',
          body: "Si vous sejournez sur la cote est, les departs depuis Kolymbia ou Faliraki reduisent le temps de transfert vers Symi, Lindos et les baies locales. Les bateaux express vers Symi depuis Kolymbia partent souvent plus tard que ceux de Mandraki et incluent un arret baignade a St George's Bay. Les navettes maritimes de Faliraki relient la zone hoteleire au port de Rhodes Town pour les voyageurs qui preferent eviter la voiture. Lors de votre demande, indiquez la zone de votre hotel : nous vous orientons vers le depart le plus logique, sans vous faire traverser l ile inutilement.",
        },
      ],
      closing:
        'Les croisieres partagees a la journee offrent le meilleur rapport qualite-prix par personne ; les sorties privees avec skipper vous donnent le bateau, l itineraire et le timing pour vous seuls. Nous selectionnons les deux formats depuis 1998 : <a href="/service/rhodes-boat-cruises">comparez les croisieres partagees a Rhodes</a>, consultez les sorties privees ci-dessous, ou <a href="/contact">contactez-nous</a> pour savoir quelle formule convient a vos dates et a votre groupe.',
    },
    ctaTitle: 'Vous planifiez une journee privee sur l eau ?',
    ctaText:
      'Envoyez vos dates, la taille de votre groupe et vos idees : nous vous proposerons les meilleures options disponibles.',
  },
  'rhodes-rent-a-boat': {
    introQuote:
      "Pilotez votre propre bateau le long des cotes de Rhodes : aucun permis requis pour les bateaux jusqu'a 30 HP.",
    features: [
      {
        icon: 'fas fa-id-card',
        title: 'Sans permis',
        text: "La loi grecque autorise toute personne de 18 ans et plus a conduire un bateau de plaisance jusqu'a 30 HP sans permis nautique officiel.",
      },
      {
        icon: 'fas fa-map',
        title: 'Liberte cotiere',
        text: 'Explorez les baies de la cote est a votre rythme : Anthony Quinn, Ladiko, Kalithea et zones de baignade abritees dans la zone autorisee.',
      },
      {
        icon: 'fas fa-check-circle',
        title: 'Operateurs selectionnes',
        text: 'Nous collaborons avec des bases de location fiables que nous connaissons personnellement : briefing, carburant, carte et equipement de securite inclus.',
      },
    ],
    panel: {
      eyebrow: 'Autonome · cote est',
      title: 'Location de bateau sans permis a Rhodes',
      paragraphs: [
        "Louer votre propre bateau est la facon la plus independante de decouvrir Rhodes depuis la mer : vous vous arretez quand vous voulez, nagez ou vous voulez et revenez quand vous etes pret.",
        "Avant le depart, vous recevez un briefing securite et une carte de la zone de navigation autorisee. Nous vous aidons a choisir la bonne taille de bateau et la bonne duree pour votre groupe, en toute transparence.",
      ],
      imageKey: 'hero',
    },
    catalogTitle: 'Bateaux de location disponibles',
    catalogSubtitle: 'Bateaux en libre conduite sans permis le long des cotes de Rhodes',
    ctaTitle: 'Vous hésitez sur la location adaptee a votre groupe ?',
    ctaText:
      'Indiquez vos dates et le nombre de personnes : nous vous recommanderons le bateau et la base les plus adaptes.',
  },
  'rhodes-charter': {
    introQuote:
      'Le yacht charter offre une autre maniere de vivre la mer : navigation sur plusieurs jours, island hopping et liberte en mer Egee.',
    features: [
      {
        icon: 'fas fa-compass',
        title: 'Bareboat charter',
        text: 'Voilier sans skipper : pour navigateurs experimentes disposant d un permis valide et preparant leur propre itineraire dans le Dodecanese.',
      },
      {
        icon: 'fas fa-user-shield',
        title: 'Charter avec skipper',
        text: "Skipper professionnel a bord : aucune experience de voile necessaire, il gere la navigation et les mouillages.",
      },
      {
        icon: 'fas fa-map-marked-alt',
        title: 'Conseil local',
        text: 'Nous vous mettons en relation avec la bonne compagnie de charter et la classe de yacht adaptee a votre equipage, vos dates et votre itineraire.',
      },
    ],
    panel: {
      eyebrow: 'Hebdomadaire · Dodecanese',
      title: 'Yacht charter depuis Rhodes Marina',
      paragraphs: [
        "Le yacht charter hebdomadaire depuis Rhodes ouvre les iles du Dodecanese : Symi, Halki, Kos, Nisyros et des mouillages paisibles accessibles uniquement a la voile.",
        'Choisissez le bareboat si vous disposez d un permis reconnu, ou l option avec skipper si vous preferez un capitaine professionnel. Nous vous conseillons sur la saison, le type de yacht et des itineraires realistes selon votre equipage.',
      ],
      imageKey: 'hero',
      reversed: true,
    },
    catalogTitle: 'Yachts de charter et options',
    catalogSubtitle: 'Vacances voile hebdomadaires bareboat ou avec skipper',
    ctaTitle: 'Vous planifiez des vacances voile dans le Dodecanese ?',
    ctaText:
      'Indiquez vos dates, votre niveau d experience et votre groupe : nous vous orienterons vers le bon partenaire charter.',
  },
  'rhodes-mice-events': {
    introQuote:
      'Rhodes reunit littoral, patrimoine, resorts et marinas : tout ce qu il faut pour des programmes corporate et incentive complets.',
    features: [
      {
        icon: 'fas fa-building',
        title: 'Evenements corporate',
        text: 'Voyages incentive, team building, conferences, lancements de produits et celebrations VIP a Rhodes.',
      },
      {
        icon: 'fas fa-ship',
        title: 'Experiences en mer',
        text: 'Jours de flotte, croisieres en catamaran, charters yacht et sorties voile organises pour des groupes de toute taille.',
      },
      {
        icon: 'fas fa-handshake',
        title: 'Reseau local',
        text: "Nous mettons les organisateurs en relation avec des bateaux, lieux, transferts et prestataires fiables dans toute l'ile.",
      },
    ],
    panel: {
      eyebrow: 'MICE · Incentive · Corporate',
      title: 'Evenements et incentives sur l eau',
      paragraphs: [
        'Rhodes est une destination MICE naturelle : resorts, marinas, vieille ville medievale et large eventail d experiences en mer facilement accessibles.',
        'Des regates de flotte et journees catamaran aux diners VIP sur yacht et programmes combines terre-mer : nous coordonnons via notre reseau local pour assurer un evenement fluide.',
      ],
      imageKey: 'hero',
    },
    ctaTitle: 'Vous organisez un evenement d entreprise a Rhodes ?',
    ctaText:
      'Partagez la taille de votre groupe, vos dates et vos objectifs : nous vous proposerons des options realistes sur l eau.',
  },
  'rhodes-tender-boat': {
    introQuote:
      'Transferts professionnels quai-navire dans les ports et baies de Rhodes : fiables, ponctuels et operationnels en saison 24h/24.',
    features: [
      {
        icon: 'fas fa-bolt',
        title: 'Intervention rapide',
        text: 'Transferts a la demande avec un delai de reponse generalement inferieur a 15 minutes dans les principales zones portuaires.',
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Securise et agree',
        text: 'Tenders bien entretenus avec des operateurs professionnels formes a toutes les conditions.',
      },
      {
        icon: 'fas fa-calendar-check',
        title: 'Programme ou a la demande',
        text: 'Planifiez des transferts reguliers a l avance ou demandez un depart immediat selon vos besoins.',
      },
    ],
    panel: {
      eyebrow: 'Transferts maritimes',
      title: 'Service tender boat a Rhodes',
      paragraphs: [
        'Les tender boats font le lien entre le rivage et le navire : passagers de croisiere, clients de superyachts, transferts marina et liaisons port-yacht a travers Rhodes.',
        'Nous travaillons avec des operateurs locaux agrees qui connaissent chaque ponton, contrainte horaire et condition meteo a Mandraki, Rhodes Marina et dans les mouillages de la cote est.',
      ],
      imageKey: 'hero',
      reversed: true,
    },
    ctaTitle: 'Besoin d un transfert tender a Rhodes ?',
    ctaText:
      'Indiquez votre port, votre horaire et le nombre de passagers : nous vous mettrons en relation avec le bon operateur.',
  },
};
