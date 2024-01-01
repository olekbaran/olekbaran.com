import { type Metadata } from "next"

import { routes } from "@/config/routes"
import { calculateYearsOfExperience, sortByDate } from "@/lib/utils"
import { InfoCard } from "@/components/info-card"
import { Memoji } from "@/components/memoji"
import { Typography } from "@/components/typography"

const mockedWorkExperience = [
  {
    company: "mobitouch",
    position: "Intern",
    startDate: "2022-04-01",
    endDate: "2022-05-01",
  },
  {
    company: "mobitouch",
    position: "Intern",
    startDate: "2022-07-01",
    endDate: "2022-09-01",
  },
  {
    company: "mobitouch",
    position: "Intern",
    startDate: "2023-05-01",
    endDate: "2023-06-01",
  },
  {
    company: "mobitouch",
    position: "Front-end Developer",
    startDate: "2023-06-01",
    endDate: undefined,
  },
]

export const metadata: Metadata = {
  title: routes.about.title,
}

export default function AboutPage() {
  const workExperience = mockedWorkExperience.sort((a, b) =>
    sortByDate(a.startDate, b.startDate)
  )

  const yearsOfExperience = calculateYearsOfExperience(workExperience)

  return (
    <section className="container flex flex-col gap-16 py-16 md:pb-32">
      <div className="grid items-center gap-10 md:grid-cols-3 lg:gap-20">
        <InfoCard
          title={workExperience[0].company}
          subtitle={workExperience[0].position}
          className="md:items-end"
        />
        <div className="order-first flex justify-center md:order-none">
          <Memoji />
        </div>
        <InfoCard
          title={`${yearsOfExperience}+ years`}
          subtitle="work experience"
        />
      </div>
      <div className="flex flex-col gap-5 md:items-center">
        <Typography variant="h2" className="md:text-center">
          Olek Baran
        </Typography>
        <Typography
          variant="subtitle2"
          className="max-w-2xl text-gray md:text-center"
        >
          I&apos;m a front-end developer passionate about building dynamic and
          user-friendly web applications.
        </Typography>
      </div>
    </section>
  )
}
