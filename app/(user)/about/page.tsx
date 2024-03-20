import { type Metadata } from "next"

import { baseMetadata } from "@/config/metadata"
import { routes } from "@/config/routes"
import { absoluteUrl } from "@/lib/utils"
import { Hero } from "@/components/sections/about/hero"
import { WorkExperience } from "@/components/sections/about/work-experience"

export const metadata: Metadata = {
  title: routes.about.title,
  alternates: {
    canonical: routes.about.pathname,
  },
  openGraph: {
    ...baseMetadata.openGraph,
    title: routes.about.title,
    url: absoluteUrl(routes.about.pathname),
  },
}

export default async function AboutPage() {
  return (
    <>
      <Hero />
      <WorkExperience />
    </>
  )
}
