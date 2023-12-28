import { type HTMLAttributes } from "react"

import { cn } from "@/lib/utils"

import { Typography } from "./typography"

interface ErrorProps extends HTMLAttributes<HTMLElement> {
  name: string
  message: string
}

export function Error({ name, message, className, ...props }: ErrorProps) {
  return (
    <div
      className={cn("flex flex-col items-center gap-5", className)}
      {...props}
    >
      <Typography variant="h4">{name}</Typography>
      <Typography
        variant="subtitle2"
        className="hyphens-auto break-all text-center text-gray"
      >
        {message}
      </Typography>
    </div>
  )
}
