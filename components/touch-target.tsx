import { type ReactNode } from "react"

interface TouchTargetProps {
  children: ReactNode
}

export function TouchTarget({ children }: TouchTargetProps) {
  return (
    <>
      {children}
      <span
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[max(100%,2.75rem)] w-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
      />
    </>
  )
}
