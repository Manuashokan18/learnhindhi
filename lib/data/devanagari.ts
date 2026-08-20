import type { DevanagariRow } from "@/types"

export const devanagariRows: DevanagariRow[] = [
  { label: "Vowels", letters: ["अ", "आ", "इ", "ई", "उ", "ऊ"] },
  { label: "Gutturals", letters: ["क", "ख", "ग", "घ", "ङ"] },
  { label: "Palatals", letters: ["च", "छ", "ज", "झ", "ञ"] },
  { label: "Retroflexes", letters: ["ट", "ठ", "ड", "ढ", "ण"] },
]

export const devanagariExample = {
  letter: "क",
  transliteration: "ka",
  combination: "क + ा = का",
  combinationTransliteration: "kaa",
}
