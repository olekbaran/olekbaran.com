import Image from "next/image"
import {
  ArrowUpRightIcon,
  CalendarCheck2Icon,
  GitPullRequestArrowIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"

import { Badge } from "../common/badge"
import { Typography } from "../typography/typography"

interface ProjectCardProps {
  title: string
  image: string
  isOpenSourceContribution?: boolean
  isRecentlyAdded?: boolean
}

export function ProjectCard({
  title,
  image,
  isOpenSourceContribution,
  isRecentlyAdded,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "relative aspect-square cursor-pointer overflow-hidden rounded-3xl border border-gray/10",
        isRecentlyAdded && "inline-flex w-full border-0 p-0.5"
      )}
    >
      {isRecentlyAdded && (
        <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,theme(colors.black)_0%,theme(colors.white)_25%,theme(colors.black)_50%,theme(colors.black)_100%)]" />
      )}
      <div
        className={cn(
          isRecentlyAdded &&
            "relative w-full overflow-hidden rounded-[22px] bg-black"
        )}
      >
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={100}
          priority
          className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
        />
        {(isOpenSourceContribution || isRecentlyAdded) && (
          <div className="absolute right-0 top-0 flex max-w-full flex-wrap items-center justify-end gap-2 p-2">
            {isRecentlyAdded && (
              <div className="overflow-hidden">
                <Badge withHoverAnimation className="h-9">
                  <CalendarCheck2Icon className="h-5 w-5 shrink-0 stroke-[1.5px]" />
                  <Typography variant="body2" className="truncate">
                    Recently added
                  </Typography>
                </Badge>
              </div>
            )}
            {isOpenSourceContribution && (
              <div className="overflow-hidden">
                <Badge withHoverAnimation className="h-9">
                  <GitPullRequestArrowIcon className="h-5 w-5 shrink-0 stroke-[1.5px]" />
                  <Typography variant="body2" className="truncate">
                    Open Source Contribution
                  </Typography>
                </Badge>
              </div>
            )}
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
    </div>
  )
}
