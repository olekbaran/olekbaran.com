import Link from "next/link"
import { PortableText } from "@portabletext/react"
import { GitPullRequestArrowIcon } from "lucide-react"

import { routes } from "@/config/routes"
import { urlFor } from "@/sanity/lib/url-for"

import { Badge } from "./badge"
import { Gallery } from "./gallery"
import { GoBack } from "./go-back"
import { ProjectInfo } from "./project-info"
import { ProjectLink } from "./project-link"
import { ProjectThumbnail } from "./project-thumbnail"
import { TechnologyCard } from "./technology-card"
import { Typography } from "./typography"

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
  const imagesUrls = images ? images.map((image) => urlFor(image).url()) : []

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
            image={urlFor(mainImage).url()}
            hasDemo
          />
        </Link>
      ) : (
        <ProjectThumbnail title={title} image={urlFor(mainImage).url()} />
      )}
      {technologies && technologies.length > 0 && (
        <ul className="mb-10 grid gap-10 md:grid-cols-2">
          {technologies.map((technology) => (
            <li key={technology} className="overflow-hidden">
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
