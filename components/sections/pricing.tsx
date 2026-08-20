import { Container } from "@/components/common/container"
import { SectionHeading } from "@/components/common/section-heading"
import { Reveal } from "@/components/common/reveal"
import { PricingCard } from "@/components/cards/pricing-card"
import { pricingPlans } from "@/lib/data/pricing"

export function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-32">
      <Container className="flex flex-col gap-8 sm:gap-14">
        <SectionHeading title="Start learning Hindi today." />

        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 100}>
              <PricingCard {...plan} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
