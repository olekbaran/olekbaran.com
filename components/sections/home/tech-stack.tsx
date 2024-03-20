import { draftMode } from "next/headers"

import { TECHNOLOGIES_QUERY } from "@/sanity/lib/queries"
import { getTechnologies } from "@/sanity/lib/services"
import { TechnologyCard } from "@/components/cards/technology-card"
import { LiveQueryWrapper } from "@/components/studio/live-query-wrapper"
import { Heading } from "@/components/typography/heading"

export async function TechStack() {
  const { isEnabled } = draftMode()
  const initialTechnologies = await getTechnologies()

  return (
    <section
      id="tech-stack"
      className="container flex flex-col gap-16 py-16 md:py-32"
    >
      <Heading
        title="Tech stack"
        subtitle="Explore the cutting-edge tools powering my projects. My go-to tech stack that I use to create top-notch web applications."
      />
      <LiveQueryWrapper<Technology[]>
        initial={initialTechnologies}
        isEnabled={isEnabled}
        query={isEnabled ? TECHNOLOGIES_QUERY : undefined}
      >
        <ul className="flex flex-col gap-10">
          {initialTechnologies.data.map((technology) => (
            <li key={technology._id}>
              <TechnologyCard name={technology.name} size="large" />
            </li>
          ))}
        </ul>
      </LiveQueryWrapper>
    </section>
  )
}
