import type React from "react"
import { Playfair_Display } from "next/font/google"
import "./globals.css"

import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/context/cart-context"
import { Toaster } from "@/components/ui/toaster"

// Load Playfair Display font
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata = {
  title: "KNIT+ | Sustainable Fashion",
  description: "Own the Style, Not the Stuff - Sustainable fashion rental from KNIT+",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <CartProvider>
            {/* Header with integrated ribbon */}
            <SiteHeader />

            {/* Main content with adjusted padding for header */}
            <main className="pt-24">{children}</main>

            <Footer />

            <Toaster />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
