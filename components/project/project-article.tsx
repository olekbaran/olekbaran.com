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

interface ProjectArticle {
  project: Project
}

export function ProjectArticle({ project }: ProjectArticle) {
  const isTechnologiesQuantityOdd =
    project.technologies && isOdd(project.technologies.length)

  const imagesUrls = project.images
    ? project.images.map((image) => urlForImage(image))
    : []

  return (
    <article className="flex flex-col gap-16">
      <div className="flex flex-col gap-10">
        <GoBack
          pageTitle={routes.projects.title}
          pathname={routes.projects.pathname}
        />
        <div className="flex flex-col gap-3">
          {project.isOpenSourceContribution && (
            <Badge className="border border-gray bg-black">
              <GitPullRequestArrowIcon className="h-5 w-5 shrink-0 stroke-[1.5px]" />
              <Typography variant="body2" className="truncate">
                Open Source Contribution
              </Typography>
            </Badge>
          )}
          <Typography variant="h2" className="truncate" asChild>
            <h1>{project.title}</h1>
          </Typography>
        </div>
      </div>
      <div className="flex flex-wrap-reverse items-center justify-between gap-10 border-t border-gray pt-10">
        <ul className="flex flex-wrap items-center gap-10">
          <li>
            <ProjectInfo label="Industry" value={project.industry} />
          </li>
          <li>
            <ProjectInfo label="Date" value={project.date} />
          </li>
        </ul>
        {(project.repository || project.demo) && (
          <ul className="flex flex-wrap items-center gap-10">
            {project.repository && (
              <li>
                <ProjectLink label="Code" url={project.repository} />
              </li>
            )}
            {project.demo && (
              <li>
                <ProjectLink label="Demo" url={project.demo} />
              </li>
            )}
          </ul>
        )}
      </div>
      {project.demo ? (
        <Link
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="rounded-3xl"
        >
          <ProjectThumbnail
            title={project.title}
            image={urlForImage(project.mainImage)}
            hasDemo
          />
        </Link>
      ) : (
        <ProjectThumbnail
          title={project.title}
          image={urlForImage(project.mainImage)}
        />
      )}
      {project.technologies && project.technologies.length > 0 && (
        <ul className="mb-10 grid gap-10 md:grid-cols-2">
          {project.technologies.map((technology, index, technologies) => (
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
        <PortableText value={project.overview} />
      </div>
      {imagesUrls.length > 0 && <Gallery images={imagesUrls} />}
    </article>
  )
}
