import { Container } from "@/components/common/container"
import { SectionHeading } from "@/components/common/section-heading"
import { Reveal } from "@/components/common/reveal"
import { howItWorksSteps } from "@/lib/data/how-it-works"

export function HowItWorks() {
  return (
    <section className="py-16 sm:py-32">
      <Container className="flex flex-col gap-8 sm:gap-14">
        <SectionHeading title="How it works." />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorksSteps.map((step, index) => (
            <Reveal key={step.id} delay={index * 100} className="flex flex-col gap-3">
              <span className="font-heading text-4xl font-semibold text-accent">{step.number}</span>
              <p className="text-base font-medium text-foreground">{step.title}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
