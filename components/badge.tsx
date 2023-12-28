import { type HTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva("flex items-center gap-2", {
  variants: {
    size: {
      small: "px-4 py-2",
      large: "px-8 py-2",
    },
  },
  defaultVariants: {
    size: "large",
  },
})

interface BadgeProps
  extends VariantProps<typeof badgeVariants>,
    HTMLAttributes<HTMLElement> {
  withHoverAnimation?: boolean
}

export function Badge({
  size,
  withHoverAnimation,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn("h-12 rounded-full bg-black/50 backdrop-blur", className)}
      {...props}
    >
      <div
        className={cn(
          "transition-transform duration-500 ease-in-out",
          withHoverAnimation && "hover:-translate-y-1/2"
        )}
      >
        <div className={cn(badgeVariants({ size }))}>{children}</div>
        {withHoverAnimation && (
          <div className={cn(badgeVariants({ size }))} aria-hidden>
            {children}
          </div>
        )}
      </div>
    </div>
  )
}
