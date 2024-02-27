import { ArrowUpRightIcon } from "lucide-react"

import { Link } from "../nav/link"
import { Typography } from "../typography/typography"

interface ContactCardProps {
  label: string
  link: string
}

export function ContactCard({ label, link }: ContactCardProps) {
  return (
    <div className="border-b border-gray px-5 py-10">
      <Link
        href={link}
        target="_blank"
        rel="noreferrer"
        className="mx-auto h-10"
      >
        <div className="flex items-center gap-5">
          <Typography variant="h6" className="truncate" asChild>
            <span>{label}</span>
          </Typography>
          <ArrowUpRightIcon className="h-10 w-10 shrink-0" />
        </div>
      </Link>
    </div>
  )
}
