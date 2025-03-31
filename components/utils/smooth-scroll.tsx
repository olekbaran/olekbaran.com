"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { ReactLenis, useLenis, type LenisProps } from "lenis/react"

interface SmoothScrollProps extends LenisProps {}

export function SmoothScroll({ children, ...props }: SmoothScrollProps) {
  const lenis = useLenis()
  const pathname = usePathname()

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true })
  }, [lenis, pathname])

  return (
    <ReactLenis options={{ lerp: 0.05 }} {...props}>
      {children}
    </ReactLenis>
  )
}
