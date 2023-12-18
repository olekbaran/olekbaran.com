import { type ReactNode } from "react"
import NextLink, { LinkProps as NextLinkProps } from "next/link"

interface LinkProps extends NextLinkProps {
  children: ReactNode
}

export function Link({ children, ...props }: LinkProps) {
  return (
    <NextLink className="block h-8 overflow-hidden" {...props}>
      <div className="transition-transform duration-500 ease-in-out hover:-translate-y-1/2">
        <div>{children}</div>
        <div aria-hidden>{children}</div>
      </div>
    </NextLink>
  )
}
