import Link from "next/link"

import { routes } from "@/config/routes"
import { urlForImage } from "@/sanity/lib/image"

import { ProjectCard } from "../cards/project-card"

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
              image={urlForImage(project.mainImage)}
              isOpenSourceContribution={project.isOpenSourceContribution}
              isRecentlyAdded={index === 0}
            />
          </Link>
        </li>
      ))}
    </ul>
  )
}
