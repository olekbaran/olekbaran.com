import Image from "next/image"

import { cn } from "@/lib/utils"

interface GalleryProps {
  images: string[]
}

export function Gallery({ images }: GalleryProps) {
  const isQuantityOdd = images.length % 2 !== 0

  return (
    <ul className="grid gap-10 md:grid-cols-2">
      {images.map((image, index) => (
        <li
          key={`${image}-${index}`}
          className={cn(
            "relative aspect-square overflow-hidden rounded-3xl border border-gray/10",
            isQuantityOdd && index === 0 && "md:col-span-2 md:aspect-video"
          )}
        >
          <Image
            src={image}
            alt={`Image ${index + 1} of ${images.length}`}
            fill
            sizes={
              isQuantityOdd && index === 0
                ? "100vw"
                : "(max-width: 768px) 100vw, 50vw"
            }
            quality={100}
            className="rounded-3xl object-cover"
          />
        </li>
      ))}
    </ul>
  )
}
