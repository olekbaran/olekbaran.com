import { draftMode } from "next/headers"

import { WORK_EXPERIENCE_QUERY } from "@/sanity/lib/queries"
import { getWorkExperience } from "@/sanity/lib/services"
import { groupWorkExperience } from "@/lib/utils"
import { ExperienceCard } from "@/components/cards/experience-card"
import { LiveQueryWrapper } from "@/components/studio/live-query-wrapper"
import { Heading } from "@/components/typography/heading"

export async function WorkExperience() {
  const { isEnabled } = draftMode()

  const initialWorkExperience = await getWorkExperience()
  const groupedWorkExperience = groupWorkExperience(initialWorkExperience.data)

  return (
    <section
      id="work-experience"
      className="container flex flex-col gap-16 py-16 md:py-32"
    >
      <Heading title="Work experience" />
      <LiveQueryWrapper<WorkExperience[]>
        initial={initialWorkExperience}
        isEnabled={isEnabled}
        query={isEnabled ? WORK_EXPERIENCE_QUERY : undefined}
      >
        <ul className="flex flex-col gap-16">
          {groupedWorkExperience.map((job, index) => (
            <li key={`${job.company}-${index}`}>
              <ExperienceCard company={job.company} positions={job.positions} />
            </li>
          ))}
        </ul>
      </LiveQueryWrapper>
    </section>
  )
}
