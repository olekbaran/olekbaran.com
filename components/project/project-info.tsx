import { formatDate } from "@/lib/utils"

import { Typography } from "../typography/typography"

interface ProjectInfoProps {
  label: string
  value: string
}

export function ProjectInfo({ label, value }: ProjectInfoProps) {
  const isValueDate = Boolean(Date.parse(value))

  return (
    <div className="flex flex-col gap-2">
      <Typography variant="subtitle1" className="text-gray" asChild>
        <span>{label}:</span>
      </Typography>
      <Typography variant="subtitle2" asChild>
        {isValueDate ? (
          <time dateTime={value}>{formatDate(value)}</time>
        ) : (
          <span>{value}</span>
        )}
      </Typography>
    </div>
  )
}
