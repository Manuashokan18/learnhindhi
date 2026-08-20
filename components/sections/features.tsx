import { Container } from "@/components/common/container"
import { SectionHeading } from "@/components/common/section-heading"
import { Reveal } from "@/components/common/reveal"
import { FeatureCard } from "@/components/cards/feature-card"
import { features } from "@/lib/data/features"

export function Features() {
  return (
    <section id="features" className="py-16 sm:py-32">
      <Container className="flex flex-col gap-8 sm:gap-14">
        <SectionHeading
          eyebrow="Why Learn Hindi With Me"
          title="Everything you need to start speaking Hindi."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Reveal key={feature.id} delay={(index % 4) * 80}>
              <FeatureCard {...feature} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
