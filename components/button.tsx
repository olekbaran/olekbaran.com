import { type ButtonHTMLAttributes } from "react"

import { cn } from "@/lib/utils"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "flex w-fit items-center justify-center gap-2 rounded-2xl bg-white px-14 py-3.5 text-center text-black",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
