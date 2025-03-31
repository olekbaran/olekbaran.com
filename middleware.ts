import {
  createMiddleware,
  defaults,
  withVercelToolbar,
  type NoseconeOptions,
} from "@nosecone/next"

const noseconeConfig: NoseconeOptions = {
  ...defaults,
  contentSecurityPolicy: {
    ...defaults.contentSecurityPolicy,
    directives: {
      ...defaults.contentSecurityPolicy.directives,
      scriptSrc: [
        ...defaults.contentSecurityPolicy.directives.scriptSrc,
        "https://va.vercel-scripts.com",
      ],
      connectSrc: [
        ...defaults.contentSecurityPolicy.directives.connectSrc,
        "https://va.vercel-scripts.com",
      ],
    },
  },
} as const

const noseconeMiddleware = createMiddleware(
  process.env.VERCEL_ENV === "preview"
    ? withVercelToolbar(noseconeConfig)
    : noseconeConfig
)

export default noseconeMiddleware
