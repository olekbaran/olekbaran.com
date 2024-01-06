import Image from "next/image"
import { ArrowUpRightIcon, GitPullRequestArrowIcon } from "lucide-react"

import { Badge } from "./badge"
import { Typography } from "./typography"

interface ProjectCardProps {
  title: string
  image: string
  isOpenSourceContribution?: boolean
}

export function ProjectCard({
  title,
  image,
  isOpenSourceContribution,
}: ProjectCardProps) {
  return (
    <div className="relative aspect-square overflow-hidden rounded-3xl border border-gray/10">
      <Image
        src={image}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        quality={100}
        priority
        className="rounded-3xl object-cover transition-transform duration-500 ease-in-out hover:scale-110"
      />
      {isOpenSourceContribution && (
        <div className="absolute right-0 top-0 max-w-full p-2">
          <div className="overflow-hidden">
            <Badge withHoverAnimation className="h-9">
              <GitPullRequestArrowIcon className="h-5 w-5 shrink-0 stroke-[1.5px]" />
              <Typography variant="body2" className="truncate">
                Open Source Contribution
              </Typography>
            </Badge>
          </div>
        </div>
      )}
      <div className="absolute bottom-0 left-0 max-w-full p-2">
        <div className="overflow-hidden">
          <Badge size="large" withHoverAnimation className="h-12">
            <Typography variant="body1" className="truncate">
              {title}
            </Typography>
            <ArrowUpRightIcon className="shrink-0 stroke-[1.5px]" />
          </Badge>
        </div>
      </div>
    </div>
  )
}
