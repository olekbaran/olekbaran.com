import Image from "next/image"

export function Memoji() {
  return (
    <div className="relative w-fit pt-20">
      <Image
        src="/images/memoji.png"
        alt=""
        width={388}
        height={549}
        quality={100}
        priority
        className="relative z-10"
      />
      <div className="absolute bottom-0 h-full w-full rounded-full bg-blue" />
    </div>
  )
}
