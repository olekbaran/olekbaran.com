import NextLink from "next/link"

import { routes } from "@/config/routes"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/button"
import { ContactCard } from "@/components/contact-card"
import { Heading } from "@/components/heading"
import { HeroHeading } from "@/components/hero-heading"
import { Link } from "@/components/link"
import { ProjectCard } from "@/components/project-card"
import { TechnologyCard } from "@/components/technology-card"
import { Typography } from "@/components/typography"

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

const mockedTechStack = ["JavaScript", "TypeScript", "React", "Next.js"]

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
          <Typography
            variant="subtitle1"
            className="max-w-4xl text-gray"
            asChild
          >
            <h2>
              I&apos;m a front-end developer passionate about building dynamic
              and user-friendly web applications.
            </h2>
          </Typography>
          <Link
            href={routes.contact.pathname}
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
      {mockedProjects.length > 0 && (
        <section
          id="latest-projects"
          className="container flex flex-col gap-16 py-16 md:py-32"
        >
          <Heading
            title="Latest projects"
            subtitle="Check out the awesome stuff I've been up to lately. I've been working on some exciting projects that I think you'll enjoy."
          />
          <ul className="grid gap-10 md:grid-cols-2">
            {mockedProjects.map((project, index) => (
              <li key={project.slug}>
                <NextLink
                  href={`${routes.projects.pathname}/${project.slug}`}
                  className="rounded-3xl"
                >
                  <ProjectCard
                    title={project.title}
                    image={project.thumbnail}
                    isOpenSourceContribution={project.isOpenSourceContribution}
                    isRecentlyAdded={index === 0}
                  />
                </NextLink>
              </li>
            ))}
          </ul>
          <Link
            href={routes.projects.pathname}
            className={cn(
              buttonVariants({ variant: "primary" }),
              "mx-auto block h-14 shrink-0 p-0"
            )}
          >
            <Typography variant="button" className="truncate px-14 py-3">
              Browse all projects
            </Typography>
          </Link>
        </section>
      )}
      {mockedTechStack.length > 0 && (
        <section
          id="tech-stack"
          className="container flex flex-col gap-16 py-16 md:py-32"
        >
          <Heading
            title="Tech stack"
            subtitle="Explore the cutting-edge tools powering my projects. My go-to tech stack that I use to create top-notch web applications."
          />
          <ul className="flex flex-col gap-10">
            {mockedTechStack.map((technology) => (
              <li key={technology}>
                <TechnologyCard name={technology} size="large" />
              </li>
            ))}
          </ul>
        </section>
      )}
      <section
        id="contact"
        className="container flex flex-col gap-16 py-16 md:py-32"
      >
        <Heading
          title="Contact"
          subtitle="Let's create something amazing together. You can get in touch with me using the options below."
        />
        <ul className="flex flex-col items-center gap-10 md:flex-row">
          <li className="w-full">
            <ContactCard label="LinkedIn" link={siteConfig.links.linkedIn} />
          </li>
          <li className="w-full">
            <ContactCard label="Email" link={`mailto:${siteConfig.email}`} />
          </li>
        </ul>
      </section>
    </>
  )
}
