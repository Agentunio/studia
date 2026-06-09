const QUESTIONS = [
  {
    id: "alg-algorithm-definition",
    source: "sheet",
    category: "Podstawy algorytmow",
    level: "podstawowy",
    question: "Czym jest algorytm?",
    answer:
      "Algorytm to skonczony, uporzadkowany i jednoznaczny zestaw krokow prowadzacych od danych wejsciowych do oczekiwanego wyniku.",
    explanation:
      "Algorytm opisuje sposob rozwiazania problemu. Nie musi byc od razu programem, ale powinien byc na tyle precyzyjny, aby dalo sie go wykonac."
  },
  {
    id: "alg-data-structure-definition",
    source: "sheet",
    category: "Struktury danych",
    level: "podstawowy",
    question: "Czym jest struktura danych?",
    answer:
      "Struktura danych to sposob organizowania i przechowywania danych tak, aby mozna bylo efektywnie wykonywac operacje takie jak odczyt, dodawanie, usuwanie, wyszukiwanie albo sortowanie.",
    explanation:
      "Przyklady struktur danych to tablica, lista, stos, kolejka, zbior, slownik i wektor. Dobor struktury wplywa na czas i pamiec potrzebne do wykonania algorytmu."
  },
  {
    id: "alg-algorithm-features",
    source: "sheet",
    category: "Podstawy algorytmow",
    level: "podstawowy",
    question: "Jakie sa (4) cechy algorytmu?",
    answer: [
      "Skonczonosc - algorytm musi zakonczyc dzialanie po skonczonej liczbie krokow.",
      "Jednoznacznosc - kazdy krok powinien byc opisany precyzyjnie.",
      "Dane wejsciowe i wynik - algorytm przyjmuje dane i zwraca okreslony rezultat.",
      "Wykonalnosc/efektywnosc - kazdy krok musi byc mozliwy do wykonania w praktyce."
    ],
    explanation:
      "Czesto dodaje sie tez poprawnosc, czyli wymaganie, aby algorytm dla poprawnych danych zwracal poprawny wynik."
  },
  {
    id: "alg-representation-methods",
    source: "sheet",
    category: "Podstawy algorytmow",
    level: "podstawowy",
    question: "W jaki sposob (4) mozna zapisac algorytm?",
    answer: [
      "Opis slowny, czyli lista krokow w jezyku naturalnym.",
      "Pseudokod, czyli zapis podobny do kodu, ale niezalezny od konkretnego jezyka.",
      "Schemat blokowy, czyli graficzny zapis krokow i decyzji.",
      "Kod programu w konkretnym jezyku programowania."
    ],
    explanation:
      "Im blizej implementacji, tym zapis musi byc bardziej precyzyjny. Schemat blokowy i pseudokod sa wygodne na etapie projektowania."
  },
  {
    id: "alg-data-structure-classification",
    source: "sheet",
    category: "Struktury danych",
    level: "podstawowy",
    question: "Jak mozna podzielic struktury danych?",
    answer: [
      "Proste i zlozone, np. zmienna kontra lista lub drzewo.",
      "Statyczne i dynamiczne, np. tablica o stalym rozmiarze kontra lista.",
      "Liniowe i nieliniowe, np. tablica/lista kontra drzewo/graf.",
      "Jednorodne i niejednorodne, np. tablica elementow jednego typu kontra struktura z polami roznych typow.",
      "Sekwencyjne i wskaznikowe, zalezne od sposobu przechowywania elementow w pamieci."
    ],
    explanation:
      "Ten sam problem mozna rozwiazac przy uzyciu roznych struktur, ale koszt operacji moze byc wtedy zupelnie inny."
  },
  {
    id: "alg-analysis-definition",
    source: "sheet",
    category: "Analiza algorytmow",
    level: "podstawowy",
    question: "Czym jest analiza algorytmow?",
    answer:
      "Analiza algorytmow to ocena poprawnosci i efektywnosci algorytmu, najczesciej pod wzgledem czasu dzialania, zuzycia pamieci oraz zachowania dla roznych rozmiarow danych.",
    explanation:
      "W analizie algorytmow zwykle nie mierzy sie pojedynczego komputera, tylko tempo wzrostu kosztu wraz ze wzrostem liczby danych wejsciowych."
  },
  {
    id: "alg-flowchart-elements",
    source: "sheet",
    category: "Schematy blokowe",
    level: "podstawowy",
    question: "Jakie sa podstawowe elementy schematow blokowych?",
    answer: [
      "Terminator - poczatek lub koniec algorytmu.",
      "Prostokat - operacja lub instrukcja.",
      "Romb - warunek albo decyzja.",
      "Rownoleglobok - wejscie lub wyjscie danych.",
      "Strzalki - kierunek przeplywu sterowania.",
      "Lacznik - przejscie do innego miejsca schematu."
    ],
    explanation:
      "Schemat blokowy pokazuje kolejnosc wykonania krokow, rozgalezienia i petle w sposob graficzny."
  },
  {
    id: "alg-iteration-vs-recursion",
    source: "sheet",
    category: "Iteracja i rekurencja",
    level: "podstawowy",
    question: "Wyjasnij roznice w podejsciu iteracyjnym i rekurencyjnym do tworzenia algorytmow.",
    answer:
      "Podejscie iteracyjne powtarza instrukcje za pomoca petli, np. for albo while. Podejscie rekurencyjne rozwiazuje problem przez wywolanie tej samej funkcji dla mniejszego podproblemu az do przypadku bazowego.",
    explanation:
      "Iteracja opisuje powtarzanie krokow bez tworzenia kolejnych wywolan funkcji. Rekurencja naturalnie pasuje do problemow dzielonych na podobne podproblemy, np. drzewa, silnia, wyszukiwanie binarne, QuickSort i MergeSort."
  },
  {
    id: "alg-iteration-recursion-pros-cons",
    source: "sheet",
    category: "Iteracja i rekurencja",
    level: "sredni",
    question: "Jakie sa wady i zalety iteracji i rekurencji?",
    answer: [
      "Iteracja: zwykle jest szybsza i zuzywa mniej pamieci, bo nie tworzy wielu ramek stosu wywolan.",
      "Iteracja: bywa mniej czytelna przy problemach naturalnie rekurencyjnych, np. przy przechodzeniu drzewa.",
      "Rekurencja: czesto daje prostszy i bardziej matematyczny zapis algorytmu.",
      "Rekurencja: ma narzut wywolan funkcji i moze doprowadzic do przepelnienia stosu, jesli glebokosc jest zbyt duza.",
      "Rekurencja: bez zapamietywania wynikow moze wielokrotnie liczyc te same podproblemy."
    ],
    explanation:
      "Dobry wybor zalezy od problemu. Dla prostych powtorzen czesto wygrywa iteracja, a dla drzew i divide and conquer rekurencja bywa czytelniejsza."
  },
  {
    id: "alg-big-o",
    source: "sheet",
    category: "Analiza algorytmow",
    level: "podstawowy",
    question: "Na czym polega notacja duzego O?",
    answer:
      "Notacja duzego O opisuje asymptotyczne tempo wzrostu kosztu algorytmu wraz ze wzrostem rozmiaru danych wejsciowych. Pomija stale i mniej istotne skladniki, np. O(2n + 3) zapisuje sie jako O(n).",
    explanation:
      "Duze O najczesciej opisuje gorne ograniczenie czasu albo pamieci. Przyklady: O(1), O(log n), O(n), O(n log n), O(n^2)."
  },
  {
    id: "alg-bubble-sort-idea",
    source: "sheet",
    category: "Sortowanie proste",
    level: "podstawowy",
    question: "Jaka jest podstawowa idea sortowania babelkowego?",
    answer:
      "Sortowanie babelkowe wielokrotnie porownuje sasiednie elementy i zamienia je miejscami, jesli sa w zlej kolejnosc. Po kazdym pelnym przejsciu najwiekszy element z nieposortowanej czesci trafia na swoje miejsce.",
    explanation:
      "Nazwa bierze sie z tego, ze duze elementy stopniowo przesuwaja sie na koniec tablicy jak babelki do gory."
  },
  {
    id: "alg-bubble-sort-optimizations",
    source: "sheet",
    category: "Sortowanie proste",
    level: "sredni",
    question: "Jakie dwie modyfikacje mozna wprowadzic aby przyspieszyc sortowanie babelkowe?",
    answer: [
      "Przerwac algorytm, gdy w calym przejsciu nie bylo zadnej zamiany, bo tablica jest juz posortowana.",
      "Po kazdym przejsciu skracac zakres porownan, bo koncowe elementy sa juz na swoich miejscach."
    ],
    explanation:
      "Pierwsza modyfikacja poprawia najlepszy przypadek do O(n). Druga zmniejsza liczbe niepotrzebnych porownan."
  },
  {
    id: "alg-insertion-sort-idea",
    source: "sheet",
    category: "Sortowanie proste",
    level: "podstawowy",
    question: "Jaka jest podstawowa idea sortowania przez wstawianie?",
    answer:
      "Sortowanie przez wstawianie buduje posortowana czesc tablicy od lewej strony. Kazdy kolejny element jest pobierany i wstawiany w odpowiednie miejsce w juz posortowanym fragmencie.",
    explanation:
      "Ten algorytm dziala podobnie do ukladania kart w rece. Jest bardzo dobry dla malych lub prawie posortowanych danych."
  },
  {
    id: "alg-selection-sort-idea",
    source: "sheet",
    category: "Sortowanie proste",
    level: "podstawowy",
    question: "Jaka jest podstawowa idea sortowania przez wybor?",
    answer:
      "Sortowanie przez wybor wyszukuje najmniejszy element w nieposortowanej czesci tablicy i zamienia go z pierwszym elementem tej czesci. Potem granica posortowanej czesci przesuwa sie o jedno miejsce.",
    explanation:
      "Algorytm wykonuje malo zamian, ale zawsze robi duzo porownan, dlatego ma czas O(n^2) nawet dla danych prawie posortowanych."
  },
  {
    id: "alg-known-sorting-complexities",
    source: "sheet",
    category: "Analiza algorytmow",
    level: "sredni",
    question: "Jakie zlozonosci obliczeniowe maja poznane algorytmy?",
    answer: [
      "BubbleSort: najlepszy O(n) z przerwaniem bez zamian, sredni i najgorszy O(n^2), pamiec O(1).",
      "InsertionSort: najlepszy O(n), sredni i najgorszy O(n^2), pamiec O(1).",
      "SelectionSort: najlepszy, sredni i najgorszy O(n^2), pamiec O(1).",
      "QuickSort: srednio O(n log n), najgorzej O(n^2), pamiec srednio O(log n) przez rekurencje.",
      "MergeSort: zawsze O(n log n), pamiec O(n) dla typowej implementacji na tablicach."
    ],
    explanation:
      "Proste sortowania maja zwykle O(n^2), a algorytmy dziel i zwyciezaj, takie jak QuickSort i MergeSort, srednio lub zawsze osiagaja O(n log n)."
  },
  {
    id: "alg-quicksort-idea",
    source: "sheet",
    category: "Sortowanie zaawansowane",
    level: "podstawowy",
    question: "Jaka jest podstawowa idea sortowania szybkiego?",
    answer:
      "QuickSort wybiera element osiowy, czyli pivot, dzieli dane na elementy mniejsze i wieksze od pivota, a potem rekurencyjnie sortuje powstale czesci.",
    explanation:
      "Szybkosc QuickSort zalezy od tego, czy podzialy sa w miare rowne. Zly wybor pivota moze doprowadzic do zlozonosci O(n^2)."
  },
  {
    id: "alg-mergesort-idea",
    source: "sheet",
    category: "Sortowanie zaawansowane",
    level: "podstawowy",
    question: "Jaka jest podstawowa idea sortowania przez scalanie?",
    answer:
      "MergeSort dzieli tablice na mniejsze czesci az do pojedynczych elementow, a potem scala posortowane czesci w coraz wieksze posortowane fragmenty.",
    explanation:
      "To klasyczny algorytm dziel i zwyciezaj. Ma stabilny czas O(n log n), ale zwykle wymaga dodatkowej pamieci O(n)."
  },
  {
    id: "alg-quicksort-mergesort-speedups",
    source: "sheet",
    category: "Sortowanie zaawansowane",
    level: "sredni",
    question: "Jak przyspieszyc QuickSort i MergeSort?",
    answer: [
      "QuickSort: wybierac lepszy pivot, np. losowy albo mediana z trzech elementow.",
      "QuickSort: dla malych podtablic przejsc na InsertionSort.",
      "QuickSort: sortowac najpierw mniejsza czesc i ograniczac glebokosc rekurencji.",
      "MergeSort: uzywac jednej pomocniczej tablicy zamiast tworzyc nowe tablice przy kazdym scalaniu.",
      "MergeSort: pominac scalanie, gdy koniec lewej czesci jest mniejszy lub rowny poczatkowi prawej.",
      "MergeSort: dla malych fragmentow uzyc InsertionSort."
    ],
    explanation:
      "Przyspieszenia zwykle nie zmieniaja glownej klasy zlozonosci, ale mocno zmniejszaja staly narzut i poprawiaja zachowanie na typowych danych."
  },
  {
    id: "alg-data-structure-definition-repeat",
    source: "sheet",
    category: "Struktury danych",
    level: "podstawowy",
    question: "Czym jest struktura danych?",
    answer:
      "Struktura danych to model przechowywania danych razem z typowymi operacjami, ktore mozna na nich wykonywac. Opisuje nie tylko same dane, ale tez sposob dostepu do nich.",
    explanation:
      "To pytanie powtarza sens definicji, ale warto zapamietac praktycznie: struktura danych decyduje, czy dana operacja bedzie szybka, wolna, wygodna albo kosztowna pamieciowo."
  },
  {
    id: "alg-cpp-struct",
    source: "sheet",
    category: "Struktury danych",
    level: "podstawowy",
    question: "Czym jest struktura? Jakim slowem kluczowym w Cpp ja definiujemy?",
    answer:
      "Struktura w C++ to typ zlozony grupujacy kilka pol, czesto roznych typow, pod jedna nazwa. Definiuje sie ja slowem kluczowym struct, np. struct Student { string name; int age; };.",
    explanation:
      "W C++ pola i metody w struct sa domyslnie publiczne. W class sa domyslnie private, ale oba mechanizmy moga opisywac typy z danymi i zachowaniem."
  },
  {
    id: "alg-array-data-structure",
    source: "sheet",
    category: "Struktury danych",
    level: "sredni",
    question: "Tablica jako struktura danych - opis, wady, zalety",
    answer: [
      "Opis: tablica przechowuje elementy tego samego typu w kolejnych komorkach pamieci i pozwala odwolac sie do elementu przez indeks.",
      "Zalety: bardzo szybki dostep po indeksie O(1), prostota, dobra lokalnosc pamieci.",
      "Wady: zwykle staly rozmiar, kosztowne wstawianie i usuwanie ze srodka O(n), potrzeba ciaglego bloku pamieci.",
      "Typowe zastosowania: przechowywanie sekwencji, macierzy, buforow i danych, dla ktorych czesty jest dostep losowy."
    ],
    explanation:
      "Tablica jest dobra, gdy znasz rozmiar danych albo czesto odczytujesz elementy po indeksie. Jest slaba, gdy czesto wstawiasz elementy w srodku."
  },
  {
    id: "alg-list-add-remove",
    source: "sheet",
    category: "Listy",
    level: "sredni",
    question: "Jak dodaje sie i usuwa elementy z listy?",
    answer:
      "W liscie wiazanej dodawanie i usuwanie polega glownie na zmianie wskaznikow/referencji miedzy wezlami. Jesli znamy miejsce operacji, dodanie lub usuniecie wezla moze byc O(1). Jesli trzeba najpierw znalezc element, wyszukanie trwa O(n).",
    explanation:
      "Przy usuwaniu trzeba przepiac poprzedni wezel na nastepny, a w liscie dwukierunkowej dodatkowo poprawic wskaznik poprzednika w kolejnym wezle."
  },
  {
    id: "alg-queue-stack-list-comparison",
    source: "sheet",
    category: "Stos, kolejka i lista",
    level: "sredni",
    question: "Cechy wspolne i wyrozniajace - kolejka vs. stos vs. lista",
    answer: [
      "Cechy wspolne: wszystkie przechowuja wiele elementow i moga byc zaimplementowane dynamicznie.",
      "Stos: dziala wedlug LIFO, czyli ostatni dodany element jest zdejmowany jako pierwszy.",
      "Kolejka: dziala wedlug FIFO, czyli pierwszy dodany element jest obslugiwany jako pierwszy.",
      "Lista: pozwala przechodzic po elementach i wstawiac/usuwac elementy w roznych miejscach, jesli mamy dostep do odpowiedniego wezla."
    ],
    explanation:
      "Stos i kolejka narzucaja konkretny porzadek dostepu. Lista jest bardziej ogolna, ale sama nie definiuje priorytetu ani zasady LIFO/FIFO."
  },
  {
    id: "alg-stack-queue-uses",
    source: "sheet",
    category: "Stos, kolejka i lista",
    level: "podstawowy",
    question: "Jakie sa realistyczne zastosowania stosu i kolejki?",
    answer: [
      "Stos: stos wywolan funkcji, cofanie operacji undo, parsowanie nawiasow, obliczanie ONP, DFS.",
      "Kolejka: obsluga zadan w kolejnosci przyjscia, kolejka drukowania, BFS, buforowanie komunikatow, systemy kolejkowe."
    ],
    explanation:
      "Stos pasuje do problemow, w ktorych trzeba wrocic do ostatniego stanu. Kolejka pasuje do sprawiedliwej obslugi elementow w kolejnosci przyjscia."
  },
  {
    id: "alg-rpn-definition",
    source: "sheet",
    category: "Stos, kolejka i lista",
    level: "podstawowy",
    question: "Czym jest ONP?",
    answer:
      "ONP, czyli Odwrotna Notacja Polska, to zapis wyrazen, w ktorym operator wystepuje po operandach, np. 2 3 + zamiast 2 + 3. Do obliczania ONP uzywa sie zwykle stosu.",
    explanation:
      "ONP nie wymaga nawiasow ani priorytetow operatorow w takim sensie jak zapis infiksowy, bo kolejnosc dzialan wynika z pozycji operatorow."
  },
  {
    id: "alg-priority-queue",
    source: "sheet",
    category: "Stos, kolejka i lista",
    level: "sredni",
    question: "Jakie zmiany wprowadza kolejka priorytetowa?",
    answer:
      "Kolejka priorytetowa nie obsluguje elementow tylko wedlug kolejnosci przyjscia. Kazdy element ma priorytet, a jako pierwszy pobierany jest element o najwyzszym albo najnizszym priorytecie, zaleznie od definicji.",
    explanation:
      "Typowa implementacja kolejki priorytetowej uzywa kopca. Zastosowania to np. algorytm Dijkstry, planowanie zadan i systemy obslugi zdarzen."
  },
  {
    id: "alg-singly-doubly-linked-list",
    source: "sheet",
    category: "Listy",
    level: "podstawowy",
    question: "Co to znaczy, ze lista jest dwukierunkowa lub jednokierunkowa?",
    answer:
      "Lista jednokierunkowa ma w kazdym wezle wskaznik tylko na nastepny element. Lista dwukierunkowa ma wskaznik na nastepny i poprzedni element, wiec mozna przechodzic w obie strony.",
    explanation:
      "Lista dwukierunkowa ulatwia usuwanie i cofanie sie po elementach, ale wymaga wiecej pamieci i wiekszej liczby przepiec wskaznikow."
  },
  {
    id: "alg-set-data-structure",
    source: "sheet",
    category: "Struktury danych",
    level: "podstawowy",
    question: "Co wyroznia strukture danych zbior?",
    answer:
      "Zbior przechowuje unikalne elementy, czyli nie dopuszcza duplikatow. Najwazniejsze operacje to dodanie elementu, usuniecie, sprawdzenie przynaleznosci oraz operacje teoriomnogosciowe, np. suma, przeciecie i roznica.",
    explanation:
      "Zbior moze byc zaimplementowany jako struktura haszujaca albo drzewo. Wtedy rozni sie czasem operacji i tym, czy elementy sa uporzadkowane."
  },
  {
    id: "alg-dictionary-data-structure",
    source: "sheet",
    category: "Struktury danych",
    level: "podstawowy",
    question: "Co wyroznia strukture danych slownik?",
    answer:
      "Slownik przechowuje pary klucz-wartosc. Klucz jest unikalny i sluzy do szybkiego odnalezienia przypisanej wartosci.",
    explanation:
      "Przyklady to map, unordered_map, dict i tablica asocjacyjna. Slownik jest dobry, gdy dane maja byc wyszukiwane po identyfikatorze, nazwie albo innym kluczu."
  },
  {
    id: "alg-vector-data-structure",
    source: "sheet",
    category: "Struktury danych",
    level: "sredni",
    question: "Co wyroznia strukture danych wektor?",
    answer:
      "Wektor to dynamiczna tablica. Przechowuje elementy ciagle w pamieci, daje dostep po indeksie O(1), a dodawanie na koncu ma zwykle koszt zamortyzowany O(1).",
    explanation:
      "W C++ std::vector ma rozmiar i pojemnosc. Gdy zabraknie pojemnosci, alokuje wiekszy blok pamieci i przenosi elementy, dlatego pojedyncze push_back czasem jest drozsze."
  }
];

const FLASHCARDS = [
  {
    id: "fc-algorithm",
    category: "Podstawy algorytmow",
    source: "lista pytan",
    front: "Algorytm",
    back:
      "Skonczony, uporzadkowany i jednoznaczny zestaw krokow prowadzacych od danych wejsciowych do wyniku."
  },
  {
    id: "fc-algorithm-features",
    category: "Podstawy algorytmow",
    source: "lista pytan",
    front: "4 cechy algorytmu",
    back:
      "Skonczonosc, jednoznacznosc, dane wejsciowe i wynik, wykonalnosc/efektywnosc."
  },
  {
    id: "fc-algorithm-notation",
    category: "Podstawy algorytmow",
    source: "lista pytan",
    front: "4 sposoby zapisu algorytmu",
    back:
      "Opis slowny, pseudokod, schemat blokowy, kod programu."
  },
  {
    id: "fc-analysis",
    category: "Analiza algorytmow",
    source: "lista pytan",
    front: "Analiza algorytmow",
    back:
      "Ocena poprawnosci, czasu dzialania, zuzycia pamieci i skalowania algorytmu wraz z rozmiarem danych."
  },
  {
    id: "fc-big-o",
    category: "Analiza algorytmow",
    source: "lista pytan",
    front: "Notacja duzego O",
    back:
      "Opisuje tempo wzrostu kosztu algorytmu dla rosnacego wejscia, z pominieciem stalych i mniej istotnych skladnikow."
  },
  {
    id: "fc-flowchart",
    category: "Schematy blokowe",
    source: "lista pytan",
    front: "Podstawowe elementy schematu blokowego",
    back:
      "Terminator, operacja, decyzja, wejscie/wyjscie, strzalki przeplywu i laczniki."
  },
  {
    id: "fc-iteration",
    category: "Iteracja i rekurencja",
    source: "lista pytan",
    front: "Iteracja",
    back:
      "Powtarzanie instrukcji za pomoca petli. Zwykle male zuzycie pamieci i brak narzutu wielu wywolan funkcji."
  },
  {
    id: "fc-recursion",
    category: "Iteracja i rekurencja",
    source: "lista pytan",
    front: "Rekurencja",
    back:
      "Funkcja wywoluje sama siebie dla mniejszego podproblemu az do przypadku bazowego."
  },
  {
    id: "fc-data-structure",
    category: "Struktury danych",
    source: "lista pytan",
    front: "Struktura danych",
    back:
      "Sposob organizowania danych wraz z typowymi operacjami, np. odczytem, dodawaniem, usuwaniem i wyszukiwaniem."
  },
  {
    id: "fc-data-structure-divisions",
    category: "Struktury danych",
    source: "lista pytan",
    front: "Podzial struktur danych",
    back:
      "Proste/zlozone, statyczne/dynamiczne, liniowe/nieliniowe, jednorodne/niejednorodne, sekwencyjne/wskaznikowe."
  },
  {
    id: "fc-cpp-struct",
    category: "Struktury danych",
    source: "lista pytan",
    front: "struct w C++",
    back:
      "Typ zlozony grupujacy pola pod jedna nazwa. Definiowany slowem kluczowym struct; pola sa domyslnie publiczne."
  },
  {
    id: "fc-array",
    category: "Struktury danych",
    source: "lista pytan",
    front: "Tablica",
    back:
      "Elementy tego samego typu w kolejnych komorkach pamieci. Dostep po indeksie O(1), ale wstawianie/usuwanie ze srodka O(n)."
  },
  {
    id: "fc-vector",
    category: "Struktury danych",
    source: "lista pytan",
    front: "Wektor",
    back:
      "Dynamiczna tablica: ciagla pamiec, dostep O(1), push_back zwykle zamortyzowane O(1), czasem realokacja."
  },
  {
    id: "fc-set",
    category: "Struktury danych",
    source: "lista pytan",
    front: "Zbior",
    back:
      "Przechowuje unikalne elementy. Kluczowe operacje: dodaj, usun, sprawdz przynaleznosc, suma, przeciecie, roznica."
  },
  {
    id: "fc-dictionary",
    category: "Struktury danych",
    source: "lista pytan",
    front: "Slownik",
    back:
      "Przechowuje pary klucz-wartosc. Klucz jest unikalny i sluzy do szybkiego znalezienia wartosci."
  },
  {
    id: "fc-linked-list",
    category: "Listy",
    source: "lista pytan",
    front: "Dodawanie i usuwanie w liscie",
    back:
      "Polega na przepinaniu wskaznikow. O(1), jesli znamy miejsce operacji; O(n), jesli trzeba najpierw wyszukac element."
  },
  {
    id: "fc-singly-list",
    category: "Listy",
    source: "lista pytan",
    front: "Lista jednokierunkowa",
    back:
      "Kazdy wezel ma wskaznik tylko na nastepny element. Przechodzenie naturalnie odbywa sie w jedna strone."
  },
  {
    id: "fc-doubly-list",
    category: "Listy",
    source: "lista pytan",
    front: "Lista dwukierunkowa",
    back:
      "Kazdy wezel ma wskaznik na nastepny i poprzedni element. Ulatwia cofanie i usuwanie, ale zuzywa wiecej pamieci."
  },
  {
    id: "fc-stack",
    category: "Stos, kolejka i lista",
    source: "lista pytan",
    front: "Stos",
    back:
      "Struktura LIFO: ostatni dodany element jest zdejmowany jako pierwszy. Przyklady: undo, stos wywolan, nawiasy, ONP."
  },
  {
    id: "fc-queue",
    category: "Stos, kolejka i lista",
    source: "lista pytan",
    front: "Kolejka",
    back:
      "Struktura FIFO: pierwszy dodany element jest obslugiwany jako pierwszy. Przyklady: drukarka, BFS, kolejka zadan."
  },
  {
    id: "fc-list",
    category: "Stos, kolejka i lista",
    source: "lista pytan",
    front: "Lista",
    back:
      "Bardziej ogolna struktura liniowa. Pozwala przechodzic po elementach i wstawiac/usuwac je w roznych miejscach."
  },
  {
    id: "fc-rpn",
    category: "Stos, kolejka i lista",
    source: "lista pytan",
    front: "ONP",
    back:
      "Odwrotna Notacja Polska: operator po operandach, np. 2 3 +. Do obliczania uzywa sie stosu."
  },
  {
    id: "fc-priority-queue",
    category: "Stos, kolejka i lista",
    source: "lista pytan",
    front: "Kolejka priorytetowa",
    back:
      "Pobiera element wedlug priorytetu, a nie zwyklej kolejnosci przyjscia. Czesto implementowana kopcem."
  },
  {
    id: "fc-bubble-sort",
    category: "Sortowanie proste",
    source: "lista pytan",
    front: "BubbleSort",
    back:
      "Porownuje sasiednie elementy i zamienia je miejscami. Po przejsciu najwiekszy element trafia na koniec."
  },
  {
    id: "fc-bubble-optimizations",
    category: "Sortowanie proste",
    source: "lista pytan",
    front: "2 optymalizacje BubbleSort",
    back:
      "Przerwanie po przejsciu bez zamian oraz skracanie zakresu porownan po kazdym przejsciu."
  },
  {
    id: "fc-insertion-sort",
    category: "Sortowanie proste",
    source: "lista pytan",
    front: "InsertionSort",
    back:
      "Buduje posortowana czesc i wstawia kolejny element w odpowiednie miejsce. Dobry dla malych lub prawie posortowanych danych."
  },
  {
    id: "fc-selection-sort",
    category: "Sortowanie proste",
    source: "lista pytan",
    front: "SelectionSort",
    back:
      "Wybiera najmniejszy element z nieposortowanej czesci i zamienia go z pierwszym elementem tej czesci."
  },
  {
    id: "fc-simple-sort-complexities",
    category: "Sortowanie proste",
    source: "lista pytan",
    front: "Zlozonosci prostych sortowan",
    back:
      "BubbleSort, InsertionSort i SelectionSort maja srednio O(n^2). BubbleSort i InsertionSort moga miec O(n) w najlepszym przypadku."
  },
  {
    id: "fc-quicksort",
    category: "Sortowanie zaawansowane",
    source: "lista pytan",
    front: "QuickSort",
    back:
      "Wybiera pivot, dzieli dane na mniejsze i wieksze od pivota, potem rekurencyjnie sortuje obie czesci."
  },
  {
    id: "fc-quicksort-complexity",
    category: "Sortowanie zaawansowane",
    source: "lista pytan",
    front: "Zlozonosc QuickSort",
    back:
      "Srednio O(n log n), najgorzej O(n^2), pamiec srednio O(log n) przez stos rekurencji."
  },
  {
    id: "fc-mergesort",
    category: "Sortowanie zaawansowane",
    source: "lista pytan",
    front: "MergeSort",
    back:
      "Dzieli dane na mniejsze czesci, sortuje je i scala posortowane fragmenty."
  },
  {
    id: "fc-mergesort-complexity",
    category: "Sortowanie zaawansowane",
    source: "lista pytan",
    front: "Zlozonosc MergeSort",
    back:
      "Czas O(n log n) w najlepszym, srednim i najgorszym przypadku. Typowo pamiec O(n)."
  }
];
