import { routes } from "@/config/routes"

import { Link } from "./link"
import { Logo } from "./logo"

export function Header() {
  return (
    <header className="sticky top-0 border-b border-gray/10 bg-black py-5">
      <div className="container flex w-full items-center justify-between gap-10">
        <Link href={routes.home.path}>
          <Logo />
        </Link>
      </div>
    </header>
  )
}
