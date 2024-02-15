import { createClient } from "@sanity/client/stega"

import { adminRoutes } from "@/config/routes"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  perspective: "published",
  stega: {
    enabled: false,
    studioUrl: adminRoutes.studio,
  },
})
