import { AudioButton } from "@/components/common/audio-button"
import { cn } from "@/lib/utils"
import type { HindiPhrase } from "@/types"

interface HindiWordCardProps extends HindiPhrase {
  className?: string
}

export function HindiWordCard({ hindi, transliteration, meaning, className }: HindiWordCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-xl shadow-primary/5",
        className,
      )}
    >
      <p className="font-devanagari text-4xl font-semibold text-primary">{hindi}</p>
      <p className="text-base font-medium text-foreground">{transliteration}</p>
      <p className="text-sm text-muted-foreground">{meaning}</p>
      <AudioButton text={hindi} className="mt-1 self-start" />
    </div>
  )
}
