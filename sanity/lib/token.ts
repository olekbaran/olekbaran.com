import "server-only"

import { experimental_taintUniqueValue } from "react"

import { env } from "@/env"

export const token = env.SANITY_API_READ_TOKEN
export const revalidateWebhookSecret = env.SANITY_REVALIDATE_WEBHOOK_SECRET

experimental_taintUniqueValue(
  "Do not pass the Sanity API read token to the client.",
  process,
  token
)

experimental_taintUniqueValue(
  "Do not pass the Sanity revalidate webhook secret to the client.",
  process,
  revalidateWebhookSecret
)
