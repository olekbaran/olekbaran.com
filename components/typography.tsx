import { createElement } from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const typographyVariants = cva("block", {
  variants: {
    variant: {
      h1: "text-7xl font-extrabold leading-none uppercase",
      h2: "text-lg md:text-6xl font-bold leading-6 md:leading-none uppercase",
      h3: "text-lg md:text-5xl font-bold leading-6 md:leading-none uppercase",
      h4: "text-lg md:text-4xl font-bold leading-6 md:leading-8 uppercase",
      h5: "text-lg md:text-3xl font-bold leading-6 md:leading-7 uppercase",
      h6: "text-lg md:text-2xl font-bold leading-6 uppercase",
      subtitle1: "text-base md:text-xl leading-5 md:leading-6 uppercase",
      subtitle2: "text-base md:text-lg leading-5 md:leading-6",
      body1: "text-base leading-5",
      body2: "text-sm leading-3",
      button: "text-base leading-5 capitalize",
      caption: "text-xs leading-3",
      logo: "text-base font-bold leading-5 capitalize",
    },
  },
  defaultVariants: {
    variant: "body1",
  },
})

interface TypographyProps
  extends VariantProps<typeof typographyVariants>,
    React.HTMLAttributes<HTMLElement> {
  asChild?: boolean
}

const defaultVariantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  button: "span",
  caption: "span",
  logo: "p",
}

function Typography({
  asChild,
  variant,
  className,
  children,
  ...props
}: TypographyProps) {
  const type = variant
    ? defaultVariantMapping[variant]
    : defaultVariantMapping.body1

  const Comp = asChild ? Slot : type

  return createElement(
    Comp,
    { className: cn(typographyVariants({ variant }), className), ...props },
    children
  )
}

export { Typography, typographyVariants }
