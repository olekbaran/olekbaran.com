import { getServerSideSitemap } from "next-sitemap"

import { routes } from "@/config/routes"
import { revalidateTime } from "@/config/site"
import { client } from "@/sanity/lib/client"
import { ALL_PROJECTS_QUERY } from "@/sanity/lib/queries"
import { absoluteUrl } from "@/lib/utils"

export async function GET() {
  const projects = await client.fetch<Project[]>(
    ALL_PROJECTS_QUERY,
    {},
    { next: { revalidate: revalidateTime } }
  )

  const projectsRoute = {
    loc: absoluteUrl(routes.projects.pathname),
  }

  const projectsRoutes = projects.map((project) => ({
    loc: absoluteUrl(`${routes.projects.pathname}/${project.slug.current}`),
    lastmod: new Date(project._updatedAt).toISOString(),
  }))

  return getServerSideSitemap(
    projects.length !== 0 ? [projectsRoute, ...projectsRoutes] : []
  )
}
