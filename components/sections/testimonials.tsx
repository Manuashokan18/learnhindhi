"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Container } from "@/components/common/container"
import { SectionHeading } from "@/components/common/section-heading"
import { Reveal } from "@/components/common/reveal"
import { TestimonialCard } from "@/components/cards/testimonial-card"
import { Button } from "@/components/ui/button"
import { testimonials } from "@/lib/data/testimonials"

export function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  function scrollByCard(direction: 1 | -1) {
    const node = scrollerRef.current
    if (!node) return
    node.scrollBy({ left: direction * 340, behavior: "smooth" })
  }

  return (
    <section className="py-16 sm:py-32">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading align="left" title={'From "Namaste" to real conversations.'} />
          <div className="hidden gap-2 sm:flex">
            <Button
              variant="outline"
              size="icon-sm"
              aria-label="Previous testimonials"
              onClick={() => scrollByCard(-1)}
            >
              <ChevronLeft className="size-4" aria-hidden="true" />
            </Button>
            <Button
              variant="outline"
              size="icon-sm"
              aria-label="Next testimonials"
              onClick={() => scrollByCard(1)}
            >
              <ChevronRight className="size-4" aria-hidden="true" />
            </Button>
          </div>
        </div>

        <Reveal>
          <div
            ref={scrollerRef}
            className="no-scrollbar flex snap-x gap-5 overflow-x-auto pb-4"
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-80 shrink-0 snap-start">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
