import { BookOpenCheck, MessagesSquare, Repeat2 } from "lucide-react"
import { Container } from "@/components/common/container"
import { SectionHeading } from "@/components/common/section-heading"
import { Reveal } from "@/components/common/reveal"

const pillars = [
  {
    icon: BookOpenCheck,
    title: "Understand",
    description: "Learn what words and phrases actually mean.",
  },
  {
    icon: MessagesSquare,
    title: "Speak",
    description: "Practice natural Hindi conversations.",
  },
  {
    icon: Repeat2,
    title: "Remember",
    description: "Build vocabulary through repetition and real usage.",
  },
]

export function Introduction() {
  return (
    <section className="py-16 sm:py-32">
      <Container className="flex flex-col gap-8 sm:gap-14">
        <SectionHeading
          title="Learn Hindi beyond memorizing words."
          description="Knowing a list of Hindi words isn't enough. Real confidence comes from knowing how to use them."
        />

        <div className="grid gap-6 sm:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 100}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-8">
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <pillar.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
