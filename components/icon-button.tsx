import { type ButtonHTMLAttributes } from "react"

import { cn } from "@/lib/utils"

import { TouchTarget } from "./touch-target"

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  variant?: "outline" | "ghost"
}

export function IconButton({
  label,
  variant = "outline",
  className,
  children,
  ...props
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className={cn(
        "relative",
        variant === "outline" && "rounded-xl border border-gray/10",
        className
      )}
      {...props}
    >
      <TouchTarget>{children}</TouchTarget>
    </button>
  )
}
