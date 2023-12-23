"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { MenuIcon, XIcon } from "lucide-react"

import { routes } from "@/config/routes"
import { cn } from "@/lib/utils"

import { IconButton } from "./icon-button"
import { Link } from "./link"
import { Logo } from "./logo"
import { Menu } from "./menu"
import { Nav } from "./nav"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <header className="sticky top-0 flex h-16 w-full flex-col justify-center border-b border-gray/10 bg-black">
      <div className="container z-10 flex h-full w-full items-center justify-between gap-10 bg-black">
        <Link href={routes.home.path}>
          <Logo />
        </Link>
        <Nav className="hidden md:block" pathname={pathname} />
        <IconButton
          label={`${isMenuOpen ? "Close" : "Open"} navigation menu`}
          className="md:hidden"
          onClick={toggleMenu}
        >
          <div className="h-6 overflow-hidden">
            <div
              className={cn(
                "transition-transform duration-500 ease-in-out",
                isMenuOpen && "-translate-y-1/2"
              )}
            >
              <MenuIcon />
              <XIcon />
            </div>
          </div>
        </IconButton>
      </div>
      <Menu pathname={pathname} isOpen={isMenuOpen} />
    </header>
  )
}
