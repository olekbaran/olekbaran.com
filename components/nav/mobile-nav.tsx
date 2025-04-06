import { ArrowUpRightIcon } from "lucide-react"

import { routes } from "@/config/routes"
import { isRouteActive } from "@/lib/nav"
import { cn } from "@/lib/utils"
import { useLockBody } from "@/hooks/use-lock-body"

import { Typography } from "../typography/typography"
import { Link } from "./link"

interface MobileNavProps {
  pathname: string
  isOpen: boolean
  onLinkClick?: () => void
  disableProjectsRoute?: boolean
  isContactSectionActive?: boolean
}

export function MobileNav({
  pathname,
  isOpen,
  onLinkClick,
  disableProjectsRoute,
  isContactSectionActive,
}: MobileNavProps) {
  useLockBody(isOpen)

  return (
    <nav
      className={cn(
        "fixed inset-y-0 w-full -translate-y-full overflow-y-auto border-b border-gray/20 bg-black py-16 transition-transform duration-500 ease-in-out md:hidden",
        isOpen && "top-16 translate-y-0"
      )}
    >
      <ul className="container flex flex-col gap-10">
        {Object.values(routes).map((route) => {
          if (
            disableProjectsRoute &&
            route.pathname === routes.projects.pathname
          ) {
            return null
          }
          return (
            <li
              key={route.pathname}
              className="border-b border-gray px-5 pb-10"
            >
              <Link
                href={route.pathname}
                className="h-10 w-full"
                onClick={onLinkClick}
              >
                <div className="flex items-center gap-5">
                  <Typography
                    variant="h6"
                    className={cn(
                      isRouteActive(
                        pathname,
                        route.pathname,
                        isContactSectionActive
                      )
                        ? "text-white"
                        : "text-gray",
                      "truncate transition-colors duration-500 ease-in-out"
                    )}
                  >
                    {route.title}
                  </Typography>
                  <ArrowUpRightIcon className="size-8 shrink-0" />
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
