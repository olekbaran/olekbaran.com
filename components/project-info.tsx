import { formatDate } from "@/lib/utils"

import { Typography } from "./typography"

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
        <span>{isValueDate ? formatDate(value) : value}</span>
      </Typography>
    </div>
  )
}
