import { adminRoutes } from "./config/routes.js"
import { env } from "./env.js"

/** @type {import('next-sitemap').IConfig} */
const nextSitemapConfig = {
  siteUrl: env.NEXT_PUBLIC_APP_URL,
  generateIndexSitemap: false,
  exclude: Object.values(adminRoutes).map((route) => `${route}*`),
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
}

export default nextSitemapConfig
