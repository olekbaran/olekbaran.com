import { type Metadata } from "next"
import NextLink from "next/link"
import { GitPullRequestArrowIcon } from "lucide-react"

import { routes } from "@/config/routes"
import { absoluteUrl } from "@/lib/utils"
import { Badge } from "@/components/badge"
import { Gallery } from "@/components/gallery"
import { GoBack } from "@/components/go-back"
import { ProjectInfo } from "@/components/project-info"
import { ProjectLink } from "@/components/project-link"
import { ProjectThumbnail } from "@/components/project-thumbnail"
import { TechnologyCard } from "@/components/technology-card"
import { Typography } from "@/components/typography"

const mockedProject = {
  title: "CallerSmart",
  slug: "callersmart",
  description: "The next big thing in Caller ID lookup technology.",
  industry: "Telecom",
  date: "2023-06-01",
  isOpenSourceContribution: true,
  repository: "https://github.com/olekbaran/callersmart",
  demo: "https://callersmart.com",
  technologies: ["React", "Next.js", "Tailwind CSS", "shadcn/ui"],
  thumbnail:
    "https://s3-alpha-sig.figma.com/img/4ece/87d8/43acb64cac6383c6ee8299c5319b2cf3?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ENF63fcbplW3uBuv5c6xXY1-KsPs-YSynKQiCOUESwPSmcxuanK488KsReJ-PPlHRIBWHe4iqYBUv567vd3QRo0TKzmemgoqkEoXDEJ8bDBQC8o~d8wPe~qLLIThHgWVXyfF2-tO8kLk-Xt5PnLK3xw5evzfvYHaxs5k47a6MLWTQHr3csOSBMTVupBCexbzOneNXdVTeAZDqPVVQlOi2zbFc9wJd56WbeW5kf49maJnyy3yo5QCClHpUjlyPUGCSfevogZAlCM3pe6e2v87yNdag59kpNkSi6mbjsXQDLVsA0cGXhVEZe8b4cwwT3TqGzsMImjkROBQ-fd-2NraRQ__",
  images: [
    "https://s3-alpha-sig.figma.com/img/4ece/87d8/43acb64cac6383c6ee8299c5319b2cf3?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ENF63fcbplW3uBuv5c6xXY1-KsPs-YSynKQiCOUESwPSmcxuanK488KsReJ-PPlHRIBWHe4iqYBUv567vd3QRo0TKzmemgoqkEoXDEJ8bDBQC8o~d8wPe~qLLIThHgWVXyfF2-tO8kLk-Xt5PnLK3xw5evzfvYHaxs5k47a6MLWTQHr3csOSBMTVupBCexbzOneNXdVTeAZDqPVVQlOi2zbFc9wJd56WbeW5kf49maJnyy3yo5QCClHpUjlyPUGCSfevogZAlCM3pe6e2v87yNdag59kpNkSi6mbjsXQDLVsA0cGXhVEZe8b4cwwT3TqGzsMImjkROBQ-fd-2NraRQ__",
    "https://s3-alpha-sig.figma.com/img/4ece/87d8/43acb64cac6383c6ee8299c5319b2cf3?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ENF63fcbplW3uBuv5c6xXY1-KsPs-YSynKQiCOUESwPSmcxuanK488KsReJ-PPlHRIBWHe4iqYBUv567vd3QRo0TKzmemgoqkEoXDEJ8bDBQC8o~d8wPe~qLLIThHgWVXyfF2-tO8kLk-Xt5PnLK3xw5evzfvYHaxs5k47a6MLWTQHr3csOSBMTVupBCexbzOneNXdVTeAZDqPVVQlOi2zbFc9wJd56WbeW5kf49maJnyy3yo5QCClHpUjlyPUGCSfevogZAlCM3pe6e2v87yNdag59kpNkSi6mbjsXQDLVsA0cGXhVEZe8b4cwwT3TqGzsMImjkROBQ-fd-2NraRQ__",
    "https://s3-alpha-sig.figma.com/img/4ece/87d8/43acb64cac6383c6ee8299c5319b2cf3?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ENF63fcbplW3uBuv5c6xXY1-KsPs-YSynKQiCOUESwPSmcxuanK488KsReJ-PPlHRIBWHe4iqYBUv567vd3QRo0TKzmemgoqkEoXDEJ8bDBQC8o~d8wPe~qLLIThHgWVXyfF2-tO8kLk-Xt5PnLK3xw5evzfvYHaxs5k47a6MLWTQHr3csOSBMTVupBCexbzOneNXdVTeAZDqPVVQlOi2zbFc9wJd56WbeW5kf49maJnyy3yo5QCClHpUjlyPUGCSfevogZAlCM3pe6e2v87yNdag59kpNkSi6mbjsXQDLVsA0cGXhVEZe8b4cwwT3TqGzsMImjkROBQ-fd-2NraRQ__",
  ],
  overview: [
    {
      heading: "Overview",
      content:
        "In today's world, communication is everything, and CallerSmart is the next big thing in Caller ID lookup technology. It gives you all the info you need to make smart decisions about incoming calls. This app goes beyond the basics, providing a complete and reliable solution to make your communication experience better. With CallerSmart, you can be sure that you have the right information at your fingertips to stay connected and informed.",
    },
    {
      heading: "Problems",
      content:
        "As we become more connected, we're getting more and more unknown calls and spam. It's super annoying and sometimes even dangerous. The problem is that traditional Caller ID systems don't always work well, so we're left frustrated and vulnerable to scams or unwanted interruptions. The reason behind this is that existing Caller ID apps rely on databases that aren't always updated in real-time. So, we might get outdated or inaccurate information about the caller. Plus, current solutions don't let us help keep the database up-to-date, which is something we'd love to do.",
    },
    {
      heading: "Solution",
      content:
        "With CallerSmart, you can now easily identify incoming calls in real-time. Our technology is top-notch, so you can be sure that you always have the most up-to-date information about the caller. No more guessing or uncertainty! Our spam detection algorithms are also pretty advanced, so you don't have to worry about unwanted calls. We keep up with the ever-changing landscape of telemarketers and scammers, so you don't have to. Plus, you can join our community of users who are dedicated to maintaining the most reliable Caller ID database. You can contribute by verifying and updating information, making CallerSmart a dynamic and user-driven platform.",
    },
  ],
}

export const metadata: Metadata = {
  title: mockedProject.title,
  description: mockedProject.description,
  alternates: {
    canonical: `${routes.projects.pathname}/${mockedProject.slug}`,
  },
  openGraph: {
    title: mockedProject.title,
    description: mockedProject.description,
    type: "article",
    url: absoluteUrl(`${routes.projects.pathname}/${mockedProject.slug}`),
  },
}

export default function ProjectPage() {
  return (
    <section className="container flex flex-col gap-16 py-16 md:pb-32">
      <div className="flex flex-col gap-10">
        <GoBack
          pageTitle={routes.projects.title}
          pathname={routes.projects.pathname}
        />
        <div className="flex flex-col gap-3">
          {mockedProject.isOpenSourceContribution && (
            <Badge className="border border-gray bg-black">
              <GitPullRequestArrowIcon className="h-5 w-5 shrink-0 stroke-[1.5px]" />
              <Typography variant="body2" className="truncate">
                Open Source Contribution
              </Typography>
            </Badge>
          )}
          <Typography variant="h2" className="truncate" asChild>
            <h1>{mockedProject.title}</h1>
          </Typography>
        </div>
      </div>
      <div className="flex flex-wrap-reverse items-center justify-between gap-10 border-t border-gray pt-10">
        <ul className="flex flex-wrap items-center gap-10">
          <li>
            <ProjectInfo label="Industry" value={mockedProject.industry} />
          </li>
          <li>
            <ProjectInfo label="Date" value={mockedProject.date} />
          </li>
        </ul>
        <ul className="flex flex-wrap items-center gap-10">
          <li>
            <ProjectLink label="Code" url={mockedProject.repository} />
          </li>
          <li>
            <ProjectLink label="Demo" url={mockedProject.demo} />
          </li>
        </ul>
      </div>
      {mockedProject.demo ? (
        <NextLink
          href={mockedProject.demo}
          target="_blank"
          rel="noreferrer"
          className="rounded-3xl"
        >
          <ProjectThumbnail
            title={mockedProject.title}
            image={mockedProject.thumbnail}
            hasDemo
          />
        </NextLink>
      ) : (
        <ProjectThumbnail
          title={mockedProject.title}
          image={mockedProject.thumbnail}
        />
      )}
      {mockedProject.technologies.length > 0 && (
        <ul className="mb-10 grid gap-10 md:grid-cols-2">
          {mockedProject.technologies.map((technology) => (
            <li key={technology} className="overflow-hidden">
              <TechnologyCard name={technology} />
            </li>
          ))}
        </ul>
      )}
      {mockedProject.overview.map((block) => (
        <div key={block.heading} className="flex flex-col gap-5">
          <Typography variant="h6" asChild>
            <h2>{block.heading}</h2>
          </Typography>
          <Typography variant="body1" className="text-gray">
            {block.content}
          </Typography>
        </div>
      ))}
      <Gallery images={mockedProject.images} />
    </section>
  )
}
