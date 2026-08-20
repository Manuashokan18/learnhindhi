import Link from "next/link"
import { Container } from "@/components/common/container"
import { Reveal } from "@/components/common/reveal"
import { Button } from "@/components/ui/button"

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 select-none font-devanagari text-9xl leading-none text-primary-foreground/5"
      >
        <span className="absolute top-6 left-6">नमस्ते</span>
        <span className="absolute right-6 bottom-6 rotate-6">हिंदी</span>
      </div>

      <Container className="relative flex flex-col items-center gap-6 text-center">
        <Reveal className="flex flex-col items-center gap-6">
          <h2 className="text-balance font-heading text-3xl font-semibold sm:text-4xl md:text-5xl">
            Your Hindi journey starts with one word.
          </h2>
          <p className="font-devanagari text-6xl font-semibold text-accent sm:text-7xl">
            नमस्ते
          </p>
          <p className="max-w-md text-balance text-primary-foreground/80">
            Learn a little today. Speak a little more tomorrow.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button
              size="lg"
              render={<Link href="#pricing" />}
              nativeButton={false}
              className="bg-accent text-accent-foreground hover:bg-accent/85"
            >
              Start Learning Hindi
            </Button>
            <Button
              size="lg"
              variant="outline"
              render={<Link href="#features" />}
              nativeButton={false}
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              Explore the Lessons
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
