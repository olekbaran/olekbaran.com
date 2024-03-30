import { type Metadata } from "next"
import { draftMode } from "next/headers"
import { notFound } from "next/navigation"

import { baseMetadata } from "@/config/metadata"
import { routes } from "@/config/routes"
import { revalidateTime } from "@/config/site"
import { client } from "@/sanity/lib/client"
import { ALL_PROJECTS_QUERY } from "@/sanity/lib/queries"
import { getAllProjects } from "@/sanity/lib/services"
import { absoluteUrl } from "@/lib/utils"
import { ProjectsList } from "@/components/project/projects-list"
import { LiveQueryWrapper } from "@/components/studio/live-query-wrapper"
import { Heading } from "@/components/typography/heading"

export async function generateMetadata(): Promise<Metadata> {
  const projects = await client.fetch<Project[]>(
    ALL_PROJECTS_QUERY,
    {},
    {
      next: {
        revalidate: revalidateTime,
      },
    }
  )

  if (projects.length === 0) {
    return {}
  }

  return {
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
}

export default async function ProjectsPage() {
  const { isEnabled } = draftMode()
  const initialProjects = await getAllProjects()

  if (initialProjects.data.length === 0) {
    notFound()
  }

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
        <ProjectsList projects={initialProjects.data} />
      </LiveQueryWrapper>
    </section>
  )
}
