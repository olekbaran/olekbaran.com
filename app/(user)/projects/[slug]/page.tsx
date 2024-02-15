import { type Metadata } from "next"
import { draftMode } from "next/headers"
import { notFound } from "next/navigation"
import { type QueryParams } from "next-sanity"

import { routes } from "@/config/routes"
import { client } from "@/sanity/lib/client"
import { ALL_PROJECTS_QUERY, PROJECT_QUERY } from "@/sanity/lib/queries"
import { getProject } from "@/sanity/lib/services"
import { absoluteUrl } from "@/lib/utils"
import { Project } from "@/components/project"
import { ProjectPreview } from "@/components/project-preview"

interface ProjectPageProps {
  params: QueryParams
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = await client.fetch<Project>(PROJECT_QUERY, params)

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `${routes.projects.pathname}/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      url: absoluteUrl(`${routes.projects.pathname}/${project.slug}`),
    },
  }
}

export async function generateStaticParams() {
  const projects = await client.fetch<Project[]>(ALL_PROJECTS_QUERY)

  return projects.map((project) => ({
    slug: project.slug.current,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const initialProject = await getProject(params.slug)

  if (!initialProject.data) {
    notFound()
  }

  return (
    <section className="container flex flex-col gap-16 py-16 md:pb-32">
      {draftMode().isEnabled ? (
        <ProjectPreview initial={initialProject} params={params} />
      ) : (
        <Project
          title={initialProject.data.title}
          industry={initialProject.data.industry}
          date={initialProject.data.date}
          isOpenSourceContribution={
            initialProject.data.isOpenSourceContribution
          }
          repository={initialProject.data.repository}
          demo={initialProject.data.demo}
          technologies={initialProject.data.technologies}
          mainImage={initialProject.data.mainImage}
          images={initialProject.data.images}
          overview={initialProject.data.overview}
        />
      )}
    </section>
  )
}
