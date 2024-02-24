import { type Metadata, type Viewport } from "next"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { baseMetadata, baseViewport } from "@/config/metadata"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

interface UserLayoutProps {
  children: React.ReactNode
}

export const viewport: Viewport = baseViewport

export const metadata: Metadata = baseMetadata

export default function UserLayout({ children }: UserLayoutProps) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  )
}
