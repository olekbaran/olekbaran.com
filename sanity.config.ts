import { visionTool } from "@sanity/vision"
import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"

import { Icon } from "./components/icon"
import { siteConfig } from "./config/site"
import { apiVersion, dataset, projectId } from "./sanity/env"
import { schema } from "./sanity/schema"

export default defineConfig({
  basePath: "/studio",
  name: "studio",
  title: `${siteConfig.name}`,
  subtitle: "Content Studio",
  icon: Icon,
  projectId,
  dataset,
  schema,
  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
})
