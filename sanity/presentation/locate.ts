import { map } from "rxjs"
import { type DocumentLocationResolver } from "sanity/presentation"

import { routes } from "@/config/routes"

export const locate: DocumentLocationResolver = (params, context) => {
  if (params.type === "company") {
    return {
      locations: [
        {
          title: routes.about.title,
          href: routes.about.pathname,
        },
      ],
    }
  }

  if (params.type === "project") {
    const doc$ = context.documentStore.listenQuery(
      `*[_id == $id][0]{slug,title}`,
      params,
      {
        perspective: "previewDrafts",
      }
    )

    return doc$.pipe(
      map((doc) => {
        if (!doc || !doc.slug?.current) {
          return null
        }

        return {
          locations: [
            {
              title: routes.home.title,
              href: routes.home.pathname,
            },
            {
              title: routes.projects.title,
              href: routes.projects.pathname,
            },
            {
              title: doc.title || "Untitled",
              href: `${routes.projects.pathname}/${doc.slug.current}`,
            },
          ],
        }
      })
    )
  }

  if (params.type === "technology") {
    return {
      locations: [
        {
          title: routes.home.title,
          href: routes.home.pathname,
        },
      ],
    }
  }

  if (params.type === "workExperience") {
    return {
      locations: [
        {
          title: routes.about.title,
          href: routes.about.pathname,
        },
      ],
    }
  }

  return null
}
