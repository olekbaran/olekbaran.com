import { type Metadata } from "next"

import { baseMetadata } from "@/config/metadata"
import { routes } from "@/config/routes"
import { absoluteUrl } from "@/lib/utils"
import { WorkExperience } from "@/components/sections/about/work-experience"
import { Hero } from "@/components/sections/home/hero"

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
