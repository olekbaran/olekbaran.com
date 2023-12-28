import { type AnchorHTMLAttributes } from "react"
import NextLink, { LinkProps as NextLinkProps } from "next/link"

import { cn } from "@/lib/utils"

interface LinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps>,
    NextLinkProps {}

export function Link({ children, className, ...props }: LinkProps) {
  return (
    <NextLink
      className={cn("block h-8 w-fit max-w-full overflow-hidden", className)}
      {...props}
    >
      <div className="transition-transform duration-500 ease-in-out hover:-translate-y-1/2">
        <div>{children}</div>
        <div aria-hidden>{children}</div>
      </div>
    </NextLink>
  )
}
