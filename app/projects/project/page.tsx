import { ArrowUpRightIcon, GitPullRequestArrowIcon } from "lucide-react"

import { routes } from "@/config/routes"
import { formatDate } from "@/lib/utils"
import { Badge } from "@/components/badge"
import { GoBack } from "@/components/go-back"
import { Link } from "@/components/link"
import { Typography } from "@/components/typography"

const mockedProject = {
  title: "Genemod",
  isOpenSourceContribution: true,
  info: [
    {
      label: "Industry",
      value: "Telecom",
    },
    {
      label: "Date",
      value: "2023-06-01",
    },
  ],
  links: [
    {
      label: "Code",
      url: "",
    },
    {
      label: "Demo",
      url: "",
    },
  ],
  technologies: ["React", "Next.js", "Tailwind CSS", "shadcn/ui"],
  images: [
    "https://s3-alpha-sig.figma.com/img/0f63/7ea1/448b1ebb7851ef275a876c1962e99096?Expires=1704672000&Signature=d0zNl-V~YFYKLVtq2fQVS4bWx2gaN54aDD80KEYF5x4FxKwK0lYMRHb7xIcv8cT54efUt1lgoMY1yphSmFHuPgo9D8cSw2UY8DfUAnCd7lKJ1y92ZCB8nPbHfb5P5E4kl4hCAFnw5rlMr9385db7B8gPdrEofj1Z4-fZpNnvHl~6eNob0G5dpW~NylwP5X68MYC44Sp~nCe1UN5hjV8mxak9jkM0U9hNg-xSPcVhne2pIm4kR7UvTDdHGle0sUzwjCy5M3YyQmf65Eliz~c36pmb9INzHFFuR-NJmFCsNkby0Q7~edD4tbtskaLfuCsY3qUZJaFpn45jEd6MYWkkjg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  ],
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
              <li key={info.label} className="flex flex-col gap-2">
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
            <li key={link.label}>
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
    </section>
  )
}
