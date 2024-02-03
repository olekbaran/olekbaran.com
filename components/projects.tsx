import Link from "next/link"

import { type Project } from "@/types/sanity"
import { routes } from "@/config/routes"
import { urlFor } from "@/sanity/lib/url-for"

import { ProjectCard } from "./project-card"

interface ProjectsProps {
  projects: Project[]
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <ul className="grid gap-10 md:grid-cols-2">
      {projects.map((project, index) => (
        <li key={project._id}>
          <Link
            href={`${routes.projects.pathname}/${project.slug.current}`}
            className="rounded-3xl"
          >
            <ProjectCard
              title={project.title}
              image={urlFor(project.mainImage).url()}
              isOpenSourceContribution={project.isOpenSourceContribution}
              isRecentlyAdded={index === 0}
            />
          </Link>
        </li>
      ))}
    </ul>
  )
}
