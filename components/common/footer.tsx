"use client"

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

import { routes } from "@/config/routes"

import { SocialLinks } from "../buttons/social-links"
import { Link } from "../nav/link"
import { Typography } from "../typography/typography"
import { Logo } from "./logo"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-gray/10 bg-black py-10 md:pt-20">
      <div className="container flex flex-col gap-10 md:gap-20">
        <Link
          href={routes.contact.pathname}
          className="h-14 w-full rounded-2xl border border-gray md:h-24 md:rounded-3xl"
        >
          <div className="flex items-center justify-center gap-10 px-5 py-2 lg:justify-between lg:px-10">
            <ArrowRightIcon className="hidden h-16 w-16 stroke-1 lg:block" />
            <Typography variant="h3" className="truncate">
              Get in touch
            </Typography>
            <ArrowLeftIcon className="hidden h-16 w-16 stroke-1 lg:block" />
          </div>
        </Link>
        <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row">
          <div className="flex flex-col items-center gap-5 md:items-start">
            <Logo />
            <Typography variant="body2" className="text-center text-gray">
              &copy; {year} Aleksander Baran
            </Typography>
          </div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  )
}
