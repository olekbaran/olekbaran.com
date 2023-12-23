import { env } from "./env.js"

/** @type {import('next-sitemap').IConfig} */
const nextSitemapConfig = {
  siteUrl: env.NEXT_PUBLIC_APP_URL,
  generateIndexSitemap: false,
  exclude: ["/studio*"],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/studio",
      },
    ],
  },
}

export default nextSitemapConfig
