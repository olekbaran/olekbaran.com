import { cva, type VariantProps } from "class-variance-authority"
import { SparkleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

import { Typography } from "./typography"

const technologyCardVariants = cva(
  "flex items-center justify-between gap-5 border-b border-gray",
  {
    variants: {
      size: {
        small: "px-5 py-10",
        large: "px-5 py-10",
      },
    },
    defaultVariants: {
      size: "small",
    },
  }
)

interface TechnologyCardProps
  extends VariantProps<typeof technologyCardVariants> {
  name: string
}

function TechnologyCard({ name, size }: TechnologyCardProps) {
  return (
    <div className={cn(technologyCardVariants({ size }))}>
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
