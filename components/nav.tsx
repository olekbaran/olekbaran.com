import { type HTMLAttributes } from "react"

import { routes } from "@/config/routes"

import { Link } from "./link"
import { Typography } from "./typography"

interface NavProps extends HTMLAttributes<HTMLElement> {
  pathname: string
}

export function Nav({ pathname, ...props }: NavProps) {
  return (
    <nav {...props}>
      <ul className="flex items-center justify-end gap-10">
        {Object.values(routes).map((route) => (
          <li key={route.path}>
            <Link href={route.path}>
              <Typography
                variant="body1"
                className={route.path === pathname ? "text-white" : "text-gray"}
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
