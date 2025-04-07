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
        "https://vercel.com",
        "https://vercel.live",
        "https://cdn.sanity.io",
        "https://avatars.githubusercontent.com",
      ],
      scriptSrc: [
        ...defaults.contentSecurityPolicy.directives.scriptSrc,
        "https://vercel.live",
        "https://va.vercel-scripts.com",
        `https://${env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io`,
      ],
      connectSrc: [
        ...defaults.contentSecurityPolicy.directives.connectSrc,
        "https://vercel.live",
        "https://va.vercel-scripts.com",
        `https://${env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io`,
        `wss://${env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io`,
        "wss://ws-us3.pusher.com",
      ],
      styleSrc: [
        ...defaults.contentSecurityPolicy.directives.styleSrc,
        "https://vercel.live",
      ],
      fontSrc: [
        ...defaults.contentSecurityPolicy.directives.fontSrc,
        "https://vercel.live",
        "https://assets.vercel.com",
      ],
      frameSrc: ["https://vercel.live"],
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
