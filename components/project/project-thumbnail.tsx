import Image from "next/image"
import { ArrowUpRightIcon } from "lucide-react"

import { cn } from "@/lib/utils"

import { Badge } from "../common/badge"
import { Typography } from "../typography/typography"

interface ProjectThumbnailProps {
  title: string
  image: string
  hasDemo?: boolean
}

export function ProjectThumbnail({
  title,
  image,
  hasDemo,
}: ProjectThumbnailProps) {
  return (
    <div className="relative inline-flex aspect-square w-full overflow-hidden rounded-3xl p-0.5 sm:aspect-video">
      <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,theme(colors.black)_0%,theme(colors.white)_25%,theme(colors.black)_50%,theme(colors.black)_100%)]" />
      <div className="relative w-full overflow-hidden rounded-[22px]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="100vw"
          quality={100}
          priority
          className={cn(
            "rounded-3xl object-cover",
            hasDemo &&
              "transition-transform duration-500 ease-in-out hover:scale-110"
          )}
        />
        {hasDemo && (
          <div className="absolute bottom-0 left-1/2 max-w-full -translate-x-1/2 p-2">
            <div className="overflow-hidden">
              <Badge size="large" withHoverAnimation className="h-12">
                <Typography variant="body1" className="truncate">
                  See it in action
                </Typography>
                <ArrowUpRightIcon className="shrink-0 stroke-[1.5px]" />
              </Badge>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
