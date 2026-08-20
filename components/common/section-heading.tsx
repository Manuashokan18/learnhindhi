import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: "center" | "left"
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="max-w-3xl text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-balance text-base text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
