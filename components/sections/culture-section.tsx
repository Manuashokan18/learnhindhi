import { Container } from "@/components/common/container"
import { SectionHeading } from "@/components/common/section-heading"
import { Reveal } from "@/components/common/reveal"
import { CultureCard } from "@/components/cards/culture-card"
import { cultureTopics } from "@/lib/data/culture"

export function CultureSection() {
  return (
    <section id="culture" className="py-16 sm:py-32">
      <Container className="flex flex-col gap-8 sm:gap-14">
        <SectionHeading title="Learn the culture behind the words." />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cultureTopics.map((topic, index) => (
            <Reveal key={topic.id} delay={(index % 3) * 100}>
              <CultureCard {...topic} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
