import type { CultureTopic } from "@/types"

export function CultureCard({ title, hindi, description }: CultureTopic) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6">
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-heading text-lg font-semibold text-foreground">{title}</h3>
        <span className="font-devanagari text-xl text-accent">{hindi}</span>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
      <a
        href="#"
        className="mt-1 inline-flex w-fit text-sm font-medium text-primary underline-offset-4 hover:underline"
      >
        Discover more →
      </a>
    </div>
  )
}
