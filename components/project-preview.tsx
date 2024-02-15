"use client"

import { useQuery, type QueryResponseInitial } from "@sanity/react-loader"
import { type QueryParams } from "next-sanity"

import { PROJECT_QUERY } from "@/sanity/lib/queries"

import { Project } from "./project"

interface ProjectPreviewProps {
  initial: QueryResponseInitial<Project>
  params: QueryParams
}

export function ProjectPreview({ initial, params }: ProjectPreviewProps) {
  const { data } = useQuery<Project | null>(PROJECT_QUERY, params, { initial })

  return (
    data && (
      <Project
        title={data.title}
        industry={data.industry}
        date={data.date}
        isOpenSourceContribution={data.isOpenSourceContribution}
        repository={data.repository}
        demo={data.demo}
        technologies={data.technologies}
        mainImage={data.mainImage}
        images={data.images}
        overview={data.overview}
      />
    )
  )
}
