import { Slot } from "@radix-ui/react-slot"
import { type QueryParams } from "@sanity/client"
import { type QueryResponseInitial } from "@sanity/react-loader"

import { LiveQueryData } from "@/components/studio/live-query-data"

interface LiveQueryWrapperProps<T> {
  initial: QueryResponseInitial<T>
  isEnabled?: boolean
  query?: string
  params?: QueryParams
  children: React.ReactNode
}

export function LiveQueryWrapper<T>({
  initial,
  isEnabled = false,
  query,
  params = {},
  children,
  ...props
}: LiveQueryWrapperProps<T>) {
  if (!isEnabled || !query) {
    const nonPreviewProps = { ...props, data: initial.data }

    return <Slot {...nonPreviewProps}>{children}</Slot>
  }

  return (
    <LiveQueryData<T> initial={initial} query={query} params={params}>
      {children}
    </LiveQueryData>
  )
}
