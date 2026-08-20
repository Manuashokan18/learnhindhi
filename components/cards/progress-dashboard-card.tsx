import { Flame } from "lucide-react"
import { ProgressBar } from "@/components/common/progress-bar"
import { progressStats } from "@/lib/data/progress"

export function ProgressDashboardCard() {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-6 shadow-xl shadow-primary/5 sm:p-7">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          Your Hindi progress
        </span>
        <span className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-sm font-semibold whitespace-nowrap text-accent">
          <Flame className="size-4" aria-hidden="true" />7 day streak
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {progressStats.map((stat) => (
          <ProgressBar key={stat.label} label={stat.label} percent={stat.percent} color={stat.color} />
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-border pt-5">
        <span className="text-sm text-muted-foreground">Lessons completed</span>
        <span className="font-heading text-2xl font-semibold text-foreground">27</span>
      </div>
    </div>
  )
}
