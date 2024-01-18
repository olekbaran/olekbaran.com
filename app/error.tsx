"use client"

import { Error as ErrorComponent } from "@/components/error"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error }: ErrorProps) {
  return (
    <section className="container flex min-h-[calc(100dvh-4rem)] flex-col items-center justify-center">
      <ErrorComponent name={error.name} message={error.message} />
    </section>
  )
}
