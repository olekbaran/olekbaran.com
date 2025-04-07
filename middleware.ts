import {
  createMiddleware,
  defaults,
  withVercelToolbar,
  type NoseconeOptions,
} from "@nosecone/next"

import { env } from "./env"

const noseconeConfig: NoseconeOptions = {
  ...defaults,
  contentSecurityPolicy: {
    ...defaults.contentSecurityPolicy,
    directives: {
      ...defaults.contentSecurityPolicy.directives,
      imgSrc: [
        ...defaults.contentSecurityPolicy.directives.imgSrc,
        "https://cdn.sanity.io",
        "https://avatars.githubusercontent.com",
      ],
      scriptSrc: [
        ...defaults.contentSecurityPolicy.directives.scriptSrc,
        "https://va.vercel-scripts.com",
        `https://${env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io`,
      ],
      connectSrc: [
        ...defaults.contentSecurityPolicy.directives.connectSrc,
        "https://va.vercel-scripts.com",
        `https://${env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io`,
        `wss://${env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io`,
      ],
    },
  },
  crossOriginEmbedderPolicy: {
    policy: "unsafe-none",
  },
} as const

const noseconeMiddleware = createMiddleware(
  process.env.VERCEL_ENV === "preview"
    ? withVercelToolbar(noseconeConfig)
    : noseconeConfig
)

export default noseconeMiddleware
