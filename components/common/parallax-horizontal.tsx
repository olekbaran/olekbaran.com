"use client"

import { useRef } from "react"
import { wrap } from "@motionone/utils"
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion"

interface ParallaxHorizontalProps {
  children: React.ReactNode
  baseVelocity?: number
}

export function ParallaxHorizontal({
  children,
  baseVelocity = -1,
}: ParallaxHorizontalProps) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

  const directionFactor = useRef(1)

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className="flex flex-nowrap overflow-hidden whitespace-nowrap">
      <motion.div className="flex flex-nowrap whitespace-nowrap" style={{ x }}>
        <div>{children} </div>
        <div aria-hidden>{children}</div>
        <div aria-hidden>{children}</div>
        <div aria-hidden>{children}</div>
      </motion.div>
    </div>
  )
}
