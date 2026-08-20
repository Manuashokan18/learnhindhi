import { Container } from "@/components/common/container"
import { SectionHeading } from "@/components/common/section-heading"
import { Reveal } from "@/components/common/reveal"
import { ScenarioCard } from "@/components/cards/scenario-card"
import { scenarios } from "@/lib/data/scenarios"

export function RealLifeSection() {
  return (
    <section className="py-16 sm:py-32">
      <Container className="flex flex-col gap-12">
        <SectionHeading title="Learn the Hindi you'll actually use." />

        <Reveal>
          <div className="no-scrollbar flex snap-x gap-5 overflow-x-auto pb-4">
            {scenarios.map((scenario) => (
              <ScenarioCard key={scenario.id} {...scenario} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
