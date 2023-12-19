import { type ButtonHTMLAttributes } from "react"

import { cn } from "@/lib/utils"

import { TouchTarget } from "./touch-target"

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}

export function IconButton({
  label,
  className,
  children,
  ...props
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className={cn("relative", className)}
      {...props}
    >
      <TouchTarget>{children}</TouchTarget>
    </button>
  )
}
