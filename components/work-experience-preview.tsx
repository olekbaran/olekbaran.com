"use client"

import { useQuery, type QueryResponseInitial } from "@sanity/react-loader"

import { WORK_EXPERIENCE_QUERY } from "@/sanity/lib/queries"

import { WorkExperience } from "./work-experience"

interface WorkExperiencePreviewProps {
  initial: QueryResponseInitial<WorkExperience[]>
}

export function WorkExperiencePreview({ initial }: WorkExperiencePreviewProps) {
  const { data } = useQuery<WorkExperience[] | null>(
    WORK_EXPERIENCE_QUERY,
    {},
    { initial }
  )

  return data && <WorkExperience workExperience={data} />
}
