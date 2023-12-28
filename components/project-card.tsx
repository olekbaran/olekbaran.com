import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

import { Typography } from "./typography"

interface ProjectCardProps {
  title: string
  image: string
}

export function ProjectCard({ title, image }: ProjectCardProps) {
  return (
    <div className="relative aspect-square overflow-hidden rounded-3xl border border-gray/10">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        quality={100}
        priority
        className="rounded-3xl object-cover transition-transform duration-500 ease-in-out hover:scale-110"
      />
      <div className="absolute bottom-2 max-w-full overflow-hidden px-2">
        <div className="h-12 rounded-full bg-black/50 backdrop-blur">
          <div className="transition-transform duration-500 ease-in-out hover:-translate-y-1/2">
            <div className="flex items-center gap-2 px-8 py-2">
              <Typography variant="body1" className="truncate">
                {title}
              </Typography>
              <ArrowUpRight className="shrink-0 stroke-[1.5px]" />
            </div>
            <div className="flex items-center gap-2 px-8 py-2" aria-hidden>
              <Typography variant="body1" className="truncate">
                {title}
              </Typography>
              <ArrowUpRight className="shrink-0 stroke-[1.5px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
