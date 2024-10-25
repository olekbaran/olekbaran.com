import { useEffect } from "react"

export function useLocomotiveScroll(lock = true) {
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default
      new LocomotiveScroll()
    }

    loadLocomotiveScroll()
  }, [lock])
}
