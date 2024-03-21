import { cn } from "@/lib/utils"

import { Typography } from "./typography"

interface HeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
}

export function Heading({
  title,
  subtitle,
  className,
  ...props
}: HeadingProps) {
  return (
    <div className={cn("flex max-w-4xl flex-col gap-5", className)} {...props}>
      <Typography variant="h4" asChild>
        <h3>{title}</h3>
      </Typography>
      {subtitle && (
        <Typography variant="subtitle2" className="text-gray" asChild>
          <h4>{subtitle}</h4>
        </Typography>
      )}
    </div>
  )
}
