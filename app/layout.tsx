import { type ReactNode } from "react"
import { type Metadata, type Viewport } from "next"
import { Syne } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { metadataBase, viewportBase } from "@/config/metadata"
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
    <html lang="en" className={syne.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div>
          <Header />
          <main className="min-h-[calc(100vh-4rem)]">{children}</main>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
