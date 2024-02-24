import { type MetadataRoute } from "next"

import { adminRoutes } from "@/config/routes"
import { absoluteUrl } from "@/lib/utils"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: Object.values(adminRoutes).map((route) => route),
    },
    sitemap: absoluteUrl("/sitemap.xml"),
  }
}
