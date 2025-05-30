import { type Metadata, type Viewport } from "next"
import { metadata as studioMetadata } from "next-sanity/studio/metadata"
import { viewport as studioViewport } from "next-sanity/studio/viewport"

import { baseMetadata, baseViewport } from "@/config/metadata"
import { adminRoutes } from "@/config/routes"
import { siteConfig } from "@/config/site"
import { Studio } from "@/sanity/lib/studio"
import { absoluteUrl } from "@/lib/nav"

export const viewport: Viewport = {
  ...baseViewport,
  ...studioViewport,
}

export const metadata: Metadata = {
  metadataBase: baseMetadata.metadataBase,
  title: `Studio | ${siteConfig.name}`,
  description: `${siteConfig.name} Content Studio`,
  authors: baseMetadata.authors,
  creator: baseMetadata.creator,
  generator: baseMetadata.generator,
  applicationName: baseMetadata.applicationName,
  appleWebApp: baseMetadata.appleWebApp,
  other: baseMetadata.other,
  openGraph: {
    type: "website",
    locale: baseMetadata.openGraph?.locale,
    url: absoluteUrl(adminRoutes.studio),
    title: `Studio | ${siteConfig.name}`,
    description: `${siteConfig.name} Content Studio`,
    siteName: baseMetadata.openGraph?.siteName,
    images: baseMetadata.openGraph?.images,
  },
  twitter: baseMetadata.twitter,
  icons: baseMetadata.icons,
  manifest: baseMetadata.manifest,
  ...studioMetadata,
}

export default function StudioPage() {
  return <Studio />
}
