import { cn } from "@/lib/utils"

import { Typography } from "./typography"

interface InfoCardProps extends React.HTMLAttributes<HTMLElement> {
  title: string
  subtitle: string
}

export function InfoCard({
  title,
  subtitle,
  className,
  ...props
}: InfoCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-3 overflow-hidden md:items-start",
        className
      )}
      {...props}
    >
      <Typography variant="h6" className="max-w-full truncate" asChild>
        <p>{title}</p>
      </Typography>
      <Typography
        variant="body1"
        className="max-w-full truncate lowercase text-gray"
      >
        {subtitle}
      </Typography>
    </div>
  )
}
