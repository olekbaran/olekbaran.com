import { type Metadata } from "next"
import { notFound } from "next/navigation"
import { type QueryParams } from "next-sanity"

import { baseMetadata } from "@/config/metadata"
import { routes } from "@/config/routes"
import { revalidateTime } from "@/config/site"
import { client } from "@/sanity/lib/client"
import { ALL_PROJECTS_QUERY, PROJECT_QUERY } from "@/sanity/lib/queries"
import { getProject } from "@/sanity/lib/services"
import { absoluteUrl } from "@/lib/nav"
import { ProjectArticle } from "@/components/project/project-article"

interface ProjectPageProps {
  params: QueryParams
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = await client.fetch<Project>(PROJECT_QUERY, params, {
    next: {
      revalidate: revalidateTime,
    },
  })

  if (!project) {
    return {}
  }

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `${routes.projects.pathname}/${project.slug}`,
    },
    openGraph: {
      ...baseMetadata.openGraph,
      title: project.title,
      description: project.description,
      type: "article",
      url: absoluteUrl(`${routes.projects.pathname}/${project.slug}`),
    },
  }
}

export async function generateStaticParams() {
  const projects = await client.fetch<Project[]>(
    ALL_PROJECTS_QUERY,
    {},
    {
      next: {
        revalidate: revalidateTime,
      },
    }
  )

  return projects.map((project) => ({
    slug: project.slug.current,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { data } = await getProject(params.slug)

  if (!data) {
    notFound()
  }

  return (
    <section className="container flex flex-col gap-16 py-16 md:pb-32">
      <ProjectArticle project={data} />
    </section>
  )
}
