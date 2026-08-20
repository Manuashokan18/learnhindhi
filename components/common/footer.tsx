import Link from "next/link"
import { Container } from "@/components/common/container"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  Learn: ["Courses", "Vocabulary", "Conversations", "Devanagari", "Practice"],
  Resources: ["Hindi Basics", "Grammar", "Pronunciation", "Blog", "FAQ"],
  Company: ["About", "Contact", "Pricing"],
  Legal: ["Privacy", "Terms"],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 flex flex-col gap-3 lg:col-span-1">
            <span className="font-heading text-lg font-semibold text-foreground">
              Learn Hindi With Me
            </span>
            <p className="max-w-xs text-sm text-muted-foreground">
              Learn Hindi through practical lessons, conversations, vocabulary, and culture.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="flex flex-col gap-3">
              <span className="text-sm font-semibold text-foreground">{heading}</span>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-10" />

        <p className="text-sm text-muted-foreground">
          © 2026 Learn Hindi With Me. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
