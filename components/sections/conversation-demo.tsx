"use client"

import { useState } from "react"
import { Mic, RotateCcw } from "lucide-react"
import { Container } from "@/components/common/container"
import { SectionHeading } from "@/components/common/section-heading"
import { Reveal } from "@/components/common/reveal"
import { ConversationBubble } from "@/components/cards/conversation-bubble"
import { Button } from "@/components/ui/button"
import { sampleConversation } from "@/lib/data/conversation"

export function ConversationDemo() {
  const [practicing, setPracticing] = useState(false)
  const [round, setRound] = useState(0)

  return (
    <section id="conversation" className="py-16 sm:py-32">
      <Container className="flex flex-col gap-8 sm:gap-14">
        <SectionHeading eyebrow="Real conversations" title="Start with a conversation." />

        <Reveal className="mx-auto flex w-full max-w-2xl flex-col gap-6 rounded-3xl border border-border bg-secondary/40 p-6 sm:p-10">
          <div key={round} className="flex flex-col gap-6">
            {sampleConversation.map((line, index) => (
              <ConversationBubble key={index} {...line} />
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 border-t border-border pt-6">
            <Button
              variant={practicing ? "default" : "outline"}
              className={practicing ? "bg-accent text-accent-foreground hover:bg-accent/85" : undefined}
              onClick={() => setPracticing((prev) => !prev)}
            >
              <Mic className={practicing ? "size-4 animate-pulse" : "size-4"} aria-hidden="true" />
              {practicing ? "Listening..." : "Practice"}
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                setPracticing(false)
                setRound((prev) => prev + 1)
              }}
            >
              <RotateCcw className="size-4" aria-hidden="true" />
              Try again
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
