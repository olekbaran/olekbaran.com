import { draftMode } from "next/headers"
import { redirect } from "next/navigation"
import { type NextRequest } from "next/server"
import { validatePreviewUrl } from "@sanity/preview-url-secret"

import { client } from "@/sanity/lib/client"
import { token } from "@/sanity/lib/token"

const clientWithToken = client.withConfig({ token })

export async function GET(request: NextRequest) {
  const { isValid, redirectTo = "/" } = await validatePreviewUrl(
    clientWithToken,
    request.url
  )

  if (!isValid) {
    return new Response("Invalid secret", { status: 401 })
  }

  draftMode().enable()

  redirect(redirectTo)
}
