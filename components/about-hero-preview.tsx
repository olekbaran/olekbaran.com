"use client"

import { useQuery, type QueryResponseInitial } from "@sanity/react-loader"

import { WORK_EXPERIENCE_QUERY } from "@/sanity/lib/queries"

import { AboutHero } from "./about-hero"

interface AboutHeroPreviewProps {
  initial: QueryResponseInitial<WorkExperience[]>
}

export function AboutHeroPreview({ initial }: AboutHeroPreviewProps) {
  const { data } = useQuery<WorkExperience[] | null>(
    WORK_EXPERIENCE_QUERY,
    {},
    { initial }
  )

  return data && <AboutHero workExperience={data} />
}
