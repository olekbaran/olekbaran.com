"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

import { TechnologyCard } from "../cards/technology-card"

interface TechnologyListProps {
  technologies: Technology[]
}

export function TechnologyList({ technologies }: TechnologyListProps) {
  const [activeIndex, setActiveIndex] = useState<number | null | undefined>(
    undefined
  )

  // TODO: More time to scroll for the edges items
  // TODO: Remove blank space on zoom out
  // TODO: Test on multiple devices

  const { ref } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) {
        setActiveIndex(null)
      } else {
        setActiveIndex(undefined)
      }
    },
  })

  useEffect(() => {
    const onScroll = () => {
      if (activeIndex !== undefined) {
        const scrollY = window.scrollY
        const index = Math.min(
          Math.floor(scrollY / window.innerHeight),
          technologies.length - 1
        )
        setActiveIndex(index)
      }
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [technologies.length, activeIndex])

  return (
    <ul ref={ref} className="flex flex-col gap-10 overflow-hidden">
      {technologies.map((technology, index) => (
        <li key={technology._id}>
          <TechnologyCard
            name={technology.name}
            size="large"
            variant={index === activeIndex ? "hightlighted" : "default"}
          />
        </li>
      ))}
    </ul>
  )
}
