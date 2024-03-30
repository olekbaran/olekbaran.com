/** @type {import('next-sitemap').IConfig} */
const nextSitemapConfig = {
  siteUrl: process.env.NEXT_PUBLIC_APP_URL,
  generateIndexSitemap: false,
  exclude: ["/server-sitemap.xml", "/projects"],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_APP_URL}/server-sitemap.xml`,
    ],
  },
}

export default nextSitemapConfig
