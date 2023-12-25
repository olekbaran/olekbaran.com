import { useLayoutEffect } from "react"

export function useLockBody(lock = true) {
  useLayoutEffect((): (() => void) => {
    if (lock) {
      const originalStyle: string = window.getComputedStyle(
        document.body
      ).overflow
      document.body.style.overflow = "hidden"
      return () => (document.body.style.overflow = originalStyle)
    }
    return () => null
  }, [lock])
}
