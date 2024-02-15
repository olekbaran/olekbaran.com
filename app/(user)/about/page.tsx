import { type Metadata } from "next"
import { draftMode } from "next/headers"

import { routes } from "@/config/routes"
import { getWorkExperience } from "@/sanity/lib/services"
import { absoluteUrl } from "@/lib/utils"
import { AboutHero } from "@/components/about-hero"
import { AboutHeroPreview } from "@/components/about-hero-preview"
import { Heading } from "@/components/heading"
import { Typography } from "@/components/typography"
import { WorkExperience } from "@/components/work-experience"
import { WorkExperiencePreview } from "@/components/work-experience-preview"

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
  const initialWorkExperience = await getWorkExperience()

  return (
    <>
      <section className="container flex flex-col gap-16 py-16 md:pb-32">
        {draftMode().isEnabled ? (
          <AboutHeroPreview initial={initialWorkExperience} />
        ) : (
          <AboutHero workExperience={initialWorkExperience.data} />
        )}
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
        {draftMode().isEnabled ? (
          <WorkExperiencePreview initial={initialWorkExperience} />
        ) : (
          <WorkExperience workExperience={initialWorkExperience.data} />
        )}
      </section>
    </>
  )
}
