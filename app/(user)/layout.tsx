import { type Metadata, type Viewport } from "next"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { VercelToolbar } from "@vercel/toolbar/next"

import { baseMetadata, baseViewport } from "@/config/metadata"
import { getAllProjects } from "@/sanity/lib/services"
import { Footer } from "@/components/common/footer"
import { Header } from "@/components/common/header"
import { SmoothScroll } from "@/components/utils/smooth-scroll"

import "lenis/dist/lenis.css"

interface UserLayoutProps {
  children: React.ReactNode
}

export const viewport: Viewport = baseViewport

export const metadata: Metadata = baseMetadata

export default async function UserLayout({ children }: UserLayoutProps) {
  const shouldInjectToolbar = process.env.NODE_ENV === "development"

  const { data } = await getAllProjects()

  return (
    <SmoothScroll root>
      <Header disableProjectsRoute={data.length === 0} />
      <main className="flex-1">{children}</main>
      <Footer />
      <Analytics />
      <SpeedInsights />
      {shouldInjectToolbar && <VercelToolbar />}
    </SmoothScroll>
  )
}
