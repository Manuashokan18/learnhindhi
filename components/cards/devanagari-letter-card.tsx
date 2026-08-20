"use client"

import { useState } from "react"
import { ChevronRight, PenLine } from "lucide-react"
import { AudioButton } from "@/components/common/audio-button"
import { Button } from "@/components/ui/button"

const letters = [
  { letter: "क", transliteration: "ka", combination: "क + ा = का", combinationTransliteration: "kaa" },
  { letter: "ख", transliteration: "kha", combination: "ख + ा = खा", combinationTransliteration: "khaa" },
  { letter: "ग", transliteration: "ga", combination: "ग + ा = गा", combinationTransliteration: "gaa" },
]

export function DevanagariLetterCard() {
  const [index, setIndex] = useState(0)
  const current = letters[index]

  return (
    <div className="flex flex-col items-center gap-5 rounded-2xl border border-border bg-card p-8 text-center shadow-xl shadow-primary/5">
      <p className="font-devanagari text-6xl font-semibold text-primary">{current.letter}</p>
      <p className="text-base font-medium text-foreground">{current.transliteration}</p>
      <p className="font-devanagari text-2xl text-muted-foreground">{current.combination}</p>
      <p className="text-sm text-muted-foreground">{current.combinationTransliteration}</p>

      <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
        <AudioButton text={current.letter} />
        <Button variant="outline" size="sm">
          <PenLine className="size-3.5" aria-hidden="true" />
          Practice writing
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setIndex((prev) => (prev + 1) % letters.length)}
        >
          Next letter
          <ChevronRight className="size-3.5" aria-hidden="true" />
        </Button>
      </div>
    </div>
  )
}
