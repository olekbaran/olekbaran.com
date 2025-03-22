import { getWorkExperience } from "@/sanity/lib/services"
import { groupWorkExperience } from "@/lib/utils"
import { ExperienceCard } from "@/components/cards/experience-card"
import { Heading } from "@/components/typography/heading"

export async function WorkExperience() {
  const { data } = await getWorkExperience()
  const groupedWorkExperience = groupWorkExperience(data)

  return (
    <section
      id="work-experience"
      className="container flex flex-col gap-16 py-16 md:py-32"
    >
      <Heading title="Work experience" />
      <ul className="flex flex-col gap-16">
        {groupedWorkExperience.map((job, index) => (
          <li key={`${job.company}-${index}`}>
            <ExperienceCard company={job.company} positions={job.positions} />
          </li>
        ))}
      </ul>
    </section>
  )
}
