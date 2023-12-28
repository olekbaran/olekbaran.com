import { type Metadata } from "next"
import Link from "next/link"

import { routes } from "@/config/routes"
import { Heading } from "@/components/heading"
import { ProjectCard } from "@/components/project-card"

const mockedProjects = [
  {
    title: "Genemod 1",
    slug: "genemod-1",
    image:
      "https://s3-alpha-sig.figma.com/img/0f63/7ea1/448b1ebb7851ef275a876c1962e99096?Expires=1704672000&Signature=d0zNl-V~YFYKLVtq2fQVS4bWx2gaN54aDD80KEYF5x4FxKwK0lYMRHb7xIcv8cT54efUt1lgoMY1yphSmFHuPgo9D8cSw2UY8DfUAnCd7lKJ1y92ZCB8nPbHfb5P5E4kl4hCAFnw5rlMr9385db7B8gPdrEofj1Z4-fZpNnvHl~6eNob0G5dpW~NylwP5X68MYC44Sp~nCe1UN5hjV8mxak9jkM0U9hNg-xSPcVhne2pIm4kR7UvTDdHGle0sUzwjCy5M3YyQmf65Eliz~c36pmb9INzHFFuR-NJmFCsNkby0Q7~edD4tbtskaLfuCsY3qUZJaFpn45jEd6MYWkkjg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    isOpenSourceContribution: false,
  },
  {
    title: "CallerSmart 1",
    slug: "callersmart-1",
    image:
      "https://s3-alpha-sig.figma.com/img/4ece/87d8/43acb64cac6383c6ee8299c5319b2cf3?Expires=1704672000&Signature=dGgw2vmKiAvKwxPem~hEkptH0Zwn06aoZ-OG169ex~pxY4qbRI1QIEQzTCygQeeEyj788P47Q3L5C3xiP7MxzgkITyWHQtlwW6YTHlu1s1wez8r6bCZNx5z63yT91O3ThPd5w00DsqNcwACCEmWMLjsjegCpLlXnvRHmhbIZZ5wFpgYMp7iNvlVHvdi8NOS2vatYje5h3I4LwI1YaAkYtq7gl~d4Lq8HHradBYfXRY4wnYufAHdJrAMTbz9WTpQh374oOOfBq6NeaoN4c0NIl-xLjgBHr~TcNlKtAB6Mk-vCCLzR9IW8vxVV6Y1KKQwVedxVjGYRc50bGWN9LAFGxQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    isOpenSourceContribution: false,
  },
  {
    title: "CallerSmart 2",
    slug: "callersmart-2",
    image:
      "https://s3-alpha-sig.figma.com/img/4ece/87d8/43acb64cac6383c6ee8299c5319b2cf3?Expires=1704672000&Signature=dGgw2vmKiAvKwxPem~hEkptH0Zwn06aoZ-OG169ex~pxY4qbRI1QIEQzTCygQeeEyj788P47Q3L5C3xiP7MxzgkITyWHQtlwW6YTHlu1s1wez8r6bCZNx5z63yT91O3ThPd5w00DsqNcwACCEmWMLjsjegCpLlXnvRHmhbIZZ5wFpgYMp7iNvlVHvdi8NOS2vatYje5h3I4LwI1YaAkYtq7gl~d4Lq8HHradBYfXRY4wnYufAHdJrAMTbz9WTpQh374oOOfBq6NeaoN4c0NIl-xLjgBHr~TcNlKtAB6Mk-vCCLzR9IW8vxVV6Y1KKQwVedxVjGYRc50bGWN9LAFGxQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    isOpenSourceContribution: true,
  },
  {
    title: "Genemod 2",
    slug: "genemod-2",
    image:
      "https://s3-alpha-sig.figma.com/img/0f63/7ea1/448b1ebb7851ef275a876c1962e99096?Expires=1704672000&Signature=d0zNl-V~YFYKLVtq2fQVS4bWx2gaN54aDD80KEYF5x4FxKwK0lYMRHb7xIcv8cT54efUt1lgoMY1yphSmFHuPgo9D8cSw2UY8DfUAnCd7lKJ1y92ZCB8nPbHfb5P5E4kl4hCAFnw5rlMr9385db7B8gPdrEofj1Z4-fZpNnvHl~6eNob0G5dpW~NylwP5X68MYC44Sp~nCe1UN5hjV8mxak9jkM0U9hNg-xSPcVhne2pIm4kR7UvTDdHGle0sUzwjCy5M3YyQmf65Eliz~c36pmb9INzHFFuR-NJmFCsNkby0Q7~edD4tbtskaLfuCsY3qUZJaFpn45jEd6MYWkkjg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    isOpenSourceContribution: false,
  },
]

export const metadata: Metadata = {
  title: routes.projects.title,
}

export default function ProjectsPage() {
  return (
    <section className="container flex flex-col gap-16 py-16 md:pb-32">
      <Heading
        title="Projects"
        subtitle="Explore what I've been cooking up lately! From techy experiments to creative vibes, this is where all of the projects hang out."
      />
      <ul className="grid gap-10 md:grid-cols-2">
        {mockedProjects.map((project) => (
          <li key={project.slug}>
            <Link
              href={`${routes.projects.pathname}/${project.slug}`}
              className="rounded-3xl"
            >
              <ProjectCard
                title={project.title}
                image={project.image}
                isOpenSourceContribution={project.isOpenSourceContribution}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
