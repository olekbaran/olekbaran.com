import { type HTMLAttributes } from "react"

import { routes } from "@/config/routes"
import { isSubpath } from "@/lib/utils"

import { Link } from "./link"
import { Typography } from "./typography"

interface MainNavProps extends HTMLAttributes<HTMLElement> {
  pathname: string
}

export function MainNav({ pathname, ...props }: MainNavProps) {
  return (
    <nav {...props}>
      <ul className="flex flex-col items-center justify-end gap-5 md:flex-row md:gap-10">
        {Object.values(routes).map((route) => (
          <li key={route.pathname}>
            <Link href={route.pathname}>
              <Typography
                variant="body1"
                className={
                  isSubpath(route.pathname, pathname)
                    ? "text-white"
                    : "text-gray"
                }
              >
                {route.title}
              </Typography>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
