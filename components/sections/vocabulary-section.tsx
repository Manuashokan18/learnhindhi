"use client"

import { useState } from "react"
import { Container } from "@/components/common/container"
import { SectionHeading } from "@/components/common/section-heading"
import { Reveal } from "@/components/common/reveal"
import { VocabularyCard } from "@/components/cards/vocabulary-card"
import { cn } from "@/lib/utils"
import { vocabularyCategories } from "@/lib/data/vocabulary"

export function VocabularySection() {
  const [activeCategory, setActiveCategory] = useState(vocabularyCategories[0].id)
  const active = vocabularyCategories.find((category) => category.id === activeCategory)!

  return (
    <section id="vocabulary" className="py-16 sm:py-32">
      <Container className="flex flex-col gap-12">
        <SectionHeading title="Build a vocabulary that sticks." />

        <div
          role="tablist"
          aria-label="Vocabulary categories"
          className="flex flex-wrap justify-center gap-2"
        >
          {vocabularyCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={category.id === activeCategory}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                category.id === activeCategory
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:text-foreground",
              )}
            >
              <span aria-hidden="true">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" role="tabpanel">
          {active.words.map((word, index) => (
            <Reveal key={word.id} delay={(index % 4) * 60}>
              <VocabularyCard {...word} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
