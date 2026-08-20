import Link from "next/link"
import { Container } from "@/components/common/container"
import { SectionHeading } from "@/components/common/section-heading"
import { Reveal } from "@/components/common/reveal"
import { Button } from "@/components/ui/button"

const firstWords = [
  { hindi: "नमस्ते", meaning: "Hello" },
  { hindi: "धन्यवाद", meaning: "Thank you" },
  { hindi: "पानी", meaning: "Water" },
  { hindi: "घर", meaning: "Home" },
  { hindi: "दोस्त", meaning: "Friend" },
]

export function BeginnerSection() {
  return (
    <section className="py-16 sm:py-32">
      <Container className="flex flex-col gap-8 sm:gap-14">
        <SectionHeading
          title="Never learned Hindi before? Perfect."
          description="Start from the very beginning and build your Hindi step by step."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-7">
            <h3 className="font-heading text-lg font-semibold text-foreground">
              Learn Devanagari
            </h3>
            <p className="font-devanagari text-3xl text-primary">अ आ इ ई उ ऊ</p>
          </Reveal>

          <Reveal delay={100} className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-7">
            <h3 className="font-heading text-lg font-semibold text-foreground">
              Learn Your First Words
            </h3>
            <ul className="flex flex-col gap-2">
              {firstWords.map((word) => (
                <li key={word.hindi} className="flex items-baseline justify-between gap-3">
                  <span className="font-devanagari text-xl text-primary">{word.hindi}</span>
                  <span className="text-sm text-muted-foreground">{word.meaning}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200} className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-7">
            <h3 className="font-heading text-lg font-semibold text-foreground">
              Build Your First Sentence
            </h3>
            <p className="font-devanagari text-2xl text-primary">मैं हिंदी सीख रहा हूँ।</p>
            <p className="text-sm text-muted-foreground">I am learning Hindi.</p>
          </Reveal>
        </div>

        <Reveal delay={300} className="flex justify-center">
          <Button
            size="lg"
            render={<Link href="#learning-path" />}
            nativeButton={false}
            className="bg-accent text-accent-foreground hover:bg-accent/85"
          >
            Start From the Beginning
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}
