const QUESTIONS = [
  {
    id: "sheet-osi-pdu",
    source: "sheet",
    category: "OSI i TCP/IP",
    level: "podstawowy",
    question:
      "Przyporządkuj nazwy jednostek danych (PDU) do odpowiedniej warstwy modelu OSI/ISO:",
    options: [
      "a) segment",
      "b) dane",
      "c) datagram",
      "d) ramka",
      "e) strumień bitów",
      "f) pakiet"
    ],
    subtasks: [
      "1. warstwa sesji",
      "2. warstwa aplikacji",
      "3. warstwa fizyczna",
      "4. warstwa transportowa",
      "5. warstwa sieci",
      "6. warstwa łącza danych",
      "7. warstwa prezentacji"
    ],
    answer: [
      "1 - dane",
      "2 - dane",
      "3 - strumień bitów",
      "4 - segment",
      "5 - pakiet",
      "6 - ramka",
      "7 - dane"
    ],
    explanation:
      "W modelu OSI warstwy aplikacji, prezentacji i sesji operują na danych. Transport tworzy segmenty, warstwa sieci pakiety, warstwa łącza danych ramki, a warstwa fizyczna przesyła bity."
  },
  {
    id: "sheet-encapsulation",
    source: "sheet",
    category: "OSI i TCP/IP",
    level: "podstawowy",
    question: "Co oznacza termin enkapsulacja? Gdzie jest wykorzystywana?",
    answer:
      "Enkapsulacja to dodawanie informacji sterujących, najczęściej nagłówków i czasem pól końcowych, do danych przekazywanych między warstwami. Jest wykorzystywana podczas przesyłania danych przez sieć, np. gdy pakiet IP zostaje opakowany w ramkę Ethernet.",
    explanation:
      "Każda niższa warstwa dodaje własne informacje potrzebne do dostarczenia danych. Proces odwrotny po stronie odbiorcy to dekapsulacja."
  },
  {
    id: "sheet-router-definition",
    source: "sheet",
    category: "Urządzenia sieciowe",
    level: "podstawowy",
    question: "Wybierz właściwą definicję dla urządzenia: router",
    options: [
      "urządzenie łączące dwie lub więcej sieci, dokonując filtrowania ruchu sieciowego, pracuje w warstwie 3,",
      "urządzenie przesyła sygnały elektryczne z jednego portu (gniazda) na wszystkie pozostałe, pracuje w warstwie 2,",
      "urządzenie przekazuje ramki wyłącznie do docelowego segmentu sieci, pracuje w warstwie 2",
      "umożliwia połączenie wielu segmentów sieci, pracuje w warstwie 2",
      "urządzenie stosowane do regeneracji sygnału i do wydłużenia segmentu sieci."
    ],
    answer:
      "Poprawna jest odpowiedź: urządzenie łączące dwie lub więcej sieci, dokonując filtrowania ruchu sieciowego, pracuje w warstwie 3.",
    explanation:
      "Router podejmuje decyzje na podstawie adresów IP i tablicy routingu, więc działa w warstwie sieciowej modelu OSI."
  },
  {
    id: "sheet-switch-definition",
    source: "sheet",
    category: "Urządzenia sieciowe",
    level: "podstawowy",
    question: "Wybierz właściwą definicję dla urządzenia: przełącznik",
    options: [
      "urządzenie łączące dwie lub więcej sieci, dokonując filtrowania ruchu sieciowego, pracuje w warstwie 3,",
      "urządzenie przesyła sygnały elektryczne z jednego portu (gniazda) na wszystkie pozostałe, pracuje w warstwie 2,",
      "urządzenie przekazuje ramki wyłącznie do docelowego segmentu sieci, pracuje w warstwie 2",
      "umożliwia połączenie wielu segmentów sieci, pracuje w warstwie 2",
      "urządzenie stosowane do regeneracji sygnału i do wydłużenia segmentu sieci."
    ],
    answer:
      "Poprawna jest odpowiedź: urządzenie przekazuje ramki wyłącznie do docelowego segmentu sieci, pracuje w warstwie 2.",
    explanation:
      "Przełącznik uczy się adresów MAC i kieruje ramki do właściwego portu, zamiast rozsyłać każdą ramkę do wszystkich portów."
  },
  {
    id: "sheet-vlsm",
    source: "sheet",
    category: "Adresacja IPv4",
    level: "podstawowy",
    question: "Do czego służy VLSM?",
    answer:
      "VLSM służy do stosowania masek podsieci o różnej długości w ramach jednego planu adresacji, aby tworzyć podsieci o różnych rozmiarach.",
    explanation:
      "Dzięki VLSM nie marnujesz adresów. Duża podsieć może dostać krótszą maskę, a mała podsieć dłuższą maskę."
  },
  {
    id: "sheet-ip-purpose",
    source: "sheet",
    category: "Adresacja IPv4",
    level: "podstawowy",
    question: "Do czego służy protokół IP?",
    answer:
      "Protokół IP służy do logicznego adresowania urządzeń i przesyłania pakietów między sieciami.",
    explanation:
      "IP działa w warstwie sieciowej. Sam IP nie gwarantuje dostarczenia, kolejności ani retransmisji; tym zajmują się inne protokoły, np. TCP."
  },
  {
    id: "sheet-icann",
    source: "sheet",
    category: "Warstwa aplikacji",
    level: "podstawowy",
    question: "ICANN, to organizacja, która:",
    answer:
      "ICANN koordynuje globalny system nazw domen i adresacji internetowej, w tym działanie DNS oraz przydział unikatowych identyfikatorów internetowych.",
    explanation:
      "W praktyce chodzi o to, aby nazwy domen i adresy były globalnie jednoznaczne, a nie przydzielane chaotycznie przez niezależne podmioty."
  },
  {
    id: "sheet-arp-when",
    source: "sheet",
    category: "Warstwa łącza danych",
    level: "podstawowy",
    question: "Kiedy używa się protokołu ARP?",
    answer:
      "ARP używa się wtedy, gdy host zna adres IPv4 celu albo bramy, ale musi poznać odpowiadający mu adres MAC.",
    explanation:
      "ARP mapuje adres IPv4 na adres MAC w lokalnej sieci Ethernet. Zapytanie ARP jest rozgłoszeniowe, a odpowiedź wysyła urządzenie posiadające dany adres IP."
  },
  {
    id: "sheet-ipv6-interface-id",
    source: "sheet",
    category: "IPv6",
    level: "podstawowy",
    question:
      "Co jest identyfikatorem interfejsu w adresie IPv6 2001:DB8::1000:A9CD:47FF:FE57:FE94/128?",
    options: [
      "1000:A9CD:47FF:FE57:FE94",
      "47FF:FE57:FE94",
      "FE57:FE94",
      "FE94",
      "A9CD:47FF:FE57:FE94"
    ],
    answer: "A9CD:47FF:FE57:FE94",
    explanation:
      "W typowym adresowaniu IPv6 identyfikator interfejsu to ostatnie 64 bity adresu, czyli ostatnie cztery hekstety. Uwaga: zapis /128 oznacza pojedynczy adres hosta, ale w tym typie pytania zwykle sprawdzana jest znajomość ostatnich 64 bitów."
  },
  {
    id: "sheet-ipv6-shorten",
    source: "sheet",
    category: "IPv6",
    level: "praktyczny",
    question: "Skróć adresy IPv6:",
    subtasks: [
      "a) 3FFE:0501:0008:0000:0260:97F0:FE40:EFAB",
      "b) 2001:0008:85A3:4290:0222:55FF:FE18:7DE8",
      "c) 2001:0025:0000:0000:3456:0000:0712:45FF"
    ],
    answer: [
      "a) 3FFE:501:8::260:97F0:FE40:EFAB",
      "b) 2001:8:85A3:4290:222:55FF:FE18:7DE8",
      "c) 2001:25::3456:0:712:45FF"
    ],
    explanation:
      "W IPv6 usuwasz zera wiodące w każdym hekstecie. Najdłuższy ciąg hekstetów 0000 możesz zastąpić raz symbolem ::."
  },
  {
    id: "sheet-ipv6-expand",
    source: "sheet",
    category: "IPv6",
    level: "praktyczny",
    question: "Rozwiń adresy IPv6:",
    subtasks: [
      "a) 3FFE::F0:0:EFAB",
      "b) 2001::85A3:4290:222:0:FE18:E8",
      "c) 2001:25::56:0:712:FF"
    ],
    answer: [
      "a) 3FFE:0000:0000:0000:0000:00F0:0000:EFAB",
      "b) 2001:0000:85A3:4290:0222:0000:FE18:00E8",
      "c) 2001:0025:0000:0000:0056:0000:0712:00FF"
    ],
    explanation:
      "Pełny adres IPv6 ma 8 hekstetów po 4 cyfry szesnastkowe. Symbol :: trzeba zastąpić tyloma hekstetami 0000, aby razem było ich 8."
  },
  {
    id: "sheet-ipv6-link-local",
    source: "sheet",
    category: "IPv6",
    level: "podstawowy",
    question:
      "Który prefiks sieci IPv6 jest przeznaczony tylko dla lokalnych połączeń i nie może być routowany?",
    options: ["2001::/3", "FE80::/10", "FC00::/7", "FEC0::/10"],
    answer: "FE80::/10",
    explanation:
      "FE80::/10 to adresy link-local. Działają tylko w obrębie lokalnego łącza i routery nie przekazują ich dalej."
  },
  {
    id: "sheet-l2-problems",
    source: "sheet",
    category: "Warstwa łącza danych",
    level: "średni",
    question: "Wybierz możliwe problemy administracyjne warstwy: łącza danych",
    options: [
      "zagubione pakiety",
      "opóźnienia kolejkowania i filtrowania",
      "błędy CRC",
      "zbyt wiele sieci przypisanych do interfejsów routera",
      "kolizje i krótkie pakiety",
      "niezgodność MTU pomiędzy portami routera",
      "zbyt mała liczba buforów, powodująca straty pakietów w przełącznikach",
      "zła konfiguracja routera",
      "niewłaściwa konfiguracja protokołów routingu",
      "sztormy/burze rozgłoszeniowe"
    ],
    answer: [
      "błędy CRC",
      "kolizje i krótkie pakiety",
      "zbyt mała liczba buforów, powodująca straty pakietów w przełącznikach",
      "sztormy/burze rozgłoszeniowe"
    ],
    explanation:
      "Warstwa łącza danych dotyczy ramek, adresów MAC, przełączników i lokalnego medium. Błędy CRC, kolizje, krótkie ramki, problemy buforów przełącznika i burze rozgłoszeniowe pasują do tego zakresu."
  },
  {
    id: "sheet-private-ranges",
    source: "sheet",
    category: "Adresacja IPv4",
    level: "podstawowy",
    question:
      "Wybierz zakresy adresów prywatnych w klasach A,B i C dla IPv4. Do czego się je wykorzystuje?",
    options: [
      "10.0.0.0/6",
      "127.0.0.0/8",
      "192.168.0.0/16",
      "10.0.0.0/8",
      "172.16.0.0/12",
      "169.254.121.80/16"
    ],
    answer: ["10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16"],
    explanation:
      "Adresy prywatne są używane wewnątrz sieci lokalnych i nie są routowane w publicznym Internecie. Dostęp do Internetu zwykle realizuje się przez NAT."
  },
  {
    id: "sheet-apipa",
    source: "sheet",
    category: "Adresacja IPv4",
    level: "podstawowy",
    question:
      "Wybierz zakres adresów: automatyczny adres prywatny w IPv4. Kiedy jest wykorzystywany?",
    options: [
      "10.0.0.0/6",
      "127.0.0.0/8",
      "192.168.0.0/16",
      "10.0.0.0/8",
      "172.16.0.0/12",
      "169.254.121.80/16"
    ],
    answer: "169.254.0.0/16, czyli w podanych odpowiedziach pozycja z 169.254.121.80/16.",
    explanation:
      "To APIPA/link-local IPv4. Host ustawia taki adres sam, gdy nie otrzyma konfiguracji z DHCP."
  },
  {
    id: "sheet-bus-topology",
    source: "sheet",
    category: "Topologie",
    level: "podstawowy",
    question:
      "Jak nazywana jest poniższa topologia fizyczna? Czy jest wykorzystywana? Przedstaw wady i zalety.",
    answer:
      "To topologia magistrali. Obecnie jest raczej historyczna i praktycznie nieużywana w nowych sieciach Ethernet.",
    explanation:
      "Zaletą była prostota i mała ilość okablowania. Wadą jest wspólne medium, kolizje, trudne diagnozowanie awarii i to, że uszkodzenie magistrali może zatrzymać całą sieć."
  },
  {
    id: "sheet-star-topology",
    source: "sheet",
    category: "Topologie",
    level: "podstawowy",
    question: "Podaj nazwę poniższej topologii fizycznej i jakie ma wady i zalety.",
    answer: "To topologia gwiazdy.",
    explanation:
      "Każdy host łączy się z urządzeniem centralnym, zwykle przełącznikiem. Zalety: łatwa rozbudowa i diagnoza, awaria jednego kabla odcina zwykle jeden host. Wada: awaria urządzenia centralnego wpływa na całą sieć."
  },
  {
    id: "sheet-network-addresses",
    source: "sheet",
    category: "Adresacja IPv4",
    level: "praktyczny",
    question: "Wyznacz adres sieci dla adresów:",
    subtasks: [
      "a) 10.0.10.150/25",
      "b) 172.16.4.124/22",
      "c) 182.166.64.124/20",
      "d) 192.168.4.129/25"
    ],
    answer: [
      "a) maska 255.255.255.128, adres sieci 10.0.10.128",
      "b) maska 255.255.252.0, adres sieci 172.16.4.0",
      "c) maska 255.255.240.0, adres sieci 182.166.64.0",
      "d) maska 255.255.255.128, adres sieci 192.168.4.128"
    ],
    explanation:
      "Adres sieci wyznaczasz przez wyzerowanie bitów hosta. Dla /25 blok w ostatnim oktecie ma rozmiar 128, dla /22 blok w trzecim oktecie ma rozmiar 4, a dla /20 rozmiar 16."
  },
  {
    id: "sheet-pick-subnet",
    source: "sheet",
    category: "Adresacja IPv4",
    level: "praktyczny",
    question: "Wybierz podsieć, do której należą adresy:",
    subtasks: [
      "229.130.0.192/25: a) 229.130.0.192, b) 229.128.0.0, c) 229.130.0.128",
      "10.16.0.10/16: a) 10.16.0.8, b) 10.17.128.0, c) 10.16.0.0",
      "130.150.30.10/24: a) 130.150.30.0, b) 130.128.0.0, c) 130.150.0.0",
      "192.168.10.9/29: a) 192.168.8.0, b) 192.168.10.8, c) 192.168.0.0",
      "172.31.128.130/17: a) 172.16.0.0, b) 172.31.128.0, c) 172.31.0.0",
      "12.12.14.15/13: a) 12.0.0.0, b) 12.12.0.0, c) 12.8.0.0"
    ],
    answer: [
      "229.130.0.192/25 - c) 229.130.0.128",
      "10.16.0.10/16 - c) 10.16.0.0",
      "130.150.30.10/24 - a) 130.150.30.0",
      "192.168.10.9/29 - b) 192.168.10.8",
      "172.31.128.130/17 - b) 172.31.128.0",
      "12.12.14.15/13 - c) 12.8.0.0"
    ],
    explanation:
      "Najpierw zamień prefiks na maskę lub rozmiar bloku. Potem sprawdź, w którym przedziale mieści się adres hosta."
  },
  {
    id: "sheet-scalability",
    source: "sheet",
    category: "Podstawy sieci",
    level: "podstawowy",
    question:
      "Zaznacz, która właściwość niezawodnej sieci zapewnia rozwój sieci bez degradacji usług dla istniejących użytkowników?",
    options: ["bezpieczeństwo", "skalowalność", "tolerancja błędu"],
    answer: "skalowalność",
    explanation:
      "Skalowalność oznacza możliwość rozwoju sieci bez pogorszenia działania usług dla dotychczasowych użytkowników."
  },
  {
    id: "sheet-intranet",
    source: "sheet",
    category: "Podstawy sieci",
    level: "podstawowy",
    question:
      "Pracownik w oddziale tworzy ofertę dla klienta. Aby to zrobić, pracownik musi uzyskać dostęp do poufnych informacji cenowych z wewnętrznych serwerów centrali. Do jakiego rodzaju sieci miałby dostęp pracownik?",
    options: ["Intranet", "Internet", "Extranet", "sieć lokalna (LAN)"],
    answer: "Intranet",
    explanation:
      "Intranet to prywatna sieć organizacji dostępna dla pracowników. Extranet udostępnia wybrane zasoby także partnerom zewnętrznym."
  },
  {
    id: "sheet-osi-tcpip-network-access",
    source: "sheet",
    category: "OSI i TCP/IP",
    level: "podstawowy",
    question:
      "Które dwie warstwy modelu OSI mają taką samą funkcjonalność jak jedna warstwa modelu TCP/IP? (Wybierz dwie odpowiedzi).",
    options: ["łącza danych", "sieci", "fizyczna", "sesji", "transportu"],
    answer: ["łącza danych", "fizyczna"],
    explanation:
      "W modelu TCP/IP warstwa dostępu do sieci obejmuje funkcje warstwy łącza danych i warstwy fizycznej modelu OSI."
  },
  {
    id: "sheet-usable-hosts-26",
    source: "sheet",
    category: "Adresacja IPv4",
    level: "praktyczny",
    question: "Ile dostępnych jest użytecznych adresów hostów w sieci 192.168.10.128/26?",
    options: ["30", "32", "60", "62", "64"],
    answer: "62",
    explanation:
      "Dla /26 zostaje 6 bitów hosta. 2^6 = 64 adresy razem, ale adres sieci i broadcast nie są użyteczne dla hostów, więc 64 - 2 = 62."
  },
  {
    id: "sheet-source-mac-layer",
    source: "sheet",
    category: "Warstwa łącza danych",
    level: "podstawowy",
    question:
      "W której warstwie OSI jest dodawany źródłowy adres MAC do PDU podczas procesu enkapsulacji? (jedna odpowiedź)",
    options: [
      "warstwa łącza danych",
      "warstwa aplikacji",
      "warstwa transportowa",
      "warstwa prezentacji"
    ],
    answer: "warstwa łącza danych",
    explanation:
      "Adresy MAC znajdują się w nagłówku ramki, a ramki są jednostkami PDU warstwy łącza danych."
  },
  {
    id: "sheet-subnet-3-from-22",
    source: "sheet",
    category: "Adresacja IPv4",
    level: "praktyczny",
    question:
      "Wyznacz schemat adresacji pozwalający na utworzenie 3 podsieci dla 172.16.128.0/22",
    answer: [
      "Pożycz 2 bity, bo 2^2 = 4 podsieci, czyli wystarczy na 3.",
      "Nowy prefiks: /24, maska 255.255.255.0.",
      "Podsieci: 172.16.128.0/24, 172.16.129.0/24, 172.16.130.0/24. Zostaje też 172.16.131.0/24 jako czwarta możliwa podsieć."
    ],
    explanation:
      "Sieć /22 obejmuje cztery sieci /24. Do uzyskania minimum 3 podsieci trzeba stworzyć 4 równe podsieci, bo liczba podsieci rośnie potęgami dwójki."
  },
  {
    id: "sheet-subnet-6-from-22",
    source: "sheet",
    category: "Adresacja IPv4",
    level: "praktyczny",
    question:
      "Wyznacz schemat adresacji pozwalający na utworzenie 6 podsieci dla 172.16.128.0/22 (2 pkt)",
    answer: [
      "Pożycz 3 bity, bo 2^3 = 8 podsieci, czyli wystarczy na 6.",
      "Nowy prefiks: /25, maska 255.255.255.128.",
      "Pierwsze 6 podsieci: 172.16.128.0/25, 172.16.128.128/25, 172.16.129.0/25, 172.16.129.128/25, 172.16.130.0/25, 172.16.130.128/25."
    ],
    explanation:
      "Podsieć /25 ma rozmiar 128 adresów, czyli 126 użytecznych hostów. Cała pula /22 daje osiem takich podsieci."
  },
  {
    id: "sheet-wireless-interference",
    source: "sheet",
    category: "Warstwa fizyczna",
    level: "podstawowy",
    question:
      "Które dwa urządzenia powszechnie wpływają na sieci bezprzewodowe? (Wybierz dwie odpowiedzi)",
    options: [
      "odtwarzacze Blu-ray",
      "telefony komórkowe",
      "mikrofalówki",
      "telewizory kablowe",
      "wewnętrzne dyski twarde",
      "bezprzewodowe telefony"
    ],
    answer: ["mikrofalówki", "bezprzewodowe telefony"],
    explanation:
      "Urządzenia pracujące w paśmie zbliżonym do Wi-Fi, szczególnie 2,4 GHz, mogą zakłócać transmisję bezprzewodową."
  },
  {
    id: "sheet-crc-fcs",
    source: "sheet",
    category: "Warstwa łącza danych",
    level: "podstawowy",
    question: "Jaka jest funkcja wartości CRC, która znajduje się w polu FCS ramki?",
    options: [
      "sprawdza integralność odebranej ramki",
      "oblicza nagłówek sumy kontrolnej dla pola danych w ramce",
      "sprawdza adres logiczny w ramce",
      "sprawdza adres fizyczny w ramce"
    ],
    answer: "sprawdza integralność odebranej ramki",
    explanation:
      "Nadawca zapisuje CRC w polu FCS, a odbiorca wylicza CRC ponownie. Różnica wskazuje uszkodzenie ramki."
  },
  {
    id: "sheet-borrow-bits-five-subnets",
    source: "sheet",
    category: "Adresacja IPv4",
    level: "praktyczny",
    question:
      "Ile bitów należy pożyczyć z części adresu hosta, aby zaadresować pięć podsieci podłączonych do routera?",
    options: ["dwa", "trzy", "cztery", "pięć"],
    answer: "trzy",
    explanation:
      "2 bity dają 4 podsieci, czyli za mało. 3 bity dają 8 podsieci, więc wystarczą na 5."
  },
  {
    id: "sheet-multicast",
    source: "sheet",
    category: "Podstawy sieci",
    level: "podstawowy",
    question: "Jak działają komunikaty multicastowe? (jedna odpowiedź)",
    options: [
      "Są one wysyłane do wybranej grupy hostów.",
      "Są wysyłane do wszystkich hostów w sieci.",
      "Muszą być potwierdzone.",
      "Są wysyłane do jednego miejsca docelowego."
    ],
    answer: "Są one wysyłane do wybranej grupy hostów.",
    explanation:
      "Unicast idzie do jednego odbiorcy, broadcast do wszystkich w danej domenie, a multicast do grupy odbiorców zainteresowanych danym ruchem."
  },
  {
    id: "sheet-public-addresses",
    source: "sheet",
    category: "Adresacja IPv4",
    level: "podstawowy",
    question:
      "Które trzy adresy są prawidłowymi adresami publicznymi? (Wybierz trzy odpowiedzi.)",
    options: [
      "198.133.219.17",
      "192.168.1.245",
      "10.15.250.5",
      "128.107.12.117",
      "172.31.1.25",
      "64.104.78.227"
    ],
    answer: ["198.133.219.17", "128.107.12.117", "64.104.78.227"],
    explanation:
      "Prywatne zakresy IPv4 to 10.0.0.0/8, 172.16.0.0/12 i 192.168.0.0/16. Adresy spoza tych zakresów mogą być publiczne, jeśli nie należą do innych zakresów specjalnych."
  },
  {
    id: "sheet-subnet-4-from-16",
    source: "sheet",
    category: "Adresacja IPv4",
    level: "praktyczny",
    question:
      "Wyznacz schemat adresacji pozwalający na zaadresowanie 4 podsieci, mając do dyspozycji adres sieci 10.122.0.0/16 (2pkt)",
    answer: [
      "Pożycz 2 bity, bo 2^2 = 4 podsieci.",
      "Nowy prefiks: /18, maska 255.255.192.0.",
      "Podsieci: 10.122.0.0/18, 10.122.64.0/18, 10.122.128.0/18, 10.122.192.0/18."
    ],
    explanation:
      "Dla /18 rozmiar bloku wynosi 64 w trzecim oktecie. Każda podsieć ma 16382 użyteczne adresy hostów."
  },
  {
    id: "sheet-contention-access",
    source: "sheet",
    category: "Warstwa łącza danych",
    level: "średni",
    question:
      "Co jest charakterystyczne dla metody dostępu do nośnika bazującej na rywalizacji?",
    options: [
      "Potrzebuje więcej czasu na przetwarzanie ramek w porównaniu z metodami dostępu kontrolowanego.",
      "Posiada mechanizm do śledzenia zmian w dostępie do medium.",
      "Jest to metoda niedeterministyczna.",
      "Jest dobre skalowanie w przypadku dużego obciążenia medium."
    ],
    answer: "Jest to metoda niedeterministyczna.",
    explanation:
      "W metodach rywalizacyjnych urządzenia konkurują o dostęp do medium. Nie ma gwarantowanej kolejności nadawania, więc przy dużym obciążeniu mogą pojawiać się kolizje i opóźnienia."
  },
  {
    id: "sheet-default-gateway-use",
    source: "sheet",
    category: "Routing",
    level: "podstawowy",
    question:
      "Kiedy jest wykorzystywany adres bramy w czasie komunikacji z użyciem protokołów TCP/IP?",
    answer:
      "Adres bramy domyślnej jest używany, gdy host chce wysłać pakiet do adresu spoza swojej lokalnej podsieci.",
    explanation:
      "Jeśli cel jest lokalny, host szuka MAC celu przez ARP. Jeśli cel jest zdalny, host wysyła ramkę do MAC bramy domyślnej, a router przekazuje pakiet dalej."
  },
  {
    id: "ai-llc-mac",
    source: "ai",
    category: "Warstwa łącza danych",
    level: "średni",
    question: "Czym różnią się podwarstwy LLC i MAC w warstwie łącza danych? (stworzone przez AI)",
    answer:
      "LLC utrzymuje komunikację między wyższymi i niższymi warstwami oraz obsługuje identyfikację protokołów. MAC odpowiada za enkapsulację ramki i dostęp do medium.",
    explanation:
      "W Ethernetcie MAC jest bliżej sprzętu i medium transmisyjnego, a LLC jest bliżej warstwy sieciowej."
  },
  {
    id: "ai-mac-encapsulation-functions",
    source: "ai",
    category: "Warstwa łącza danych",
    level: "średni",
    question: "Jakie trzy podstawowe funkcje zapewnia enkapsulacja danych w podwarstwie MAC? (stworzone przez AI)",
    answer: ["ograniczanie ramki", "adresowanie", "kontrola błędów"],
    explanation:
      "Ramka musi mieć początek i koniec, adresy MAC nadawcy i odbiorcy oraz mechanizm wykrywania błędów, np. FCS/CRC."
  },
  {
    id: "ai-ethernet-frame-size",
    source: "ai",
    category: "Warstwa łącza danych",
    level: "podstawowy",
    question: "Jaki jest minimalny i maksymalny rozmiar ramki Ethernet II bez znacznika VLAN? (stworzone przez AI)",
    answer: "Minimalnie 64 bajty, maksymalnie 1518 bajtów.",
    explanation:
      "Ramki krótsze niż 64 bajty są traktowane jako runt/karły i zwykle odrzucane. Z VLAN 802.1Q rozmiar może wzrosnąć o 4 bajty."
  },
  {
    id: "ai-mac-address-oui",
    source: "ai",
    category: "Warstwa łącza danych",
    level: "podstawowy",
    question: "Z czego składa się adres MAC i czym jest OUI? (stworzone przez AI)",
    answer:
      "Adres MAC ma 48 bitów, zapisywanych jako 12 cyfr szesnastkowych. OUI to pierwsze 24 bity identyfikujące producenta.",
    explanation:
      "Pozostałe 24 bity są nadawane przez producenta tak, aby adres karty sieciowej był unikatowy."
  },
  {
    id: "ai-mac-vs-ip",
    source: "ai",
    category: "Adresacja IPv4",
    level: "podstawowy",
    question: "Czym różni się adres MAC od adresu IP? (stworzone przez AI)",
    answer:
      "Adres MAC jest fizycznym adresem interfejsu w warstwie 2, a adres IP jest logicznym adresem warstwy 3 zależnym od sieci, w której znajduje się host.",
    explanation:
      "MAC przypomina identyfikator karty, a IP wskazuje położenie hosta w danej sieci i pozwala na routing między sieciami."
  },
  {
    id: "ai-arp-remote",
    source: "ai",
    category: "Routing",
    level: "średni",
    question:
      "Jaki adres MAC trafia do ramki, gdy host wysyła pakiet do hosta w innej sieci? (stworzone przez AI)",
    answer: "Adres MAC bramy domyślnej, czyli interfejsu routera w lokalnej sieci.",
    explanation:
      "Adres IP celu pozostaje adresem hosta docelowego, ale ramka Ethernet w lokalnej sieci musi trafić do routera, więc dostaje MAC bramy."
  },
  {
    id: "ai-switch-mac-table",
    source: "ai",
    category: "Urządzenia sieciowe",
    level: "średni",
    question: "Jak przełącznik buduje tablicę adresów MAC? (stworzone przez AI)",
    answer:
      "Odczytuje źródłowy adres MAC z przychodzących ramek i zapisuje, na którym porcie dany adres został zauważony.",
    explanation:
      "Gdy zna port docelowego MAC, wysyła ramkę tylko tym portem. Gdy nie zna, rozsyła ramkę przez pozostałe porty w tej samej domenie rozgłoszeniowej."
  },
  {
    id: "ai-store-forward-cut-through",
    source: "ai",
    category: "Urządzenia sieciowe",
    level: "średni",
    question: "Czym różni się przełączanie store-and-forward od cut-through? (stworzone przez AI)",
    answer:
      "Store-and-forward odbiera całą ramkę i sprawdza FCS przed przekazaniem. Cut-through zaczyna przekazywać ramkę po odczytaniu adresu docelowego MAC.",
    explanation:
      "Store-and-forward ma większe opóźnienie, ale lepiej filtruje błędne ramki. Cut-through ma mniejsze opóźnienie, ale może przekazać ramkę z błędem."
  },
  {
    id: "ai-csmacd-csmaca",
    source: "ai",
    category: "Warstwa łącza danych",
    level: "średni",
    question: "Czym różni się CSMA/CD od CSMA/CA? (stworzone przez AI)",
    answer:
      "CSMA/CD wykrywa kolizje po rozpoczęciu nadawania, a CSMA/CA próbuje ich unikać przed nadawaniem.",
    explanation:
      "CSMA/CD kojarzy się z dawnym współdzielonym Ethernetem. CSMA/CA jest używane w Wi-Fi, gdzie wykrywanie kolizji w trakcie nadawania jest trudne."
  },
  {
    id: "ai-tcp-udp",
    source: "ai",
    category: "Warstwa transportowa",
    level: "podstawowy",
    question: "Kiedy lepiej użyć TCP, a kiedy UDP? (stworzone przez AI)",
    answer:
      "TCP jest lepszy, gdy ważna jest niezawodność i kolejność danych. UDP jest lepszy, gdy ważne są małe opóźnienia i mały narzut.",
    explanation:
      "TCP ma potwierdzenia, retransmisje i kontrolę kolejności. UDP nie zestawia połączenia i nie gwarantuje dostarczenia."
  },
  {
    id: "ai-three-way-handshake",
    source: "ai",
    category: "Warstwa transportowa",
    level: "średni",
    question: "Jak wygląda trójetapowe nawiązywanie połączenia TCP? (stworzone przez AI)",
    answer: "SYN, SYN-ACK, ACK.",
    explanation:
      "Klient wysyła SYN, serwer odpowiada SYN-ACK, a klient potwierdza ACK. Po tym połączenie TCP jest zestawione."
  },
  {
    id: "ai-ports",
    source: "ai",
    category: "Warstwa transportowa",
    level: "podstawowy",
    question: "Do czego służą numery portów w TCP i UDP? (stworzone przez AI)",
    answer:
      "Numery portów wskazują konkretną usługę lub aplikację działającą na hoście.",
    explanation:
      "Adres IP wskazuje urządzenie, a port wskazuje proces/usługę, np. HTTP, DNS albo SMTP."
  },
  {
    id: "ai-dns-record-a",
    source: "ai",
    category: "Warstwa aplikacji",
    level: "podstawowy",
    question: "Do czego służy DNS i rekord A? (stworzone przez AI)",
    answer:
      "DNS tłumaczy nazwy domenowe na adresy. Rekord A mapuje nazwę domenową na adres IPv4.",
    explanation:
      "Dzięki DNS użytkownik wpisuje nazwę, np. example.com, a komputer uzyskuje adres IP potrzebny do połączenia."
  },
  {
    id: "ai-email-protocols",
    source: "ai",
    category: "Warstwa aplikacji",
    level: "podstawowy",
    question: "Czym różnią się SMTP, POP i IMAP? (stworzone przez AI)",
    answer:
      "SMTP służy do wysyłania poczty, POP do pobierania poczty z serwera, a IMAP do zarządzania pocztą na serwerze.",
    explanation:
      "W skrócie: SMTP wychodzi, POP pobiera, IMAP synchronizuje i zostawia wiadomości na serwerze."
  },
  {
    id: "ai-ftp-connections",
    source: "ai",
    category: "Warstwa aplikacji",
    level: "średni",
    question: "Dlaczego FTP używa dwóch połączeń? (stworzone przez AI)",
    answer:
      "Jedno połączenie służy do sterowania i komend, a drugie do przesyłania danych.",
    explanation:
      "Dzięki rozdzieleniu kanału sterującego i danych klient może wydawać polecenia oraz przesyłać pliki niezależnymi strumieniami."
  },
  {
    id: "ai-dhcp-static",
    source: "ai",
    category: "Adresacja IPv4",
    level: "podstawowy",
    question: "Czym różni się adres IP statyczny od dynamicznego? (stworzone przez AI)",
    answer:
      "Adres statyczny jest wpisany ręcznie, a dynamiczny jest przydzielany automatycznie, zwykle przez DHCP.",
    explanation:
      "Adresy statyczne często dostają serwery, drukarki i urządzenia infrastruktury. DHCP ułatwia obsługę komputerów użytkowników."
  },
  {
    id: "ai-loopback-router",
    source: "ai",
    category: "Routing",
    level: "średni",
    question: "Do czego służy interfejs loopback na routerze? (stworzone przez AI)",
    answer:
      "To logiczny interfejs routera, używany m.in. do testowania i jako stabilny identyfikator w routingu.",
    explanation:
      "Loopback nie jest przypisany do fizycznego portu, więc zwykle pozostaje aktywny, dopóki działa router."
  },
  {
    id: "ai-routing-table-l-c",
    source: "ai",
    category: "Routing",
    level: "średni",
    question: "Co oznaczają wpisy L i C w tablicy routingu routera Cisco? (stworzone przez AI)",
    answer:
      "L oznacza trasę lokalną do adresu interfejsu, a C oznacza sieć bezpośrednio połączoną.",
    explanation:
      "Po skonfigurowaniu i uruchomieniu interfejsu router dodaje wpis do własnego adresu oraz wpis do całej podsieci podłączonej do tego interfejsu."
  },
  {
    id: "ai-routing-metric",
    source: "ai",
    category: "Routing",
    level: "podstawowy",
    question: "Co to jest metryka w routingu? (stworzone przez AI)",
    answer:
      "Metryka to wartość używana przez protokół routingu do wyboru najlepszej ścieżki.",
    explanation:
      "Najczęściej wygrywa trasa z najniższą metryką. Różne protokoły liczą ją inaczej, np. według liczby przeskoków, kosztu lub przepustowości."
  },
  {
    id: "ai-static-dynamic-routing",
    source: "ai",
    category: "Routing",
    level: "średni",
    question: "Czym różni się routing statyczny od dynamicznego? (stworzone przez AI)",
    answer:
      "Routing statyczny jest wpisywany ręcznie przez administratora, a dynamiczny jest wyznaczany przez protokoły wymieniające informacje między routerami.",
    explanation:
      "Statyczny routing jest prosty i przewidywalny, ale słabo skaluje się przy wielu sieciach. Dynamiczny lepiej reaguje na zmiany topologii."
  },
  {
    id: "ai-nat-purpose",
    source: "ai",
    category: "NAT",
    level: "podstawowy",
    question: "Po co stosuje się NAT w IPv4? (stworzone przez AI)",
    answer:
      "NAT zamienia adresy prywatne na publiczne, aby wiele urządzeń w sieci prywatnej mogło korzystać z Internetu przy ograniczonej liczbie adresów publicznych.",
    explanation:
      "Głównym celem NAT jest oszczędzanie publicznych adresów IPv4. Najczęściej działa na routerze lub firewallu granicznym."
  },
  {
    id: "ai-static-dynamic-pat",
    source: "ai",
    category: "NAT",
    level: "średni",
    question: "Czym różni się NAT statyczny, NAT dynamiczny i PAT? (stworzone przez AI)",
    answer:
      "NAT statyczny mapuje jeden adres prywatny na jeden publiczny na stałe. NAT dynamiczny wybiera adres publiczny z puli. PAT pozwala wielu hostom używać jednego adresu publicznego przez rozróżnianie portów.",
    explanation:
      "PAT jest też nazywany NAT overload. To najczęstszy wariant w domowych i małych firmowych sieciach."
  },
  {
    id: "ai-nat-drawbacks",
    source: "ai",
    category: "NAT",
    level: "średni",
    question: "Wymień dwie wady NAT. (stworzone przez AI)",
    answer:
      "NAT może obniżać wydajność i utrudniać komunikację end-to-end oraz śledzenie ruchu IP.",
    explanation:
      "NAT modyfikuje adresy w pakietach, więc część protokołów i tuneli wymaga dodatkowych mechanizmów albo wyjątków."
  },
  {
    id: "ai-ipv6-prefixes",
    source: "ai",
    category: "IPv6",
    level: "średni",
    question: "Porównaj prefiksy IPv6: 2000::/3, FC00::/7 i FE80::/10. (stworzone przez AI)",
    answer:
      "2000::/3 to globalne adresy unicast, FC00::/7 to unikalne adresy lokalne ULA, a FE80::/10 to adresy link-local.",
    explanation:
      "Globalne adresy są routowalne w Internecie, ULA są prywatne dla organizacji, a link-local działają tylko na lokalnym łączu."
  },
  {
    id: "ai-subnet-formulas",
    source: "ai",
    category: "Adresacja IPv4",
    level: "praktyczny",
    question: "Jak szybko policzyć liczbę podsieci i hostów po zmianie maski? (stworzone przez AI)",
    answer:
      "Liczba podsieci to 2 do potęgi liczby pożyczonych bitów. Liczba użytecznych hostów w podsieci IPv4 to 2 do potęgi liczby bitów hosta minus 2.",
    explanation:
      "Minus 2 wynika z adresu sieci i adresu broadcast. Wyjątki typu /31 i /32 mają specjalne zastosowania, ale zwykle nie są celem podstawowych zadań."
  },
  {
    id: "ai-vlsm-order",
    source: "ai",
    category: "Adresacja IPv4",
    level: "praktyczny",
    question: "W jakiej kolejności najlepiej przydzielać podsieci przy VLSM? (stworzone przez AI)",
    answer: "Od największej podsieci do najmniejszej.",
    explanation:
      "Największe podsieci mają najmniej elastyczne wymagania. Przydzielanie ich najpierw zmniejsza ryzyko fragmentacji puli adresowej."
  },
  {
    id: "ai-broadcast-domain",
    source: "ai",
    category: "Podstawy sieci",
    level: "średni",
    question: "Co to jest domena rozgłoszeniowa i które urządzenie zwykle ją rozdziela? (stworzone przez AI)",
    answer:
      "Domena rozgłoszeniowa to obszar sieci, w którym ramka broadcast dociera do wszystkich hostów. Zwykle rozdziela ją router albo interfejs warstwy 3.",
    explanation:
      "Przełącznik warstwy 2 domyślnie przekazuje broadcast w obrębie tej samej sieci/VLAN. Router nie przepuszcza broadcastów warstwy 2 między podsieciami."
  },
  {
    id: "ai-collision-domain",
    source: "ai",
    category: "Warstwa łącza danych",
    level: "średni",
    question: "Co to jest domena kolizyjna i jak wpływa na nią przełącznik? (stworzone przez AI)",
    answer:
      "Domena kolizyjna to fragment sieci, w którym jednoczesne nadawanie może spowodować kolizję. Przełącznik ogranicza domenę kolizyjną zwykle do pojedynczego portu.",
    explanation:
      "Hub tworzy jedną wspólną domenę kolizyjną, a switch separuje porty. Dlatego przełączniki znacznie ograniczyły problem kolizji w Ethernetcie."
  },
  {
    id: "ai-default-gateway-config",
    source: "ai",
    category: "Routing",
    level: "podstawowy",
    question: "Jakie trzy podstawowe parametry IP trzeba skonfigurować na hoście, aby mógł komunikować się poza własną siecią? (stworzone przez AI)",
    answer: ["adres IP", "maska podsieci", "brama domyślna"],
    explanation:
      "Adres IP identyfikuje hosta, maska określa lokalną podsieć, a brama domyślna wskazuje router używany do komunikacji z innymi sieciami."
  },
  {
    id: "ai-dhcp-fields",
    source: "ai",
    category: "Adresacja IPv4",
    level: "podstawowy",
    question: "Jakie informacje host może otrzymać z DHCP? (stworzone przez AI)",
    answer:
      "Host może otrzymać adres IP, maskę podsieci, bramę domyślną, adres serwera DNS i czas dzierżawy.",
    explanation:
      "DHCP automatyzuje konfigurację hostów. Gdy DHCP nie działa, host może ustawić adres APIPA z zakresu 169.254.0.0/16."
  },
  {
    id: "ai-dns-record-types",
    source: "ai",
    category: "Warstwa aplikacji",
    level: "średni",
    question: "Do czego służą rekordy DNS A, NS, CNAME i MX? (stworzone przez AI)",
    answer: [
      "A - mapuje nazwę na adres IPv4.",
      "NS - wskazuje autorytatywny serwer nazw.",
      "CNAME - tworzy alias nazwy.",
      "MX - wskazuje serwer pocztowy domeny."
    ],
    explanation:
      "DNS nie przechowuje tylko jednego typu informacji. Różne rekordy opisują różne usługi i role związane z domeną."
  },
  {
    id: "ai-http-url-flow",
    source: "ai",
    category: "Warstwa aplikacji",
    level: "podstawowy",
    question: "Co dzieje się w uproszczeniu, gdy wpisujesz adres URL strony w przeglądarce? (stworzone przez AI)",
    answer:
      "Przeglądarka ustala adres IP przez DNS, nawiązuje połączenie z serwerem i wysyła żądanie HTTP lub HTTPS o konkretny zasób.",
    explanation:
      "URL zawiera protokół, nazwę hosta i ścieżkę. DNS pomaga znaleźć adres IP, a HTTP/HTTPS opisuje wymianę żądań i odpowiedzi."
  },
  {
    id: "ai-smb-purpose",
    source: "ai",
    category: "Warstwa aplikacji",
    level: "podstawowy",
    question: "Do czego służy protokół SMB? (stworzone przez AI)",
    answer:
      "SMB służy do udostępniania plików, drukarek i innych zasobów w sieci, szczególnie w środowiskach Windows.",
    explanation:
      "Po ustanowieniu połączenia użytkownik może korzystać z zasobów serwera tak, jakby były dostępne lokalnie."
  },
  {
    id: "ai-p2p-vs-client-server",
    source: "ai",
    category: "Warstwa aplikacji",
    level: "podstawowy",
    question: "Czym różni się model peer-to-peer od modelu klient-serwer? (stworzone przez AI)",
    answer:
      "W modelu klient-serwer role są wyraźne: klient żąda, serwer odpowiada. W peer-to-peer hosty mogą jednocześnie pełnić role klienta i serwera.",
    explanation:
      "P2P jest używane m.in. przy wymianie plików. Nie oznacza braku protokołów, tylko bardziej równorzędny udział urządzeń."
  },
  {
    id: "ai-presentation-layer",
    source: "ai",
    category: "OSI i TCP/IP",
    level: "podstawowy",
    question: "Za co odpowiada warstwa prezentacji modelu OSI? (stworzone przez AI)",
    answer:
      "Za kodowanie, konwersję formatu, kompresję oraz szyfrowanie i deszyfrowanie danych.",
    explanation:
      "Warstwa prezentacji przygotowuje dane tak, aby aplikacje po obu stronach mogły je poprawnie zinterpretować."
  },
  {
    id: "ai-session-layer",
    source: "ai",
    category: "OSI i TCP/IP",
    level: "podstawowy",
    question: "Za co odpowiada warstwa sesji modelu OSI? (stworzone przez AI)",
    answer:
      "Za tworzenie, utrzymywanie i kończenie dialogu między aplikacjami.",
    explanation:
      "Warstwa sesji organizuje wymianę informacji między aplikacjami. W modelu TCP/IP jej funkcje są zwykle włączone do warstwy aplikacji."
  },
  {
    id: "ai-tcp-reliability",
    source: "ai",
    category: "Warstwa transportowa",
    level: "średni",
    question: "Jak TCP zapewnia niezawodność transmisji? (stworzone przez AI)",
    answer:
      "TCP używa numerów sekwencyjnych, potwierdzeń, retransmisji, kontroli kolejności i kontroli przepływu.",
    explanation:
      "Dzięki temu odbiorca może wykryć brakujące segmenty, a nadawca może wysłać je ponownie."
  },
  {
    id: "ai-udp-examples",
    source: "ai",
    category: "Warstwa transportowa",
    level: "podstawowy",
    question: "Podaj przykłady usług, które często korzystają z UDP. (stworzone przez AI)",
    answer: ["DNS", "DHCP", "VoIP", "streaming", "gry online"],
    explanation:
      "UDP ma mały narzut i niskie opóźnienia. Aplikacja sama decyduje, czy potrzebuje retransmisji albo kontroli utraty danych."
  },
  {
    id: "ai-tcp-window",
    source: "ai",
    category: "Warstwa transportowa",
    level: "średni",
    question: "Do czego służy rozmiar okna w TCP? (stworzone przez AI)",
    answer:
      "Rozmiar okna określa, ile danych można wysłać bez oczekiwania na kolejne potwierdzenie.",
    explanation:
      "Mechanizm okna pomaga kontrolować przepływ. Odbiorca informuje, ile danych jest w stanie przyjąć."
  },
  {
    id: "ai-transport-segmentation",
    source: "ai",
    category: "Warstwa transportowa",
    level: "podstawowy",
    question: "Po co warstwa transportowa segmentuje dane? (stworzone przez AI)",
    answer:
      "Segmentacja dzieli duże dane aplikacji na mniejsze części, które można przesłać przez sieć i złożyć u odbiorcy.",
    explanation:
      "Sieci mają ograniczenia rozmiaru ramek i pakietów. Segmentacja ułatwia transmisję, kontrolę kolejności i retransmisję brakujących części."
  },
  {
    id: "ai-port-categories",
    source: "ai",
    category: "Warstwa transportowa",
    level: "średni",
    question: "Jakie są podstawowe zakresy portów TCP/UDP? (stworzone przez AI)",
    answer: [
      "0-1023 - porty dobrze znane.",
      "1024-49151 - porty zarejestrowane.",
      "49152-65535 - porty dynamiczne/prywatne."
    ],
    explanation:
      "Porty dobrze znane są kojarzone z popularnymi usługami, np. HTTP 80, HTTPS 443, DNS 53."
  },
  {
    id: "ai-arp-table",
    source: "ai",
    category: "Warstwa łącza danych",
    level: "podstawowy",
    question: "Co przechowuje tablica ARP? (stworzone przez AI)",
    answer:
      "Tablica ARP przechowuje odwzorowania adresów IPv4 na adresy MAC w lokalnej sieci.",
    explanation:
      "Dzięki tablicy ARP host nie musi przy każdej ramce ponownie pytać o MAC tego samego urządzenia."
  },
  {
    id: "ai-arp-broadcast",
    source: "ai",
    category: "Warstwa łącza danych",
    level: "średni",
    question: "Dlaczego zapytanie ARP jest rozgłoszeniowe? (stworzone przez AI)",
    answer:
      "Bo host pytający nie zna jeszcze adresu MAC właściciela danego adresu IPv4, więc musi wysłać pytanie do wszystkich urządzeń w lokalnej domenie rozgłoszeniowej.",
    explanation:
      "Odpowiada tylko urządzenie, którego adres IP pasuje do zapytania. Odpowiedź ARP jest już zwykle unicastowa."
  },
  {
    id: "ai-broadcast-mac",
    source: "ai",
    category: "Warstwa łącza danych",
    level: "podstawowy",
    question: "Jaki jest adres MAC broadcast? (stworzone przez AI)",
    answer: "FF:FF:FF:FF:FF:FF",
    explanation:
      "Ramka z takim adresem docelowym trafia do wszystkich hostów w danej domenie rozgłoszeniowej warstwy 2."
  },
  {
    id: "ai-multicast-ipv4-range",
    source: "ai",
    category: "Adresacja IPv4",
    level: "podstawowy",
    question: "Jaki jest zakres adresów multicast IPv4? (stworzone przez AI)",
    answer: "224.0.0.0-239.255.255.255, czyli 224.0.0.0/4.",
    explanation:
      "Multicast służy do wysyłania danych do grupy odbiorców, a nie do jednego hosta ani do wszystkich hostów."
  },
  {
    id: "ai-vlan-tag",
    source: "ai",
    category: "Warstwa łącza danych",
    level: "średni",
    question: "Po co w ramce Ethernet stosuje się znacznik VLAN 802.1Q? (stworzone przez AI)",
    answer:
      "Znacznik VLAN pozwala oznaczyć, do której wirtualnej sieci LAN należy ramka.",
    explanation:
      "VLAN-y dzielą jedną fizyczną infrastrukturę przełączników na osobne logiczne sieci warstwy 2."
  },
  {
    id: "ai-mtu-mismatch",
    source: "ai",
    category: "Warstwa łącza danych",
    level: "średni",
    question: "Czym może skutkować niezgodność MTU między urządzeniami? (stworzone przez AI)",
    answer:
      "Może powodować fragmentację, odrzucanie pakietów albo problemy z działaniem niektórych połączeń.",
    explanation:
      "MTU określa największy rozmiar jednostki danych możliwej do przesłania przez dane medium bez fragmentacji."
  },
  {
    id: "ai-switch-buffering",
    source: "ai",
    category: "Urządzenia sieciowe",
    level: "średni",
    question: "Po co przełącznik używa buforowania ramek? (stworzone przez AI)",
    answer:
      "Buforowanie pozwala tymczasowo przechowywać ramki, gdy port wyjściowy jest zajęty albo działa z inną prędkością.",
    explanation:
      "Za mała liczba buforów może powodować straty ramek/pakietów, szczególnie przy przeciążeniu przełącznika."
  },
  {
    id: "ai-cef-components",
    source: "ai",
    category: "Routing",
    level: "średni",
    question: "Jakie są dwa główne składniki Cisco Express Forwarding? (stworzone przez AI)",
    answer: ["FIB - Forwarding Information Base", "tablica sąsiedztwa adjacency table"],
    explanation:
      "FIB jest podobna do zoptymalizowanej tablicy routingu, a tablica sąsiedztwa przechowuje informacje potrzebne do enkapsulacji warstwy 2."
  },
  {
    id: "ai-route-sources",
    source: "ai",
    category: "Routing",
    level: "podstawowy",
    question: "Z jakich źródeł mogą pochodzić trasy w tablicy routingu? (stworzone przez AI)",
    answer:
      "Z sieci bezpośrednio połączonych, tras statycznych oraz protokołów routingu dynamicznego.",
    explanation:
      "Router może znać sieć, bo ma do niej aktywny interfejs, bo administrator wpisał trasę ręcznie albo bo nauczył się jej od innego routera."
  },
  {
    id: "ai-static-default-route",
    source: "ai",
    category: "Routing",
    level: "średni",
    question: "Co to jest trasa domyślna? (stworzone przez AI)",
    answer:
      "Trasa domyślna to trasa używana wtedy, gdy w tablicy routingu nie ma bardziej szczegółowego dopasowania do adresu docelowego.",
    explanation:
      "W IPv4 często zapisuje się ją jako 0.0.0.0/0. Wskazuje typowo wyjście w stronę Internetu albo routera nadrzędnego."
  },
  {
    id: "ai-dynamic-routing-ipv4",
    source: "ai",
    category: "Routing",
    level: "podstawowy",
    question: "Podaj przykłady protokołów routingu dynamicznego IPv4. (stworzone przez AI)",
    answer: ["RIP", "OSPF", "EIGRP", "BGP"],
    explanation:
      "Protokoły routingu dynamicznego wymieniają informacje o sieciach i pomagają automatycznie utrzymywać tablice routingu."
  },
  {
    id: "ai-dynamic-routing-ipv6",
    source: "ai",
    category: "IPv6",
    level: "podstawowy",
    question: "Podaj przykłady protokołów routingu dynamicznego IPv6. (stworzone przez AI)",
    answer: ["RIPng", "OSPFv3", "EIGRP dla IPv6", "MP-BGP4"],
    explanation:
      "IPv6 ma własne warianty lub rozszerzenia protokołów routingu, które obsługują 128-bitową adresację."
  },
  {
    id: "ai-nat-address-terms",
    source: "ai",
    category: "NAT",
    level: "średni",
    question: "Co oznaczają pojęcia inside local i inside global w NAT? (stworzone przez AI)",
    answer:
      "Inside local to prywatny adres hosta wewnętrznego widziany w sieci lokalnej. Inside global to adres publiczny, pod którym ten host jest widoczny na zewnątrz po translacji.",
    explanation:
      "Te nazwy pomagają rozróżniać adres przed i po translacji NAT dla hosta znajdującego się w sieci wewnętrznej."
  },
  {
    id: "ai-port-forwarding",
    source: "ai",
    category: "NAT",
    level: "średni",
    question: "Co to jest przekierowanie portu? (stworzone przez AI)",
    answer:
      "Przekierowanie portu kieruje ruch przychodzący na publiczny adres i konkretny port do wskazanego hosta oraz portu w sieci prywatnej.",
    explanation:
      "W IOS jest to w praktyce statyczna translacja NAT z uwzględnieniem numeru portu TCP lub UDP."
  },
  {
    id: "ai-nat-ipv6",
    source: "ai",
    category: "NAT",
    level: "średni",
    question: "Dlaczego klasyczny NAT nie jest głównym założeniem IPv6? (stworzone przez AI)",
    answer:
      "IPv6 ma bardzo dużą przestrzeń adresową, więc nie potrzebuje NAT jako obejścia braku adresów publicznych.",
    explanation:
      "W IPv4 NAT oszczędza adresy publiczne. W IPv6 standardowym celem jest raczej bezpośrednia adresowalność i poprawna filtracja zaporą."
  },
  {
    id: "ai-subnet-mask-27",
    source: "ai",
    category: "Adresacja IPv4",
    level: "praktyczny",
    question: "Jaka jest maska dziesiętna dla prefiksu /27 i ile daje użytecznych hostów? (stworzone przez AI)",
    answer: "Maska /27 to 255.255.255.224, a liczba użytecznych hostów to 30.",
    explanation:
      "Dla /27 zostaje 5 bitów hosta. 2^5 = 32 adresy, po odjęciu adresu sieci i broadcast zostaje 30 hostów."
  },
  {
    id: "ai-subnet-network-broadcast",
    source: "ai",
    category: "Adresacja IPv4",
    level: "praktyczny",
    question: "Wyznacz adres sieci i broadcast dla 192.168.1.77/28. (stworzone przez AI)",
    answer:
      "Adres sieci: 192.168.1.64. Broadcast: 192.168.1.79.",
    explanation:
      "Dla /28 rozmiar bloku w ostatnim oktecie wynosi 16. Adres 77 mieści się w zakresie 64-79."
  },
  {
    id: "ai-vlsm-practice",
    source: "ai",
    category: "Adresacja IPv4",
    level: "praktyczny",
    question: "Jaki prefiks wybierzesz dla podsieci wymagającej co najmniej 50 użytecznych hostów? (stworzone przez AI)",
    answer: "/26",
    explanation:
      "/27 daje tylko 30 hostów. /26 daje 64 adresy razem, czyli 62 użyteczne adresy hostów."
  },
  {
    id: "ai-ipv6-compression-rule",
    source: "ai",
    category: "IPv6",
    level: "praktyczny",
    question: "Ile razy można użyć symbolu :: w skróconym adresie IPv6? (stworzone przez AI)",
    answer: "Tylko raz.",
    explanation:
      "Gdyby użyć :: więcej niż raz, nie byłoby wiadomo, ile grup zer zastępuje każde wystąpienie."
  },
  {
    id: "ai-ipv6-global-vs-ula",
    source: "ai",
    category: "IPv6",
    level: "średni",
    question: "Czym różni się adres IPv6 global unicast od ULA? (stworzone przez AI)",
    answer:
      "Global unicast jest routowalny globalnie, a ULA z FC00::/7 jest przeznaczony do użycia lokalnego/prywatnego w organizacji.",
    explanation:
      "ULA jest odpowiednikiem idei prywatnej adresacji, ale w IPv6 nie działa tak samo jak prywatne IPv4 z NAT."
  },
  {
    id: "ai-apipa-diagnosis",
    source: "ai",
    category: "Adresacja IPv4",
    level: "średni",
    question: "Co może oznaczać adres 169.254.x.x na komputerze użytkownika? (stworzone przez AI)",
    answer:
      "Najczęściej oznacza, że host nie dostał adresu z DHCP i sam nadał sobie adres link-local/APIPA.",
    explanation:
      "Taki host może zwykle komunikować się tylko lokalnie z innymi hostami w tym samym zakresie link-local, ale nie ma poprawnej konfiguracji do normalnej pracy w sieci."
  },
  {
    id: "ai-devices-layers",
    source: "ai",
    category: "Urządzenia sieciowe",
    level: "podstawowy",
    question: "Przypisz urządzenia do typowych warstw OSI: repeater, hub, switch, router. (stworzone przez AI)",
    answer: [
      "repeater - warstwa 1",
      "hub - warstwa 1",
      "switch - warstwa 2",
      "router - warstwa 3"
    ],
    explanation:
      "Repeater i hub operują na sygnale, switch na ramkach i adresach MAC, a router na pakietach i adresach IP."
  },
  {
    id: "ai-mesh-topology",
    source: "ai",
    category: "Topologie",
    level: "podstawowy",
    question: "Jakie są główne zalety i wady topologii siatki? (stworzone przez AI)",
    answer:
      "Zaletą jest wysoka odporność na awarie i wiele możliwych ścieżek. Wadą jest koszt oraz złożoność okablowania i konfiguracji.",
    explanation:
      "Pełna siatka wymaga połączeń między wieloma parami urządzeń, dlatego jest droga, ale zapewnia dobrą redundancję."
  },
  {
    id: "ai-network-characteristics",
    source: "ai",
    category: "Podstawy sieci",
    level: "podstawowy",
    question: "Wymień podstawowe cechy sieci brane pod uwagę przy projektowaniu. (stworzone przez AI)",
    answer: ["topologia", "prędkość", "koszt", "bezpieczeństwo", "dostępność", "skalowalność", "niezawodność"],
    explanation:
      "Te cechy pomagają ocenić, czy sieć spełni wymagania użytkowników i czy będzie możliwa do utrzymania oraz rozbudowy."
  },
  {
    id: "ai-ethernet-fields",
    source: "ai",
    category: "Warstwa łącza danych",
    level: "średni",
    question: "Do czego służą pola preambuła, SFD, dane i FCS w ramce Ethernet? (stworzone przez AI)",
    answer: [
      "Preambuła i SFD pomagają zsynchronizować odbiorcę z nadawcą.",
      "Pole danych przenosi enkapsulowane dane wyższej warstwy.",
      "FCS zawiera wartość kontrolną CRC do wykrywania błędów."
    ],
    explanation:
      "Ramka Ethernet ma strukturę pozwalającą rozpoznać początek transmisji, przenieść dane i sprawdzić, czy ramka nie została uszkodzona."
  }
];

const FLASHCARDS = [
  {
    id: "fc-osi-pdu",
    category: "OSI i TCP/IP",
    source: "oryginalne pytania",
    front: "Jakie PDU odpowiadają warstwom OSI?",
    back:
      "Aplikacji, prezentacji i sesji: dane. Transportowa: segment. Sieci: pakiet. Łącza danych: ramka. Fizyczna: strumień bitów."
  },
  {
    id: "fc-tcpip-vs-osi",
    category: "OSI i TCP/IP",
    source: "PDF",
    front: "Jak mapują się warstwy TCP/IP na OSI?",
    back:
      "TCP/IP aplikacji obejmuje OSI: aplikacji, prezentacji i sesji. TCP/IP transportowa odpowiada OSI transportowej. TCP/IP Internet odpowiada OSI sieci. TCP/IP dostępu do sieci obejmuje OSI łącza danych i fizyczną."
  },
  {
    id: "fc-presentation",
    category: "OSI i TCP/IP",
    source: "PDF",
    front: "Za co odpowiada warstwa prezentacji?",
    back:
      "Za kodowanie i konwersję danych, kompresję oraz szyfrowanie/deszyfrowanie na potrzeby transmisji."
  },
  {
    id: "fc-session",
    category: "OSI i TCP/IP",
    source: "PDF",
    front: "Za co odpowiada warstwa sesji?",
    back:
      "Za utworzenie, utrzymanie i zakończenie dialogu między aplikacjami źródłowymi i docelowymi."
  },
  {
    id: "fc-encapsulation",
    category: "OSI i TCP/IP",
    source: "oryginalne pytania",
    front: "Co to jest enkapsulacja?",
    back:
      "Dodawanie informacji sterujących kolejnych warstw, np. nagłówków i pola końcowego, do danych przesyłanych przez sieć."
  },
  {
    id: "fc-ethernet-layers",
    category: "Warstwa łącza danych",
    source: "PDF",
    front: "W których warstwach działa Ethernet?",
    back:
      "Ethernet działa w warstwie łącza danych i warstwie fizycznej. Jest opisany standardami IEEE 802.2 i 802.3."
  },
  {
    id: "fc-llc",
    category: "Warstwa łącza danych",
    source: "PDF",
    front: "Rola podwarstwy LLC",
    back:
      "LLC utrzymuje komunikację między górnymi i dolnymi warstwami oraz dodaje informacje kontrolne pomagające dostarczyć pakiet."
  },
  {
    id: "fc-mac",
    category: "Warstwa łącza danych",
    source: "PDF",
    front: "Rola podwarstwy MAC",
    back:
      "MAC jest dolną podwarstwą łącza danych, zwykle realizowaną sprzętowo w karcie sieciowej. Odpowiada za enkapsulację danych i sterowanie dostępem do medium."
  },
  {
    id: "fc-mac-functions",
    category: "Warstwa łącza danych",
    source: "PDF",
    front: "Trzy funkcje enkapsulacji MAC",
    back:
      "Ograniczanie ramki, adresowanie oraz kontrola błędów przez FCS/CRC."
  },
  {
    id: "fc-csma",
    category: "Warstwa łącza danych",
    source: "PDF",
    front: "Na czym polega CSMA?",
    back:
      "Urządzenie najpierw sprawdza, czy medium przenosi sygnał. Jeśli medium jest wolne, może rozpocząć transmisję."
  },
  {
    id: "fc-csmacd",
    category: "Warstwa łącza danych",
    source: "PDF",
    front: "CSMA/CD",
    back:
      "Metoda wykrywania kolizji. Gdy urządzenia wykryją kolizję, przestają nadawać i próbują ponownie później."
  },
  {
    id: "fc-csmaca",
    category: "Warstwa łącza danych",
    source: "PDF",
    front: "CSMA/CA",
    back:
      "Metoda unikania kolizji. Urządzenie sprawdza medium i informuje o zamiarze transmisji. Używana w 802.11/Wi-Fi."
  },
  {
    id: "fc-mac-address",
    category: "Warstwa łącza danych",
    source: "PDF",
    front: "Budowa adresu MAC",
    back:
      "Adres MAC ma 48 bitów, czyli 12 cyfr szesnastkowych. Pierwsze 3 bajty to OUI producenta, ostatnie 3 bajty są unikatowym identyfikatorem urządzenia."
  },
  {
    id: "fc-mac-formats",
    category: "Warstwa łącza danych",
    source: "PDF",
    front: "Przykładowe zapisy adresu MAC",
    back:
      "Z myślnikami: 00-60-2F-3A-07-BC. Z dwukropkami: 00:60:2F:3A:07:BC. Z kropkami: 0060.2F3A.07BC."
  },
  {
    id: "fc-mac-ip",
    category: "Adresacja IPv4",
    source: "PDF",
    front: "Adres MAC a adres IP",
    back:
      "MAC jest fizyczny i zwykle się nie zmienia. IP jest logiczny i zależy od sieci, w której znajduje się host."
  },
  {
    id: "fc-frame-size",
    category: "Warstwa łącza danych",
    source: "PDF",
    front: "Minimalny i maksymalny rozmiar ramki Ethernet",
    back:
      "Ethernet II/IEEE 802.3: minimum 64 bajty, maksimum 1518 bajtów. Ramki mniejsze niż 64 bajty są traktowane jako fragmenty kolizyjne/karły."
  },
  {
    id: "fc-vlan-tag",
    category: "Warstwa łącza danych",
    source: "PDF",
    front: "Ile bajtów dodaje znacznik VLAN 802.1Q?",
    back:
      "Znacznik VLAN dodaje 4 bajty. Pozwala oznaczyć VLAN oraz może wspierać QoS."
  },
  {
    id: "fc-frame-fields",
    category: "Warstwa łącza danych",
    source: "PDF",
    front: "Najważniejsze pola ramki Ethernet",
    back:
      "Preambuła i SFD synchronizują nadawcę i odbiorcę. Długość/Typ określa długość lub protokół. Dane przenoszą PDU wyższej warstwy. FCS wykrywa błędy przez CRC."
  },
  {
    id: "fc-crc",
    category: "Warstwa łącza danych",
    source: "oryginalne pytania",
    front: "Do czego służy CRC w polu FCS?",
    back:
      "Do sprawdzania integralności odebranej ramki. Jeśli wyliczona suma nie zgadza się z FCS, ramka jest uszkodzona."
  },
  {
    id: "fc-arp-purpose",
    category: "Warstwa łącza danych",
    source: "PDF",
    front: "Cel protokołu ARP",
    back:
      "ARP odwzorowuje adres IPv4 na adres MAC i utrzymuje tablicę mapowania IP-MAC."
  },
  {
    id: "fc-arp-request",
    category: "Warstwa łącza danych",
    source: "PDF",
    front: "Jak działa żądanie ARP?",
    back:
      "Host wysyła rozgłoszeniową ramkę ARP w lokalnej sieci Ethernet. Odpowiada urządzenie, którego adres IP pasuje do zapytania."
  },
  {
    id: "fc-arp-remote",
    category: "Routing",
    source: "PDF",
    front: "ARP przy komunikacji zdalnej",
    back:
      "Jeśli cel jest poza lokalną siecią, host używa ARP do poznania adresu MAC interfejsu routera pełniącego rolę bramy domyślnej."
  },
  {
    id: "fc-switch-role",
    category: "Urządzenia sieciowe",
    source: "PDF",
    front: "Rola przełącznika warstwy 2",
    back:
      "Łączy urządzenia końcowe, przełącza i filtruje ramki na podstawie adresów MAC oraz buduje tablicę adresów MAC."
  },
  {
    id: "fc-switch-table",
    category: "Urządzenia sieciowe",
    source: "PDF",
    front: "Jak przełącznik uczy się tablicy MAC?",
    back:
      "Zapisuje źródłowy adres MAC ramek przychodzących i port, na którym dany adres został zauważony."
  },
  {
    id: "fc-router-role",
    category: "Urządzenia sieciowe",
    source: "oryginalne pytania",
    front: "Czym jest router?",
    back:
      "Urządzenie warstwy 3 łączące dwie lub więcej sieci i przekazujące pakiety na podstawie adresów IP oraz tablicy routingu."
  },
  {
    id: "fc-hub-repeater-switch-router",
    category: "Urządzenia sieciowe",
    source: "oryginalne pytania",
    front: "Typowe warstwy urządzeń: repeater, hub, switch, router",
    back:
      "Repeater i hub: warstwa 1. Switch: warstwa 2. Router: warstwa 3."
  },
  {
    id: "fc-store-forward",
    category: "Urządzenia sieciowe",
    source: "PDF",
    front: "Store-and-forward",
    back:
      "Przełącznik odbiera całą ramkę, sprawdza ją i dopiero potem przekazuje dalej. Większe opóźnienie, ale lepsza kontrola błędów."
  },
  {
    id: "fc-cut-through",
    category: "Urządzenia sieciowe",
    source: "PDF",
    front: "Cut-through / fast-forward",
    back:
      "Przełącznik zaczyna przekazywać ramkę po odczytaniu adresu docelowego. Daje niskie opóźnienia, ale może przepuścić błędną ramkę."
  },
  {
    id: "fc-fragment-free",
    category: "Urządzenia sieciowe",
    source: "PDF",
    front: "Fragment-free",
    back:
      "Odmiana cut-through. Przełącznik odczytuje pierwsze 64 bajty ramki przed przekazaniem, aby ograniczyć przekazywanie fragmentów kolizyjnych."
  },
  {
    id: "fc-switch-buffering",
    category: "Urządzenia sieciowe",
    source: "PDF",
    front: "Buforowanie ramek w przełączniku",
    back:
      "Ramki mogą być przechowywane w pamięci portu albo we wspólnej pamięci. Za mało buforów może powodować straty pakietów."
  },
  {
    id: "fc-cef",
    category: "Routing",
    source: "PDF",
    front: "Cisco Express Forwarding",
    back:
      "CEF przyspiesza przełączanie w warstwie 3. Główne składniki to FIB oraz tablica sąsiedztwa."
  },
  {
    id: "fc-tcp",
    category: "Warstwa transportowa",
    source: "PDF",
    front: "Najważniejsze cechy TCP",
    back:
      "TCP jest połączeniowy i niezawodny. Zapewnia dostarczenie danych w całości, w kolejności i bez duplikatów, kosztem większego narzutu."
  },
  {
    id: "fc-udp",
    category: "Warstwa transportowa",
    source: "PDF",
    front: "Najważniejsze cechy UDP",
    back:
      "UDP nie zestawia połączenia, ma mały narzut i nie gwarantuje dostarczenia, kolejności ani retransmisji."
  },
  {
    id: "fc-transport-functions",
    category: "Warstwa transportowa",
    source: "PDF",
    front: "Funkcje warstwy transportowej",
    back:
      "Umożliwia jednoczesną komunikację wielu aplikacji, segmentuje dane, identyfikuje aplikacje portami i przygotowuje dane do adresowania w warstwie sieci."
  },
  {
    id: "fc-ports",
    category: "Warstwa transportowa",
    source: "PDF",
    front: "Do czego służą porty?",
    back:
      "Port wskazuje konkretną usługę lub konwersację na hoście. Adres IP wskazuje urządzenie, port wskazuje aplikację/proces."
  },
  {
    id: "fc-tcp-window",
    category: "Warstwa transportowa",
    source: "PDF",
    front: "Rozmiar okna TCP",
    back:
      "Określa, ile danych można wysłać bez oczekiwania na kolejne potwierdzenie. Służy do kontroli przepływu."
  },
  {
    id: "fc-dns",
    category: "Warstwa aplikacji",
    source: "PDF",
    front: "DNS",
    back:
      "Domain Name System zamienia nazwy czytelne dla użytkownika na adresy numeryczne urządzeń."
  },
  {
    id: "fc-dns-records",
    category: "Warstwa aplikacji",
    source: "PDF",
    front: "Rekordy DNS z PDF",
    back:
      "A: adres urządzenia końcowego. NS: autorytatywny serwer nazw. CNAME: alias nazwy. MX: serwer pocztowy domeny."
  },
  {
    id: "fc-http",
    category: "Warstwa aplikacji",
    source: "PDF",
    front: "HTTP",
    back:
      "Protokół używany do przeglądania stron WWW. Przeglądarka żąda zasobu od serwera, np. pliku HTML."
  },
  {
    id: "fc-smtp-pop-imap",
    category: "Warstwa aplikacji",
    source: "PDF",
    front: "SMTP, POP, IMAP",
    back:
      "SMTP wysyła pocztę. POP pobiera pocztę z serwera. IMAP pozwala zarządzać pocztą na serwerze."
  },
  {
    id: "fc-smtp-ports",
    category: "Warstwa aplikacji",
    source: "PDF",
    front: "Porty SMTP z PDF",
    back:
      "SMTP używa najczęściej portów 25, 587 lub 465 z SSL."
  },
  {
    id: "fc-ftp",
    category: "Warstwa aplikacji",
    source: "PDF",
    front: "FTP",
    back:
      "File Transfer Protocol pozwala przesyłać dane między klientem i serwerem. Wymaga połączenia sterującego i osobnego połączenia danych."
  },
  {
    id: "fc-smb",
    category: "Warstwa aplikacji",
    source: "PDF",
    front: "SMB",
    back:
      "Server Message Block umożliwia dostęp do plików i zasobów na serwerze tak, jakby były lokalne z punktu widzenia klienta."
  },
  {
    id: "fc-p2p",
    category: "Warstwa aplikacji",
    source: "PDF",
    front: "Peer-to-peer",
    back:
      "Urządzenia są równorzędne. Ten sam host może działać jako klient i serwer. Przykłady z PDF: BitTorrent, eMule, Bitcoin."
  },
  {
    id: "fc-private-ipv4",
    category: "Adresacja IPv4",
    source: "oryginalne pytania",
    front: "Zakresy prywatne IPv4",
    back:
      "10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16. Nie są routowane w publicznym Internecie."
  },
  {
    id: "fc-apipa",
    category: "Adresacja IPv4",
    source: "oryginalne pytania",
    front: "APIPA / automatyczny adres prywatny IPv4",
    back:
      "Zakres 169.254.0.0/16. Host używa go, gdy nie otrzyma konfiguracji z DHCP."
  },
  {
    id: "fc-localhost",
    category: "Adresacja IPv4",
    source: "oryginalne pytania",
    front: "127.0.0.0/8",
    back:
      "Zakres loopback IPv4. Służy do komunikacji hosta z samym sobą, nie jest prywatnym zakresem LAN."
  },
  {
    id: "fc-subnet-hosts",
    category: "Adresacja IPv4",
    source: "oryginalne pytania",
    front: "Wzór na hosty użyteczne w IPv4",
    back:
      "2 do potęgi liczby bitów hosta minus 2. Odejmujesz adres sieci i adres rozgłoszeniowy."
  },
  {
    id: "fc-vlsm",
    category: "Adresacja IPv4",
    source: "oryginalne pytania",
    front: "VLSM",
    back:
      "Variable Length Subnet Mask. Pozwala stosować różne długości masek w jednym planie adresacji, aby ograniczyć marnowanie adresów."
  },
  {
    id: "fc-vlsm-order",
    category: "Adresacja IPv4",
    source: "PDF",
    front: "Jak planować VLSM?",
    back:
      "Najpierw przydzielaj największe podsieci, potem mniejsze. Dzięki temu łatwiej uniknąć fragmentacji puli adresów."
  },
  {
    id: "fc-block-size",
    category: "Adresacja IPv4",
    source: "oryginalne pytania",
    front: "Jak szybko znaleźć adres sieci?",
    back:
      "Ustal rozmiar bloku w istotnym oktecie, potem znajdź przedział, w którym mieści się adres hosta. Początek przedziału to adres sieci."
  },
  {
    id: "fc-gateway",
    category: "Routing",
    source: "oryginalne pytania",
    front: "Kiedy host używa bramy domyślnej?",
    back:
      "Gdy adres docelowy jest poza lokalną podsiecią. Ramka trafia wtedy do MAC bramy, a pakiet IP zachowuje adres docelowy hosta zdalnego."
  },
  {
    id: "fc-router-components",
    category: "Routing",
    source: "PDF",
    front: "Router jako komputer",
    back:
      "Router ma procesor, system operacyjny, pamięć i interfejsy. Jest wyspecjalizowanym komputerem do przekazywania ruchu między sieciami."
  },
  {
    id: "fc-routing-table",
    category: "Routing",
    source: "PDF",
    front: "Co zawiera tablica routingu?",
    back:
      "Informacje o trasach bezpośrednio połączonych, trasach zdalnych oraz sieciach lub następnych przeskokach."
  },
  {
    id: "fc-route-l-c",
    category: "Routing",
    source: "PDF",
    front: "Wpisy L i C w tablicy Cisco",
    back:
      "L oznacza trasę lokalną do adresu interfejsu. C oznacza sieć bezpośrednio połączoną."
  },
  {
    id: "fc-routing-metric",
    category: "Routing",
    source: "PDF",
    front: "Metryka routingu",
    back:
      "Ilościowa wartość określająca odległość/koszt do sieci. Najlepsza ścieżka zwykle ma najniższą metrykę."
  },
  {
    id: "fc-static-routing",
    category: "Routing",
    source: "PDF",
    front: "Trasa statyczna",
    back:
      "Trasa konfigurowana ręcznie przez administratora. Jawnie definiuje ścieżkę między urządzeniami."
  },
  {
    id: "fc-dynamic-routing",
    category: "Routing",
    source: "PDF",
    front: "Routing dynamiczny",
    back:
      "Routery wymieniają informacje o dostępności i statusie sieci zdalnych, wykrywają sieci i utrzymują tablice routingu."
  },
  {
    id: "fc-ipv4-routing-protocols",
    category: "Routing",
    source: "PDF",
    front: "Protokoły routingu IPv4 z PDF",
    back:
      "EIGRP, OSPF, IS-IS, RIP oraz BGP."
  },
  {
    id: "fc-ipv6-routing-protocols",
    category: "IPv6",
    source: "PDF",
    front: "Protokoły routingu IPv6 z PDF",
    back:
      "RIPng, OSPFv3, EIGRP dla IPv6 oraz MP-BGP4."
  },
  {
    id: "fc-loopback-interface",
    category: "Routing",
    source: "PDF",
    front: "Interfejs loopback routera",
    back:
      "Logiczny interfejs lokalny routera. Nie jest przypisany do portu fizycznego, jest przydatny do testów i ważny w OSPF."
  },
  {
    id: "fc-switch-management-ip",
    category: "Urządzenia sieciowe",
    source: "PDF",
    front: "Adres zarządzający przełącznika",
    back:
      "Na przełączniku adres IP do zdalnego zarządzania przypisuje się do wirtualnego interfejsu."
  },
  {
    id: "fc-console-access",
    category: "Urządzenia sieciowe",
    source: "PDF",
    front: "Czego wymaga dostęp konsolowy?",
    back:
      "Kabla konsolowego, np. RJ-45-to-DB-9, oraz programu emulacji terminala, np. PuTTY, Tera Term lub HyperTerminal."
  },
  {
    id: "fc-ipv6-interface-id",
    category: "IPv6",
    source: "oryginalne pytania",
    front: "Identyfikator interfejsu IPv6",
    back:
      "W typowym adresie IPv6 identyfikator interfejsu to ostatnie 64 bity, czyli ostatnie cztery hekstety."
  },
  {
    id: "fc-ipv6-shorten",
    category: "IPv6",
    source: "oryginalne pytania",
    front: "Skracanie IPv6",
    back:
      "Usuwasz zera wiodące w hekstetach. Jeden najdłuższy ciąg zerowych hekstetów możesz zastąpić symbolem ::."
  },
  {
    id: "fc-ipv6-expand",
    category: "IPv6",
    source: "oryginalne pytania",
    front: "Rozwijanie IPv6",
    back:
      "Pełny adres IPv6 ma 8 hekstetów po 4 cyfry szesnastkowe. Symbol :: zastępujesz odpowiednią liczbą grup 0000."
  },
  {
    id: "fc-ipv6-link-local",
    category: "IPv6",
    source: "oryginalne pytania",
    front: "FE80::/10",
    back:
      "Adresy link-local IPv6. Są przeznaczone tylko dla lokalnego łącza i nie mogą być routowane."
  },
  {
    id: "fc-ipv6-global",
    category: "IPv6",
    source: "PDF",
    front: "2000::/3",
    back:
      "Zakres globalnych adresów unicast IPv6, routowalnych globalnie."
  },
  {
    id: "fc-ipv6-ula",
    category: "IPv6",
    source: "PDF",
    front: "FC00::/7",
    back:
      "Unique Local Address, czyli lokalne/prywatne adresy IPv6 używane wewnątrz organizacji."
  },
  {
    id: "fc-nat-purpose",
    category: "NAT",
    source: "PDF",
    front: "Czym jest NAT?",
    back:
      "Network Address Translation to proces zamiany adresów sieciowych. Głównym zadaniem jest oszczędzanie publicznych adresów IPv4."
  },
  {
    id: "fc-nat-place",
    category: "NAT",
    source: "PDF",
    front: "Gdzie zwykle działa NAT?",
    back:
      "Na urządzeniach granicznych, takich jak routery lub firewalle, między siecią wewnętrzną i zewnętrzną."
  },
  {
    id: "fc-nat-terms",
    category: "NAT",
    source: "PDF",
    front: "Cztery typy adresów NAT",
    back:
      "Wewnętrzny lokalny, wewnętrzny globalny, zewnętrzny lokalny i zewnętrzny globalny."
  },
  {
    id: "fc-static-nat",
    category: "NAT",
    source: "PDF",
    front: "NAT statyczny",
    back:
      "Stałe mapowanie jeden-do-jednego między adresem lokalnym i globalnym. Przydatne, gdy serwer wewnętrzny ma być dostępny z zewnątrz."
  },
  {
    id: "fc-dynamic-nat",
    category: "NAT",
    source: "PDF",
    front: "NAT dynamiczny",
    back:
      "Prywatny adres wewnętrzny jest mapowany na publiczny adres z puli. Pula musi wystarczyć dla urządzeń korzystających z translacji."
  },
  {
    id: "fc-pat",
    category: "NAT",
    source: "PDF",
    front: "PAT / NAT overload",
    back:
      "Wiele prywatnych adresów IPv4 może używać jednego publicznego adresu IPv4. PAT rozróżnia połączenia po adresach i numerach portów."
  },
  {
    id: "fc-nat-benefits",
    category: "NAT",
    source: "PDF",
    front: "Korzyści NAT",
    back:
      "Oszczędza publiczną adresację, zwiększa elastyczność połączeń z siecią publiczną, utrzymuje spójność adresacji wewnętrznej i zwiększa bezpieczeństwo."
  },
  {
    id: "fc-nat-drawbacks",
    category: "NAT",
    source: "PDF",
    front: "Wady NAT",
    back:
      "Spadek wydajności, pogorszenie komunikacji end-to-end, utrata śledzenia pakietów IP od końca do końca i trudniejsze tunelowanie."
  },
  {
    id: "fc-port-forwarding",
    category: "NAT",
    source: "PDF",
    front: "Przekierowanie portu",
    back:
      "Ruch wysłany na publiczny adres i konkretny port routera może zostać przekierowany do wskazanego adresu prywatnego i portu w sieci."
  },
  {
    id: "fc-nat-ipv6",
    category: "NAT",
    source: "PDF",
    front: "NAT a IPv6",
    back:
      "IPv6 ma bardzo dużą przestrzeń adresową, więc NAT jako obejście braku adresów IPv4 nie jest z założenia potrzebny."
  },
  {
    id: "fc-network-characteristics",
    category: "Podstawy sieci",
    source: "PDF",
    front: "Cechy sieci z PDF",
    back:
      "Topologia, prędkość, koszt, bezpieczeństwo, dostępność, skalowalność i niezawodność."
  },
  {
    id: "fc-scalability",
    category: "Podstawy sieci",
    source: "oryginalne pytania",
    front: "Skalowalność",
    back:
      "Możliwość rozwoju sieci bez degradacji usług dla istniejących użytkowników."
  },
  {
    id: "fc-intranet",
    category: "Podstawy sieci",
    source: "oryginalne pytania",
    front: "Intranet",
    back:
      "Prywatna sieć organizacji dostępna dla pracowników, np. do poufnych informacji z wewnętrznych serwerów."
  },
  {
    id: "fc-extranet",
    category: "Podstawy sieci",
    source: "oryginalne pytania",
    front: "Extranet",
    back:
      "Część zasobów prywatnej sieci udostępniona kontrolowanie wybranym podmiotom zewnętrznym, np. partnerom."
  },
  {
    id: "fc-multicast",
    category: "Podstawy sieci",
    source: "oryginalne pytania",
    front: "Multicast",
    back:
      "Komunikaty multicast są wysyłane do wybranej grupy hostów, a nie do jednego hosta ani do wszystkich hostów."
  },
  {
    id: "fc-multicast-range",
    category: "Adresacja IPv4",
    source: "PDF",
    front: "Zakres multicast IPv4",
    back:
      "224.0.0.0-239.255.255.255."
  },
  {
    id: "fc-bus-topology",
    category: "Topologie",
    source: "oryginalne pytania",
    front: "Topologia magistrali",
    back:
      "Wspólne medium dla wielu hostów. Prosta i tania historycznie, ale podatna na kolizje i awarie wspólnego kabla."
  },
  {
    id: "fc-star-topology",
    category: "Topologie",
    source: "oryginalne pytania",
    front: "Topologia gwiazdy",
    back:
      "Hosty są podłączone do urządzenia centralnego. Łatwa diagnoza i rozbudowa, ale awaria urządzenia centralnego wpływa na całą sieć."
  },
  {
    id: "fc-l2-problems",
    category: "Warstwa łącza danych",
    source: "oryginalne pytania",
    front: "Typowe problemy warstwy łącza danych",
    back:
      "Błędy CRC, kolizje i krótkie pakiety, za małe bufory w przełącznikach oraz sztormy/burze rozgłoszeniowe."
  },
  {
    id: "fc-wireless-interference",
    category: "Warstwa fizyczna",
    source: "oryginalne pytania",
    front: "Typowe źródła zakłóceń Wi-Fi z pytań",
    back:
      "Mikrofalówki i bezprzewodowe telefony mogą wpływać na sieci bezprzewodowe."
  },
  {
    id: "fc-contention",
    category: "Warstwa łącza danych",
    source: "oryginalne pytania",
    front: "Metoda dostępu bazująca na rywalizacji",
    back:
      "Jest niedeterministyczna: urządzenia rywalizują o medium, więc nie ma gwarantowanej kolejności ani czasu dostępu."
  }
];
