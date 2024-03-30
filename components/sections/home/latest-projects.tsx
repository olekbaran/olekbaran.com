import { draftMode } from "next/headers"

import { routes } from "@/config/routes"
import { SLICED_PROJECTS_QUERY } from "@/sanity/lib/queries"
import { getSlicedProjects } from "@/sanity/lib/services"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/buttons/button"
import { Link } from "@/components/nav/link"
import { ProjectsList } from "@/components/project/projects-list"
import { LiveQueryWrapper } from "@/components/studio/live-query-wrapper"
import { Heading } from "@/components/typography/heading"
import { Typography } from "@/components/typography/typography"

export async function LatestProjects() {
  const { isEnabled } = draftMode()

  const projectsLimit = 2
  const initialProjects = await getSlicedProjects(projectsLimit)

  if (initialProjects.data.length === 0) {
    return null
  }

  return (
    <section
      id="latest-projects"
      className="container flex flex-col gap-16 py-16 md:py-32"
    >
      <Heading
        title="Latest projects"
        subtitle="Check out the awesome stuff I've been up to lately. I've been working on some exciting projects that I think you'll enjoy."
      />
      <LiveQueryWrapper<Project[]>
        initial={initialProjects}
        isEnabled={isEnabled}
        params={isEnabled ? { limit: projectsLimit } : undefined}
        query={isEnabled ? SLICED_PROJECTS_QUERY : undefined}
      >
        <ProjectsList projects={initialProjects.data} />
      </LiveQueryWrapper>
      <Link
        href={routes.projects.pathname}
        className={cn(
          buttonVariants({ variant: "primary" }),
          "mx-auto block h-14 shrink-0 p-0"
        )}
      >
        <Typography variant="button" className="truncate px-14 py-3">
          Browse all projects
        </Typography>
      </Link>
    </section>
  )
}
