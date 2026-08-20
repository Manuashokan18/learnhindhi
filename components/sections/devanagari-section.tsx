import { Container } from "@/components/common/container"
import { SectionHeading } from "@/components/common/section-heading"
import { Reveal } from "@/components/common/reveal"
import { DevanagariLetterCard } from "@/components/cards/devanagari-letter-card"
import { devanagariRows } from "@/lib/data/devanagari"

export function DevanagariSection() {
  return (
    <section className="bg-secondary/40 py-16 sm:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="flex flex-col gap-10">
          <SectionHeading align="left" title="Meet the Hindi alphabet." />

          <div className="flex flex-col gap-5">
            {devanagariRows.map((row) => (
              <div key={row.label} className="flex flex-col gap-2">
                <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  {row.label}
                </span>
                <p className="font-devanagari text-2xl text-foreground sm:text-3xl">
                  {row.letters.join("  ")}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150} className="mx-auto w-full max-w-sm">
          <DevanagariLetterCard />
        </Reveal>
      </Container>
    </section>
  )
}
