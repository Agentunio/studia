const QUESTIONS = [
  {
    id: "alg-algorithm-definition",
    source: "sheet",
    category: "Podstawy algorytmów",
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
    category: "Podstawy algorytmów",
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
    category: "Podstawy algorytmów",
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
    category: "Analiza algorytmów",
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
    level: "średni",
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
    category: "Analiza algorytmów",
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
    level: "średni",
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
    category: "Analiza algorytmów",
    level: "średni",
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
    level: "średni",
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
    level: "średni",
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
    level: "średni",
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
    level: "średni",
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
    level: "średni",
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
    level: "średni",
    question: "Co wyroznia strukture danych wektor?",
    answer:
      "Wektor to dynamiczna tablica. Przechowuje elementy ciagle w pamieci, daje dostep po indeksie O(1), a dodawanie na koncu ma zwykle koszt zamortyzowany O(1).",
    explanation:
      "W C++ std::vector ma rozmiar i pojemnosc. Gdy zabraknie pojemnosci, alokuje wiekszy blok pamieci i przenosi elementy, dlatego pojedyncze push_back czasem jest drozsze."
  },
  {
    id: "nt-q-algorithm",
    source: "notatki",
    category: "Podstawy algorytmów",
    level: "podstawowy",
    question: "Czym jest algorytm?",
    answer:
      "Ciąg precyzyjnie określonych kroków, które należy wykonać, aby rozwiązać określony problem w skończonym czasie.",
    explanation:
      "Definicja z notatek kładzie nacisk na precyzyjnie określone kroki oraz skończony czas potrzebny na rozwiązanie problemu."
  },
  {
    id: "nt-q-data-structure",
    source: "notatki",
    category: "Struktury danych",
    level: "podstawowy",
    question: "Czym jest struktura danych?",
    answer:
      "Sposób organizacji, przechowywania i zarządzania danymi w pamięci komputera, który pozwala na ich efektywne przetwarzanie.",
    explanation:
      "Dobór struktury danych decyduje o tym, jak szybko i jakim kosztem pamięci wykonamy operacje na danych."
  },
  {
    id: "nt-q-algorithm-features",
    source: "notatki",
    category: "Podstawy algorytmów",
    level: "podstawowy",
    question: "Jakie są cechy algorytmu?",
    answer: [
      "Skończoność - musi się zatrzymać po skończonej liczbie kroków.",
      "Jednoznaczność - każdy krok musi być precyzyjny i nie budzić wątpliwości.",
      "Efektywność - powinien wykonać się możliwie jak najszybciej i zużywać jak najmniej pamięci.",
      "Uniwersalność - powinien działać dla całego zbioru poprawnych danych wejściowych, a nie tylko dla jednego konkretnego przypadku."
    ],
    explanation:
      "Notatki wśród cech wymieniają efektywność oraz uniwersalność, czyli działanie dla całego zbioru poprawnych danych, a nie jednego przypadku."
  },
  {
    id: "nt-q-representation",
    source: "notatki",
    category: "Podstawy algorytmów",
    level: "podstawowy",
    question: "W jaki sposób można przedstawić algorytm?",
    answer: [
      "Językiem naturalnym.",
      "W postaci listy kroków.",
      "Jako schemat blokowy.",
      "W postaci kodu - pseudokodu lub konkretnego języka programowania."
    ],
    explanation:
      "Im bliżej implementacji, tym zapis musi być bardziej precyzyjny. Schemat blokowy i pseudokod są wygodne na etapie projektowania."
  },
  {
    id: "nt-q-ds-classification",
    source: "notatki",
    category: "Struktury danych",
    level: "podstawowy",
    question: "Jak dzielimy struktury danych?",
    answer: [
      "Liniowe - tablice, listy, stosy, kolejki.",
      "Nieliniowe - grafy, drzewa.",
      "Statyczne - o stałym rozmiarze.",
      "Dynamiczne - o zmiennym rozmiarze."
    ],
    explanation:
      "Notatki dzielą struktury danych według budowy (liniowe/nieliniowe) oraz według rozmiaru (statyczne/dynamiczne)."
  },
  {
    id: "nt-q-analysis",
    source: "notatki",
    category: "Analiza algorytmów",
    level: "podstawowy",
    question: "Czym jest analiza algorytmu?",
    answer:
      "Badanie wydajności algorytmu, zazwyczaj pod kątem tego, ile czasu potrzebuje na wykonanie (złożoność czasowa) i ile pamięci operacyjnej zużywa.",
    explanation:
      "Analiza skupia się na zużyciu czasu i pamięci, a nie na pojedynczym pomiarze na konkretnym komputerze."
  },
  {
    id: "nt-q-flowchart-elements",
    source: "notatki",
    category: "Schematy blokowe",
    level: "podstawowy",
    question: "Jakie są podstawowe elementy schematów blokowych?",
    answer: [
      "Owal - początek lub koniec algorytmu (START/STOP).",
      "Równoległobok - wprowadzenie lub wyprowadzenie danych.",
      "Prostokąt - wykonywanie operacji lub obliczeń.",
      "Romb - podejmowanie decyzji lub warunek logiczny."
    ],
    explanation:
      "Strzałki łączą bloki i pokazują kierunek przepływu sterowania w algorytmie."
  },
  {
    id: "nt-q-iteration-vs-recursion",
    source: "notatki",
    category: "Iteracja i rekurencja",
    level: "podstawowy",
    question: "Czym różni się iteracja od rekurencji?",
    answer:
      "Iteracja powtarza blok kodu w pętli, aby rozwiązać problem. Rekurencja to podejście, w którym funkcja wywołuje samą siebie z coraz mniejszym problemem, aż dotrze do najprostszego przypadku (warunku bazowego).",
    explanation:
      "Bez warunku bazowego rekurencja nigdy się nie zatrzyma i doprowadzi do przepełnienia stosu."
  },
  {
    id: "nt-q-iteration-recursion-pros-cons",
    source: "notatki",
    category: "Iteracja i rekurencja",
    level: "średni",
    question: "Jakie są wady i zalety iteracji i rekurencji?",
    answer: [
      "Iteracja - zaleta: mniejsze zużycie pamięci (bez odkładania na stos) i prostsza składnia.",
      "Iteracja - wada: trudniejsza implementacja problemów złożonych logicznie.",
      "Rekurencja - zaleta: czysty, krótki i czytelny kod dla skomplikowanych problemów.",
      "Rekurencja - wada: duże zużycie pamięci (każde wywołanie zajmuje miejsce na stosie, grozi przepełnieniem stosu) i mniejsza wydajność."
    ],
    explanation:
      "Notatki podkreślają, że rekurencja jest czytelniejsza, ale kosztuje pamięć na stosie wywołań."
  },
  {
    id: "nt-q-big-o",
    source: "notatki",
    category: "Analiza algorytmów",
    level: "podstawowy",
    question: "Na czym polega notacja dużego O?",
    answer:
      "Służy do opisywania wydajności (złożoności) algorytmów dla najgorszego możliwego scenariusza. Pokazuje, jak rośnie czas działania lub zużycie pamięci wraz ze wzrostem liczby przetwarzanych danych (n).",
    explanation:
      "Notacja dużego O opisuje tempo wzrostu kosztu, a nie dokładny czas w sekundach."
  },
  {
    id: "nt-q-bubble-sort",
    source: "notatki",
    category: "Sortowanie proste",
    level: "podstawowy",
    question: "Na czym polega sortowanie bąbelkowe?",
    answer:
      "Wielokrotnie przechodzimy przez tablicę i porównujemy sąsiadujące elementy. Jeśli są w złej kolejności, zamieniamy je miejscami. Największe elementy 'wypływają' na koniec tablicy jak bąbelki powietrza.",
    explanation:
      "Po każdym pełnym przejściu kolejny największy element trafia na swoje docelowe miejsce na końcu."
  },
  {
    id: "nt-q-bubble-modifications",
    source: "notatki",
    category: "Sortowanie proste",
    level: "średni",
    question: "Jakie są modyfikacje sortowania bąbelkowego?",
    answer: [
      "Flaga zamiany - jeśli w danym przejściu nie było żadnej zamiany, tablica jest już posortowana i algorytm można zakończyć wcześniej.",
      "Skrócenie zasięgu - po każdym przejściu największy element jest na końcu, więc w kolejnym przejściu sprawdzamy o jeden element mniej."
    ],
    explanation:
      "Obie modyfikacje skracają zbędną pracę i poprawiają czas działania na danych częściowo posortowanych."
  },
  {
    id: "nt-q-insertion-sort",
    source: "notatki",
    category: "Sortowanie proste",
    level: "podstawowy",
    question: "Na czym polega sortowanie przez wstawianie?",
    answer:
      "Działa jak układanie kart w ręce. Dzielimy tablicę na część posortowaną (zaczynamy od pierwszego elementu) i nieposortowaną. Bierzemy pierwszy element z części nieposortowanej i wstawiamy go w odpowiednie miejsce w części posortowanej - i tak aż do końca.",
    explanation:
      "Sprawdza się bardzo dobrze dla małych lub niemal posortowanych zbiorów danych."
  },
  {
    id: "nt-q-selection-sort",
    source: "notatki",
    category: "Sortowanie proste",
    level: "podstawowy",
    question: "Na czym polega sortowanie przez wybór?",
    answer:
      "Z nieposortowanej części tablicy wyszukujemy najmniejszy element i zamieniamy go z pierwszym elementem nieposortowanym. Proces powtarzamy aż do uzyskania posortowanej tablicy.",
    explanation:
      "W każdym kroku wybieramy minimum z reszty i ustawiamy je na początku części nieposortowanej."
  },
  {
    id: "nt-q-quick-sort",
    source: "notatki",
    category: "Sortowanie zaawansowane",
    level: "średni",
    question: "Na czym polega sortowanie szybkie (QuickSort)?",
    answer:
      "Wybieramy element osiowy - pivot (oś podziału). Układamy tablicę tak, by po lewej stronie pivota znalazły się elementy mniejsze, a po prawej większe. Następnie powtarzamy to rekurencyjnie dla lewej i prawej części.",
    explanation:
      "Po podziale pivot jest już na swoim docelowym miejscu, a obie części sortujemy w ten sam sposób."
  },
  {
    id: "nt-q-merge-sort",
    source: "notatki",
    category: "Sortowanie zaawansowane",
    level: "średni",
    question: "Na czym polega sortowanie przez scalanie (MergeSort)?",
    answer:
      "Algorytm typu 'dziel i zwyciężaj'. Dzielimy tablicę na pół, aż otrzymamy jednoelementowe tablice (które z natury są posortowane). Następnie łączymy (scalamy) te małe tablice ze sobą, na bieżąco je sortując.",
    explanation:
      "Główna praca dzieje się na etapie scalania, gdzie z dwóch posortowanych fragmentów powstaje jeden posortowany."
  },
  {
    id: "nt-q-queue-stack-uses",
    source: "notatki",
    category: "Stos, kolejka i lista",
    level: "podstawowy",
    question: "Podaj realne zastosowania kolejek i stosów.",
    answer: [
      "Kolejki - kolejka dokumentów w drukarce, buforowanie wejścia z klawiatury, obsługa żądań użytkowników na serwerze.",
      "Stosy - przycisk 'Cofnij' w programach, nawigacja 'Wstecz' w przeglądarce, stos wywołań funkcji (call stack)."
    ],
    explanation:
      "Kolejka działa według zasady FIFO, a stos według zasady LIFO, co przekłada się na ich typowe zastosowania."
  },
  {
    id: "nt-q-priority-queue",
    source: "notatki",
    category: "Stos, kolejka i lista",
    level: "średni",
    question: "Czym jest kolejka priorytetowa?",
    answer:
      "Modyfikacja kolejki, w której elementy nie wychodzą w kolejności wejścia (FIFO), lecz na podstawie przypisanego priorytetu - element o najwyższym priorytecie wychodzi jako pierwszy.",
    explanation:
      "Zwykła kolejka kieruje się kolejnością wejścia, a priorytetowa wartością priorytetu elementu."
  },
  {
    id: "nt-q-set",
    source: "notatki",
    category: "Struktury danych",
    level: "podstawowy",
    question: "Czym charakteryzuje się zbiór (set)?",
    answer:
      "Nie dopuszcza powtórzeń (duplikatów) i przechowuje wyłącznie unikalne wartości. Zwykle nie zapewnia też zachowania kolejności wstawianych elementów.",
    explanation:
      "Zbiór sprawdza się tam, gdzie ważna jest unikalność elementów, a nie ich kolejność."
  },
  {
    id: "nt-q-dictionary",
    source: "notatki",
    category: "Struktury danych",
    level: "podstawowy",
    question: "Czym jest słownik (Map/Dictionary)?",
    answer:
      "Struktura przechowująca dane jako pary klucz-wartość (key-value). Klucze są unikalne, co pozwala na bardzo szybkie wyszukiwanie wartości na podstawie znanego klucza.",
    explanation:
      "Znając klucz, docieramy do wartości niemal natychmiast, bez przeszukiwania całej struktury."
  },
  {
    id: "nt-q-vector",
    source: "notatki",
    category: "Struktury danych",
    level: "średni",
    question: "Czym jest wektor (vector w C++)?",
    answer:
      "Inteligentna, dynamiczna tablica. Ma zalety zwykłej tablicy (natychmiastowy dostęp po indeksie), ale sam automatycznie zarządza pamięcią - powiększa się w miarę dodawania nowych elementów.",
    explanation:
      "Łączy szybki dostęp po indeksie z wygodą automatycznego powiększania pojemności."
  },
  {
    id: "nt-q-onp-definition",
    source: "notatki",
    category: "Stos, kolejka i lista",
    level: "średni",
    question: "Czym jest Odwrotna Notacja Polska (ONP)?",
    answer:
      "Sposób zapisu działań matematycznych, w którym operator znajduje się zawsze za liczbami (argumentami).",
    explanation:
      "W ONP nie są potrzebne nawiasy, a wyrażenie wygodnie oblicza się za pomocą stosu."
  },
  {
    id: "nt-q-onp-evaluation",
    source: "notatki",
    category: "Stos, kolejka i lista",
    level: "średni",
    question: "Jak oblicza się wyrażenie zapisane w ONP?",
    answer:
      "Czytamy wyrażenie od lewej do prawej. Liczby odkładamy na stos. Gdy napotkamy operator, zdejmujemy ze stosu potrzebną liczbę argumentów, wykonujemy działanie i odkładamy wynik z powrotem na stos.",
    explanation:
      "Przykład 1: '4 5 + 3 *' to 4+5=9, potem 9*3=27, wynik 27. Przykład 2: '8 2 / 5 -' to 8/2=4, potem 4-5=-1, wynik -1."
  },
  {
    id: "nt-q-list-types",
    source: "notatki",
    category: "Listy",
    level: "podstawowy",
    question: "Czym różni się lista jednokierunkowa od dwukierunkowej?",
    answer: [
      "Jednokierunkowa - każdy element ma wskaźnik tylko na element następny, więc listę można czytać tylko w jedną stronę.",
      "Dwukierunkowa - każdy element ma dwa wskaźniki (na następny i na poprzedni), więc listę można czytać w przód i w tył."
    ],
    explanation:
      "Dwukierunkowa lista jest wygodniejsza w przechodzeniu w obie strony kosztem dodatkowego wskaźnika w każdym elemencie."
  }
];

const FLASHCARDS = [
  {
    id: "fc-algorithm",
    category: "Podstawy algorytmów",
    source: "lista pytań",
    front: "Algorytm",
    back:
      "Skonczony, uporzadkowany i jednoznaczny zestaw krokow prowadzacych od danych wejsciowych do wyniku."
  },
  {
    id: "fc-algorithm-features",
    category: "Podstawy algorytmów",
    source: "lista pytań",
    front: "4 cechy algorytmu",
    back:
      "Skonczonosc, jednoznacznosc, dane wejsciowe i wynik, wykonalnosc/efektywnosc."
  },
  {
    id: "fc-algorithm-notation",
    category: "Podstawy algorytmów",
    source: "lista pytań",
    front: "4 sposoby zapisu algorytmu",
    back:
      "Opis slowny, pseudokod, schemat blokowy, kod programu."
  },
  {
    id: "fc-analysis",
    category: "Analiza algorytmów",
    source: "lista pytań",
    front: "Analiza algorytmów",
    back:
      "Ocena poprawnosci, czasu dzialania, zuzycia pamieci i skalowania algorytmu wraz z rozmiarem danych."
  },
  {
    id: "fc-big-o",
    category: "Analiza algorytmów",
    source: "lista pytań",
    front: "Notacja duzego O",
    back:
      "Opisuje tempo wzrostu kosztu algorytmu dla rosnacego wejscia, z pominieciem stalych i mniej istotnych skladnikow."
  },
  {
    id: "fc-flowchart",
    category: "Schematy blokowe",
    source: "lista pytań",
    front: "Podstawowe elementy schematu blokowego",
    back:
      "Terminator, operacja, decyzja, wejscie/wyjscie, strzalki przeplywu i laczniki."
  },
  {
    id: "fc-iteration",
    category: "Iteracja i rekurencja",
    source: "lista pytań",
    front: "Iteracja",
    back:
      "Powtarzanie instrukcji za pomoca petli. Zwykle male zuzycie pamieci i brak narzutu wielu wywolan funkcji."
  },
  {
    id: "fc-recursion",
    category: "Iteracja i rekurencja",
    source: "lista pytań",
    front: "Rekurencja",
    back:
      "Funkcja wywoluje sama siebie dla mniejszego podproblemu az do przypadku bazowego."
  },
  {
    id: "fc-data-structure",
    category: "Struktury danych",
    source: "lista pytań",
    front: "Struktura danych",
    back:
      "Sposob organizowania danych wraz z typowymi operacjami, np. odczytem, dodawaniem, usuwaniem i wyszukiwaniem."
  },
  {
    id: "fc-data-structure-divisions",
    category: "Struktury danych",
    source: "lista pytań",
    front: "Podzial struktur danych",
    back:
      "Proste/zlozone, statyczne/dynamiczne, liniowe/nieliniowe, jednorodne/niejednorodne, sekwencyjne/wskaznikowe."
  },
  {
    id: "fc-cpp-struct",
    category: "Struktury danych",
    source: "lista pytań",
    front: "struct w C++",
    back:
      "Typ zlozony grupujacy pola pod jedna nazwa. Definiowany slowem kluczowym struct; pola sa domyslnie publiczne."
  },
  {
    id: "fc-array",
    category: "Struktury danych",
    source: "lista pytań",
    front: "Tablica",
    back:
      "Elementy tego samego typu w kolejnych komorkach pamieci. Dostep po indeksie O(1), ale wstawianie/usuwanie ze srodka O(n)."
  },
  {
    id: "fc-vector",
    category: "Struktury danych",
    source: "lista pytań",
    front: "Wektor",
    back:
      "Dynamiczna tablica: ciagla pamiec, dostep O(1), push_back zwykle zamortyzowane O(1), czasem realokacja."
  },
  {
    id: "fc-set",
    category: "Struktury danych",
    source: "lista pytań",
    front: "Zbior",
    back:
      "Przechowuje unikalne elementy. Kluczowe operacje: dodaj, usun, sprawdz przynaleznosc, suma, przeciecie, roznica."
  },
  {
    id: "fc-dictionary",
    category: "Struktury danych",
    source: "lista pytań",
    front: "Slownik",
    back:
      "Przechowuje pary klucz-wartosc. Klucz jest unikalny i sluzy do szybkiego znalezienia wartosci."
  },
  {
    id: "fc-linked-list",
    category: "Listy",
    source: "lista pytań",
    front: "Dodawanie i usuwanie w liscie",
    back:
      "Polega na przepinaniu wskaznikow. O(1), jesli znamy miejsce operacji; O(n), jesli trzeba najpierw wyszukac element."
  },
  {
    id: "fc-singly-list",
    category: "Listy",
    source: "lista pytań",
    front: "Lista jednokierunkowa",
    back:
      "Kazdy wezel ma wskaznik tylko na nastepny element. Przechodzenie naturalnie odbywa sie w jedna strone."
  },
  {
    id: "fc-doubly-list",
    category: "Listy",
    source: "lista pytań",
    front: "Lista dwukierunkowa",
    back:
      "Kazdy wezel ma wskaznik na nastepny i poprzedni element. Ulatwia cofanie i usuwanie, ale zuzywa wiecej pamieci."
  },
  {
    id: "fc-stack",
    category: "Stos, kolejka i lista",
    source: "lista pytań",
    front: "Stos",
    back:
      "Struktura LIFO: ostatni dodany element jest zdejmowany jako pierwszy. Przyklady: undo, stos wywolan, nawiasy, ONP."
  },
  {
    id: "fc-queue",
    category: "Stos, kolejka i lista",
    source: "lista pytań",
    front: "Kolejka",
    back:
      "Struktura FIFO: pierwszy dodany element jest obslugiwany jako pierwszy. Przyklady: drukarka, BFS, kolejka zadan."
  },
  {
    id: "fc-list",
    category: "Stos, kolejka i lista",
    source: "lista pytań",
    front: "Lista",
    back:
      "Bardziej ogolna struktura liniowa. Pozwala przechodzic po elementach i wstawiac/usuwac je w roznych miejscach."
  },
  {
    id: "fc-rpn",
    category: "Stos, kolejka i lista",
    source: "lista pytań",
    front: "ONP",
    back:
      "Odwrotna Notacja Polska: operator po operandach, np. 2 3 +. Do obliczania uzywa sie stosu."
  },
  {
    id: "fc-priority-queue",
    category: "Stos, kolejka i lista",
    source: "lista pytań",
    front: "Kolejka priorytetowa",
    back:
      "Pobiera element wedlug priorytetu, a nie zwyklej kolejnosci przyjscia. Czesto implementowana kopcem."
  },
  {
    id: "fc-bubble-sort",
    category: "Sortowanie proste",
    source: "lista pytań",
    front: "BubbleSort",
    back:
      "Porownuje sasiednie elementy i zamienia je miejscami. Po przejsciu najwiekszy element trafia na koniec."
  },
  {
    id: "fc-bubble-optimizations",
    category: "Sortowanie proste",
    source: "lista pytań",
    front: "2 optymalizacje BubbleSort",
    back:
      "Przerwanie po przejsciu bez zamian oraz skracanie zakresu porownan po kazdym przejsciu."
  },
  {
    id: "fc-insertion-sort",
    category: "Sortowanie proste",
    source: "lista pytań",
    front: "InsertionSort",
    back:
      "Buduje posortowana czesc i wstawia kolejny element w odpowiednie miejsce. Dobry dla malych lub prawie posortowanych danych."
  },
  {
    id: "fc-selection-sort",
    category: "Sortowanie proste",
    source: "lista pytań",
    front: "SelectionSort",
    back:
      "Wybiera najmniejszy element z nieposortowanej czesci i zamienia go z pierwszym elementem tej czesci."
  },
  {
    id: "fc-simple-sort-complexities",
    category: "Sortowanie proste",
    source: "lista pytań",
    front: "Zlozonosci prostych sortowan",
    back:
      "BubbleSort, InsertionSort i SelectionSort maja srednio O(n^2). BubbleSort i InsertionSort moga miec O(n) w najlepszym przypadku."
  },
  {
    id: "fc-quicksort",
    category: "Sortowanie zaawansowane",
    source: "lista pytań",
    front: "QuickSort",
    back:
      "Wybiera pivot, dzieli dane na mniejsze i wieksze od pivota, potem rekurencyjnie sortuje obie czesci."
  },
  {
    id: "fc-quicksort-complexity",
    category: "Sortowanie zaawansowane",
    source: "lista pytań",
    front: "Zlozonosc QuickSort",
    back:
      "Srednio O(n log n), najgorzej O(n^2), pamiec srednio O(log n) przez stos rekurencji."
  },
  {
    id: "fc-mergesort",
    category: "Sortowanie zaawansowane",
    source: "lista pytań",
    front: "MergeSort",
    back:
      "Dzieli dane na mniejsze czesci, sortuje je i scala posortowane fragmenty."
  },
  {
    id: "fc-mergesort-complexity",
    category: "Sortowanie zaawansowane",
    source: "lista pytań",
    front: "Zlozonosc MergeSort",
    back:
      "Czas O(n log n) w najlepszym, srednim i najgorszym przypadku. Typowo pamiec O(n)."
  },
  {
    id: "nt-fc-algorithm",
    category: "Podstawy algorytmów",
    source: "notatki",
    front: "Algorytm",
    back:
      "Ciąg precyzyjnie określonych kroków rozwiązujących problem w skończonym czasie."
  },
  {
    id: "nt-fc-features",
    category: "Podstawy algorytmów",
    source: "notatki",
    front: "Cechy algorytmu",
    back: "Skończoność, jednoznaczność, efektywność, uniwersalność."
  },
  {
    id: "nt-fc-representation",
    category: "Podstawy algorytmów",
    source: "notatki",
    front: "Sposoby zapisu algorytmu",
    back: "Język naturalny, lista kroków, schemat blokowy, kod (pseudokod)."
  },
  {
    id: "nt-fc-data-structure",
    category: "Struktury danych",
    source: "notatki",
    front: "Struktura danych",
    back:
      "Sposób organizacji i przechowywania danych w pamięci, umożliwiający ich efektywne przetwarzanie."
  },
  {
    id: "nt-fc-ds-division",
    category: "Struktury danych",
    source: "notatki",
    front: "Podział struktur danych",
    back: "Liniowe i nieliniowe oraz statyczne i dynamiczne."
  },
  {
    id: "nt-fc-analysis",
    category: "Analiza algorytmów",
    source: "notatki",
    front: "Analiza algorytmu",
    back: "Badanie wydajności: złożoność czasowa i zużycie pamięci operacyjnej."
  },
  {
    id: "nt-fc-big-o",
    category: "Analiza algorytmów",
    source: "notatki",
    front: "Notacja dużego O",
    back:
      "Opisuje złożoność dla najgorszego przypadku - jak koszt rośnie wraz z liczbą danych (n)."
  },
  {
    id: "nt-fc-flowchart",
    category: "Schematy blokowe",
    source: "notatki",
    front: "Elementy schematu blokowego",
    back:
      "Owal (start/stop), równoległobok (wejście/wyjście), prostokąt (operacja), romb (decyzja)."
  },
  {
    id: "nt-fc-iteration-recursion",
    category: "Iteracja i rekurencja",
    source: "notatki",
    front: "Iteracja vs rekurencja",
    back:
      "Iteracja: powtarzanie w pętli. Rekurencja: funkcja wywołuje samą siebie aż do warunku bazowego."
  },
  {
    id: "nt-fc-bubble",
    category: "Sortowanie proste",
    source: "notatki",
    front: "Sortowanie bąbelkowe",
    back:
      "Zamiana sąsiednich elementów w złej kolejności; największe 'wypływają' na koniec tablicy."
  },
  {
    id: "nt-fc-bubble-flag",
    category: "Sortowanie proste",
    source: "notatki",
    front: "Flaga w sortowaniu bąbelkowym",
    back:
      "Brak zamiany w całym przejściu oznacza, że tablica jest posortowana - można zakończyć wcześniej."
  },
  {
    id: "nt-fc-insertion",
    category: "Sortowanie proste",
    source: "notatki",
    front: "Sortowanie przez wstawianie",
    back:
      "Wstawianie kolejnych elementów w odpowiednie miejsce części posortowanej (jak karty w ręce)."
  },
  {
    id: "nt-fc-selection",
    category: "Sortowanie proste",
    source: "notatki",
    front: "Sortowanie przez wybór",
    back:
      "Szukanie najmniejszego elementu i zamiana go z pierwszym nieposortowanym; i tak do końca."
  },
  {
    id: "nt-fc-quick",
    category: "Sortowanie zaawansowane",
    source: "notatki",
    front: "Sortowanie szybkie (QuickSort)",
    back:
      "Pivot, podział na mniejsze i większe, a następnie rekurencja dla obu części."
  },
  {
    id: "nt-fc-merge",
    category: "Sortowanie zaawansowane",
    source: "notatki",
    front: "Sortowanie przez scalanie (MergeSort)",
    back:
      "Dziel i zwyciężaj: dziel na pół aż do pojedynczych elementów, potem scalaj, sortując."
  },
  {
    id: "nt-fc-priority-queue",
    category: "Stos, kolejka i lista",
    source: "notatki",
    front: "Kolejka priorytetowa",
    back: "Element wychodzi według priorytetu, a nie według kolejności wejścia (FIFO)."
  },
  {
    id: "nt-fc-set",
    category: "Struktury danych",
    source: "notatki",
    front: "Zbiór (set)",
    back: "Tylko unikalne wartości, bez duplikatów; zwykle bez zachowania kolejności."
  },
  {
    id: "nt-fc-dictionary",
    category: "Struktury danych",
    source: "notatki",
    front: "Słownik (Map/Dictionary)",
    back: "Pary klucz-wartość, unikalne klucze, bardzo szybkie wyszukiwanie po kluczu."
  },
  {
    id: "nt-fc-vector",
    category: "Struktury danych",
    source: "notatki",
    front: "Wektor (vector)",
    back: "Dynamiczna tablica: dostęp po indeksie O(1) i automatyczne powiększanie."
  },
  {
    id: "nt-fc-onp",
    category: "Stos, kolejka i lista",
    source: "notatki",
    front: "ONP (Odwrotna Notacja Polska)",
    back: "Operator zapisywany za liczbami; wyrażenie liczy się za pomocą stosu."
  },
  {
    id: "nt-fc-list-types",
    category: "Listy",
    source: "notatki",
    front: "Lista jedno- vs dwukierunkowa",
    back:
      "Jednokierunkowa: wskaźnik na następny. Dwukierunkowa: na następny i poprzedni (czytanie w obie strony)."
  },
  {
    id: "nt-fc-diagram-bubble",
    category: "Sortowanie proste",
    source: "notatki",
    front: "Schemat blokowy: sortowanie bąbelkowe",
    back: "Sortowanie bąbelkowe - zamiana sąsiednich elementów; największe wypływają na koniec.",
    image: {
      src: "assets/sortowanie-babelkowe.png",
      alt: "Schemat blokowy sortowania bąbelkowego."
    }
  },
  {
    id: "nt-fc-diagram-insertion",
    category: "Sortowanie proste",
    source: "notatki",
    front: "Schemat blokowy: sortowanie przez wstawianie",
    back: "Sortowanie przez wstawianie - wstawianie elementu w odpowiednie miejsce części posortowanej.",
    image: {
      src: "assets/sortowanie-przez-wstawianie.png",
      alt: "Schemat blokowy sortowania przez wstawianie."
    }
  },
  {
    id: "nt-fc-diagram-selection",
    category: "Sortowanie proste",
    source: "notatki",
    front: "Schemat blokowy: sortowanie przez wybór",
    back: "Sortowanie przez wybór - szukanie minimum i zamiana z pierwszym nieposortowanym.",
    image: {
      src: "assets/sortowanie-przez-wybor.png",
      alt: "Schemat blokowy sortowania przez wybór."
    }
  },
  {
    id: "nt-fc-diagram-merge",
    category: "Sortowanie zaawansowane",
    source: "notatki",
    front: "Schemat blokowy: sortowanie przez scalanie",
    back: "Sortowanie przez scalanie - dziel na pół i scalaj posortowane fragmenty.",
    image: {
      src: "assets/sortowanie-przez-scalanie.png",
      alt: "Schemat blokowy sortowania przez scalanie."
    }
  },
  {
    id: "nt-fc-diagram-quick",
    category: "Sortowanie zaawansowane",
    source: "notatki",
    front: "Schemat blokowy: sortowanie szybkie",
    back: "Sortowanie szybkie - pivot, podział na mniejsze i większe, rekurencja.",
    image: {
      src: "assets/sortowanie-szybkie.png",
      alt: "Schemat blokowy sortowania szybkiego (QuickSort)."
    }
  }
];
