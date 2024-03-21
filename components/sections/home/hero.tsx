import { SparkleIcon } from "lucide-react"

import { routes } from "@/config/routes"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/buttons/button"
import { Link } from "@/components/nav/link"
import { Typography } from "@/components/typography/typography"
import { ParallaxHorizontal } from "@/components/utils/parallax-horizontal"

export function Hero() {
  return (
    <section className="flex flex-col gap-40 py-16 md:py-32">
      <ParallaxHorizontal>
        <div className="mx-10 flex items-center gap-20">
          <SparkleIcon className="h-16 w-16 shrink-0 stroke-1" />
          <Typography variant="h1" className="whitespace-nowrap">
            Olek Baran
          </Typography>
          <SparkleIcon className="h-16 w-16 shrink-0 stroke-1" />
          <Typography variant="h1" className="whitespace-nowrap">
            Front-end Developer
          </Typography>
        </div>
      </ParallaxHorizontal>
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
