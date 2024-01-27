import { type Metadata } from "next"
import Link from "next/link"

import { routes } from "@/config/routes"
import { absoluteUrl } from "@/lib/utils"
import { Heading } from "@/components/heading"
import { ProjectCard } from "@/components/project-card"

const mockedProjects = [
  {
    title: "Genemod 1",
    slug: "genemod-1",
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/0f63/7ea1/448b1ebb7851ef275a876c1962e99096?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z00OGNj9p39vl2P2KWQXlHJ3dyRljqIKg8ou5A30wmw8A0ZYlSBqn8YFZvoLpR6qtN58JPUmybkoR~7TxjyK0VClwTEDOyK3jG-LU4PRbJTiJ54-cYxQGlkAD4BknJOcebxSKF4kUqMFvKoNRWJc6Kk-S4DJdB9lnfeH0UJRfOs9Js0MdPH2LztcbUbmKjYpaalFdQDn0EzgTYaTOMZ02efQ~ppG3psnA1lV08xiFidYhTe9qk-DViVioKfF4DoJafQXDMF4bA7nj7tNR7JydsPQKxHCDAbBHwszAaibKBmeqTs3ocLU~KlL1ShnxZ0A3PmJlb0wyTndGild7rOx~g__",
    isOpenSourceContribution: false,
  },
  {
    title: "CallerSmart 1",
    slug: "callersmart-1",
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/4ece/87d8/43acb64cac6383c6ee8299c5319b2cf3?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ENF63fcbplW3uBuv5c6xXY1-KsPs-YSynKQiCOUESwPSmcxuanK488KsReJ-PPlHRIBWHe4iqYBUv567vd3QRo0TKzmemgoqkEoXDEJ8bDBQC8o~d8wPe~qLLIThHgWVXyfF2-tO8kLk-Xt5PnLK3xw5evzfvYHaxs5k47a6MLWTQHr3csOSBMTVupBCexbzOneNXdVTeAZDqPVVQlOi2zbFc9wJd56WbeW5kf49maJnyy3yo5QCClHpUjlyPUGCSfevogZAlCM3pe6e2v87yNdag59kpNkSi6mbjsXQDLVsA0cGXhVEZe8b4cwwT3TqGzsMImjkROBQ-fd-2NraRQ__",
    isOpenSourceContribution: false,
  },
  {
    title: "CallerSmart 2",
    slug: "callersmart-2",
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/4ece/87d8/43acb64cac6383c6ee8299c5319b2cf3?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ENF63fcbplW3uBuv5c6xXY1-KsPs-YSynKQiCOUESwPSmcxuanK488KsReJ-PPlHRIBWHe4iqYBUv567vd3QRo0TKzmemgoqkEoXDEJ8bDBQC8o~d8wPe~qLLIThHgWVXyfF2-tO8kLk-Xt5PnLK3xw5evzfvYHaxs5k47a6MLWTQHr3csOSBMTVupBCexbzOneNXdVTeAZDqPVVQlOi2zbFc9wJd56WbeW5kf49maJnyy3yo5QCClHpUjlyPUGCSfevogZAlCM3pe6e2v87yNdag59kpNkSi6mbjsXQDLVsA0cGXhVEZe8b4cwwT3TqGzsMImjkROBQ-fd-2NraRQ__",
    isOpenSourceContribution: true,
  },
  {
    title: "Genemod 2",
    slug: "genemod-2",
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/0f63/7ea1/448b1ebb7851ef275a876c1962e99096?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z00OGNj9p39vl2P2KWQXlHJ3dyRljqIKg8ou5A30wmw8A0ZYlSBqn8YFZvoLpR6qtN58JPUmybkoR~7TxjyK0VClwTEDOyK3jG-LU4PRbJTiJ54-cYxQGlkAD4BknJOcebxSKF4kUqMFvKoNRWJc6Kk-S4DJdB9lnfeH0UJRfOs9Js0MdPH2LztcbUbmKjYpaalFdQDn0EzgTYaTOMZ02efQ~ppG3psnA1lV08xiFidYhTe9qk-DViVioKfF4DoJafQXDMF4bA7nj7tNR7JydsPQKxHCDAbBHwszAaibKBmeqTs3ocLU~KlL1ShnxZ0A3PmJlb0wyTndGild7rOx~g__",
    isOpenSourceContribution: false,
  },
]

export const metadata: Metadata = {
  title: routes.projects.title,
  description:
    "Explore what I've been cooking up lately! From techy experiments to creative vibes, this is where all of the projects hang out.",
  alternates: {
    canonical: routes.projects.pathname,
  },
  openGraph: {
    title: routes.projects.title,
    description:
      "Explore what I've been cooking up lately! From techy experiments to creative vibes, this is where all of the projects hang out.",
    url: absoluteUrl(routes.projects.pathname),
  },
}

export default function ProjectsPage() {
  return (
    <section className="container flex flex-col gap-16 py-16 md:pb-32">
      <Heading
        title="Projects"
        subtitle="Explore what I've been cooking up lately! From techy experiments to creative vibes, this is where all of the projects hang out."
      />
      <ul className="grid gap-10 md:grid-cols-2">
        {mockedProjects.map((project, index) => (
          <li key={project.slug}>
            <Link
              href={`${routes.projects.pathname}/${project.slug}`}
              className="rounded-3xl"
            >
              <ProjectCard
                title={project.title}
                image={project.thumbnail}
                isOpenSourceContribution={project.isOpenSourceContribution}
                isRecentlyAdded={index === 0}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
