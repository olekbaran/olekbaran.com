import { type HTMLAttributes } from "react"

import { cn } from "@/lib/utils"

import { Typography } from "./typography"

interface ErrorProps extends HTMLAttributes<HTMLElement> {
  code: number
  message: string
}

export function Error({ code, message, className, ...props }: ErrorProps) {
  return (
    <div
      className={cn("flex flex-col items-center gap-5", className)}
      {...props}
    >
      <Typography variant="h4">{code}</Typography>
      <Typography variant="subtitle2" className="text-gray">
        {message}
      </Typography>
    </div>
  )
}
