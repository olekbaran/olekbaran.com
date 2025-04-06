import { ArrowUpRightIcon, SparkleIcon } from "lucide-react"

import { calculateDatesDifference, formatDate } from "@/lib/utils"

import { Link } from "../nav/link"
import { Typography } from "../typography/typography"

interface ExperienceCardProps extends GroupedWorkExperience {}

export function ExperienceCard({ company, positions }: ExperienceCardProps) {
  return (
    <div className="flex flex-col gap-10 overflow-hidden border-b border-gray px-5 py-10">
      {company.website ? (
        <Link
          href={company.website}
          target="_blank"
          rel="noreferrer"
          className="h-10"
        >
          <div className="flex items-center gap-5">
            <Typography variant="h6" className="truncate" asChild>
              <span>{company.name}</span>
            </Typography>
            <ArrowUpRightIcon className="size-10 shrink-0" />
          </div>
        </Link>
      ) : (
        <Typography variant="h6" className="truncate" asChild>
          <p>{company.name}</p>
        </Typography>
      )}
      <ul className="flex flex-col gap-10 sm:px-5">
        {positions.map((position) => (
          <li
            key={position._id}
            className="flex items-center justify-between gap-10"
          >
            <div className="flex flex-col gap-1">
              <Typography variant="subtitle2" asChild>
                <p>{position.position}</p>
              </Typography>
              <Typography variant="subtitle2" className="text-gray" asChild>
                <p>
                  <time dateTime={position.startDate}>
                    {formatDate(position.startDate)}
                  </time>
                  {" - "}
                  {position.endDate ? (
                    <time dateTime={position.endDate}>
                      {formatDate(position.endDate)}
                    </time>
                  ) : (
                    <span>Present</span>
                  )}
                  {" ("}
                  {calculateDatesDifference(
                    position.startDate,
                    position.endDate
                  )}
                  {")"}
                </p>
              </Typography>
            </div>
            <SparkleIcon className="hidden size-10 stroke-1 sm:block md:size-12" />
          </li>
        ))}
      </ul>
    </div>
  )
}
