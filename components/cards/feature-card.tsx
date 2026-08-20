import { iconMap } from "@/lib/icon-map"
import type { Feature } from "@/types"

export function FeatureCard({ icon, title, description }: Feature) {
  const Icon = iconMap[icon]

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
      <span className="flex size-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
        {Icon ? <Icon className="size-5" aria-hidden="true" /> : null}
      </span>
      <div className="flex flex-col gap-1.5">
        <h3 className="font-heading text-base font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
