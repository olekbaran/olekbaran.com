import { type Metadata, type Viewport } from "next"

import { env } from "@/env"

import { routes } from "./routes"
import { siteConfig } from "./site"

export const viewportBase: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
}

export const metadataBase: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Front-end Developer", "React Developer", "React", "Next.js"],
  category: "personal page",
  alternates: {
    canonical: routes.home.path,
  },
  authors: {
    name: "Olek Baran",
    url: "https://olekbaran.com",
  },
  creator: "Olek Baran",
  generator: "Next.js",
  applicationName: siteConfig.name,
  appleWebApp: {
    title: siteConfig.name,
    capable: true,
    statusBarStyle: "default",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@olekbaran",
  },
  icons: {
    icon: "/icons/favicon.ico",
    shortcut: "/icons/favicon-16x16.png",
    apple: "/icons/apple-touch-icon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/icons/safari-pinned-tab.svg",
        color: "#000000",
      },
    ],
  },
  manifest: "/site.webmanifest",
  robots: {
    follow: env.NEXT_PUBLIC_ENABLE_INDEXING,
    index: env.NEXT_PUBLIC_ENABLE_INDEXING,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
    googleBot: {
      index: env.NEXT_PUBLIC_ENABLE_INDEXING,
      follow: env.NEXT_PUBLIC_ENABLE_INDEXING,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}
