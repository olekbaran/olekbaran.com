import { GithubIcon, InstagramIcon, LinkedinIcon, MailIcon } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { iconButtonVariants } from "./icon-button"
import { Link } from "./link"

const socialLinks = [
  {
    label: "GitHub",
    icon: <GithubIcon />,
    href: siteConfig.links.github,
  },
  {
    label: "LinkedIn",
    icon: <LinkedinIcon />,
    href: siteConfig.links.linkedIn,
  },
  {
    label: "Instagram",
    icon: <InstagramIcon />,
    href: siteConfig.links.instagram,
  },
  {
    label: "Email",
    icon: <MailIcon />,
    href: `mailto:${siteConfig.email}`,
  },
]

export function SocialLinks() {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-5 md:gap-10">
      {socialLinks.map((link) => (
        <li key={link.label} className="rounded-xl border border-gray/10">
          <Link
            href={link.href}
            aria-label={link.label}
            target="_blank"
            rel="noreferrer"
            className={cn(
              iconButtonVariants({ variant: "outline" }),
              "h-10 border-0 p-0"
            )}
          >
            <div className="p-2">{link.icon}</div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
