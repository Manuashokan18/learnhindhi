import type { VocabularyCategory } from "@/types"

export const vocabularyCategories: VocabularyCategory[] = [
  {
    id: "greetings",
    label: "Greetings",
    icon: "👋",
    words: [
      { id: "namaste", hindi: "नमस्ते", transliteration: "Namaste", meaning: "Hello / Greetings" },
      { id: "shukriya", hindi: "धन्यवाद", transliteration: "Dhanyavaad", meaning: "Thank you" },
      { id: "shubh-prabhat", hindi: "सुप्रभात", transliteration: "Suprabhat", meaning: "Good morning" },
      { id: "phir-milenge", hindi: "फिर मिलेंगे", transliteration: "Phir milenge", meaning: "See you again" },
    ],
  },
  {
    id: "family",
    label: "Family",
    icon: "👨‍👩‍👧",
    words: [
      { id: "parivaar", hindi: "परिवार", transliteration: "Parivaar", meaning: "Family" },
      { id: "maa", hindi: "माँ", transliteration: "Maa", meaning: "Mother" },
      { id: "pita", hindi: "पिता", transliteration: "Pita", meaning: "Father" },
      { id: "bhai", hindi: "भाई", transliteration: "Bhai", meaning: "Brother" },
    ],
  },
  {
    id: "food",
    label: "Food",
    icon: "🍛",
    words: [
      { id: "khana", hindi: "खाना", transliteration: "Khaana", meaning: "Food" },
      { id: "paani", hindi: "पानी", transliteration: "Paani", meaning: "Water" },
      { id: "chai", hindi: "चाय", transliteration: "Chai", meaning: "Tea" },
      { id: "meetha", hindi: "मीठा", transliteration: "Meetha", meaning: "Sweet" },
    ],
  },
  {
    id: "home",
    label: "Home",
    icon: "🏠",
    words: [
      { id: "ghar", hindi: "घर", transliteration: "Ghar", meaning: "Home" },
      { id: "kamra", hindi: "कमरा", transliteration: "Kamra", meaning: "Room" },
      { id: "darwaza", hindi: "दरवाज़ा", transliteration: "Darwaza", meaning: "Door" },
      { id: "khidki", hindi: "खिड़की", transliteration: "Khidki", meaning: "Window" },
    ],
  },
  {
    id: "travel",
    label: "Travel",
    icon: "✈️",
    words: [
      { id: "station", hindi: "स्टेशन", transliteration: "Station", meaning: "Station" },
      { id: "raasta", hindi: "रास्ता", transliteration: "Raasta", meaning: "Way / Path" },
      { id: "safar", hindi: "सफ़र", transliteration: "Safar", meaning: "Journey" },
      { id: "ticket", hindi: "टिकट", transliteration: "Ticket", meaning: "Ticket" },
    ],
  },
  {
    id: "work",
    label: "Work",
    icon: "💼",
    words: [
      { id: "kaam", hindi: "काम", transliteration: "Kaam", meaning: "Work" },
      { id: "daftar", hindi: "दफ़्तर", transliteration: "Daftar", meaning: "Office" },
      { id: "meeting", hindi: "बैठक", transliteration: "Baithak", meaning: "Meeting" },
      { id: "samay", hindi: "समय", transliteration: "Samay", meaning: "Time" },
    ],
  },
  {
    id: "feelings",
    label: "Feelings",
    icon: "❤️",
    words: [
      { id: "khush", hindi: "खुश", transliteration: "Khush", meaning: "Happy" },
      { id: "pyaar", hindi: "प्यार", transliteration: "Pyaar", meaning: "Love" },
      { id: "udaas", hindi: "उदास", transliteration: "Udaas", meaning: "Sad" },
      { id: "himmat", hindi: "हिम्मत", transliteration: "Himmat", meaning: "Courage" },
    ],
  },
  {
    id: "shopping",
    label: "Shopping",
    icon: "🛍",
    words: [
      { id: "dukaan", hindi: "दुकान", transliteration: "Dukaan", meaning: "Shop" },
      { id: "keemat", hindi: "कीमत", transliteration: "Keemat", meaning: "Price" },
      { id: "sasta", hindi: "सस्ता", transliteration: "Sasta", meaning: "Cheap" },
      { id: "paise", hindi: "पैसे", transliteration: "Paise", meaning: "Money" },
    ],
  },
]
