"use client"

import { SocialLinks } from "../buttons/social-links"
import { Typography } from "../typography/typography"
import { GetInTouch } from "./get-in-touch"
import { Logo } from "./logo"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-gray/20 bg-black py-10 md:pt-20">
      <div className="flex flex-col gap-10 md:gap-20">
        <GetInTouch />
        <div className="container flex flex-col-reverse items-center justify-between gap-10 md:flex-row">
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
