"use client"

import { type ReactNode } from "react"
import { Slot } from "@radix-ui/react-slot"
import { type QueryParams } from "@sanity/client"
import { useQuery, type QueryResponseInitial } from "@sanity/react-loader"

interface LiveQueryDataProps<T> {
  initial: QueryResponseInitial<T>
  query: string
  params: QueryParams
  children: ReactNode
}

export function LiveQueryData<T>({
  initial,
  query,
  params = {},
  ...props
}: LiveQueryDataProps<T>) {
  const { data } = useQuery<T>(query, params, { initial })

  const previewProps = { ...props, data }

  return <Slot {...previewProps} />
}
