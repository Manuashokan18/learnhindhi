import { AudioButton } from "@/components/common/audio-button"
import type { Scenario } from "@/types"

export function ScenarioCard({ situation, hindi, transliteration, meaning }: Scenario) {
  return (
    <div className="flex w-72 shrink-0 flex-col gap-3 rounded-2xl border border-border bg-card p-6 snap-start">
      <span className="text-xs font-semibold tracking-wide text-accent uppercase">{situation}</span>
      <p className="font-devanagari text-xl font-medium text-foreground">{hindi}</p>
      <p className="text-sm text-muted-foreground italic">{transliteration}</p>
      <p className="text-sm text-foreground">{meaning}</p>
      <AudioButton text={hindi} className="mt-1 self-start" />
    </div>
  )
}
