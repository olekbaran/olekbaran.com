import { Heading } from "@/components/heading"

export default function IndexPage() {
  return (
    <section className="flex flex-col gap-40 py-32">
      <div className="inline-flex flex-nowrap overflow-hidden">
        <div className="animate-infinite-scroll">
          <Heading className="mx-10" />
        </div>
        <div className="animate-infinite-scroll" aria-hidden>
          <Heading className="mx-10" />
        </div>
        <div className="animate-infinite-scroll" aria-hidden>
          <Heading className="mx-10" />
        </div>
      </div>
    </section>
  )
}
