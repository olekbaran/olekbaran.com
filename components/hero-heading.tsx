import { type HTMLAttributes } from "react"
import { SparkleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

import { Typography } from "./typography"

interface HeroHeadingProps extends HTMLAttributes<HTMLElement> {}

export function HeroHeading({ className, ...props }: HeroHeadingProps) {
  return (
    <div className={cn("flex items-center gap-20", className)} {...props}>
      <SparkleIcon className="h-16 w-16 shrink-0 stroke-1" />
      <Typography variant="h1" className="whitespace-nowrap">
        Olek Baran
      </Typography>
      <SparkleIcon className="h-16 w-16 shrink-0 stroke-1" />
      <Typography variant="h1" className="whitespace-nowrap">
        Front-end Developer
      </Typography>
    </div>
  )
}
