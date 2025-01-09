import Image from "next/image"

import { cn, isOdd } from "@/lib/utils"

interface GalleryProps {
  images: string[]
}

export function Gallery({ images }: GalleryProps) {
  const isQuantityOdd = isOdd(images.length)

  return (
    <ul className="grid gap-10 md:grid-cols-2">
      {images.map((image, index) => (
        <li
          key={`${image}-${index}`}
          className={cn(
            "relative aspect-square overflow-hidden rounded-3xl border border-gray/20",
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
