import { Container } from "@/components/common/container"
import { SectionHeading } from "@/components/common/section-heading"
import { Reveal } from "@/components/common/reveal"
import { learningPath } from "@/lib/data/learning-path"

export function LearningPath() {
  return (
    <section id="learning-path" className="py-16 sm:py-32">
      <Container className="flex flex-col gap-8 sm:gap-14">
        <SectionHeading title="Your Hindi journey starts here." />

        <div className="relative mx-auto flex w-full max-w-2xl flex-col gap-10">
          <div
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-6 w-px bg-border sm:left-7"
          />

          {learningPath.map((stage, index) => (
            <Reveal key={stage.id} delay={index * 100} className="relative flex gap-5 sm:gap-6">
              <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-border bg-card font-heading text-base font-semibold text-primary sm:size-14 sm:text-lg">
                {stage.number}
              </span>
              <div className="flex flex-col gap-1 pt-1.5">
                <h3 className="font-heading text-lg font-semibold text-foreground sm:text-xl">
                  {stage.title}
                </h3>
                <p className="text-sm text-muted-foreground sm:text-base">{stage.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
