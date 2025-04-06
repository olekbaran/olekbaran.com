import { ArrowUpRightIcon } from "lucide-react"

import { Link } from "../nav/link"
import { Typography } from "../typography/typography"

interface ProjectLinkProps {
  label: string
  url: string
}

export function ProjectLink({ label, url }: ProjectLinkProps) {
  return (
    <Link href={url} target="_blank" rel="noreferrer" className="h-10">
      <div className="flex items-center gap-2">
        <Typography variant="h6" className="truncate" asChild>
          <span>{label}</span>
        </Typography>
        <ArrowUpRightIcon className="size-10 shrink-0" />
      </div>
    </Link>
  )
}
