"use client"

import { QueryResponseInitial, useQuery } from "@sanity/react-loader"

import { type Technology } from "@/types/sanity"
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
