import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

import { routes } from "@/config/routes"

import { Link } from "./link"
import { Typography } from "./typography"

export function Footer() {
  return (
    <footer className="w-full border-t border-gray/10 bg-black pb-10 pt-20">
      <div className="container flex flex-col gap-20">
        <Link
          href={routes.contact.path}
          className="h-14 rounded-2xl border border-gray px-5 md:h-24 md:rounded-3xl lg:px-10"
        >
          <div className="flex items-center justify-center gap-10 py-2 lg:justify-between">
            <ArrowRightIcon className="hidden h-16 w-16 lg:block" />
            <Typography variant="h3" className="truncate">
              Get in touch
            </Typography>
            <ArrowLeftIcon className="hidden h-16 w-16 lg:block" />
          </div>
        </Link>
      </div>
    </footer>
  )
}
