import { useEffect } from "react"

export function useLocomotiveScroll() {
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default
      new LocomotiveScroll()
    }

    loadLocomotiveScroll()
  }, [])
}
