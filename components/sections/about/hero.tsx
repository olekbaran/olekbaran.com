import { draftMode } from "next/headers"
import Image from "next/image"

import { WORK_EXPERIENCE_QUERY } from "@/sanity/lib/queries"
import { getWorkExperience } from "@/sanity/lib/services"
import { calculateYearsOfExperience } from "@/lib/utils"
import { InfoCard } from "@/components/cards/info-card"
import { LiveQueryWrapper } from "@/components/studio/live-query-wrapper"
import { Typography } from "@/components/typography/typography"
import { images } from "@/assets/images"

export async function Hero() {
  const { isEnabled } = draftMode()

  const initialWorkExperience = await getWorkExperience()
  const yearsOfExperience = calculateYearsOfExperience(
    initialWorkExperience.data
  )

  return (
    <section className="container flex flex-col gap-16 py-16 md:pb-32">
      <LiveQueryWrapper<WorkExperience[]>
        initial={initialWorkExperience}
        isEnabled={isEnabled}
        query={isEnabled ? WORK_EXPERIENCE_QUERY : undefined}
      >
        <div className="grid items-center gap-10 md:grid-cols-3 lg:gap-20">
          <InfoCard
            title={initialWorkExperience.data[0].company.name}
            subtitle={initialWorkExperience.data[0].position}
            className="md:items-end"
          />
          <div className="order-first flex justify-center md:order-none">
            <Image src={images.memoji} alt="" quality={100} priority />
          </div>
          <InfoCard
            title={`${yearsOfExperience}+ years`}
            subtitle="Work experience"
          />
        </div>
      </LiveQueryWrapper>
      <div className="flex flex-col items-center gap-5">
        <Typography variant="h2" className="text-center" asChild>
          <h1>Olek Baran</h1>
        </Typography>
        <Typography
          variant="subtitle2"
          className="max-w-2xl text-center text-gray"
          asChild
        >
          <h2>
            I&apos;m a front-end developer passionate about building dynamic and
            user-friendly web applications.
          </h2>
        </Typography>
      </div>
    </section>
  )
}
