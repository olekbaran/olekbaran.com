import { type Metadata } from "next"
import { draftMode } from "next/headers"

import { baseMetadata } from "@/config/metadata"
import { routes } from "@/config/routes"
import { ALL_PROJECTS_QUERY } from "@/sanity/lib/queries"
import { getAllProjects } from "@/sanity/lib/services"
import { absoluteUrl } from "@/lib/utils"
import { Projects } from "@/components/sections/projects"
import { LiveQueryWrapper } from "@/components/studio/live-query-wrapper"
import { Heading } from "@/components/typography/heading"

export const metadata: Metadata = {
  title: routes.projects.title,
  description:
    "Explore what I've been cooking up lately! From techy experiments to creative vibes, this is where all of the projects hang out.",
  alternates: {
    canonical: routes.projects.pathname,
  },
  openGraph: {
    ...baseMetadata.openGraph,
    title: routes.projects.title,
    description:
      "Explore what I've been cooking up lately! From techy experiments to creative vibes, this is where all of the projects hang out.",
    url: absoluteUrl(routes.projects.pathname),
  },
}

export default async function ProjectsPage() {
  const { isEnabled } = draftMode()
  const initialProjects = await getAllProjects()

  return (
    <section className="container flex flex-col gap-16 py-16 md:pb-32">
      <Heading
        title="Projects"
        subtitle="Explore what I've been cooking up lately! From techy experiments to creative vibes, this is where all of the projects hang out."
      />
      <LiveQueryWrapper<Project[]>
        initial={initialProjects}
        isEnabled={isEnabled}
        query={isEnabled ? ALL_PROJECTS_QUERY : undefined}
      >
        <Projects projects={initialProjects.data} />
      </LiveQueryWrapper>
    </section>
  )
}
