import { visionTool } from "@sanity/vision"
import { theme } from "https://themer.sanity.build/api/hues?default=888888&primary=0a84ff&transparent=888888&positive=30d158;400&caution=ffd60a;300&critical=ff453a&lightest=ededed&darkest=000000"
import { defineConfig } from "sanity"
import { presentationTool } from "sanity/presentation"
import { structureTool } from "sanity/structure"

import { Icon } from "./components/common/icon"
import { adminRoutes, apiRoutes } from "./config/routes"
import { siteConfig } from "./config/site"
import { apiVersion, dataset, projectId } from "./sanity/env"
import { locate } from "./sanity/presentation/locate"
import { schema } from "./sanity/schema"

export default defineConfig({
  basePath: adminRoutes.studio,
  name: "studio",
  title: `${siteConfig.name}`,
  subtitle: "Content Studio",
  icon: Icon,
  theme,
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool(),
    visionTool({ defaultApiVersion: apiVersion }),
    presentationTool({
      locate,
      previewUrl: {
        draftMode: {
          enable: apiRoutes.draft,
        },
      },
    }),
  ],
})
