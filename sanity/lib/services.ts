import { draftMode } from "next/headers"

import {
  ALL_PROJECTS_QUERY,
  SLICED_PROJECTS_QUERY,
  TECHNOLOGIES_QUERY,
  WORK_EXPERIENCE_QUERY,
} from "@/sanity/lib/queries"
import { loadQuery } from "@/sanity/lib/store"

export async function getAllProjects() {
  const initial = await loadQuery<Project[]>(
    ALL_PROJECTS_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  )

  return initial
}

export async function getSlicedProjects(limit: number) {
  const initial = await loadQuery<Project[]>(
    SLICED_PROJECTS_QUERY,
    {
      limit,
    },
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  )

  return initial
}

export async function getTechnologies() {
  const initial = await loadQuery<Technology[]>(
    TECHNOLOGIES_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  )

  return initial
}

export async function getWorkExperience() {
  const initial = await loadQuery<WorkExperience[]>(
    WORK_EXPERIENCE_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  )

  return initial
}
