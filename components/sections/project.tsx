import Link from "next/link"
import { PortableText } from "@portabletext/react"
import { GitPullRequestArrowIcon } from "lucide-react"

import { routes } from "@/config/routes"
import { urlForImage } from "@/sanity/lib/image"
import { cn, isOdd } from "@/lib/utils"

import { TechnologyCard } from "../cards/technology-card"
import { Badge } from "../common/badge"
import { Gallery } from "../common/gallery"
import { GoBack } from "../nav/go-back"
import { ProjectInfo } from "../project/project-info"
import { ProjectLink } from "../project/project-link"
import { ProjectThumbnail } from "../project/project-thumbnail"
import { Typography } from "../typography/typography"

interface ProjectProps {
  title: string
  industry: string
  date: string
  isOpenSourceContribution: boolean
  repository?: string
  demo?: string
  technologies?: string[]
  mainImage: Image
  images?: Image[]
  overview: Block[]
}

export function Project({
  title,
  industry,
  date,
  isOpenSourceContribution,
  repository,
  demo,
  technologies,
  mainImage,
  images,
  overview,
}: ProjectProps) {
  const isTechnologiesQuantityOdd = technologies && isOdd(technologies.length)
  const imagesUrls = images ? images.map((image) => urlForImage(image)) : []

  return (
    <article className="flex flex-col gap-16">
      <div className="flex flex-col gap-10">
        <GoBack
          pageTitle={routes.projects.title}
          pathname={routes.projects.pathname}
        />
        <div className="flex flex-col gap-3">
          {isOpenSourceContribution && (
            <Badge className="border border-gray bg-black">
              <GitPullRequestArrowIcon className="h-5 w-5 shrink-0 stroke-[1.5px]" />
              <Typography variant="body2" className="truncate">
                Open Source Contribution
              </Typography>
            </Badge>
          )}
          <Typography variant="h2" className="truncate" asChild>
            <h1>{title}</h1>
          </Typography>
        </div>
      </div>
      <div className="flex flex-wrap-reverse items-center justify-between gap-10 border-t border-gray pt-10">
        <ul className="flex flex-wrap items-center gap-10">
          <li>
            <ProjectInfo label="Industry" value={industry} />
          </li>
          <li>
            <ProjectInfo label="Date" value={date} />
          </li>
        </ul>
        {(repository || demo) && (
          <ul className="flex flex-wrap items-center gap-10">
            {repository && (
              <li>
                <ProjectLink label="Code" url={repository} />
              </li>
            )}
            {demo && (
              <li>
                <ProjectLink label="Demo" url={demo} />
              </li>
            )}
          </ul>
        )}
      </div>
      {demo ? (
        <Link
          href={demo}
          target="_blank"
          rel="noreferrer"
          className="rounded-3xl"
        >
          <ProjectThumbnail
            title={title}
            image={urlForImage(mainImage)}
            hasDemo
          />
        </Link>
      ) : (
        <ProjectThumbnail title={title} image={urlForImage(mainImage)} />
      )}
      {technologies && technologies.length > 0 && (
        <ul className="mb-10 grid gap-10 md:grid-cols-2">
          {technologies.map((technology, index) => (
            <li
              key={technology}
              className={cn(
                "overflow-hidden",
                isTechnologiesQuantityOdd &&
                  index === technologies.length - 1 &&
                  "md:col-span-2"
              )}
            >
              <TechnologyCard name={technology} />
            </li>
          ))}
        </ul>
      )}
      <div className="prose prose-lg max-w-none text-gray md:prose-xl prose-headings:uppercase prose-headings:text-white prose-h2:text-lg md:prose-h2:text-2xl">
        <PortableText value={overview} />
      </div>
      {imagesUrls.length > 0 && <Gallery images={imagesUrls} />}
    </article>
  )
}