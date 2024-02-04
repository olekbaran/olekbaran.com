"use client"

import { useQuery, type QueryResponseInitial } from "@sanity/react-loader"

import { TECHNOLOGIES_QUERY } from "@/sanity/lib/queries"

import { TechStack } from "./tech-stack"

interface TechStackPreviewProps {
  initial: QueryResponseInitial<Technology[]>
}

export function TechStackPreview({ initial }: TechStackPreviewProps) {
  const { data } = useQuery<Technology[] | null>(
    TECHNOLOGIES_QUERY,
    {},
    { initial }
  )

  return data && <TechStack technologies={data} />
}
