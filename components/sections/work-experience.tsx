import { groupWorkExperience } from "@/lib/utils"

import { ExperienceCard } from "../cards/experience-card"

interface WorkExperienceProps {
  workExperience: WorkExperience[]
}

export function WorkExperience({ workExperience }: WorkExperienceProps) {
  const groupedWorkExperience = groupWorkExperience(workExperience)

  return (
    <ul className="flex flex-col gap-16">
      {groupedWorkExperience.map((job, index) => (
        <li key={`${job.company}-${index}`}>
          <ExperienceCard company={job.company} positions={job.positions} />
        </li>
      ))}
    </ul>
  )
}
