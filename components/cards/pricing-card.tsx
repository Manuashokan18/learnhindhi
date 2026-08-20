import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { PricingPlan } from "@/types"

export function PricingCard({ name, price, period, features, cta, highlighted }: PricingPlan) {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-6 rounded-2xl border p-8",
        highlighted
          ? "border-accent bg-primary text-primary-foreground shadow-xl shadow-accent/15"
          : "border-border bg-card",
      )}
    >
      {highlighted ? (
        <Badge className="absolute -top-3 left-8 bg-accent text-accent-foreground">
          Most Popular
        </Badge>
      ) : null}

      <div className="flex flex-col gap-1">
        <span
          className={cn(
            "text-sm font-semibold",
            highlighted ? "text-primary-foreground/80" : "text-muted-foreground",
          )}
        >
          {name}
        </span>
        <div className="flex items-baseline gap-1">
          <span className="font-heading text-4xl font-semibold">{price}</span>
          {period ? (
            <span className={cn("text-sm", highlighted ? "text-primary-foreground/70" : "text-muted-foreground")}>
              {period}
            </span>
          ) : null}
        </div>
      </div>

      <ul className="flex flex-col gap-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm">
            <Check
              className={cn("mt-0.5 size-4 shrink-0", highlighted ? "text-accent" : "text-accent")}
              aria-hidden="true"
            />
            <span className={highlighted ? "text-primary-foreground/90" : "text-foreground"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        className={cn(
          "mt-auto w-full",
          highlighted
            ? "bg-accent text-accent-foreground hover:bg-accent/85"
            : "bg-primary text-primary-foreground hover:bg-primary/85",
        )}
      >
        {cta}
      </Button>
    </div>
  )
}
