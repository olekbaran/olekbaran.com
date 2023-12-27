import { routes } from "@/config/routes"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/button"
import { Heading } from "@/components/heading"
import { HeroHeading } from "@/components/hero-heading"
import { Link } from "@/components/link"
import { Typography } from "@/components/typography"

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
      </section>
    </>
  )
}
