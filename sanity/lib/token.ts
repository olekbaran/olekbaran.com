import "server-only"

import { experimental_taintUniqueValue } from "react"

import { env } from "@/env"

export const token = env.SANITY_API_READ_TOKEN

experimental_taintUniqueValue(
  "Do not pass the sanity API read token to the client.",
  process,
  token
)
