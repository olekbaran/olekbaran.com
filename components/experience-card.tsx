import { ArrowUpRightIcon, SparkleIcon } from "lucide-react"

import { type WorkExperience } from "@/types"
import { calculateMonthsDifference, formatDate } from "@/lib/utils"

import { Link } from "./link"
import { Typography } from "./typography"

interface ExperienceCardProps {
  company: string
  positions: Omit<WorkExperience, "company" | "companyWebsiteUrl">[]
  companyWebsiteUrl?: string
}

export function ExperienceCard({
  company,
  positions,
  companyWebsiteUrl,
}: ExperienceCardProps) {
  return (
    <div className="flex flex-col gap-10 overflow-hidden border-b border-gray px-5 py-10">
      {companyWebsiteUrl ? (
        <Link
          href={companyWebsiteUrl}
          target="_blank"
          rel="noreferrer"
          className="h-10"
        >
          <div className="flex items-center gap-5">
            <Typography variant="h6" className="truncate" asChild>
              <span>{company}</span>
            </Typography>
            <ArrowUpRightIcon className="h-10 w-10 shrink-0" />
          </div>
        </Link>
      ) : (
        <Typography variant="h6" className="truncate" asChild>
          <p>{company}</p>
        </Typography>
      )}
      <ul className="flex flex-col gap-10 sm:px-5">
        {positions.map((position) => (
          <li
            key={`${position.position}-${position.startDate}`}
            className="flex items-center justify-between gap-10"
          >
            <div className="flex flex-col gap-1">
              <Typography variant="subtitle2" asChild>
                <p>{position.position}</p>
              </Typography>
              <Typography variant="subtitle2" className="text-gray" asChild>
                <p>
                  {formatDate(position.startDate)} -{" "}
                  {position.endDate ? formatDate(position.endDate) : "Present"}{" "}
                  (
                  {calculateMonthsDifference(
                    position.startDate,
                    position.endDate
                  )}{" "}
                  mos)
                </p>
              </Typography>
            </div>
            <SparkleIcon className="hidden h-10 w-10 stroke-1 sm:block md:h-12 md:w-12" />
          </li>
        ))}
      </ul>
    </div>
  )
}
