"use client"

import { Error as ErrorSection } from "@/components/sections/common/error"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error }: ErrorProps) {
  return <ErrorSection name={error.name} message={error.message} />
}
