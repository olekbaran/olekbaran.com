import { type MetadataRoute } from "next"

import { routes } from "@/config/routes"
import { revalidateTime } from "@/config/site"
import { client } from "@/sanity/lib/client"
import { ALL_PROJECTS_QUERY } from "@/sanity/lib/queries"
import { absoluteUrl } from "@/lib/utils"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = Object.values(routes)
    .filter((route) => !route.pathname.includes("/#"))
    .map((route) => ({
      url: absoluteUrl(route.pathname),
      lastModified: new Date(),
    }))

  const projects = await client.fetch<Project[]>(
    ALL_PROJECTS_QUERY,
    {},
    { next: { revalidate: revalidateTime } }
  )

  const projectsRoutes = projects.map((project) => ({
    url: absoluteUrl(`${routes.projects.pathname}/${project.slug.current}`),
    lastModified: new Date(project._updatedAt),
  }))

  return [...staticRoutes, ...projectsRoutes]
}
