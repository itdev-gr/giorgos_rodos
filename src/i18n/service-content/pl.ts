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
    routeGuide: {
      title: 'Wycieczki łodzią po Rodos: trasy, cele i czego się spodziewać',
      intro:
        'Wycieczka łodzią to najłatwiejszy sposób, aby dotrzeć do najpiękniejszych zatok do kąpieli, grot morskich i sąsiednich wysp Rodos, bez wynajmu samochodu i bez tłocznej wycieczki autokarowej. Większość wycieczek z przewodnikiem wypływa z portu Mandraki w mieście Rodos i kursuje od wiosny do października. Poniżej wyjaśniamy, czym różnią się główne trasy, co jest wliczone i jak wybrać wycieczkę łodzią odpowiednią dla Twojej grupy.',
      routes: [
        {
          heading: 'Co jest wliczone w wycieczkę łodzią po Rodos',
          body: 'Większość wycieczek łodzią z przewodnikiem na Rodos jest w opcji all inclusive, co upraszcza cały dzień. Typowa wycieczka obejmuje rejs w obie strony, postoje na kąpiel w dwóch lub trzech zatokach, sprzęt do snorkelingu, napoje bezalkoholowe i wodę, a przy całodniowych rejsach gorący obiad lub grecki bufet na pokładzie. Ceny naszych wybranych wycieczek zaczynają się zwykle od około €75 za osobę dorosłą, ze zniżkami dla dzieci i rodzin na większości rejsów. Czego nie znajdziesz, to ukrytych opłat ani nacisku na sprzedaż: podajemy pełną cenę z góry. Ponieważ pracujemy w porcie Mandraki od 1998 roku, oferujemy tylko wycieczki na dobrze utrzymanych łodziach z doświadczoną, anglojęzyczną załogą. Jeśli masz szczególne potrzeby — cień na pokładzie, spokojniejszą łódź, łatwy dostęp dla starszych gości lub stabilny katamaran przy chorobie morskiej — daj nam znać, a dobierzemy odpowiednią łódź, a nie po prostu pierwszą wolną.',
        },
        {
          heading: 'Wycieczki łodzią na wyspę Symi',
          body: 'Całodniowa wycieczka na Symi to najpopularniejszy rejs łodzią z Rodos. Łodzie wypływają z Mandraki rano, pokonują trasę w około 75–90 minut i dają kilka godzin w pastelowym porcie Gialos, z postojem na kąpiel po drodze. Symi słynie z neoklasycystycznych domów, klasztoru Panormitis i krystalicznie czystej wody, idealnej do zdjęć i spokojnego obiadu na lądzie. Nasz <a href="/tour-detail/all-inclusive-luxury-cruise-to-symi">luksusowy rejs all inclusive na Symi</a> dodaje jedzenie i napoje na pokładzie, abyś mógł cieszyć się przeprawą. Jeśli wolisz mniejszą grupę lub własne godziny, zapytaj o rejs prywatny, a zorganizujemy szybszą motorówkę dla maksymalnie sześciu osób.',
        },
        {
          heading: 'Wycieczki łodzią do Lindos',
          body: 'Wycieczka łodzią do Lindos łączy średniowieczne miasteczko i jego Akropol z kąpielą u podnóża klifów w zatoce St Paul. Podpłynięcie do Lindos od strony morza to najbardziej malowniczy sposób przybycia, a wielu gości uznaje go za punkt kulminacyjny podróży. Nasz <a href="/tour-detail/luxury-cruise-to-lindos-with-lunch-and-drinks">luksusowy rejs do Lindos z obiadem i napojami</a> obejmuje czas w miasteczku oraz postoje na kąpiel wzdłuż wschodniego wybrzeża w drodze tam. Zabierz wygodne buty, jeśli planujesz wejść na Akropol, oraz kapelusz: w miasteczku w południe jest mało cienia. Dla większych grup lub wyjątkowych okazji prywatny rejs do Lindos pozwala samodzielnie zdecydować, jak długo zostać.',
        },
        {
          heading: 'Wycieczki kąpielowe wzdłuż wschodniego wybrzeża — Anthony Quinn Bay i Kallithea',
          body: 'Nie każda wycieczka łodzią z Rodos przeprawia się na inną wyspę. Wycieczki kąpielowe wzdłuż wschodniego wybrzeża trzymają się osłoniętej linii brzegowej, z postojami w Anthony Quinn Bay, u źródeł Kallithea, w Ladiko i przy grotach morskich Traganou: to klasyczne miejsca do snorkelingu i kąpieli w spokojnej, turkusowej wodzie. Są idealne dla osób odwiedzających po raz pierwszy i rodzin, które chcą pięknych zatok bez przeprawy przez otwarte morze. Nasza <a href="/tour-detail/semi-private-top-rated-swimming-trip-4-hours-all-inclusive">półprywatna 4-godzinna wycieczka kąpielowa all inclusive</a> utrzymuje małe grupy, dzięki czemu łódź nigdy nie jest zatłoczona, a <a href="/tour-detail/yachting-4-hours-east-coast-cruise-with-greek-buffet">4-godzinny rejs jachtem wzdłuż wschodniego wybrzeża z greckim bufetem</a> dodaje swobodny żeglarski klimat i jedzenie na pokładzie. Oba wypływają z miasta Rodos i wracają wczesnym popołudniem.',
        },
        {
          heading: 'Rejsy łodzią o zachodzie słońca na Rodos',
          body: 'Rejsy łodzią o zachodzie słońca to najbardziej romantyczny sposób na zakończenie dnia na Rodos. Wypływając późnym popołudniem, płyną po spokojnych wodach na zachodzie i północy, gdy światło staje się złote, zwykle z postojem na kąpiel i napojami na pokładzie. Nasz <a href="/tour-detail/sunset-cruise-shared-or-private">rejs o zachodzie słońca, wspólny lub prywatny</a>, sprawdza się równie dobrze dla par, przyjaciół i małych grup. Wspólne wypłynięcia oferują najlepszy stosunek jakości do ceny, a prywatny czarter o zachodzie słońca daje pokład tylko dla Ciebie, na oświadczyny, rocznicę lub urodziny. Zabierz lekką warstwę odzieży: na wodzie robi się chłodniej, gdy słońce zajdzie za horyzont.',
        },
        {
          heading: 'Wycieczka łodzią z grillem na Red Sand Beach',
          body: 'Dla czegoś innego <a href="/tour-detail/red-sand-beach-bbq-trip-every-sunday">wycieczka z grillem na Red Sand Beach odbywa się w każdą niedzielę</a> i łączy przybrzeżny rejs z lunchem z grilla na lądzie na jednej z najbardziej zachwycających plaż wyspy. To całodniowe doświadczenie all inclusive skupione na kąpieli, jedzeniu i swobodnej atmosferze grupowej, a nie na napiętym programie zwiedzania. Ponieważ odbywa się tylko raz w tygodniu i szybko się zapełnia w lipcu i sierpniu, warto rezerwować z wyprzedzeniem. Podaj nam swoje terminy wcześnie, a zarezerwujemy miejsce, jeśli będzie dostępne.',
        },
        {
          heading: 'Wspólne, półprywatne czy prywatne wycieczki łodzią?',
          body: 'Wycieczki łodzią po Rodos są w trzech formatach. Wycieczki wspólne są najtańsze: dołączasz do innych podróżnych na ustalonej trasie i o ustalonej godzinie, idealne, gdy chcesz spędzić dzień bez organizowania czegokolwiek. Wycieczki półprywatne ograniczają liczbę gości, dzięki czemu łódź pozostaje komfortowa, a załoga ma czas dla każdego. W pełni prywatne wycieczki dają Ci łódź, trasę i godziny tylko dla siebie, idealne dla rodzin, grup przyjaciół i wyjątkowych okazji. Jeśli wolisz sterować samodzielnie, zobacz <a href="/service/rhodes-rent-a-boat">wynajem łodzi na Rodos</a> (bez patentu dla mniejszych silników) lub przejrzyj zorganizowane <a href="/service/rhodes-boat-cruises">rejsy łodzią po Rodos</a> dla większych całodniowych łodzi all inclusive.',
        },
        {
          heading: 'Skąd wypływają wycieczki łodzią po Rodos',
          body: 'Większość naszych wycieczek łodzią po Rodos wypływa z portu Mandraki w mieście Rodos, w odległości spaceru od starego miasta i z łatwym dojazdem z pobliskich kurortów. Jeśli mieszkasz dalej na południe wzdłuż wschodniego wybrzeża, w Faliraki, Kolymbii lub Lindos, podaj region swojego hotelu przy zapytaniu, a wskażemy najbliższe sensowne wypłynięcie, zamiast wysyłać Cię na drugi koniec wyspy. Sezon trwa mniej więcej od końca kwietnia do października, z najspokojniejszym morzem i najcieplejszą wodą od czerwca do września. Poranki są najlepsze na wycieczki kąpielowe, a popołudnia na rejsy o zachodzie słońca.',
        },
      ],
      closing:
        'Dopasowujemy odwiedzających do właściwych wycieczek łodzią po Rodos od 1998 roku, uczciwie, bez opłat rezerwacyjnych i bez nacisku. Przejrzyj wybrane wycieczki poniżej, <a href="/service/rhodes-boat-cruises">porównaj całodniowe rejsy</a> lub <a href="/contact">podaj nam swoje terminy</a>, a zaproponujemy najlepszą opcję dla Twojej grupy.',
    },
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
    routeGuide: {
      title: 'Rejsy łodzią po Rodos: dzienne i o zachodzie słońca all inclusive',
      intro: 'Rejs łodzią po Rodos to łatwy, all inclusive sposób na spędzenie dnia lub wieczoru na morzu — większe, zorganizowane łodzie ze stałymi trasami, postojami na kąpiel oraz jedzeniem i napojami na pokładzie. Większość rejsów wypływa z portu Mandraki w mieście Rodos i kursuje od wiosny do października. Poniżej wyjaśniamy, czym różnią się główne rejsy, co jest wliczone i jak wybrać odpowiedni dla Twojej grupy.',
      routes: [
        {
          heading: 'Co jest wliczone w rejs łodzią all inclusive po Rodos',
          body: 'Większość rejsów łodzią po Rodos jest w opcji all inclusive — właśnie dlatego są tak popularne: płacisz raz i wszystko jest załatwione. Typowy rejs dzienny obejmuje trasę, dwa lub trzy postoje na pływanie i snorkeling, gotowany obiad lub grecki bufet oraz nieograniczone napoje bezalkoholowe — wiele rejsów o zachodzie słońca dodaje wino, piwo i muzykę na żywo. Ceny zwykle wynoszą od około €30 do €80 za osobę w zależności od łodzi i czasu trwania, ze zniżkami dla dzieci i rodzin na większości rejsów. Bez ukrytych opłat: podajemy pełną cenę z góry, a Ty rezerwujesz bezpośrednio, bez prowizji platform. Ponieważ pracujemy w porcie Mandraki od 1998 roku, oferujemy tylko rejsy na dobrze prowadzonych łodziach z doświadczoną załogą. Podaj liczebność grupy i terminy, a dobierzemy odpowiedni rejs.',
        },
        {
          heading: 'Dzienne rejsy all inclusive',
          body: 'Rejsy całodniowe to klasyczny dzień na Rodos: spokojny rejs wzdłuż wybrzeża z kilkoma postojami na kąpiel, obiadem i napojami w cenie oraz czasem, aby po prostu cieszyć się morzem. <a href="/tour-detail/east-coast-of-rhodes-group-cruise">Rejs grupowy wzdłuż wschodniego wybrzeża Rodos</a> i swobodny rejs <a href="/tour-detail/fun-in-the-sun">Fun in the Sun</a> to popularne opcje wspólne, odpowiednie dla rodzin, par i grup. Te rejsy zamieniają szybkość prywatnej wycieczki na towarzyską atmosferę all inclusive w najlepszej cenie za osobę. Jeśli wolisz mniejszą łódź, zapytaj o opcje półprywatne poniżej.',
        },
        {
          heading: 'Rejsy o zachodzie słońca na Rodos',
          body: 'Rejsy o zachodzie słońca to najbardziej romantyczny rejs łodzią po Rodos — płyniesz po spokojnych wieczornych wodach z napojami, greckim grillem lub bufetem i często muzyką na żywo, gdy niebo staje się złote. <a href="/tour-detail/a-sunset-remedy-all-inclusive-sunset-cruise">Rejs o zachodzie słońca all inclusive A Sunset Remedy</a> na łodzi El Greco i <a href="/tour-detail/sunset-cruise-lindos-calypso">rejs o zachodzie słońca all inclusive Calypso z Lindos</a> to faworyci, a <a href="/tour-detail/golden-hour-yacht-experience-semi-private">półprywatne doświadczenie jachtowe Golden Hour</a> utrzymuje małą liczbę gości na bardziej kameralny wieczór. Zabierz lekką warstwę odzieży — na wodzie robi się chłodniej, gdy słońce zajdzie. Rejsy o zachodzie słońca szybko się zapełniają w lipcu i sierpniu, więc warto rezerwować z wyprzedzeniem.',
        },
        {
          heading: 'Rejs dzienny na Symi',
          body: 'Rejs dzienny na Symi to jeden z najczęściej rezerwowanych z Rodos. Łodzie wypływają z Mandraki rano, pokonują trasę w około 75–90 minut i dają kilka godzin w pastelowym porcie Gialos, zwykle z postojem na kąpiel po drodze. Symi słynie z neoklasycystycznych domów, klasztoru Panormitis i krystalicznie czystej wody — idealnej do zdjęć i spokojnego obiadu na lądzie. Wspólne rejsy all inclusive to najbardziej opłacalny sposób, aby ją zobaczyć; jeśli chcesz elastycznych godzin lub mniejszej grupy, zapytaj zamiast tego o <a href="/service/rhodes-boat-trips">prywatne wycieczki łodzią</a>.',
        },
        {
          heading: 'Rejs dzienny do Lindos',
          body: 'Rejs dzienny do Lindos łączy średniowieczne miasteczko i jego Akropol z kąpielą u podnóża klifów w zatoce St Paul. Podpłynięcie do Lindos od strony morza to najbardziej malowniczy sposób przybycia. <a href="/tour-detail/lazy-day-cruise-in-lindos">Lazy Day cruise w Lindos</a> to spokojna opcja all inclusive z czasem w miasteczku i postojami na kąpiel wzdłuż wschodniego wybrzeża. Zabierz wygodne buty, jeśli planujesz wejść na Akropol, oraz kapelusz — w miasteczku w południe jest mało cienia.',
        },
        {
          heading: 'Rejsy wzdłuż wschodniego wybrzeża — Anthony Quinn Bay i Kallithea',
          body: 'Nie każdy rejs łodzią z Rodos przeprawia się na inną wyspę. Rejsy wzdłuż wschodniego wybrzeża trzymają się osłoniętej linii brzegowej, z postojami w Anthony Quinn Bay, u źródeł Kallithea, w Ladiko i przy grotach morskich Traganou — to klasyczne miejsca do snorkelingu i kąpieli w spokojnej, turkusowej wodzie. Pasują osobom odwiedzającym po raz pierwszy i rodzinom, które chcą pięknych zatok bez otwartego morza, z obiadem i napojami w cenie na pokładzie. To także świetny wybór, jeśli ktoś w grupie woli krótszą, osłoniętą trasę od długiej przeprawy.',
        },
        {
          heading: 'Skąd wypływają rejsy łodzią po Rodos',
          body: 'Większość zorganizowanych rejsów wypływa z portu Mandraki w mieście Rodos, ale niektóre wypływają też z Faliraki, Kolymbii i Lindos w zależności od trasy i celu. Jeśli mieszkasz wzdłuż wschodniego wybrzeża, wybór bliższego punktu wypłynięcia oszczędza długi transfer na początku i końcu dnia. Podaj region swojego hotelu przy zapytaniu, a wskażemy najbliższe sensowne wypłynięcie, zamiast wysyłać Cię na drugi koniec wyspy. Sezon rejsów trwa od końca kwietnia do października, z najspokojniejszym morzem i najcieplejszą wodą od czerwca do września.',
        },
        {
          heading: 'Który rejs jest dla Ciebie?',
          body: 'Wspólne rejsy all inclusive oferują najlepszą wartość i towarzyską atmosferę na większych łodziach. Rejsy półprywatne, jak <a href="/tour-detail/golden-hour-yacht-experience-semi-private">doświadczenie jachtowe Golden Hour</a>, ograniczają liczbę gości dla większej przestrzeni i spokojniejszego tempa. Jeśli chcesz łódź, trasę i godziny tylko dla siebie, lepiej pasują <a href="/service/rhodes-boat-trips">prywatna wycieczka łodzią</a> lub <a href="/service/rhodes-charter">czarter jachtu</a>, a <a href="/service/rhodes-catamaran-tours">wycieczka katamaranem</a> dodaje stabilności i miejsca na pokładzie. Nie jesteś pewien? Podaj terminy i grupę, a doradzimy uczciwie, bez nacisku.',
        },
      ],
      closing: 'Dopasowujemy odwiedzających do właściwych rejsów łodzią po Rodos od 1998 roku — all inclusive, uczciwie polecane, z bezpośrednią rezerwacją i bez opłat platform. Przejrzyj poniżej rejsy dzienne i o zachodzie słońca, porównaj <a href="/service/rhodes-boat-tours">wycieczki łodzią z przewodnikiem</a> lub <a href="/service/rhodes-boat-trips">prywatne wycieczki łodzią</a>, albo <a href="/contact">podaj nam swoje terminy</a>, a zaproponujemy najlepszy rejs dla Twojej grupy.',
    },
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
        {
          heading: 'Co jest wliczone i typowe ceny wycieczek łodzią',
          body: 'Cena zależy od tego, czy dołączasz do wycieczki wspólnej, czy rezerwujesz prywatną. Wspólne rejsy dzienne zaczynają się od około €39 za osobę i zwykle obejmują trasę, postoje na kąpiel, sprzęt do snorkelingu, a przy całodniowych rejsach obiad i napoje na pokładzie. Prywatne rejsy ze skipperem zaczynają się od około €350 za pół dnia i €700+ za cały dzień, w cenie za łódź, a nie za osobę — im więcej osób, tym lepsza wartość. Stawki prywatne zwykle obejmują paliwo, skippera, postoje na pływanie i snorkeling oraz elastyczne godziny. Bez ukrytych opłat: podajemy pełną cenę przed rezerwacją. Podaj liczebność grupy i terminy, a damy uczciwe porównanie opcji wspólnych i prywatnych.',
        },
        {
          heading: 'Motorówka, RIB czy katamaran żaglowy — która wycieczka łodzią?',
          body: 'Rodzaj łodzi kształtuje cały dzień. Motorówki i mocne łodzie RIB są szybkie i zwrotne — idealne, aby dotrzeć na Symi lub do kilku zatok wschodniego wybrzeża w pół dnia bez straty czasu. Katamarany żaglowe zamieniają prędkość na przestrzeń i stabilność: więcej pokładu, cień i spokojne tempo, idealne dla rodzin lub przy chorobie morskiej. Większe zorganizowane łodzie pasują tym, którzy chcą stałego dnia all inclusive w najniższej cenie. Jeśli nie jesteś pewien, powiedz nam, ile Was jest i co liczy się najbardziej — prędkość, komfort czy budżet — a wskażemy odpowiedni kadłub. Możesz też <a href="/service/rhodes-rent-a-boat">wynająć łódź bez patentu</a> lub przejrzeć <a href="/service/rhodes-boat-cruises">rejsy dzienne</a> dla większych grup.',
        },
        {
          heading: 'Kiedy płynąć i co zabrać',
          body: 'Sezon wycieczek łodzią po Rodos trwa od końca kwietnia do października, z najspokojniejszym morzem i najcieplejszą wodą od czerwca do września. Rano wiatr jest zwykle najsłabszy, co ma znaczenie przy otwartej przeprawie na Symi; po południu na odsłoniętych trasach może być bardziej wietrznie. Zabierz strój kąpielowy, ręcznik, krem z filtrem przyjazny rafom, kapelusz i lekką warstwę odzieży na drogę powrotną, a także wodoodporne etui na telefon na motorówce lub RIB. Większość łodzi zapewnia wodę i sprzęt do snorkelingu, ale warto sprawdzić wcześniej. Jeśli ktoś źle znosi ruch, wybierz katamaran lub osłoniętą trasę wzdłuż wschodniego wybrzeża. Nie wiesz, co wybrać? <a href="/contact">Wyślij nam swoje terminy</a>, a polecimy odpowiednią trasę i łódź.',
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
    routeGuide: {
      title: 'Wynajem łodzi na Rodos: łodzie self-drive bez patentu',
      intro: 'Wynajem łodzi self-drive to najbardziej elastyczny sposób, aby zwiedzić wybrzeże Rodos — Twoja łódź, Twój czas i żadnej stałej trasy. Nie jest potrzebny patent, paliwo i sprzęt są wliczone, a rezerwujesz bezpośrednio bez prowizji platform. Poniżej wszystko, co najważniejsze: ceny, co jest wliczone, dokąd możesz popłynąć i jak wybrać odpowiedni wynajem dla Twojej grupy.',
      routes: [
        {
          heading: 'Czy potrzebujesz patentu, aby wynająć łódź na Rodos?',
          body: 'Nie — nasze łodzie do wynajęcia są bez patentu. Zgodnie z prawem greckim możesz prowadzić łódź z silnikiem do określonej mocy bez patentu żeglarskiego, co obejmuje każdą łódź self-drive w naszej flocie. Musisz mieć tylko ukończone 18 lat i czuć się pewnie na wodzie; każdemu wynajmującemu dajemy pełny instruktaż bezpieczeństwa, pokazujemy sterowanie i zaznaczamy najlepsze trasy na mapie przed wypłynięciem. Nie jest potrzebne wcześniejsze doświadczenie żeglarskie, a łodzie są łatwe w obsłudze na spokojnym porannym morzu. Jeśli ktoś w grupie ma już patent, otwierają się większe i szybsze łodzie — zapytaj, a dobierzemy łódź do Twojego doświadczenia.',
        },
        {
          heading: 'Ceny i czas wynajmu',
          body: 'Wynajem self-drive jest wyceniany według czasu, więc płacisz tylko za potrzebny czas. Wybierz wynajem na 2 godziny (€140), 4 godziny (€230), 6 godzin (€330) lub cały dzień 8 godzin (€380). Opcje na pół dnia pasują do szybkiej kąpieli i kilku pobliskich zatok, a cały dzień zabierze Cię dalej wzdłuż wybrzeża w spokojnym tempie. Ceny są za łódź, nie za osobę — więc dla rodziny lub grupy przyjaciół koszt na osobę szybko spada. Bez prowizji platform: rezerwujesz bezpośrednio u nas i płacisz podaną cenę. Podaj liczebność grupy i terminy, a polecimy odpowiedni czas.',
        },
        {
          heading: 'Co jest wliczone w wynajętą łódź',
          body: 'Każdy wynajem self-drive jest gotowy do wypłynięcia. Paliwo jest wliczone — łodzie mają zbiornik 25 litrów plus rezerwę 10 litrów, wystarczająco na cały dzień wśród zatok. Masz też mini lodówkę z lodem, wodę i napoje bezalkoholowe na pokładzie, sprzęt bezpieczeństwa i kamizelki ratunkowe dla wszystkich oraz cień tam, gdzie jest. Łodzie osiągają do 28 mph, więc możesz pokonywać dystans, gdy chcesz, i płynąć wolno, gdy znajdziesz spokojną zatoczkę. Przekazujemy czystą, dobrze utrzymaną łódź, mapę tras i numer kontaktowy na wypadek, gdybyś czegoś potrzebował na wodzie.',
        },
        {
          heading: 'Dokąd możesz popłynąć łodzią self-drive',
          body: 'Z naszej bazy dotrzesz do najlepszych miejsc do pływania i snorkelingu wzdłuż wschodniego wybrzeża we własnym tempie. Popularne przystanki to źródła Kallithea, Anthony Quinn Bay, Ladiko i groty morskie Traganou — spokojna, osłonięta woda, idealna do self-drive. Przy wynajmie na pół dnia większość odwiedza dwie lub trzy zatoki; cały dzień pozwala popłynąć dalej i zostać dłużej. Zaznaczamy zalecaną trasę i bezpieczny zasięg na dany dzień w zależności od wiatru, abyś zawsze wiedział, dokąd płynąć i kiedy zawrócić. Jeśli wolisz nie sterować, zobacz nasze <a href="/service/rhodes-boat-trips">prywatne wycieczki łodzią</a> ze skipperem.',
        },
        {
          heading: 'Wynajem self-drive czy rejs ze skipperem?',
          body: 'Wynajem self-drive daje pełną swobodę i najlepszy stosunek jakości do ceny dla rodziny lub grupy, która chce zwiedzać samodzielnie. Jeśli wolisz się zrelaksować i zostawić łódź komuś innemu, opcja ze skipperem pasuje lepiej: przejrzyj nasze <a href="/service/rhodes-boat-tours">wycieczki łodzią</a> z przewodnikiem, <a href="/service/rhodes-boat-cruises">rejsy dzienne</a> all inclusive lub w pełni prywatny <a href="/service/rhodes-charter">czarter jachtu</a> na dłuższą wyprawę. Nie jesteś pewien? Podaj swoją grupę i czego oczekujesz od dnia, a doradzimy uczciwie, bez nacisku.',
        },
        {
          heading: 'Najlepszy czas na wynajem i bezpieczeństwo pogodowe',
          body: 'Sezon wynajmu trwa od końca kwietnia do października, z najspokojniejszym morzem i najcieplejszą wodą od czerwca do września. Rano wiatr jest zwykle najsłabszy, dlatego zalecamy wczesny start dla najspokojniejszej żeglugi i najczystszej wody. Zatoki wschodniego wybrzeża są osłonięte i dobrze nadają się do self-drive nawet w bardziej wietrzne popołudnia. Sprawdzamy dzienną prognozę i uczciwie powiemy, jeśli warunki nie są odpowiednie — proponując alternatywę, zamiast wysyłać Cię przy silnym meltemi. Twój instruktaż bezpieczeństwa obejmuje, co robić, jeśli pogoda zmieni się, gdy jesteś na wodzie.',
        },
        {
          heading: 'Dla kogo jest wynajem self-drive',
          body: 'Wynajem łodzi self-drive na Rodos pasuje parom chcącym prywatnego dnia na wodzie, rodzinom szukającym przystępnej wyprawy grupowej i osobom odwiedzającym po raz pierwszy, które chcą zobaczyć wybrzeże bez sztywnego planu wycieczki. Ponieważ nie jest potrzebny patent, a łodzie są łatwe w obsłudze, nie potrzebujesz żeglarskiego zaplecza — tylko odrobiny ducha przygody. Grupy przyjaciół często uznają wynajem za najfajniejszy i najbardziej opłacalny sposób na spędzenie dnia, zmieniając się za sterem między zatokami. Jeśli masz dzieci, podaj ich wiek, a zadbamy o to, by łódź i trasa były komfortowe.',
        },
        {
          heading: 'Jak zarezerwować wynajem łodzi na Rodos',
          body: 'Rezerwacja jest prosta i bezpośrednia — żadnych platform zewnętrznych i ukrytych opłat. Wyślij nam terminy, liczebność grupy i preferowany czas, a potwierdzimy dostępność i najlepszą łódź dla Ciebie. Mamy bazę w Mandraki, w mieście Rodos, w odległości spaceru od starego miasta i krótkiego dojazdu od pobliskich kurortów. W lipcu i sierpniu łodzie szybko się zapełniają, więc warto rezerwować z wyprzedzeniem. <a href="/contact">Skontaktuj się</a> z nami, podając terminy, a my zajmiemy się resztą.',
        },
      ],
      closing: 'Wynajmujemy łodzie odwiedzającym Rodos od 1998 roku — bez patentu, w uczciwych cenach i z bezpośrednią rezerwacją bez prowizji platform. Przejrzyj dostępne łodzie do wynajęcia poniżej, porównaj <a href="/service/rhodes-boat-trips">prywatną wycieczkę ze skipperem</a> lub <a href="/service/rhodes-boat-tours">wycieczkę łodzią</a> z przewodnikiem, albo <a href="/contact">podaj nam swoje terminy</a>, a polecimy odpowiednią łódź i bazę dla Twojej grupy.',
    },
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
