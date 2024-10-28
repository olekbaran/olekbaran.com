import { revalidatePath } from "next/cache"
import { type NextRequest } from "next/server"

import { env } from "@/env"
import { routes } from "@/config/routes"
import { client } from "@/sanity/lib/client"
import { ALL_PROJECTS_QUERY } from "@/sanity/lib/queries"

export const revalidate = 0

export async function GET(request: NextRequest) {
  try {
    const secret = request.headers.get("Authorization")

    if (secret !== `Bearer ${env.CRON_SECRET}`) {
      return new Response("Invalid secret", { status: 401 })
    }

    Object.values(routes)
      .filter((route) => !route.pathname.includes("/#"))
      .forEach((route) => {
        revalidatePath(route.pathname)
      })

    const projects = await client.fetch<Project[]>(ALL_PROJECTS_QUERY)

    projects.forEach((project) => {
      revalidatePath(`${routes.projects.pathname}/${project.slug.current}`)
    })

    revalidatePath("/server-sitemap.xml")

    return new Response("Successfull revalidation", { status: 200 })
  } catch {
    return new Response("Internal server error", { status: 500 })
  }
}
