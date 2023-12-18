"use client"

import { usePathname } from "next/navigation"

import { routes } from "@/config/routes"

import { Link } from "./link"
import { Typography } from "./typography"

export function Nav() {
  const pathname = usePathname()

  return (
    <nav>
      <ul className="hidden items-center justify-end gap-10 md:flex">
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
