import { Error } from "@/components/error"

export default function NotFound() {
  return (
    <section className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center">
      <Error
        name="404"
        message="This page could not be found."
        className="mb-16"
      />
    </section>
  )
}
