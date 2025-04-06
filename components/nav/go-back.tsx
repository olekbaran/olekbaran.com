import { ArrowLeftIcon } from "lucide-react"

import { Typography } from "../typography/typography"
import { Link } from "./link"

interface GoBackProps {
  pageTitle: string
  pathname: string
}

export function GoBack({ pageTitle, pathname }: GoBackProps) {
  return (
    <Link href={pathname}>
      <div className="flex items-center gap-2">
        <ArrowLeftIcon className="size-5 shrink-0 stroke-[1.5px] text-gray" />
        <Typography variant="body1" className="truncate text-gray">
          Back to {pageTitle}
        </Typography>
      </div>
    </Link>
  )
}
