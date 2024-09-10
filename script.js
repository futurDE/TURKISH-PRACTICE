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
        answer: "cumle",
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