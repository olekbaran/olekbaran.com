import { type Metadata, type Viewport } from "next"
import { draftMode } from "next/headers"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { baseMetadata, baseViewport } from "@/config/metadata"
import { ALL_PROJECTS_QUERY } from "@/sanity/lib/queries"
import { getAllProjects } from "@/sanity/lib/services"
import { Footer } from "@/components/common/footer"
import { Header } from "@/components/common/header"
import { LiveQueryWrapper } from "@/components/studio/live-query-wrapper"

interface UserLayoutProps {
  children: React.ReactNode
}

export const viewport: Viewport = baseViewport

export const metadata: Metadata = baseMetadata

export default async function UserLayout({ children }: UserLayoutProps) {
  const { isEnabled } = draftMode()
  const initialProjects = await getAllProjects()

  return (
    <>
      <LiveQueryWrapper<Project[]>
        initial={initialProjects}
        isEnabled={isEnabled}
        query={isEnabled ? ALL_PROJECTS_QUERY : undefined}
      >
        <Header disableProjectsRoute={initialProjects.data.length === 0} />
      </LiveQueryWrapper>
      <main className="flex-1">{children}</main>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  )
}
