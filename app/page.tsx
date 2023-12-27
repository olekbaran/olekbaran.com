import { routes } from "@/config/routes"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/button"
import { Heading } from "@/components/heading"
import { HeroHeading } from "@/components/hero-heading"
import { Link } from "@/components/link"
import { ProjectCard } from "@/components/project-card"
import { Typography } from "@/components/typography"

const mockedProjects = [
  {
    title: "Genemod",
    slug: "/projects/genemod",
    image:
      "https://s3-alpha-sig.figma.com/img/0f63/7ea1/448b1ebb7851ef275a876c1962e99096?Expires=1704672000&Signature=d0zNl-V~YFYKLVtq2fQVS4bWx2gaN54aDD80KEYF5x4FxKwK0lYMRHb7xIcv8cT54efUt1lgoMY1yphSmFHuPgo9D8cSw2UY8DfUAnCd7lKJ1y92ZCB8nPbHfb5P5E4kl4hCAFnw5rlMr9385db7B8gPdrEofj1Z4-fZpNnvHl~6eNob0G5dpW~NylwP5X68MYC44Sp~nCe1UN5hjV8mxak9jkM0U9hNg-xSPcVhne2pIm4kR7UvTDdHGle0sUzwjCy5M3YyQmf65Eliz~c36pmb9INzHFFuR-NJmFCsNkby0Q7~edD4tbtskaLfuCsY3qUZJaFpn45jEd6MYWkkjg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    title: "CallerSmart",
    slug: "/projects/callersmart",
    image:
      "https://s3-alpha-sig.figma.com/img/4ece/87d8/43acb64cac6383c6ee8299c5319b2cf3?Expires=1704672000&Signature=dGgw2vmKiAvKwxPem~hEkptH0Zwn06aoZ-OG169ex~pxY4qbRI1QIEQzTCygQeeEyj788P47Q3L5C3xiP7MxzgkITyWHQtlwW6YTHlu1s1wez8r6bCZNx5z63yT91O3ThPd5w00DsqNcwACCEmWMLjsjegCpLlXnvRHmhbIZZ5wFpgYMp7iNvlVHvdi8NOS2vatYje5h3I4LwI1YaAkYtq7gl~d4Lq8HHradBYfXRY4wnYufAHdJrAMTbz9WTpQh374oOOfBq6NeaoN4c0NIl-xLjgBHr~TcNlKtAB6Mk-vCCLzR9IW8vxVV6Y1KKQwVedxVjGYRc50bGWN9LAFGxQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    title: "CallerSmart",
    slug: "/projects/callersmart",
    image:
      "https://s3-alpha-sig.figma.com/img/4ece/87d8/43acb64cac6383c6ee8299c5319b2cf3?Expires=1704672000&Signature=dGgw2vmKiAvKwxPem~hEkptH0Zwn06aoZ-OG169ex~pxY4qbRI1QIEQzTCygQeeEyj788P47Q3L5C3xiP7MxzgkITyWHQtlwW6YTHlu1s1wez8r6bCZNx5z63yT91O3ThPd5w00DsqNcwACCEmWMLjsjegCpLlXnvRHmhbIZZ5wFpgYMp7iNvlVHvdi8NOS2vatYje5h3I4LwI1YaAkYtq7gl~d4Lq8HHradBYfXRY4wnYufAHdJrAMTbz9WTpQh374oOOfBq6NeaoN4c0NIl-xLjgBHr~TcNlKtAB6Mk-vCCLzR9IW8vxVV6Y1KKQwVedxVjGYRc50bGWN9LAFGxQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    title: "Genemod",
    slug: "/projects/genemod",
    image:
      "https://s3-alpha-sig.figma.com/img/0f63/7ea1/448b1ebb7851ef275a876c1962e99096?Expires=1704672000&Signature=d0zNl-V~YFYKLVtq2fQVS4bWx2gaN54aDD80KEYF5x4FxKwK0lYMRHb7xIcv8cT54efUt1lgoMY1yphSmFHuPgo9D8cSw2UY8DfUAnCd7lKJ1y92ZCB8nPbHfb5P5E4kl4hCAFnw5rlMr9385db7B8gPdrEofj1Z4-fZpNnvHl~6eNob0G5dpW~NylwP5X68MYC44Sp~nCe1UN5hjV8mxak9jkM0U9hNg-xSPcVhne2pIm4kR7UvTDdHGle0sUzwjCy5M3YyQmf65Eliz~c36pmb9INzHFFuR-NJmFCsNkby0Q7~edD4tbtskaLfuCsY3qUZJaFpn45jEd6MYWkkjg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
]

export default function IndexPage() {
  return (
    <>
      <section className="flex flex-col gap-40 py-16 md:py-32">
        <div className="inline-flex flex-nowrap overflow-hidden">
          <div className="animate-infinite-scroll">
            <HeroHeading className="mx-10" />
          </div>
          <div className="animate-infinite-scroll" aria-hidden>
            <HeroHeading className="mx-10" />
          </div>
          <div className="animate-infinite-scroll" aria-hidden>
            <HeroHeading className="mx-10" />
          </div>
        </div>
        <div className="container flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-20">
          <Typography variant="subtitle1" className="max-w-4xl text-gray">
            I&apos;m a front-end developer passionate about building dynamic and
            user-friendly web applications.
          </Typography>
          <Link
            href={routes.contact.slug}
            className={cn(
              buttonVariants({ variant: "primary" }),
              "block h-14 shrink-0 p-0"
            )}
          >
            <Typography variant="button" className="truncate px-14 py-3">
              Let&apos;s talk
            </Typography>
          </Link>
        </div>
      </section>
      <section
        id="latest-projects"
        className="container flex flex-col gap-16 py-16 md:py-32"
      >
        <Heading
          title="Latest projects"
          subtitle="Check out the awesome stuff I've been up to lately. I’ve been working on some exciting projects that I think you’ll enjoy."
        />
        <ul className="grid gap-10 md:grid-cols-2">
          {mockedProjects.map((project) => (
            <li key={project.slug}>
              <ProjectCard
                title={project.title}
                slug={project.slug}
                image={project.image}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
