import Image from "next/image"

import memojiImage from "@/public/images/memoji.png"

export function Memoji() {
  return (
    <div className="relative w-fit pt-20">
      <Image
        src={memojiImage}
        alt=""
        quality={100}
        priority
        className="relative z-10"
      />
      <div className="absolute bottom-0 h-full w-full rounded-full bg-blue" />
    </div>
  )
}
