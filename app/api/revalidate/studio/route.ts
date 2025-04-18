import { revalidatePath } from "next/cache"
import { type NextRequest } from "next/server"
import { parseBody } from "next-sanity/webhook"

import { routes } from "@/config/routes"
import { revalidateWebhookSecret } from "@/sanity/lib/token"

interface RevalidateWebhookBody {
  _type: string
  slug?: string
}

export const revalidate = 0

export async function POST(request: NextRequest) {
  try {
    const { body, isValidSignature } = await parseBody<RevalidateWebhookBody>(
      request,
      revalidateWebhookSecret
    )

    if (!isValidSignature) {
      return new Response("Invalid secret", { status: 401 })
    }

    if (!body?._type) {
      return new Response("Bad Request", { status: 400 })
    }

    Object.values(routes)
      .filter((route) => !route.pathname.includes("/#"))
      .forEach((route) => {
        revalidatePath(route.pathname)
      })

    if (body?._type === "project" && body.slug) {
      revalidatePath(`${routes.projects.pathname}/${body.slug}`)
      revalidatePath("/server-sitemap.xml")
    }

    return new Response("Successfull revalidation", { status: 200 })
  } catch {
    return new Response("Internal server error", { status: 500 })
  }
}
