import { cva, type VariantProps } from "class-variance-authority"
import { SparkleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

import { Typography } from "../typography/typography"

const technologyCardVariants = cva(
  "flex items-center justify-between gap-5 border-b",
  {
    variants: {
      variant: {
        default: "text-gray/20 border-gray/20",
        hightlighted: "text-white border-gray",
      },
      size: {
        small: "px-5 py-10",
        large: "px-5 py-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "small",
    },
  }
)

interface TechnologyCardProps
  extends VariantProps<typeof technologyCardVariants> {
  name: string
}

function TechnologyCard({ name, variant, size }: TechnologyCardProps) {
  return (
    <div className={cn(technologyCardVariants({ variant, size }))}>
      <Typography
        variant={size === "large" ? "h5" : "h6"}
        className="truncate"
        asChild
      >
        <span>{name}</span>
      </Typography>
      <SparkleIcon
        className={cn(
          "h-10 w-10 shrink-0 stroke-1",
          size === "large" && "md:h-14 md:w-14"
        )}
      />
    </div>
  )
}

export { TechnologyCard, technologyCardVariants }
