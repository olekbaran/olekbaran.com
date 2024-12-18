"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { MenuIcon, XIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { useNavStore } from "@/stores/nav-store"

import { IconButton } from "../buttons/icon-button"
import { MainNav } from "../nav/main-nav"
import { MobileNav } from "../nav/mobile-nav"
import { Logo } from "./logo"

interface HeaderProps {
  disableProjectsRoute?: boolean
}
export function Header({ disableProjectsRoute }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const { isContactSectionActive, setIsContactSectionInactive } = useNavStore(
    (state) => state
  )

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev)
  }

  useEffect(() => {
    setIsContactSectionInactive()
  }, [pathname, setIsContactSectionInactive])

  return (
    <header className="sticky top-0 z-50 flex h-16 w-full flex-col justify-center border-b border-gray/10 bg-black">
      <div className="container z-50 flex h-full w-full items-center justify-between gap-10 bg-black">
        <Logo />
        <MainNav
          className="hidden md:block"
          pathname={pathname}
          disableProjectsRoute={disableProjectsRoute}
          isContactSectionActive={isContactSectionActive}
        />
        <IconButton
          label={`${isMenuOpen ? "Close" : "Open"} navigation menu`}
          variant="ghost"
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
      <MobileNav
        pathname={pathname}
        isOpen={isMenuOpen}
        onLinkClick={toggleMenu}
        disableProjectsRoute={disableProjectsRoute}
        isContactSectionActive={isContactSectionActive}
      />
    </header>
  )
}
