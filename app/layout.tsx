import type { Metadata } from "next"
import { Geist, Geist_Mono, Noto_Sans_Devanagari } from "next/font/google"
import { Navbar } from "@/components/common/navbar"
import { Footer } from "@/components/common/footer"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const notoSansDevanagari = Noto_Sans_Devanagari({
  variable: "--font-noto-devanagari",
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Learn Hindi With Me — Learn Hindi the way people actually speak it",
  description:
    "Build confidence in Hindi through real conversations, practical vocabulary, pronunciation practice, and everyday situations. Beginner friendly, learn at your pace.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSansDevanagari.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
