import { draftMode } from "next/headers"

import { TECHNOLOGIES_QUERY } from "@/sanity/lib/queries"
import { getTechnologies } from "@/sanity/lib/services"
import { TechStackWrapper } from "@/components/common/tech-stack-wrapper"
import { TechnologyList } from "@/components/common/technology-list"
import { LiveQueryWrapper } from "@/components/studio/live-query-wrapper"
import { Heading } from "@/components/typography/heading"

export async function TechStack() {
  const { isEnabled } = draftMode()
  const initialTechnologies = await getTechnologies()

  return (
    <TechStackWrapper technologyCount={initialTechnologies.data.length}>
      <div className="container grid gap-16 py-16 lg:grid-cols-2 lg:gap-10 lg:pb-32 lg:pt-[88px]">
        <Heading
          title="Tech stack"
          subtitle="Explore the cutting-edge tools I use to make awesome web applications."
          className="lg:self-start lg:pt-10"
        />
        <LiveQueryWrapper<Technology[]>
          initial={initialTechnologies}
          isEnabled={isEnabled}
          query={isEnabled ? TECHNOLOGIES_QUERY : undefined}
        >
          <TechnologyList technologies={initialTechnologies.data} />
        </LiveQueryWrapper>
      </div>
    </TechStackWrapper>
  )
}
