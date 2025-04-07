import { codecovWebpackPlugin } from "@codecov/webpack-plugin"
import { withVercelToolbar } from "@vercel/toolbar/plugins/next"

import "./env.js"

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  experimental: {
    taint: true,
    urlImports: ["https://themer.sanity.build/"],
  },
  webpack: (config) => {
    config.plugins.push(
      codecovWebpackPlugin({
        enableBundleAnalysis: process.env.CODECOV_TOKEN !== undefined,
        bundleName: "olekbaran.com-bundle",
        uploadToken: process.env.CODECOV_TOKEN,
      })
    )

    return config
  },
}

export default withVercelToolbar()(nextConfig)
