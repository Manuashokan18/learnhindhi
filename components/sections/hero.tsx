import Link from "next/link"
import { Container } from "@/components/common/container"
import { Reveal } from "@/components/common/reveal"
import { HindiWordCard } from "@/components/cards/hindi-word-card"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-24 sm:pb-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(60%_50%_at_50%_0%,var(--secondary)_0%,transparent_70%)]"
      />

      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <Reveal className="flex flex-col items-start gap-6">
          <span className="text-xs font-semibold tracking-[0.25em] text-accent uppercase">
            Learn Hindi • Speak with confidence
          </span>

          <h1 className="text-balance font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Hindi isn&apos;t just a language. It&apos;s a{" "}
            <span className="text-primary">conversation</span>.
          </h1>

          <p className="max-w-xl text-balance text-lg text-muted-foreground">
            Learn Hindi through real conversations, practical vocabulary, pronunciation practice,
            and lessons designed to help you speak with confidence.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              size="lg"
              render={<Link href="#pricing" />}
              nativeButton={false}
              className="bg-accent text-accent-foreground hover:bg-accent/85"
            >
              Start Learning
            </Button>
            <Button
              size="lg"
              variant="outline"
              render={<Link href="#features" />}
              nativeButton={false}
            >
              Explore Lessons
            </Button>
          </div>

          <p className="pt-3 text-sm text-muted-foreground">
            Beginner friendly&nbsp;•&nbsp;Learn at your pace&nbsp;•&nbsp;Real-world Hindi
          </p>
        </Reveal>

        <Reveal delay={150} className="relative mx-auto mt-10 w-full max-w-sm lg:mt-4">
          <HindiWordCard
            hindi="नमस्ते"
            transliteration="Namaste"
            meaning="Hello / Greetings"
            className="relative z-10"
          />

          <div
            aria-hidden="true"
            className="absolute -top-20 -left-14 z-20 hidden w-40 rotate-[-6deg] rounded-xl border border-border bg-card p-3 shadow-lg lg:block"
          >
            <p className="text-xs text-muted-foreground">Good morning</p>
            <p className="font-devanagari text-base font-medium text-primary">सुप्रभात</p>
          </div>

          <div
            aria-hidden="true"
            className="absolute -top-8 -right-16 z-20 hidden w-48 rotate-[5deg] rounded-xl border border-border bg-card p-3 shadow-lg lg:block"
          >
            <p className="text-xs text-muted-foreground">How are you?</p>
            <p className="font-devanagari text-base font-medium text-primary">आप कैसे हैं?</p>
          </div>

          <div
            aria-hidden="true"
            className="absolute -bottom-10 left-1/2 z-20 w-56 -translate-x-1/2 rounded-xl border border-border bg-card p-4 shadow-lg"
          >
            <p className="text-xs font-medium text-muted-foreground">Today&apos;s progress</p>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full w-4/5 rounded-full bg-accent" />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
