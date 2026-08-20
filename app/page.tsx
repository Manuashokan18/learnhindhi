import { Hero } from "@/components/sections/hero"
import { Introduction } from "@/components/sections/introduction"
import { ConversationDemo } from "@/components/sections/conversation-demo"
import { Features } from "@/components/sections/features"
import { LearningPath } from "@/components/sections/learning-path"
import { BeginnerSection } from "@/components/sections/beginner-section"
import { DevanagariSection } from "@/components/sections/devanagari-section"
import { VocabularySection } from "@/components/sections/vocabulary-section"
import { RealLifeSection } from "@/components/sections/real-life-section"
import { ProgressSection } from "@/components/sections/progress-section"
import { DailyLearningSection } from "@/components/sections/daily-learning-section"
import { CultureSection } from "@/components/sections/culture-section"
import { Testimonials } from "@/components/sections/testimonials"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Pricing } from "@/components/sections/pricing"
import { FAQSection } from "@/components/sections/faq-section"
import { FinalCTA } from "@/components/sections/final-cta"

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <ConversationDemo />
      <Features />
      <LearningPath />
      <BeginnerSection />
      <DevanagariSection />
      <VocabularySection />
      <RealLifeSection />
      <ProgressSection />
      <DailyLearningSection />
      <CultureSection />
      <Testimonials />
      <HowItWorks />
      <Pricing />
      <FAQSection />
      <FinalCTA />
    </>
  )
}
