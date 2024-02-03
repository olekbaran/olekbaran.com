import { type Metadata } from "next"
import { draftMode } from "next/headers"

import { routes } from "@/config/routes"
import { getAllProjects } from "@/sanity/lib/services"
import { absoluteUrl } from "@/lib/utils"
import { Heading } from "@/components/heading"
import { Projects } from "@/components/projects"
import { ProjectsPreview } from "@/components/projects-preview"

export const metadata: Metadata = {
  title: routes.projects.title,
  description:
    "Explore what I've been cooking up lately! From techy experiments to creative vibes, this is where all of the projects hang out.",
  alternates: {
    canonical: routes.projects.pathname,
  },
  openGraph: {
    title: routes.projects.title,
    description:
      "Explore what I've been cooking up lately! From techy experiments to creative vibes, this is where all of the projects hang out.",
    url: absoluteUrl(routes.projects.pathname),
  },
}

export default async function ProjectsPage() {
  const initial = await getAllProjects()

  return (
    <section className="container flex flex-col gap-16 py-16 md:pb-32">
      <Heading
        title="Projects"
        subtitle="Explore what I've been cooking up lately! From techy experiments to creative vibes, this is where all of the projects hang out."
      />
      {draftMode().isEnabled ? (
        <ProjectsPreview initial={initial} />
      ) : (
        <Projects projects={initial.data} />
      )}
    </section>
  )
}
