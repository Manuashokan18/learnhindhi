import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import type { Testimonial } from "@/types"

export function TestimonialCard({ quote, name, detail, initials }: Testimonial) {
  return (
    <div className="flex h-full flex-col gap-5 rounded-2xl border border-border bg-card p-6">
      <p className="text-base text-foreground">&ldquo;{quote}&rdquo;</p>
      <div className="mt-auto flex items-center gap-3">
        <Avatar>
          <AvatarFallback className="bg-primary/10 text-primary">{initials}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-foreground">{name}</span>
          <span className="text-xs text-muted-foreground">{detail}</span>
        </div>
      </div>
    </div>
  )
}
