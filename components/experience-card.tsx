import { ArrowUpRightIcon, SparkleIcon } from "lucide-react"

import { calculateMonthsDifference, formatDate } from "@/lib/utils"

import { Link } from "./link"
import { Typography } from "./typography"

interface ExperienceCardProps {
  company: string
  position: string
  startDate: string | number | Date
  endDate?: string | number | Date
  companyWebsiteUrl?: string
}

export function ExperienceCard({
  company,
  position,
  startDate,
  endDate,
  companyWebsiteUrl,
}: ExperienceCardProps) {
  return (
    <div className="flex items-center justify-between gap-10 border-b border-gray px-5 py-10">
      <div className="flex flex-col gap-5 overflow-hidden">
        {companyWebsiteUrl ? (
          <Link
            href={companyWebsiteUrl}
            target="_blank"
            rel="noreferrer"
            className="h-10"
          >
            <div className="flex items-center gap-5">
              <Typography variant="h6" className="truncate">
                {company}
              </Typography>
              <ArrowUpRightIcon className="h-10 w-10 shrink-0" />
            </div>
          </Link>
        ) : (
          <Typography variant="h6" className="truncate">
            {company}
          </Typography>
        )}
        <div className="flex flex-col gap-1">
          <Typography variant="subtitle2">{position}</Typography>
          <Typography variant="subtitle2" className="text-gray">
            {formatDate(startDate)} -{" "}
            {endDate ? formatDate(endDate) : "Present"} (
            {calculateMonthsDifference(startDate, endDate)} mos)
          </Typography>
        </div>
      </div>
      <SparkleIcon className="hidden h-10 w-10 shrink-0 stroke-1 sm:block md:h-14 md:w-14" />
    </div>
  )
}
