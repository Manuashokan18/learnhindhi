import type { ProgressStat } from "@/types"

export const progressStats: ProgressStat[] = [
  { label: "Vocabulary", percent: 82, color: "var(--saffron)" },
  { label: "Speaking", percent: 61, color: "var(--sage)" },
  { label: "Reading", percent: 72, color: "var(--turmeric)" },
  { label: "Grammar", percent: 53, color: "var(--terracotta)" },
]

export const todaysLesson = {
  title: "Ordering Food",
  duration: "15 minutes",
  tags: ["Vocabulary", "Conversation", "Pronunciation"],
}
