import { type ButtonHTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "relative flex w-fit items-center justify-center gap-2 rounded-2xl px-14 py-3.5 text-center",
  {
    variants: {
      variant: {
        primary: "bg-white text-black",
        secondary: "bg-black text-white border border-gray",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
)

interface ButtonProps
  extends VariantProps<typeof buttonVariants>,
    ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ variant, className, children, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    >
      {children}
    </button>
  )
}

export { Button, buttonVariants }
