import { type Metadata } from "next"

import { routes } from "@/config/routes"
import {
  absoluteUrl,
  calculateYearsOfExperience,
  groupWorkExperience,
  sortByDate,
} from "@/lib/utils"
import { ExperienceCard } from "@/components/experience-card"
import { Heading } from "@/components/heading"
import { InfoCard } from "@/components/info-card"
import { Memoji } from "@/components/memoji"
import { Typography } from "@/components/typography"

const mockedWorkExperience = [
  {
    company: "mobitouch",
    position: "Intern",
    startDate: "2022-04-01",
    endDate: "2022-05-01",
    companyWebsiteUrl: "https://mobitouch.net/",
  },
  {
    company: "mobitouch",
    position: "Intern",
    startDate: "2022-07-01",
    endDate: "2022-09-01",
    companyWebsiteUrl: "https://mobitouch.net/",
  },
  {
    company: "mobitouch",
    position: "Intern",
    startDate: "2023-05-01",
    endDate: "2023-06-01",
    companyWebsiteUrl: "https://mobitouch.net/",
  },
  {
    company: "mobitouch",
    position: "Front-end Developer",
    startDate: "2023-06-01",
    endDate: undefined,
    companyWebsiteUrl: "https://mobitouch.net/",
  },
]

export const metadata: Metadata = {
  title: routes.about.title,
  alternates: {
    canonical: routes.about.pathname,
  },
  openGraph: {
    title: routes.about.title,
    url: absoluteUrl(routes.about.pathname),
  },
}

export default function AboutPage() {
  const workExperience = mockedWorkExperience.sort((a, b) =>
    sortByDate(a.startDate, b.startDate)
  )
  const groupedWorkExperience = groupWorkExperience(workExperience)
  const yearsOfExperience = calculateYearsOfExperience(workExperience)

  return (
    <>
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
            subtitle="Work experience"
          />
        </div>
        <div className="flex flex-col gap-5 md:items-center">
          <Typography variant="h2" className="md:text-center" asChild>
            <h1>Olek Baran</h1>
          </Typography>
          <Typography
            variant="subtitle2"
            className="max-w-2xl text-gray md:text-center"
            asChild
          >
            <h2>
              I&apos;m a front-end developer passionate about building dynamic
              and user-friendly web applications.
            </h2>
          </Typography>
        </div>
      </section>
      {groupedWorkExperience.length > 0 && (
        <section
          id="work-experience"
          className="container flex flex-col gap-16 py-16 md:py-32"
        >
          <Heading title="Work experience" />
          <ul className="flex flex-col gap-16">
            {groupedWorkExperience.map((job, index) => (
              <li key={`${job.company}-${index}`}>
                <ExperienceCard
                  company={job.company}
                  positions={job.positions}
                  companyWebsiteUrl={job.companyWebsiteUrl}
                />
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  )
}
