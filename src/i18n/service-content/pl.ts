import type { ServicePageContent } from '../../lib/service-content';

export const pl: Record<string, ServicePageContent> = {
  'rhodes-boat-tours': {
    introQuote:
      'Nie wszystkie wycieczki łodzią są takie same. O różnicy decydują łódź, załoga i atmosfera.',
    features: [
      {
        icon: 'fas fa-water',
        title: 'Zwiedzanie ze skipperem',
        text: 'Wycieczki w małych grupach z profesjonalnym skipperem — przeskoki między wyspami, trasy wzdłuż wybrzeża i rejsy o zachodzie słońca, a nie duże statki all-inclusive.',
      },
      {
        icon: 'fas fa-check-circle',
        title: 'Starannie wybrane rejsy',
        text: 'Spośród wszystkich dostępnych wycieczek na Rodos wybraliśmy te z dobrymi łodziami, doświadczoną załogą i uczciwą ceną.',
      },
      {
        icon: 'fas fa-map-marked-alt',
        title: 'Lokalne doradztwo',
        text: 'Podaj wielkość grupy i terminy — dopasujemy najlepszy format rejsu i trasę.',
      },
    ],
    panel: {
      eyebrow: 'Lokalni eksperci od 1998 roku',
      title: 'Rejsy polecane uczciwie',
      lead: 'Znamy skipperów, łodzie i trasy.',
      paragraphs: [
        'Wycieczki łodzią na Rodos obejmują zarówno kameralne grupy żeglarskie, jak i szybsze trasy krajoznawcze wzdłuż wschodniego wybrzeża. Przed rezerwacją pomagamy zrozumieć różnice: wielkość grupy, czas trwania, co jest w cenie i czy lepszy będzie rejs grupowy czy prywatny.',
        'Każdy rejs na tej stronie jest od operatora, którego znamy osobiście. Bez anonimowych ofert i płatnych lokowań — tylko rzetelna rekomendacja od osób, które codziennie pracują w porcie.',
      ],
      imageKey: 'hero',
      reversed: false,
    },
    catalogTitle: 'Dostępne wycieczki łodzią',
    catalogSubtitle: 'Starannie wybrane rejsy z wypłynięciem z Rodos',
    ctaTitle: 'Nie wiesz, który rejs pasuje do Twojej grupy?',
    ctaText:
      'Podaj terminy i skład grupy — uczciwie wskażemy najlepszą opcję, bez nacisku.',
  },
  'rhodes-boat-cruises': {
    introQuote:
      'Rejsy to jeden z najlepszych sposobów, aby odkryć wybrzeże, odwiedzić znane zatoki i spędzić cały dzień na morzu.',
    features: [
      {
        icon: 'fas fa-anchor',
        title: 'Całodniowe rejsy all-inclusive',
        text: 'Większe jednostki na stałych trasach do Symi, Lindos lub wzdłuż wschodniego wybrzeża — postoje na kąpiel, lunch i napoje w cenie.',
      },
      {
        icon: 'fas fa-map-signs',
        title: 'Wiele miejsc wypłynięcia',
        text: 'Rejsy startują z portu Mandraki, Faliraki, Kolymbii i Lindos w zależności od trasy i kierunku.',
      },
      {
        icon: 'fas fa-map-marked-alt',
        title: 'Lokalna pomoc',
        text: 'Pomagamy dobrać właściwy rejs do lokalizacji hotelu, wielkości grupy i czasu, jaki chcesz spędzić na wodzie.',
      },
    ],
    panel: {
      eyebrow: 'Symi · Lindos · wschodnie wybrzeże',
      title: 'Zorganizowane rejsy dzienne z Rodos',
      paragraphs: [
        'Całodniowe rejsy to najpopularniejszy sposób, by podczas jednej wycieczki zobaczyć Symi, Lindos i zatoki wschodniego wybrzeża — z lunchem, napojami i kilkoma postojami na pływanie.',
        'Współpracujemy ze sprawdzonymi lokalnymi operatorami i pomagamy wybrać rejs według portu wypłynięcia, typu jednostki oraz formatu — wspólnego lub bardziej prywatnego.',
      ],
      imageKey: 'hero',
    },
    catalogTitle: 'Dostępne rejsy dzienne',
    catalogSubtitle: 'Symi, Lindos, zatoka Anthony Quinn i trasy wschodniego wybrzeża',
    ctaTitle: 'Potrzebujesz pomocy w wyborze rejsu?',
    ctaText:
      'Podaj rejon hotelu i wielkość grupy — wskażemy właściwy port i trasę.',
  },
  'rhodes-catamaran-tours': {
    introQuote:
      'Katamarany są przestronne, stabilne i komfortowe — to najbardziej relaksujący sposób na dzień na morzu.',
    features: [
      {
        icon: 'fas fa-sun',
        title: 'Dzienne rejsy katamaranem',
        text: 'Całodniowe trasy z postojami na kąpiel, lunchem, napojami i czasem na siatkach dziobowych. Dostępne opcje wspólne i prywatne.',
      },
      {
        icon: 'fas fa-moon',
        title: 'Rejsy o zachodzie słońca',
        text: 'Wieczorne rejsy z napojami i lekką kolacją podczas zachodu słońca — idealne dla par i na celebracje.',
      },
      {
        icon: 'fas fa-users',
        title: 'Stabilność dla rodzin',
        text: 'Dwa kadłuby oznaczają mniejsze kołysanie przy lekkiej fali — to format najczęściej wybierany na dzień pływania i lunchu.',
      },
    ],
    panel: {
      eyebrow: 'Stabilnie · przestronnie · all-inclusive',
      title: 'Rejsy katamaranowe na Rodos',
      paragraphs: [
        'Dzienne rejsy katamaranem wzdłuż wschodniego wybrzeża Rodos łączą komfort z bogatą ofertą — lunch, napoje, sprzęt do snorkelingu i kilka postojów na kąpiel na stabilnej platformie.',
        'Wybieramy operatorów z zadbanymi katamaranami i profesjonalną załogą oraz pomagamy zdecydować między wspólnym rejsem dziennym, rejsem o zachodzie słońca i prywatnym czarterem katamaranu.',
      ],
      imageKey: 'hero',
    },
    catalogTitle: 'Wycieczki i rejsy katamaranem',
    catalogSubtitle: 'Wspólne rejsy dzienne i prywatne doświadczenia katamaranowe',
    ctaTitle: 'Chcesz katamaran tylko dla swojej grupy?',
    ctaText:
      'Prywatne czartery katamaranów są dostępne — napisz nam terminy i liczebność grupy.',
  },
  'rhodes-sailing-trips': {
    introQuote:
      'Żeglowanie nie polega na prędkości — chodzi o samą podróż. Trasę wyznacza wiatr.',
    features: [
      {
        icon: 'fas fa-wind',
        title: 'Pod żaglami',
        text: 'Jednokadłubowe jachty żaglowe — wolniej, ciszej i bliżej morza niż podczas rejsów motorowych.',
      },
      {
        icon: 'fas fa-users',
        title: 'Wspólnie lub prywatnie',
        text: 'Dołącz do małej grupy albo wyczarteruj jacht dla własnej ekipy na cały dzień. Na tygodniowe wakacje sprawdź yacht charter.',
      },
      {
        icon: 'fas fa-map-marked-alt',
        title: 'Trasy wschodnim wybrzeżem',
        text: 'Półdniowe i całodniowe rejsy żeglarskie wzdłuż wybrzeża Rodos z profesjonalnym skipperem na każdym wypłynięciu.',
      },
    ],
    panel: {
      eyebrow: 'Pół dnia i cały dzień',
      title: 'Autentyczne dni pod żaglami z Rodos',
      paragraphs: [
        'Rejsy żeglarskie na Rodos to dzienne wyprawy na jednokadłubowych jachtach ze skipperem — krótsze trasy przybrzeżne na pół dnia lub całodniowe, gdy pozwala wiatr.',
        'Doświadczenie żeglarskie nie jest wymagane: skipper prowadzi jacht, a Ty pływasz, opalasz się i cieszysz rejsem. Jeśli masz uprawnienia i chcesz prowadzić samodzielnie, organizujemy oddzielnie bareboat charter.',
      ],
      imageKey: 'hero',
      reversed: true,
    },
    catalogTitle: 'Dostępne rejsy żeglarskie',
    catalogSubtitle: 'Wspólne i prywatne rejsy dzienne z profesjonalnymi skipperami',
    ctaTitle: 'Ciekawi Cię żeglowanie, ale nie masz pewności?',
    ctaText:
      'Opisz swoją grupę i poziom komfortu — uczciwie polecimy najlepszy format rejsu.',
  },
  'rhodes-boat-trips': {
    introQuote:
      'Prywatna wycieczka łodzią to jeden z najbardziej osobistych sposobów poznania Rodos — Twoja trasa, Twoje tempo, tylko Twoja grupa.',
    features: [
      {
        icon: 'fas fa-ship',
        title: 'Twoja prywatna łódź',
        text: 'Łódź ze skipperem zarezerwowana dla Twojej grupy — elastyczne wycieczki 2-8 godzin, bez współdzielonego rejsu i bez dużego statku.',
      },
      {
        icon: 'fas fa-check-circle',
        title: 'Sprawdzone jednostki',
        text: 'Motorówki, RIB-y i mniejsze katamarany od operatorów, których znamy osobiście — jakościowe jednostki i doświadczeni skipperzy.',
      },
      {
        icon: 'fas fa-map-marked-alt',
        title: 'Elastyczne trasy',
        text: 'Anthony Quinn Bay, Lindos, południowe wybrzeże lub kąpiele na wschodnim wybrzeżu — trasę ustalasz ze skipperem w dniu rejsu.',
      },
    ],
    panel: {
      eyebrow: 'Prywatnie · ze skipperem · elastycznie',
      title: 'Prywatne wycieczki łodzią dla Twojej grupy',
      paragraphs: [
        'Prywatne wycieczki łodzią na Rodos oznaczają własnego skippera, wybrany czas trwania i trasę dopasowaną do Twojej grupy — dla par, rodzin i znajomych, którzy chcą mieć łódź tylko dla siebie.',
        'Ceny zazwyczaj zaczynają się od około 350 EUR za pół dnia. Podaj terminy i preferencje, a połączymy Cię z odpowiednią jednostką i załogą.',
      ],
      imageKey: 'hero',
    },
    catalogTitle: 'Prywatne wycieczki łodzią',
    catalogSubtitle: 'Rejsy ze skipperem zarezerwowane wyłącznie dla Twojej grupy',
    routeGuide: {
      title: 'Popularne trasy wycieczek łodzią na Rodos',
      intro:
        'Wycieczki łodzią na Rodos obejmują wszystko: od budżetowych wspólnych rejsów dziennych po w pełni prywatne czartery motorówek. Najczęściej goście pytają o Symi, Lindos i zatoki kąpielowe wschodniego wybrzeża — poniżej porównanie głównych tras i formatów wspólnych oraz prywatnych.',
      routes: [
        {
          heading: 'Wycieczka łodzią z Rodos na Symi',
          body: 'Dzienna trasa na Symi to najczęściej rezerwowany kierunek z Rodos. Wspólne rejsy wypływają z Mandraki około 09:00, przeprawa trwa ok. 75-90 minut, a następnie masz 4-5 godzin w pastelowym porcie Gialos, z powrotem mniej więcej o 18:00. Na zorganizowanych rejsach dziennych z postojem na kąpiel po drodze koszt to zwykle 45-70 EUR za osobę. Prywatne wyprawy motorówką na Symi są dobre dla grup, które chcą szybszego przejścia, odwiedzić klasztor Panormitis lub mieć elastyczne godziny — zwykle 1 000-1 300 EUR za jednostkę do 6 osób. Zobacz <a href="/service/rhodes-boat-cruises">dzienne rejsy na Symi</a> w formule wspólnej lub prywatne opcje w naszym katalogu poniżej.',
        },
        {
          heading: 'Wycieczka łodzią z Rodos do Lindos',
          body: 'Rejsy do Lindos łączą kąpiel w St Paul\'s Bay z czasem wolnym w miejscowości pod Akropolem. Wspólne rejsy z miasta Rodos lub Kolymbii kosztują zwykle 39-100 EUR za osobę, zależnie od czasu trwania i lunchu. Trasy ekspresowe skupiają się na pobycie w Lindos na lądzie; pełniejsze rejsy dzienne dodają postoje kąpielowe w Anthony Quinn Bay lub Kalithea Springs w drodze powrotnej. Prywatne rejsy motorówką do Lindos zaczynają się od ok. 460 EUR za pół dnia i 700+ EUR za cały dzień z lunchem na pokładzie — idealne, jeśli chcesz samodzielnie decydować, ile czasu spędzić w miejscowości. Sprawdź <a href="/service/rhodes-boat-cruises">rejsy do Lindos i wschodnim wybrzeżem</a> lub zapytaj o prywatny dzień w Lindos.',
        },
        {
          heading: 'Trasy kąpielowe wschodnim wybrzeżem (Anthony Quinn, Kalithea, Ladiko)',
          body: 'Nie każda wycieczka łodzią z Rodos oznacza przeprawę na inną wyspę. Półdniowe i całodniowe trasy wschodnim wybrzeżem prowadzą wzdłuż osłoniętej linii brzegowej — klasyczne przystanki na pływanie i snorkeling to Anthony Quinn Bay, Kalithea Springs, Ladiko i jaskinie Traganou. Wspólne rejsy all-inclusive kosztują 45-75 EUR za osobę z lunchem i napojami na pokładzie. Prywatne rejsy półdniowe od 350 EUR pozwalają Twojej grupie odwiedzić 2-3 zatoki we własnym tempie, bez sztywnego harmonogramu. Te trasy są świetne dla osób pierwszy raz na wyspie, które chcą turkusowej wody bez otwartego morza.',
        },
        {
          heading: 'Wycieczki łodzią z Kolymbii i Faliraki',
          body: 'Jeśli nocujesz na wschodnim wybrzeżu, wypłynięcia z Kolymbii lub Faliraki skracają dojazd na Symi, do Lindos i do lokalnych zatok kąpielowych. Ekspresowe łodzie na Symi z Kolymbii często wypływają później niż z Mandraki i obejmują postój kąpielowy w St George\'s Bay. Morskie shuttle z Faliraki łączą strefę kurortową z portem w mieście Rodos dla gości, którzy wolą nie prowadzić auta. W zapytaniu podaj rejon hotelu — dopasujemy najbliższy sensowny port wypłynięcia, zamiast niepotrzebnie wozić Cię przez całą wyspę.',
        },
      ],
      closing:
        'Wspólne rejsy dzienne dają najlepszy koszt na osobę; prywatne rejsy ze skipperem dają łódź, trasę i czas tylko dla Was. Oba formaty selekcjonujemy od 1998 roku — <a href="/service/rhodes-boat-cruises">porównaj wspólne rejsy na Rodos</a>, sprawdź prywatne opcje poniżej lub <a href="/contact">napisz do nas</a>, jaki format pasuje do Twoich terminów i grupy.',
    },
    ctaTitle: 'Planujesz prywatny dzień na wodzie?',
    ctaText:
      'Wyślij terminy, wielkość grupy i pomysł — przedstawimy najlepsze dostępne opcje.',
  },
  'rhodes-rent-a-boat': {
    introQuote:
      'Prowadź łódź samodzielnie wzdłuż wybrzeża Rodos — do 30 KM nie potrzebujesz licencji.',
    features: [
      {
        icon: 'fas fa-id-card',
        title: 'Bez licencji',
        text: 'Greckie prawo pozwala każdej osobie 18+ prowadzić jednostkę rekreacyjną do 30 KM bez formalnych uprawnień motorowodnych.',
      },
      {
        icon: 'fas fa-map',
        title: 'Swoboda na wybrzeżu',
        text: 'Odkrywaj zatoki wschodniego wybrzeża we własnym tempie — Anthony Quinn, Ladiko, Kalithea i osłonięte miejsca w dozwolonej strefie.',
      },
      {
        icon: 'fas fa-check-circle',
        title: 'Sprawdzeni operatorzy',
        text: 'Współpracujemy ze sprawdzonymi bazami wynajmu, które znamy osobiście — briefing, paliwo, mapa i wyposażenie bezpieczeństwa są w cenie.',
      },
    ],
    panel: {
      eyebrow: 'Samodzielnie · wschodnie wybrzeże',
      title: 'Wynajem łodzi bez licencji na Rodos',
      paragraphs: [
        'Wynajem własnej łodzi to najbardziej niezależny sposób na poznanie Rodos od strony morza — zatrzymujesz się, kiedy chcesz, pływasz tam, gdzie lubisz, i wracasz wtedy, gdy jesteś gotowy.',
        'Przed wypłynięciem otrzymujesz briefing bezpieczeństwa i mapę dozwolonego akwenu. Uczciwie pomożemy dobrać odpowiedni rozmiar łodzi i czas wynajmu dla Twojej grupy.',
      ],
      imageKey: 'hero',
    },
    catalogTitle: 'Dostępne łodzie na wynajem',
    catalogSubtitle: 'Samodzielny wynajem bez licencji wzdłuż wybrzeża Rodos',
    ctaTitle: 'Nie wiesz, który wynajem pasuje do Twojej grupy?',
    ctaText:
      'Podaj terminy i liczbę osób — polecimy właściwą łódź i bazę.',
  },
  'rhodes-charter': {
    introQuote:
      'Czarter jachtu to inny rodzaj morskich wakacji — wielodniowe żeglowanie, island hopping i swoboda otwartego Morza Egejskiego.',
    features: [
      {
        icon: 'fas fa-compass',
        title: 'Czarter bareboat',
        text: 'Jacht żaglowy bez skippera — dla doświadczonych żeglarzy z ważnymi uprawnieniami, którzy planują własną trasę po Dodekanezie.',
      },
      {
        icon: 'fas fa-user-shield',
        title: 'Czarter ze skipperem',
        text: 'Profesjonalny skipper na pokładzie — doświadczenie żeglarskie nie jest potrzebne, skipper prowadzi nawigację i postoje.',
      },
      {
        icon: 'fas fa-map-marked-alt',
        title: 'Lokalne wsparcie',
        text: 'Łączymy Cię z odpowiednią firmą czarterową i klasą jachtu dopasowaną do załogi, terminu i trasy.',
      },
    ],
    panel: {
      eyebrow: 'Tygodniowe · Dodekanez',
      title: 'Czarter jachtów z Rhodes Marina',
      paragraphs: [
        'Tygodniowy czarter z Rodos otwiera Dodekanez — Symi, Halki, Kos, Nisyros i spokojne kotwicowiska dostępne najlepiej od strony morza.',
        'Wybierz bareboat, jeśli masz uznawane uprawnienia, albo czarter ze skipperem, jeśli wolisz zawodowego kapitana. Doradzamy sezon, typ jachtu i realne trasy dla Twojej załogi.',
      ],
      imageKey: 'hero',
      reversed: true,
    },
    catalogTitle: 'Jachty czarterowe i opcje',
    catalogSubtitle: 'Tygodniowe wakacje żeglarskie bareboat i ze skipperem',
    ctaTitle: 'Planujesz żeglarskie wakacje na Dodekanezie?',
    ctaText:
      'Podaj terminy, poziom doświadczenia i skład grupy — dopasujemy właściwego partnera czarterowego.',
  },
  'rhodes-mice-events': {
    introQuote:
      'Rodos łączy linię brzegową, historię, resorty i mariny — wszystko, co potrzebne do kompleksowych programów corporate i incentive.',
    features: [
      {
        icon: 'fas fa-building',
        title: 'Wydarzenia korporacyjne',
        text: 'Wyjazdy incentive, team building, konferencje, premiery produktów i wydarzenia VIP na Rodos.',
      },
      {
        icon: 'fas fa-ship',
        title: 'Doświadczenia na wodzie',
        text: 'Dni flotyllowe, rejsy katamaranem, czartery jachtów i rejsy żeglarskie dla grup każdej wielkości.',
      },
      {
        icon: 'fas fa-handshake',
        title: 'Lokalna sieć partnerów',
        text: 'Łączymy organizatorów ze sprawdzonymi łodziami, obiektami, transferami i usługodawcami na całej wyspie.',
      },
    ],
    panel: {
      eyebrow: 'MICE · Incentive · Corporate',
      title: 'Wydarzenia i programy incentive na wodzie',
      paragraphs: [
        'Rodos to naturalny kierunek MICE: resorty, mariny, średniowieczne Stare Miasto i pełne zaplecze atrakcji morskich w łatwym zasięgu.',
        'Od regat flotyllowych i dni na katamaranach po kolacje VIP na jachcie i programy łączące ląd z morzem — koordynujemy wszystko lokalnie, aby wydarzenie przebiegło płynnie.',
      ],
      imageKey: 'hero',
    },
    ctaTitle: 'Planujesz wydarzenie firmowe na Rodos?',
    ctaText:
      'Podaj wielkość grupy, terminy i cele — zaproponujemy realne opcje na wodzie.',
  },
  'rhodes-tender-boat': {
    introQuote:
      'Profesjonalne transfery brzeg-statek w portach i zatokach Rodos — niezawodnie, punktualnie, całodobowo w sezonie.',
    features: [
      {
        icon: 'fas fa-bolt',
        title: 'Szybka reakcja',
        text: 'Transfery na żądanie, zwykle z czasem reakcji poniżej 15 minut w głównych strefach portowych.',
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Bezpiecznie i legalnie',
        text: 'Zadbane tendery z profesjonalnymi operatorami przygotowanymi do działania w każdych warunkach.',
      },
      {
        icon: 'fas fa-calendar-check',
        title: 'Planowo lub na wezwanie',
        text: 'Możesz zaplanować regularne transfery z wyprzedzeniem albo zamówić natychmiastowe podstawienie jednostki.',
      },
    ],
    panel: {
      eyebrow: 'Transfery morskie',
      title: 'Serwis tender boat na Rodos',
      paragraphs: [
        'Tender boaty łączą brzeg ze statkiem — dla pasażerów rejsowych, gości superjachtów, transferów marinowych i kursów port-jacht na całym Rodos.',
        'Współpracujemy z licencjonowanymi lokalnymi operatorami, którzy znają każdy pomost, ograniczenia czasowe i warunki pogodowe w Mandraki, Rhodes Marina oraz na kotwicowiskach wschodniego wybrzeża.',
      ],
      imageKey: 'hero',
      reversed: true,
    },
    ctaTitle: 'Potrzebujesz transferu tender na Rodos?',
    ctaText:
      'Podaj port, godzinę i liczbę pasażerów — połączymy Cię z właściwym operatorem.',
  },
};
