import { type ButtonHTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { TouchTarget } from "./touch-target"

const iconButtonVariants = cva("relative p-2", {
  variants: {
    variant: {
      outline: "rounded-xl border border-gray/10",
      ghost: "",
    },
  },
  defaultVariants: {
    variant: "outline",
  },
})

interface IconButtonProps
  extends VariantProps<typeof iconButtonVariants>,
    ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}

function IconButton({
  label,
  variant,
  className,
  children,
  ...props
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className={cn(iconButtonVariants({ variant }), className)}
      {...props}
    >
      <TouchTarget>{children}</TouchTarget>
    </button>
  )
}

export { IconButton, iconButtonVariants }
