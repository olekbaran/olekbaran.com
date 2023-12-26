import { Heading } from "@/components/heading"

export default function IndexPage() {
  return (
    <section className="flex flex-col gap-40 py-32">
      <div className="flex items-center gap-20 overflow-hidden">
        <Heading />
        <Heading aria-hidden />
      </div>
    </section>
  )
}
