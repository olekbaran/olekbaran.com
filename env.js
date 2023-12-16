import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  client: {
    NEXT_PUBLIC_APP_URL: z.string().min(1),
    NEXT_PUBLIC_ENABLE_INDEXING: z
      .string()
      .transform((s) => s !== "false" && s !== "0"),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_ENABLE_INDEXING: process.env.NEXT_PUBLIC_ENABLE_INDEXING,
  },
})
