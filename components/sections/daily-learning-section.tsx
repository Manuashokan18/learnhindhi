import { Container } from "@/components/common/container"
import { SectionHeading } from "@/components/common/section-heading"
import { Reveal } from "@/components/common/reveal"
import { LessonCard } from "@/components/cards/lesson-card"
import { todaysLesson } from "@/lib/data/progress"

export function DailyLearningSection() {
  return (
    <section className="py-16 sm:py-32">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          title="A little Hindi every day goes a long way."
          description="Continue where you left off."
        />

        <Reveal className="mx-auto w-full max-w-2xl">
          <LessonCard {...todaysLesson} />
        </Reveal>
      </Container>
    </section>
  )
}
