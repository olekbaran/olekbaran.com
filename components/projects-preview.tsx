"use client"

import { QueryResponseInitial, useQuery } from "@sanity/react-loader"

import { type Project } from "@/types/sanity"
import { ALL_PROJECTS_QUERY } from "@/sanity/lib/queries"

import { Projects } from "./projects"

interface ProjectsPreviewProps {
  initial: QueryResponseInitial<Project[]>
}

export function ProjectsPreview({ initial }: ProjectsPreviewProps) {
  const { data } = useQuery<Project[] | null>(
    ALL_PROJECTS_QUERY,
    {},
    { initial }
  )

  return data && <Projects projects={data} />
}
