import { revalidateTime } from "@/config/site"
import {
  ALL_PROJECTS_QUERY,
  PROJECT_QUERY,
  SLICED_PROJECTS_QUERY,
  TECHNOLOGIES_QUERY,
  WORK_EXPERIENCE_QUERY,
} from "@/sanity/lib/queries"
import { loadQuery } from "@/sanity/lib/store"

export async function getAllProjects() {
  const response = await loadQuery<Project[]>(
    ALL_PROJECTS_QUERY,
    {},
    {
      next: {
        revalidate: revalidateTime,
      },
    }
  )

  return response
}

export async function getSlicedProjects(limit: number) {
  const response = await loadQuery<Project[]>(
    SLICED_PROJECTS_QUERY,
    {
      limit,
    },
    {
      next: {
        revalidate: revalidateTime,
      },
    }
  )

  return response
}

export async function getProject(slug: string) {
  const response = await loadQuery<Project>(
    PROJECT_QUERY,
    {
      slug,
    },
    {
      next: {
        revalidate: revalidateTime,
      },
    }
  )

  return response
}

export async function getTechnologies() {
  const response = await loadQuery<Technology[]>(
    TECHNOLOGIES_QUERY,
    {},
    {
      next: {
        revalidate: revalidateTime,
      },
    }
  )

  return response
}

export async function getWorkExperience() {
  const response = await loadQuery<WorkExperience[]>(
    WORK_EXPERIENCE_QUERY,
    {},
    {
      next: {
        revalidate: revalidateTime,
      },
    }
  )

  return response
}
