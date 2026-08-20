"use client"

import { useState } from "react"
import { Volume2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface AudioButtonProps {
  text: string
  label?: string
  className?: string
}

export function AudioButton({ text, label = "Listen", className }: AudioButtonProps) {
  const [speaking, setSpeaking] = useState(false)

  function handlePlay() {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setSpeaking(true)
      setTimeout(() => setSpeaking(false), 600)
      return
    }

    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = "hi-IN"
    utterance.rate = 0.9
    utterance.onstart = () => setSpeaking(true)
    utterance.onend = () => setSpeaking(false)
    utterance.onerror = () => setSpeaking(false)
    window.speechSynthesis.speak(utterance)
  }

  return (
    <button
      type="button"
      onClick={handlePlay}
      aria-label={`${label} to pronunciation of ${text}`}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        speaking && "border-accent text-accent",
        className,
      )}
    >
      <Volume2 className={cn("size-3.5", speaking && "animate-pulse")} aria-hidden="true" />
      {label}
    </button>
  )
}
