import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface LessonCardProps {
  title: string
  duration: string
  tags: string[]
}

export function LessonCard({ title, duration, tags }: LessonCardProps) {
  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-7 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col gap-3">
        <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          Today&apos;s lesson
        </span>
        <h3 className="font-heading text-xl font-semibold text-foreground">{title}</h3>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline">{duration}</Badge>
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/85 sm:shrink-0">
        Start Lesson
      </Button>
    </div>
  )
}
