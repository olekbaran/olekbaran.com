import { draftMode } from "next/headers"

import { routes } from "@/config/routes"
import { siteConfig } from "@/config/site"
import { getSlicedProjects } from "@/sanity/lib/services"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/button"
import { ContactCard } from "@/components/contact-card"
import { Heading } from "@/components/heading"
import { HeroHeading } from "@/components/hero-heading"
import { Link } from "@/components/link"
import { Projects } from "@/components/projects"
import { ProjectsPreview } from "@/components/projects-preview"
import { TechnologyCard } from "@/components/technology-card"
import { Typography } from "@/components/typography"

const mockedTechStack = ["JavaScript", "TypeScript", "React", "Next.js"]

export default async function IndexPage() {
  const initialProjects = await getSlicedProjects(2)

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
      <section
        id="latest-projects"
        className="container flex flex-col gap-16 py-16 md:py-32"
      >
        <Heading
          title="Latest projects"
          subtitle="Check out the awesome stuff I've been up to lately. I've been working on some exciting projects that I think you'll enjoy."
        />
        {draftMode().isEnabled ? (
          <ProjectsPreview initial={initialProjects} />
        ) : (
          <Projects projects={initialProjects.data} />
        )}
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
