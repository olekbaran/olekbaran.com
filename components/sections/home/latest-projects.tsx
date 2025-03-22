import { routes } from "@/config/routes"
import { getSlicedProjects } from "@/sanity/lib/services"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/buttons/button"
import { Link } from "@/components/nav/link"
import { ProjectsList } from "@/components/project/projects-list"
import { Heading } from "@/components/typography/heading"
import { Typography } from "@/components/typography/typography"

export async function LatestProjects() {
  const projectsLimit = 2

  const { data } = await getSlicedProjects(projectsLimit)

  if (data.length === 0) {
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
      <ProjectsList projects={data} />
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
