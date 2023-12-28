import { type ReactNode } from "react"
import { type Metadata, type Viewport } from "next"
import { Syne } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { metadataBase, viewportBase } from "@/config/metadata"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

import "@/styles/globals.css"

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" })

interface RootLayoutProps {
  children: ReactNode
}

export const viewport: Viewport = viewportBase

export const metadata: Metadata = metadataBase

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={syne.variable} suppressHydrationWarning>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
