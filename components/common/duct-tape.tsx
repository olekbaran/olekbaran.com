import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { ParallaxHorizontal } from "../utils/parallax-horizontal"

const ductTapeVariants = cva("w-full", {
  variants: {
    variant: {
      primary: "bg-black text-white",
      secondary: "bg-blue text-white",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
})

interface DuctTapeProps
  extends VariantProps<typeof ductTapeVariants>,
    React.HTMLAttributes<HTMLElement> {}

function DuctTape({ variant, className, children, ...props }: DuctTapeProps) {
  return (
    <div className={cn(ductTapeVariants({ variant }), className)} {...props}>
      <ParallaxHorizontal>
        <div className="mx-10 flex items-center gap-20">{children}</div>
      </ParallaxHorizontal>
    </div>
  )
}

export { DuctTape, ductTapeVariants }
