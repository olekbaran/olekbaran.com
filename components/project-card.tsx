import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Typography } from "./typography"

interface ProjectCardProps {
  title: string
  slug: string
  image: string
}

export function ProjectCard({ title, slug, image }: ProjectCardProps) {
  return (
    <Link href={slug} className="rounded-3xl">
      <div className="relative aspect-square rounded-3xl border border-gray/10">
        <Image
          src={image}
          alt={title}
          fill
          sizes="100vw"
          quality={100}
          priority
          className="rounded-3xl object-cover"
        />
        <div className="absolute bottom-2 max-w-full overflow-hidden px-2">
          <div className="flex items-center gap-2 rounded-full bg-black/50 px-8 py-2 backdrop-blur">
            <Typography className="truncate">{title}</Typography>
            <ArrowUpRight className="shrink-0 stroke-[1.5px]" />
          </div>
        </div>
      </div>
    </Link>
  )
}
