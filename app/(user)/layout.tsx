import { type ReactNode } from "react"
import { type Metadata, type Viewport } from "next"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { metadataBase, viewportBase } from "@/config/metadata"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

interface UserLayoutProps {
  children: ReactNode
}

export const viewport: Viewport = viewportBase

export const metadata: Metadata = metadataBase

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
