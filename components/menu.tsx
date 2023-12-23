import { cn } from "@/lib/utils"

interface MenuProps {
  pathname: string
  isOpen: boolean
}

export function Menu({ pathname, isOpen }: MenuProps) {
  return (
    <nav
      className={cn(
        "container fixed inset-y-0 -translate-y-full border-b border-gray/10 bg-black transition-transform duration-500 ease-in-out md:hidden",
        isOpen && "top-[calc(4rem+1px)] translate-y-0"
      )}
    >
      Menu
    </nav>
  )
}
