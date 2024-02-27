"use client"

import { Error as ErrorComponent } from "@/components/sections/error"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error }: ErrorProps) {
  return (
    <section className="container flex min-h-[100dvh] flex-col items-center justify-center">
      <ErrorComponent name={error.name} message={error.message} />
    </section>
  )
}
