import { routes } from "@/config/routes"
import { isSubpath } from "@/lib/utils"

import { Typography } from "../typography/typography"
import { Link } from "./link"

interface MainNavProps extends React.HTMLAttributes<HTMLElement> {
  pathname: string
  disableProjectsRoute?: boolean
}

export function MainNav({
  pathname,
  disableProjectsRoute,
  ...props
}: MainNavProps) {
  return (
    <nav {...props}>
      <ul className="flex flex-col items-center justify-end gap-5 md:flex-row md:gap-10">
        {Object.values(routes).map((route) => {
          if (
            disableProjectsRoute &&
            route.pathname === routes.projects.pathname
          ) {
            return null
          }

          return (
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
          )
        })}
      </ul>
    </nav>
  )
}
