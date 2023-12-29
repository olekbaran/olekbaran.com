import { ArrowLeftIcon } from "lucide-react"

import { Link } from "./link"
import { Typography } from "./typography"

interface GoBackProps {
  pageTitle: string
  pathname: string
}

export function GoBack({ pageTitle, pathname }: GoBackProps) {
  return (
    <Link href={pathname}>
      <div className="flex items-center gap-2">
        <ArrowLeftIcon className="h-5 w-5 shrink-0 stroke-[1.5px] text-gray" />
        <Typography variant="body1" className="truncate text-gray">
          Back to {pageTitle}
        </Typography>
      </div>
    </Link>
  )
}
