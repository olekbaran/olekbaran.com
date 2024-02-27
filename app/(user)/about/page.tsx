import { type Metadata } from "next"
import { draftMode } from "next/headers"

import { routes } from "@/config/routes"
import { WORK_EXPERIENCE_QUERY } from "@/sanity/lib/queries"
import { getWorkExperience } from "@/sanity/lib/services"
import { absoluteUrl } from "@/lib/utils"
import { AboutHero } from "@/components/sections/about-hero"
import { WorkExperience } from "@/components/sections/work-experience"
import { LiveQueryWrapper } from "@/components/studio/live-query-wrapper"
import { Heading } from "@/components/typography/heading"
import { Typography } from "@/components/typography/typography"

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

export default async function AboutPage() {
  const { isEnabled } = draftMode()
  const initialWorkExperience = await getWorkExperience()

  return (
    <>
      <section className="container flex flex-col gap-16 py-16 md:pb-32">
        <LiveQueryWrapper<WorkExperience[]>
          initial={initialWorkExperience}
          isEnabled={isEnabled}
          query={isEnabled ? WORK_EXPERIENCE_QUERY : undefined}
        >
          <AboutHero workExperience={initialWorkExperience.data} />
        </LiveQueryWrapper>
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
          <WorkExperience workExperience={initialWorkExperience.data} />
        </LiveQueryWrapper>
      </section>
    </>
  )
}
