export interface HindiPhrase {
  hindi: string
  transliteration: string
  meaning: string
}

export interface VocabularyWord extends HindiPhrase {
  id: string
}

export interface VocabularyCategory {
  id: string
  label: string
  icon: string
  words: VocabularyWord[]
}

export interface ConversationLine extends HindiPhrase {
  speaker: "teacher" | "you"
}

export interface Feature {
  id: string
  title: string
  description: string
  icon: string
}

export interface LearningStage {
  id: string
  number: string
  title: string
  description: string
}

export interface DevanagariRow {
  label: string
  letters: string[]
}

export interface Scenario {
  id: string
  situation: string
  hindi: string
  transliteration: string
  meaning: string
}

export interface CultureTopic {
  id: string
  title: string
  hindi: string
  description: string
}

export interface Testimonial {
  id: string
  quote: string
  name: string
  detail: string
  initials: string
}

export interface PricingPlan {
  id: string
  name: string
  price: string
  period?: string
  features: string[]
  cta: string
  highlighted?: boolean
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export interface HowItWorksStep {
  id: string
  number: string
  title: string
}

export interface ProgressStat {
  label: string
  percent: number
  color: string
}
