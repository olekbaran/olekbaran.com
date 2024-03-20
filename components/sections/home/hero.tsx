import { routes } from "@/config/routes"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/buttons/button"
import { Link } from "@/components/nav/link"
import { HeroHeading } from "@/components/typography/hero-heading"
import { Typography } from "@/components/typography/typography"

export function Hero() {
  return (
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
        <Typography variant="subtitle1" className="max-w-4xl text-gray" asChild>
          <h2>
            I&apos;m a front-end developer passionate about building dynamic and
            user-friendly web applications.
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
  )
}
