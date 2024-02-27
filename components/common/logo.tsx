import { routes } from "@/config/routes"

import { Link } from "../nav/link"
import { Typography } from "../typography/typography"

export function Logo() {
  return (
    <Link href={routes.home.pathname}>
      <Typography variant="logo" className="truncate">
        Olek Baran
      </Typography>
    </Link>
  )
}
