import { type Metadata } from "next"
import NextLink from "next/link"
import { ArrowUpRightIcon, GitPullRequestArrowIcon } from "lucide-react"

import { routes } from "@/config/routes"
import { absoluteUrl, formatDate } from "@/lib/utils"
import { Badge } from "@/components/badge"
import { Gallery } from "@/components/gallery"
import { GoBack } from "@/components/go-back"
import { Link } from "@/components/link"
import { ProjectThumbnail } from "@/components/project-thumbnail"
import { TechnologyCard } from "@/components/technology-card"
import { Typography } from "@/components/typography"

const mockedProject = {
  title: "CallerSmart",
  slug: "callersmart",
  description: "The next big thing in Caller ID lookup technology.",
  isOpenSourceContribution: true,
  info: [
    {
      type: "industry",
      label: "Industry",
      value: "Telecom",
    },
    {
      type: "date",
      label: "Date",
      value: "2023-06-01",
    },
  ],
  links: [
    {
      type: "repository",
      label: "Code",
      url: "",
    },
    {
      type: "demo",
      label: "Demo",
      url: "",
    },
  ],
  technologies: ["React", "Next.js", "Tailwind CSS", "shadcn/ui"],
  thumbnail:
    "https://s3-alpha-sig.figma.com/img/4ece/87d8/43acb64cac6383c6ee8299c5319b2cf3?Expires=1704672000&Signature=dGgw2vmKiAvKwxPem~hEkptH0Zwn06aoZ-OG169ex~pxY4qbRI1QIEQzTCygQeeEyj788P47Q3L5C3xiP7MxzgkITyWHQtlwW6YTHlu1s1wez8r6bCZNx5z63yT91O3ThPd5w00DsqNcwACCEmWMLjsjegCpLlXnvRHmhbIZZ5wFpgYMp7iNvlVHvdi8NOS2vatYje5h3I4LwI1YaAkYtq7gl~d4Lq8HHradBYfXRY4wnYufAHdJrAMTbz9WTpQh374oOOfBq6NeaoN4c0NIl-xLjgBHr~TcNlKtAB6Mk-vCCLzR9IW8vxVV6Y1KKQwVedxVjGYRc50bGWN9LAFGxQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  images: [
    "https://s3-alpha-sig.figma.com/img/4ece/87d8/43acb64cac6383c6ee8299c5319b2cf3?Expires=1704672000&Signature=dGgw2vmKiAvKwxPem~hEkptH0Zwn06aoZ-OG169ex~pxY4qbRI1QIEQzTCygQeeEyj788P47Q3L5C3xiP7MxzgkITyWHQtlwW6YTHlu1s1wez8r6bCZNx5z63yT91O3ThPd5w00DsqNcwACCEmWMLjsjegCpLlXnvRHmhbIZZ5wFpgYMp7iNvlVHvdi8NOS2vatYje5h3I4LwI1YaAkYtq7gl~d4Lq8HHradBYfXRY4wnYufAHdJrAMTbz9WTpQh374oOOfBq6NeaoN4c0NIl-xLjgBHr~TcNlKtAB6Mk-vCCLzR9IW8vxVV6Y1KKQwVedxVjGYRc50bGWN9LAFGxQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://s3-alpha-sig.figma.com/img/4ece/87d8/43acb64cac6383c6ee8299c5319b2cf3?Expires=1704672000&Signature=dGgw2vmKiAvKwxPem~hEkptH0Zwn06aoZ-OG169ex~pxY4qbRI1QIEQzTCygQeeEyj788P47Q3L5C3xiP7MxzgkITyWHQtlwW6YTHlu1s1wez8r6bCZNx5z63yT91O3ThPd5w00DsqNcwACCEmWMLjsjegCpLlXnvRHmhbIZZ5wFpgYMp7iNvlVHvdi8NOS2vatYje5h3I4LwI1YaAkYtq7gl~d4Lq8HHradBYfXRY4wnYufAHdJrAMTbz9WTpQh374oOOfBq6NeaoN4c0NIl-xLjgBHr~TcNlKtAB6Mk-vCCLzR9IW8vxVV6Y1KKQwVedxVjGYRc50bGWN9LAFGxQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://s3-alpha-sig.figma.com/img/4ece/87d8/43acb64cac6383c6ee8299c5319b2cf3?Expires=1704672000&Signature=dGgw2vmKiAvKwxPem~hEkptH0Zwn06aoZ-OG169ex~pxY4qbRI1QIEQzTCygQeeEyj788P47Q3L5C3xiP7MxzgkITyWHQtlwW6YTHlu1s1wez8r6bCZNx5z63yT91O3ThPd5w00DsqNcwACCEmWMLjsjegCpLlXnvRHmhbIZZ5wFpgYMp7iNvlVHvdi8NOS2vatYje5h3I4LwI1YaAkYtq7gl~d4Lq8HHradBYfXRY4wnYufAHdJrAMTbz9WTpQh374oOOfBq6NeaoN4c0NIl-xLjgBHr~TcNlKtAB6Mk-vCCLzR9IW8vxVV6Y1KKQwVedxVjGYRc50bGWN9LAFGxQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
  const demoLink = mockedProject.links.find((link) => link.type === "demo")

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
          <Typography variant="h2" className="truncate">
            {mockedProject.title}
          </Typography>
        </div>
      </div>
      <div className="flex flex-wrap-reverse items-center justify-between gap-10 border-t border-gray pt-10">
        <ul className="flex flex-wrap items-center gap-10">
          {Object.values(mockedProject.info).map((info) => {
            const isValueDate = Boolean(Date.parse(info.value))

            return (
              <li key={info.type} className="flex flex-col gap-2">
                <Typography variant="subtitle1" className="text-gray">
                  {info.label}:
                </Typography>
                <Typography variant="subtitle2">
                  {isValueDate ? formatDate(info.value) : info.value}
                </Typography>
              </li>
            )
          })}
        </ul>
        <ul className="flex flex-wrap items-center gap-10">
          {Object.values(mockedProject.links).map((link) => (
            <li key={link.type}>
              <Link href={link.url} className="h-10">
                <div className="flex items-center gap-2">
                  <Typography variant="h6" className="truncate">
                    {link.label}
                  </Typography>
                  <ArrowUpRightIcon className="h-10 w-10 shrink-0" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {demoLink ? (
        <NextLink href={demoLink.url} target="_blank" rel="noreferrer">
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
      <ul className="mb-10 grid gap-10 md:grid-cols-2">
        {mockedProject.technologies.map((technology) => (
          <li key={technology} className="overflow-hidden">
            <TechnologyCard name={technology} />
          </li>
        ))}
      </ul>
      {mockedProject.overview.map((block) => (
        <div key={block.heading} className="flex flex-col gap-5">
          <Typography variant="h6">{block.heading}</Typography>
          <Typography variant="body1" className="text-gray">
            {block.content}
          </Typography>
        </div>
      ))}
      <Gallery images={mockedProject.images} />
    </section>
  )
}
