import { useCallback, useEffect, useRef, useState } from "react"

interface UseInViewOptions extends IntersectionObserverInit {
  onChange?: (inView: boolean, entry: IntersectionObserverEntry) => void
}

export function useInView(options: UseInViewOptions = {}) {
  const { threshold = 0, root = null, rootMargin = "0px", onChange } = options

  const elementRef = useRef<Element | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const [inView, setInView] = useState(false)

  const setRef = useCallback((node: HTMLElement | null) => {
    if (elementRef.current && observerRef.current) {
      observerRef.current.unobserve(elementRef.current)
    }

    elementRef.current = node

    if (node && observerRef.current) {
      observerRef.current.observe(node)
    }
  }, [])

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        const isVisible =
          entry.isIntersecting &&
          entry.intersectionRatio >=
            (Array.isArray(threshold) ? Math.max(...threshold) : threshold)
        setInView(isVisible)
        onChange?.(isVisible, entry)
      },
      { threshold, root, rootMargin }
    )

    if (elementRef.current) {
      observerRef.current.observe(elementRef.current)
    }

    return () => {
      observerRef.current?.disconnect()
    }
  }, [threshold, root, rootMargin, onChange])

  return { ref: setRef, inView }
}
