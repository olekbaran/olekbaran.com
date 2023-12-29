import NextLink from "next/link"
import { ArrowUpRightIcon, GitPullRequestArrowIcon } from "lucide-react"

import { routes } from "@/config/routes"
import { formatDate } from "@/lib/utils"
import { Badge } from "@/components/badge"
import { GoBack } from "@/components/go-back"
import { Link } from "@/components/link"
import { ProjectThumbnail } from "@/components/project-thumbnail"
import { Typography } from "@/components/typography"

const mockedProject = {
  title: "CallerSmart",
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
  images: [
    "https://s3-alpha-sig.figma.com/img/4ece/87d8/43acb64cac6383c6ee8299c5319b2cf3?Expires=1704672000&Signature=dGgw2vmKiAvKwxPem~hEkptH0Zwn06aoZ-OG169ex~pxY4qbRI1QIEQzTCygQeeEyj788P47Q3L5C3xiP7MxzgkITyWHQtlwW6YTHlu1s1wez8r6bCZNx5z63yT91O3ThPd5w00DsqNcwACCEmWMLjsjegCpLlXnvRHmhbIZZ5wFpgYMp7iNvlVHvdi8NOS2vatYje5h3I4LwI1YaAkYtq7gl~d4Lq8HHradBYfXRY4wnYufAHdJrAMTbz9WTpQh374oOOfBq6NeaoN4c0NIl-xLjgBHr~TcNlKtAB6Mk-vCCLzR9IW8vxVV6Y1KKQwVedxVjGYRc50bGWN9LAFGxQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  ],
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
            image={mockedProject.images[0]}
            hasDemo
          />
        </NextLink>
      ) : (
        <ProjectThumbnail
          title={mockedProject.title}
          image={mockedProject.images[0]}
        />
      )}
    </section>
  )
}
