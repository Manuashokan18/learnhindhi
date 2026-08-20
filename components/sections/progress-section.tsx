import Link from "next/link"
import { Container } from "@/components/common/container"
import { SectionHeading } from "@/components/common/section-heading"
import { Reveal } from "@/components/common/reveal"
import { ProgressDashboardCard } from "@/components/cards/progress-dashboard-card"
import { Button } from "@/components/ui/button"

export function ProgressSection() {
  return (
    <section className="bg-secondary/40 py-16 sm:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="flex flex-col items-start gap-5">
          <SectionHeading align="left" title="See yourself getting better." />
          <p className="max-w-md text-muted-foreground">
            Track your streak, lessons completed, and progress across vocabulary, speaking,
            reading, and grammar.
          </p>
          <Button
            render={<Link href="#pricing" />}
            nativeButton={false}
            className="bg-primary text-primary-foreground hover:bg-primary/85"
          >
            View Your Progress
          </Button>
        </Reveal>

        <Reveal delay={150} className="mx-auto w-full max-w-sm">
          <ProgressDashboardCard />
        </Reveal>
      </Container>
    </section>
  )
}
