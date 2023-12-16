import { type ReactNode } from "react"
import { type Metadata, type Viewport } from "next"
import { Syne } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import "@/styles/globals.css"

import { metadataBase, viewportBase } from "@/config/metadata"

const syne = Syne({ subsets: ["latin"] })

interface RootLayoutProps {
  children: ReactNode
}

export const viewport: Viewport = viewportBase

export const metadata: Metadata = metadataBase

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={syne.className} suppressHydrationWarning>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
