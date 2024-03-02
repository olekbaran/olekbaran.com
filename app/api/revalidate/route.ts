import { revalidatePath } from "next/cache"
import { type NextRequest } from "next/server"
import { parseBody } from "next-sanity/webhook"

import { revalidateWebhookSecret } from "@/sanity/lib/token"

export async function POST(request: NextRequest) {
  try {
    const { isValidSignature } = await parseBody(
      request,
      revalidateWebhookSecret
    )

    if (!isValidSignature) {
      return new Response("Invalid secret", { status: 401 })
    }

    revalidatePath("/", "layout")

    return new Response("Successfull revalidation", { status: 200 })
  } catch {
    return new Response("Internal server error", { status: 500 })
  }
}
