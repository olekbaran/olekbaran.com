import { ArrowUpRightIcon } from "lucide-react"

import { calculateMonthsDifference, formatDate } from "@/lib/utils"

import { Link } from "./link"
import { Typography } from "./typography"

interface PositionCardProps {
  company: string
  position: string
  startDate: string | number | Date
  endDate?: string | number | Date
  companyWebsiteUrl?: string
}

export function PositionCard({
  company,
  position,
  startDate,
  endDate,
  companyWebsiteUrl,
}: PositionCardProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-5 border-b border-gray px-5 py-10">
      <div className="flex flex-col gap-5 overflow-hidden">
        <Typography variant="h6" className="max-w-full truncate">
          {company}
        </Typography>
        <div className="flex flex-col gap-1">
          <Typography variant="subtitle2">{position}</Typography>
          <Typography variant="subtitle2" className="text-gray">
            {formatDate(startDate)} -{" "}
            {endDate ? formatDate(endDate) : "Present"} (
            {calculateMonthsDifference(startDate, endDate)} mos)
          </Typography>
        </div>
      </div>
      {companyWebsiteUrl && (
        <Link
          href={companyWebsiteUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Company website"
          className="h-9 md:h-32"
        >
          <ArrowUpRightIcon className="h-9 w-9 stroke-[1.5px] md:h-32 md:w-32 md:stroke-[0.5px]" />
        </Link>
      )}
    </div>
  )
}
