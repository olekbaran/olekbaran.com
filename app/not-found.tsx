import { Error } from "@/components/error"

export default function NotFound() {
  return (
    <section className="container flex min-h-[calc(100dvh-4rem)] flex-col items-center justify-center">
      <Error name="404" message="This page could not be found." />
    </section>
  )
}
