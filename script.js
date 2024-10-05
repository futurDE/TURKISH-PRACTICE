const english = document.querySelector(".english");
const turkish = document.querySelector(".turkish");
const input = document.querySelector("input");
const continueButton = document.querySelector(".continue-button");
let enableContinueButton = false;

let random;
let array = [];

const questionBank = {
    1: {
        question: "dog",
        answer: "köpek",
    },
    2: {
        question: "apple",
        answer: "elma",
    },
    3: {
        question: "tea",
        answer: "çay",
    },
    4: {
        question: "too/also",
        answer: "de",
    },
    5: {
        question: "me too",
        answer: "ben de",
    },
    6: {
        question: "to do (auxillary verb: e.g to thank)",
        answer: "etmek",
    },
    7: {
        question: "I do (e.g I give thanks)",
        answer: "ederim",
    },
    8: {
        question: "at the moment",
        answer: "anda",
    },
    9: {
        question: "right now/ at the moment",
        answer: "şu anda",
    },
    10: {
        question: "how",
        answer: "nasıl",
    },
    11: {
        question: "thing",
        answer: "şey",
    },
    12: {
        question: "cook",
        answer: "pişirmek",
    },
    13: {
        question: "to do (literal action)",
        answer: "yapmak",
    },
    14: {
        question: "to start (e.g to start an activity)",
        answer: "başlamak",
    },
    15: {
        question: "to start (e.g to start a machinery, device, system)",
        answer: "çalıştırmak",
    },
    16: {
        question: "let's start (as in activity)",
        answer: "başlayalım",
    },
    17: {
        question: "I will start (as in activity)",
        answer: "başlayacağım",
    },
    18: {
        question: "we will start (as in activity)",
        answer: "başlayacağız",
    },
    19: {
        question: "you will start (as in activity)",
        answer: "başlayacaksın",
    },
    20: {
        question: "I should start (as in activity)",
        answer: "başlamalıyım",
    },
    21: {
        question: "you should start (as in activity)",
        answer: "başlamalısın",
    },
    22: {
        question: "we should start (as in activity)",
        answer: "başlamalıyız",
    },
    23: {
        question: "they should start (as in activitity)",
        answer: "başlamalılar",
    },
    24: {
        question: "they will start (as in activity)",
        answer: "başlayacaklar",
    },
    25: {
        question: "I am cooking",
        answer: "pişiriyorum",
    },
    26: {
        question: "you are cooking",
        answer: "pişiriyorsun",
    },
    27: {
        question: "we are cookıng",
        answer: "pişiriyoruz",
    },
    28: {
        question: "I should cook",
        answer: "pişirmeliyim",
    },
    29: {
        question: "you should cook",
        answer: "pişirmelisin",
    },
    30: {
        question: "we should cook",
        answer: "pişirmeliyiz",
    },
    31: {
        question: "they are cooking",
        answer: "pişiriyorlar",
    },
    32: {
        question: "they should cook",
        answer: "pişirmeliler",
    },
    33: {
        question: "let's cook",
        answer: "pişirelim"
    },
    34: {
        question: "continue",
        answer: "devam",
    },
    35: {
        question: "great (subjective)",
        answer: "harika",
    },
    36: {
        question: "perfect (with respect to something)",
        answer: "mükemmel",
    },
    37: {
        question: "to understand",
        answer: "anlamak",
    },
    38: {
        question: "I understand",
        answer: "anladım",
    },
    39: {
        question: "how (past tense)",
        answer: "nasıldı",
    },
    40: {
        question: "Sir",
        answer: "beyefendi",
    },
    41: {
        question: "Madam",
        answer: "hanımefendi",
    },
    42: {
        question: "to stay",
        answer: "kalmak",
    },
    43: {
        question: "I stayed",
        answer: "kaldım"
    },
    44: {
        question: "you stayed",
        answer: "kaldın",
    },
    45: {
        question: "we stayed",
        answer: "kaldık",
    },
    46: {
        question: "they stayed",
        answer: "kaldılar",
    },
    47: {
        question: "I stay",
        answer: "kalıyorum",
    },
    48: {
        question: "you stay",
        answer: "kalıyorsun"
    },
    49: {
        question: "we stay",
        answer: "kalıyoruz"
    },
    50: {question: "they stay",
        answer: "kalıyorlar",
    },
    51: {question: "he/she/it stays",
        answer: "kalıyor",
    },
    52: {question: "you all stay",
        answer: "kalıyorsunuz",
    },
    53: {
        question: "to search for/to look for",
        answer: "aramak",
    },
    54: {
        question: "type",
        answer: "tür",
    },
    55: {
        question: "software",
        answer: "yazılım",
    },
    56: {
        question: "engineer",
        answer: "mühendis",
    },
    57: {
        question: "interesting",
        answer: "ilginç",
    },
    58: {
        question: "experience",
        answer: "deneyim",
    },
    59: {
        question: "to listen",
        answer: "duymak"
    },
    60: {
        question: "to work",
        answer: "çalışmak",
    },
    61: {
        question: "building",
        answer: "bina",
    },
    62: {
        question: "appearance",
        answer: "görünüm",
    },
    63: {
        question: "aspect",
        answer: "yön",
    },
    64: {
        question: "while working",
        answer: "çalışırken",
    },
    65: {
        question: "most",
        answer: "en",
    },
    66: {
        question: "sentence",
        answer: "cümle",
    },
    67: {
        question: "analysis",
        answer: "analizi",
    },
    68: {
        question: "network",
        answer: "şebeke",
    },
    69: {
        question: "electricity",
        answer: "elektrik",
    },
    70: {
        question: "supply",
        answer: "arzı",
    },
    71: {
        question: "from the networks",
        answer: "şebekelerinden",
    },
    72: {
        question: "regular",
        answer: "düzenli",
    },
    73: {
        question: "January",
        answer: "Ocak",
    },
    74: {
        question: "February",
        answer: "Şubat",
    },
    75: {
        question: "March",
        answer: "Mart",
    },
    76: {
        question: "April",
        answer: "Nisan",
    },
    77: {
        question: "May",
        answer: "Mayıs",
    },
    78: {
        question: "June",
        answer: "Haziran",
    },
    79: {
        question: "July",
        answer: "Temmuz",
    },
    80: {
        question: "August",
        answer: "Ağustos",
    },
    81: {
        question: "September",
        answer: "Eylül",
    },
    82: {
        question: "October",
        answer: "Ekim",
    },
    83: {
        question: "November",
        answer: "Kasım",
    },
    84: {
        question: "December",
        answer: "Aralık",
    },
    85: {
        question: "Sunday",
        answer: "Pazar",
    },
    86: {
        question: "Monday",
        answer: "Pazartesi",
    },
    87: {
        question: "Teusday",
        answer: "Salı",
    },
    88: {
        question: "Wednesday",
        answer: "Çarşamba",
    },
    89: {
        question: "Thursday",
        answer: "Perşembe",
    },
    90: {
        question: "Friday",
        answer: "Cuma",
    },
    91: {
        question: "Saturday",
        answer: "Cumartesi"
    },
    92: {
        question: "vowel",
        answer: "ünlü",
    },
    93: {
        question: "vowels",
        answer: "ünlüler"
    },
    94: {
        question: "back vowels",
        answer: "kalın ünlüler",
    },
    95: {
        question: "kalın ünlüler",
        answer: "a, ı, o, u"
    },
    96: {
        question: "ünlüler",
        answer: "a, e, ı, i, o, ö, u, ü",
    },
    97: {
        question: "front vowels",
        answer: "ince ünlüler",
    },
    98: {
        question: "ince ünüler",
        answer: "e, i, ö, ü",
    },
    99: {
        question: "plural",
        answer: "çoğul",
    },
    100: {
        question: "plurality",
        answer: "çoğulluk"
    },
    101: {
        question: "plural suffix",
        answer: "çoğul ek",
    },
    102: {
        question: "urgent",
        answer: "acil",
    },
    103: {
        question: "emergency",
        answer: "acil",
    },
    104: {
        question: "emergency numbers",
        answer: "acil telefonlar",
    },
    105: {
        question: "fire department",
        answer: "itfaiye",
    },
    106: {
        question: "fire fighter",
        answer: "itfaiyeci",
    },
    107: {
        question: "abulance",
        answer: "ilk yardım/ambulans",
    },
    108: {
        question: "date",
        answer: "tarih",
    },
    109: {
        question: "saying the date",
        answer: "tarihi söylemek",
    },
    110: {
        question: "country",
        answer: "ülke",
    },
    111: {
        question: "nationality",
        answer: "milliyet",
    },
    112: {
        question: "state",
        answer: "devlet",
    },
    113: {
        question: "united",
        answer: "birleşik",
    },
    114: {
        question: "kingdom",
        answer: "krallık",
    },
    115: {
        question: "british",
        answer: "ingiltere",
    },
    116: {
        question: "He is English",
        answer: "O İngiltereli/O İngiliz",
    },
    117: {
        question: "United States of America",
        answer: "Amerika Birleşik Devletleri",
    },
    118: {
        question: "Germany",
        answer: "Almanya",
    },
    119: {
        question: "China",
        answer: "Çin",
    },
    120: {
        question: "France",
        answer: "Fransa",
    },
    121: {
        question: "India",
        answer: "Hindistan",
    },
    122: {
        question: "Belgium",
        answer: "Belçika",
    },
    123: {
        question: "Spain",
        answer: "İspanya",
    },
    124: {
        question: "Italy",
        answer: "İtalya",
    },
    125: {
        question: "Japan",
        answer: "Japonya",
    },
    126: {
        question: "Canada",
        answer: "Kanada",
    },
    127: {
        question: "Pakistan",
        answer: "Pakistan",
    },
    128: {
        question: "Poland",
        answer: "Polonya",
    },
    129: {
        question: "Portugal",
        answer: "Portekiz",
    },
    130: {
        question: "Russia",
        answer: "Rusya",
    },
    131: {
        question: "diverse",
        answer: "çeşitli",
    },
    132: {
        question: "not coming",
        answer: "gelmiyor",
    },
    133: {
        question: "what's the weather like?",
        answer: "hava nasıl",
    },
    134: {
        question: "wet",
        answer: "ıslak",
    },
    135: {
        question: "cloud",
        answer: "bulut",
    },
    136: {
        question: "rain",
        answer: "yağmur",
    },
    137: {
        question: "snow",
        answer: "kar",
    },
    138: {
        question: "it's sunny",
        answer: "hava güneşli",
    },
    139: {
        question: "it's cloudy",
        answer: "hava bulutlu",
    },
    140: {
        question: "it's rainy",
        answer: "hava yağmurlu",
    },
    141: {
        question: "it's snowy",
        answer: "hava karlı",
    },
    142: {
        question: "wind",
        answer: "rüzgar",
    },
    143: {
        question: "it's windy",
        answer: "hava rüzgarlı",
    },
    144: {
        question: "fog",
        answer: "sis",
    },
    145: {
        question: "it's foggy",
        answer: "hava sisli",
    },
    146: {
        question: "there",
        answer: "orada",
    },
    147: {
        question: "here",
        answer: "burada",
    },
    148: {
        question: "what's the weather like there?",
        answer: "orada hava nasıl",
    },
    149: {
        question: "it's sunny here",
        answer: "burada hava güneşli",
    },
    150: {
        question: "locative case (ya or da)",
        answer: "da",
    },
    151: {
        question: "the weather is cloudy in İnstanbul",
        answer: "İnstanbul'da hava bulutlu",
    },
    152: {
        question: "city",
        answer: "şehir",
    },
    153: {
        question: "İnstanbul is a city",
        answer: "İnstanbul bir şehir",
    },
    154: {
        question: "to use",
        answer: "kullanmak"
    },
    155: {
        question: "which one should I use?",
        answer: "hangisini kullanayım",
    },
    156: {
        question: "negative sentence",
        answer: "negatif cümle",
    },
    157: {
        question: "angry",
        answer: "sinirli",
    },
    158: {
        question: "different",
        answer: "farklı"
    },
    159: {
        question: "tree",
        answer: "ağaç",
    },
    160: {
        question: "car",
        answer: "araba",
    },
    161: {
        question: "fire",
        answer: "ateş",
    },
    162: {
        question: "moon",
        answer: "ay",
    },
    163: {
        question: "lion",
        answer: "aslan",
    },
    164: {
        question: "open",
        answer: "aç",
    },
    165: {
        question: "love",
        answer: "aşk",
    },
    166: {
        question: "light (in color)",
        answer: "açık",
    },
    167: {
        question: "open",
        answer: "açık",
    },
    168: {
        question: "monthly",
        answer: "aylık",
    },
    169: {
        question: "my mother",
        answer: "annem",
    },
    170: {
        question: "I found it",
        answer: "onu buldum",
    },
    171: {
        question: "father",
        answer: "baba",
    },
    172: {
        question: "spring",
        answer: "bahar",
    },
    173: {
        question: "head",
        answer: "baş",
    },
    174: {
        question: "magic",
        answer: "büyü",
    },
    175: {
        question: "to grow",
        answer: "büyümek",
    },
    176: {
        question: "knife",
        answer: "bıçak",
    },
    177: {
        question: "fish",
        answer: "balık",
    },
    178: {
        question: "white",
        answer: "beyaz",
    },
    179: {
        question: "",
        answer: "",
    },
    180: {
        question: "success",
        answer: "başarı",
    },
    181: {
        question: "cloud",
        answer: "bulut",
    },
    182: {
        question: "walnut",
        answer: "ceviz",
    },
    183: {
        question: "heaven",
        answer: "cennet",
    },
    184: {
        question: "answer",
        answer: "cevap",
    },
    185: {
        question: "life (or soul)",
        answer: "can",
    },
    186: {
        question: "flower",
        answer: "çiçek",
    },
    187: {
        question: "child",
        answer: "çocuk",
    },
    188: {
        question: "paradise",
        answer: "cennet",
    },
    189: {
        question: "wallet",
        answer: "cüzdan",
    },
    190: {
        question: "skin",
        answer: "cilt",
    },
    191: {
        question: "to work",
        answer: "çalışmak",
    },
    192: {
        question: "jacket",
        answer: "ceket",
    },
    193: {
        question: "chick",
        answer: "civciv",
    },
    194: {
        question: "camel",
        answer: "deve",
    },
    195: {
        question: "sea",
        answer: "deniz",
    },
    196: {
        question: "drum",
        answer: "davul",
    },
    197: {
        question: "to think",
        answer: "düşünmek",
    },
    198: {
        question: "dream (also shower)",
        answer: "düş",
    },
    199: {
        question: "lesson",
        answer: "ders",
    },
    200: {
        question: "stip",
        answer: "dik",
    },
    201: {
        question: "ice cream",
        answer: "dondurma",
    },
    202: {
        question: "more",
        answer: "daha",
    },
    203: {
        question: "emotion",
        answer: "duygu",
    },
    204: {
        question: "wedding",
        answer: "düğün",
    },
    205: {
        question: "peanaut",
        answer: "fıstık",
    },
    206: {
        question: "hazelnut",
        answer: "fındık",
    },
    207: {
        question: "fountain",
        answer: "fıskıye",
    },
    208: {
        question: "elephant",
        answer: "fil",
    },
    209: {
        question: "photograph",
        answer: "fotoğraf",
    },
    210: {
        question: "poor",
        answer: "fakir",
    },
    211: {
        question: "penaut",
        answer: "fıstık",
    },
    212: {
        question: "science",
        answer: "fen",
    },
    213: {
        question: "stormy",
        answer: "fırtınalı",
    },
    214: {
        question: "lake",
        answer: "göl",
    },
    215: {
        question: "eye",
        answer: "göz",
    },
    216: {
        question: "sun",
        answer: "güneş",
    },
    217: {
        question: "food (or nutrition)",
        answer: "gıda",
    },
    218: {
        question: "beautiful",
        answer: "güzel",
    },
    219: {
        question: "rose",
        answer: "gül",
    },
    220: {
        question: "power",
        answer: "güç",
    },
    221: {
        question: "bride",
        answer: "gelin",
    },
    222: {
        question: "night",
        answer: "gece",
    },
    223: {
        question: "glasses",
        answer: "gözlük",
    },
    224: {
        question: "sky",
        answer: "gökyüzü",
    },
    225: {
        question: "tree",
        answer: "ağaç",
    },
    226: {
        question: "shallow",
        answer: "sığ",
    },
    227: {
        question: "vine (or bond)",
        answer: "bağ",
    },
    228: {
        question: "needle",
        answer: "iğne",
    },
    229: {
        question: "mountain",
        answer: "dağ",
    },
    230: {
        question: "correct (or right)",
        answer: "doğru",
    },
    231: {
        question: "chest",
        answer: "göğüs",
    },
    232: {
        question: "healthy (or right side)",
        answer: "sağ",
    },
    233: {
        question: "age (or era)",
        answer: "çağ",
    },
    234: {
        question: "wedding",
        answer: "düğün",
    },
    235: {
        question: "life",
        answer: "hayat",
    },
    236: {
        question: "air (or weather)",
        answer: "hava",
    },
    237: {
        question: "gift",
        answer: "hediye",
    },
    238: {
        question: "speed",
        answer: "hız",
    },
    239: {
        question: "animal",
        answer: "hayvan",
    },
    240: {
        question: "hiccup",
        answer: "hıçkırık",
    },
    241: {
        question: "nice (or pleasant)",
        answer: "hoş",
    },
    242: {
        question: "illness",
        answer: "hastalık",
    },
    243: {
        question: "map",
        answer: "harita",
    },
    244: {
        question: "target (or goal)",
        answer: "hedef",
    },
    245: {
        question: "light (but it contains an 'I' sound)",
        answer: "ışık",
    },
    246: {
        question: "ığdır (a city in Turkey)",
        answer: "ığdır",
    },
    247: {
        question: "linden tree",
        answer: "ıhlamur",
    },
    248: {
        question: "ısparta (a city in Turkey)",
        answer: "ısparta",
    },
    249: {
        question: "work (as in work/job)",
        answer: "ış",
    },
    250: {
        question: "to the cow",
        answer: "ıneğe",
    },
    251: {
        question: "ray (as in light ray)",
        answer: "ışın",
    },
    252: {
        question: "to shine",
        answer: "ışıldamak",
    },
    253: {
        question: "lukewarm",
        answer: "ılık",
    },
    254: {
        question: "inside (but has the vowel harmony)",
        answer: "ıçinde",
    },
    255: {
        question: "cow",
        answer: "inek",
    },
    256: {
        question: "ham",
        answer: "jambon",
    },
    257: {
        question: "gel",
        answer: "jel",
    },
    258: {
        question: "jupiter",
        answer: "jüpiter",
    },
    259: {
        question: "Japanese",
        answer: "japonyalı",
    },
    260: {
        question: "jacket",
        answer: "jaket",
    },
    261: {
        question: "joker",
        answer: "joker",
    },
    262: {
        question: "jet",
        answer: "jet",
    },
    263: {
        question: "jaguar",
        answer: "jaguar",
    },
    264: {
        question: "jury",
        answer: "jüri",
    },
    265: {
        question: "jeans",
        answer: "jeans",
    },
    266: {
        question: "jargon",
        answer: "jargon",
    },
    267: {
        question: "pen",
        answer: "kalem",
    },
    268: {
        question: "cat",
        answer: "kedi",
    },
    269: {
        question: "door",
        answer: "kapı",
    },
    270: {
        question: "library",
        answer: "kütüphane",
    },
    271: {
        question: "book",
        answer: "kitap",
    },
    272: {
        question: "coffee",
        answer: "kahve",
    },
    273: {
        question: "heart",
        answer: "kalp",
    },
    274: {
        question: "winter",
        answer: "kış",
    },
    275: {
        question: "short",
        answer: "kısa",
    },
    276: {
        question: "dog",
        answer: "köpek",
    },
    277: {
        question: "lamp",
        answer: "lamba",
    },
    278: {
        question: "lemon",
        answer: "limon",
    },
    279: {
        question: "luxury",
        answer: "lüx",
    },
    280: {
        question: "high school",
        answer: "lise",
    },
    281: {
        question: "navy blue",
        answer: "lacivert",
    },
    282: {
        question: "curse",
        answer: "lanet",
    },
    283: {
        question: "word (or talk)",
        answer: "laf",
    },
    284: {
        question: "stork",
        answer: "leylek",
    },
    285: {
        question: "a type of fish (bluefish)",
        answer: "lüfer",
    },
    286: {
        question: "joke",
        answer: "latife",
    },
    287: {
        question: "table",
        answer: "masa",
    },
    288: {
        question: "letter (as in written letter)",
        answer: "mektup",
    },
    289: {
        question: "fruit",
        answer: "meyve",
    },
    290: {
        question: "music",
        answer: "müzik",
    },
    291: {
        question: "kitchen",
        answer: "mutfak",
    },
    292: {
        question: "blue",
        answer: "mavi",
    },
    293: {
        question: "machine",
        answer: "makine",
    },
    294: {
        question: "guest",
        answer: "misafir",
    },
    295: {
        question: "homeland (or hometown)",
        answer: "memleket",
    },
    296: {
        question: "market (or grocery store)",
        answer: "market",
    },
    297: {
        question: "why",
        answer: "neden",
    },
    298: {
        question: "what",
        answer: "ne",
    },
    299: {
        question: "polite",
        answer: "nazik",
    },
    300: {
        question: "river",
        answer: "nehir",
    },
    301: {
        question: "pomegranate",
        answer: "nar",
    },
    302: {
        question: "mint",
        answer: "nane",
    },
    303: {
        question: "dot (or point)",
        answer: "nokta",
    },
    304: {
        question: "number",
        answer: "numara",
    },
    305: {
        question: "engagement (or target)",
        answer: "nişan",
    },
    306: {
        question: "intention",
        answer: "niyet",
    },
    307: {
        question: "pedestrian crossing",
        answer: "yaya geçidi",
    },
    308: {
        question: "school",
        answer: "okul",
    },
    309: {
        question: "room",
        answer: "oda",
    },
    310: {
        question: "game (or play)",
        answer: "oyun",
    },
    311: {
        question: "bus",
        answer: "otobüs",
    },
    312: {
        question: "forest",
        answer: "orman",
    },
    313: {
        question: "son",
        answer: "oğul",
    },
    314: {
        question: "to sit (or to live, as in reside)",
        answer: "oturmak",
    },
    315: {
        question: "ten",
        answer: "on",
    },
    316: {
        question: "fasting",
        answer: "oruç - ",
    },
    317: {
        question: "toy",
        answer: "oyuncak",
    },
    318: {
        question: "noon",
        answer: "öğle",
    },
    319: {
        question: "teacher",
        answer: "öğretmen",
    },
    320: {
        question: "essence (or core)",
        answer: "öz",
    },
    321: {
        question: "longing (or yearning)",
        answer: "özlem",
    },
    322: {
        question: "apology",
        answer: "özür",
    },
    323: {
        question: "death",
        answer: "ölüm",
    },
    324: {
        question: "suggestion",
        answer: "öneri",
    },
    325: {
        question: "especially",
        answer: "özellikle",
    },
    326: {
        question: "free",
        answer: "özgür",
    },
    327: {
        question: "example",
        answer: "örnek",
    },
    328: {
        question: "money",
        answer: "para",
    },
    329: {
        question: "potato",
        answer: "patates",
    },
    330: {
        question: "market (or Sunday)",
        answer: "pazar",
    },
    331: {
        question: "rice (dish)",
        answer: "pilav",
    },
    332: {
        question: "orange (fruit)",
        answer: "portakal",
    },
    333: {
        question: "pants",
        answer: "pantolon",
    },
    334: {
        question: "police",
        answer: "polis",
    },
    335: {
        question: "mail (or post)",
        answer: "posta",
    },
    336: {
        question: "cheese",
        answer: "peynir",
    },
    337: {
        question: "plan",
        answer: "plan",
    },
    338: {
        question: "color",
        answer: "renk",
    },
    339: {
        question: "radio",
        answer: "radyo",
    },
    340: {
        question: "jam (or marmalade)",
        answer: "reçel",
    },
    341: {
        question: "picture",
        answer: "resim",
    },
    342: {
        question: "comfortable",
        answer: "rahat",
    },
    343: {
        question: "wind",
        answer: "rüzgar",
    },
    344: {
        question: "advertisement",
        answer: "reklam",
    },
    345: {
        question: "role",
        answer: "rol",
    },
    346: {
        question: "appointment",
        answer: "randevu",
    },
    347: {
        question: "rival (or competitor)",
        answer: "rakip",
    },
    348: {
        question: "morning",
        answer: "sabah",
    },
    349: {
        question: "water",
        answer: "su",
    },
    350: {
        question: "hot",
        answer: "sıcak",
    },
    351: {
        question: "love",
        answer: "sevgi",
    },
    352: {
        question: "city",
        answer: "şehir",
    },
    353: {
        question: "street",
        answer: "sokak",
    },
    354: {
        question: "soap",
        answer: "sabun",
    },
    355: {
        question: "chair",
        answer: "sandalye",
    },
    356: {
        question: "sound (or voice)",
        answer: "ses",
    },
    357: {
        question: "word (or promise)",
        answer: "söz",
    },
    358: {
        question: "plate",
        answer: "tabak",
    },
    359: {
        question: "chicken",
        answer: "tavuk",
    },
    360: {
        question: "sweet (or dessert)",
        answer: "tatlı",
    },
    361: {
        question: "telephone",
        answer: "telefon",
    },
    362: {
        question: "television",
        answer: "televizyon",
    },
    363: {
        question: "theater",
        answer: "tiyatro",
    },
    364: {
        question: "taxi",
        answer: "taksi",
    },
    365: {
        question: "holiday (or vacation)",
        answer: "tatil",
    },
    366: {
        question: "field",
        answer: "tarla",
    },
    367: {
        question: "history (or date)",
        answer: "tarih",
    },
    368: {
        question: "airplane",
        answer: "uçak",
    },
    369: {
        question: "hope",
        answer: "umut",
    },
    370: {
        question: "sleep",
        answer: "uyku",
    },
    371: {
        question: "long",
        answer: "uzun",
    },
    372: {
        question: "to wake up (someone)",
        answer: "uyandırmak",
    },
    373: {
        question: "to wake up (oneself)",
        answer: "uyanmak",
    },
    374: {
        question: "master (or expert)",
        answer: "usta",
    },
    375: {
        question: "to forget",
        answer: "unutmak",
    },
    376: {
        question: "nation",
        answer: "ulus",
    },
    377: {
        question: "far (or distant)",
        answer: "uzak",
    },
    378: {
        question: "grape",
        answer: "üzüm",
    },
    379: {
        question: "sad",
        answer: "üzgün",
    },
    380: {
        question: "to upset",
        answer: "üzmek",
    },
    381: {
        question: "fee (or wage)",
        answer: "ücret",
    },
    382: {
        question: "to feel cold",
        answer: "üşümek",
    },
    383: {
        question: "university",
        answer: "üniversite",
    },
    384: {
        question: "famous",
        answer: "ünlü",
    },
    385: {
        question: "hope",
        answer: "ümit",
    },
    386: {
        question: "member",
        answer: "üye",
    },
    387: {
        question: "product",
        answer: "ürün",
    },
    388: {
        question: "existence (or asset)",
        answer: "varlık",
    },
    389: {
        question: "means (or instrument)",
        answer: "vesile",
    },
    390: {
        question: "body",
        answer: "vücut",
    },
    391: {
        question: "visa",
        answer: "vize",
    },
    392: {
        question: "wow (expression of surprise)",
        answer: "vay",
    },
    393: {
        question: "data",
        answer: "veri",
    },
    394: {
        question: "varnish",
        answer: "vernik",
    },
    395: {
        question: "valley",
        answer: "vadi",
    },
    396: {
        question: "showcase (or display window)",
        answer: "vitrin",
    },
    397: {
        question: "sermon",
        answer: "vaaz",
    },
    398: {
        question: "help",
        answer: "yardım",
    },
    399: {
        question: "food (or to eat)",
        answer: "yemek",
    },
    400: {
        question: "summer (or to write)",
        answer: "yaz",
    },
    401: {
        question: "star",
        answer: "yıldız",
    },
    402: {
        question: "face (or to swim)",
        answer: "yüz",
    },
    403: {
        question: "bed",
        answer: "yatak",
    },
    404: {
        question: "slow",
        answer: "yavaş",
    },
    405: {
        question: "wind",
        answer: "yel",
    },
    406: {
        question: "high",
        answer: "yüksek",
    },
    407: {
        question: "road",
        answer: "yol",
    },
    408: {
        question: "time",
        answer: "zaman",
    },
    409: {
        question: "olive",
        answer: "zeytin",
    },
    410: {
        question: "zebra",
        answer: "zebra",
    },
    411: {
        question: "armored",
        answer: "zırhlı",
    },
    412: {
        question: "poor (in the sense of unfortunate)",
        answer: "zavallı",
    },
    413: {
        question: "rich",
        answer: "zengin",
    },
    414: {
        question: "over time",
        answer: "zamanla",
    },
    415: {
        question: "envelope (or adverb)",
        answer: "zarf",
    },
    416: {
        question: "group (or class)",
        answer: "zümre",
    },
    417: {
        question: "lives",
        answer: "yaşar",
    },
    418: {
        question: "what are (they)?",
        answer: "nelerdir",
    },
    419: {
        question: "class",
        answer: "sınıf",
    },
    420: {
        question: "to study",
        answer: "çalışmak",
    },
    421: {
        question: "medicine",
        answer: "ilaç",
    },
    422: {
        question: "to purchase",
        answer: "satın almak",
    },
    423: {
        question: "registration",
        answer: "kayıt",
    },
    424: {
        question: "about",
        answer: "hakkında",
    },
    425: {
        question: "information",
        answer: "bilgi",
    },
    426: {
        question: "to give",
        answer: "vermek",
    },
};

for (let x in questionBank) {
    console.log(questionBank[x]);
}

document.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        event.preventDefault();

        if (input.value == turkish.textContent) {
            array.push(questionBank[`${random}`]["question"]);
            console.log(`This is array: ${array}`);
            clearInput();
            displayQuestion();
        } else {
            turkish.classList.add("show-turkish");
            enableContinueButton = true;
            if (enableContinueButton) {
                continueButton.addEventListener("click", () => {
                    turkish.classList.remove("show-turkish");
                    enableContinueButton = false;
                    console.log(`This is array after continue button: ${array}`);
                    clearInput();
                    displayQuestion();
                });
            }
        }
    }
});

function displayQuestion() {
    random = Math.floor(Math.random() * Object.keys(questionBank).length) + 1;
    if (array.length != Object.keys(questionBank).length && !array.includes(questionBank[`${random}`]["question"])) {
        english.textContent = questionBank[`${random}`]["question"];
        turkish.textContent = questionBank[`${random}`]["answer"];
    } else if (array.length != Object.keys(questionBank).length && array.includes(questionBank[`${random}`]["question"])) {
        return displayQuestion();
    } else {
        english.style.display = "none";
        turkish.style.display = "none";
        continueButton.style.display = "none";
        let message = document.createElement("p");
        message.textContent = "Finished!";
        document.body.appendChild(message);
    }
}

function clearInput() {
    input.value = "";
}

displayQuestion();