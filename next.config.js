import "./env.js"

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3-alpha-sig.figma.com",
      },
    ],
  },
  experimental: {
    urlImports: ["https://themer.sanity.build/"],
  },
}

export default nextConfig
