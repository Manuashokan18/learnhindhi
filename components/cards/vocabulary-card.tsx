import { AudioButton } from "@/components/common/audio-button"
import type { VocabularyWord } from "@/types"

export function VocabularyCard({ hindi, transliteration, meaning }: VocabularyWord) {
  return (
    <div className="group flex flex-col gap-2 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/10">
      <p className="font-devanagari text-2xl font-semibold text-primary">{hindi}</p>
      <p className="text-sm font-medium text-foreground">{transliteration}</p>
      <p className="text-sm text-muted-foreground">{meaning}</p>
      <AudioButton text={hindi} className="mt-2 self-start" />
    </div>
  )
}
