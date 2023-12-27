import { ArrowUpRightIcon } from "lucide-react"

import { routes } from "@/config/routes"
import { cn } from "@/lib/utils"
import { useLockBody } from "@/hooks/use-lock-body"

import { Link } from "./link"
import { Typography } from "./typography"

interface MobileNavProps {
  pathname: string
  isOpen: boolean
  onLinkClick?: () => void
}

export function MobileNav({ pathname, isOpen, onLinkClick }: MobileNavProps) {
  useLockBody(isOpen)

  return (
    <nav
      className={cn(
        "fixed inset-y-0 w-full -translate-y-full overflow-y-auto border-b border-gray/10 bg-black py-16 transition-transform duration-500 ease-in-out md:hidden",
        isOpen && "top-16 translate-y-0"
      )}
    >
      <ul className="container flex flex-col gap-10">
        {Object.values(routes).map((route) => (
          <li key={route.slug} className="border-b border-gray px-5 pb-10">
            <Link
              href={route.slug}
              className="h-10 w-full"
              onClick={onLinkClick}
            >
              <div className="flex items-center gap-5">
                <Typography
                  variant="h6"
                  className={cn(
                    "truncate",
                    route.slug === pathname ? "text-white" : "text-gray"
                  )}
                >
                  {route.title}
                </Typography>
                <ArrowUpRightIcon className="h-8 w-8 shrink-0" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
