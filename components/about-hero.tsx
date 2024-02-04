import { calculateYearsOfExperience } from "@/lib/utils"

import { InfoCard } from "./info-card"
import { Memoji } from "./memoji"

interface AboutHeroProps {
  workExperience: WorkExperience[]
}

export function AboutHero({ workExperience }: AboutHeroProps) {
  const yearsOfExperience = calculateYearsOfExperience(workExperience)

  return (
    <div className="grid items-center gap-10 md:grid-cols-3 lg:gap-20">
      <InfoCard
        title={workExperience[0].company.name}
        subtitle={workExperience[0].position}
        className="md:items-end"
      />
      <div className="order-first flex justify-center md:order-none">
        <Memoji />
      </div>
      <InfoCard
        title={`${yearsOfExperience}+ years`}
        subtitle="Work experience"
      />
    </div>
  )
}
