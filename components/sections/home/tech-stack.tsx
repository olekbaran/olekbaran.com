import { getTechnologies } from "@/sanity/lib/services"
import { TechnologyCard } from "@/components/cards/technology-card"
import { Heading } from "@/components/typography/heading"

export async function TechStack() {
  const { data } = await getTechnologies()

  return (
    <section
      id="tech-stack"
      className="container grid gap-16 py-16 lg:grid-cols-2 lg:gap-10 lg:pb-32 lg:pt-[88px]"
    >
      <Heading
        title="Tech stack"
        subtitle="Explore the cutting-edge tools I use to make awesome web applications."
        className="lg:sticky lg:top-16 lg:self-start lg:pt-10"
      />
      <ul className="flex flex-col gap-10 overflow-hidden">
        {data.map((technology) => (
          <li key={technology._id}>
            <TechnologyCard name={technology.name} size="large" />
          </li>
        ))}
      </ul>
    </section>
  )
}
