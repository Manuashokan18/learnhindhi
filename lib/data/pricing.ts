import type { PricingPlan } from "@/types"

export const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    price: "₹0",
    features: ["Beginner lessons", "Basic vocabulary", "Hindi alphabet", "Daily practice"],
    cta: "Start Free",
  },
  {
    id: "learner",
    name: "Learner",
    price: "₹499",
    period: "/month",
    features: [
      "Full course access",
      "Vocabulary practice",
      "Pronunciation",
      "Conversations",
      "Progress tracking",
    ],
    cta: "Start Learning",
    highlighted: true,
  },
  {
    id: "lifetime",
    name: "Lifetime",
    price: "₹4,999",
    features: [
      "Full platform access",
      "All current lessons",
      "Future lessons",
      "Conversation practice",
      "Progress tracking",
    ],
    cta: "Get Lifetime Access",
  },
]
