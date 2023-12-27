import { routes } from "@/config/routes"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/button"
import { Heading } from "@/components/heading"
import { Link } from "@/components/link"
import { Typography } from "@/components/typography"

export default function IndexPage() {
  return (
    <section className="flex flex-col gap-40 py-32">
      <div className="inline-flex flex-nowrap overflow-hidden">
        <div className="animate-infinite-scroll">
          <Heading className="mx-10" />
        </div>
        <div className="animate-infinite-scroll" aria-hidden>
          <Heading className="mx-10" />
        </div>
        <div className="animate-infinite-scroll" aria-hidden>
          <Heading className="mx-10" />
        </div>
      </div>
      <div className="container flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-20">
        <Typography variant="subtitle1" className="max-w-4xl text-gray">
          I&apos;m a front-end developer passionate about building dynamic and
          user-friendly web applications.
        </Typography>
        <Link
          href={routes.contact.path}
          className={cn(
            buttonVariants({ variant: "primary" }),
            "block h-14 p-0"
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
