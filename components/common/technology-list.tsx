"use client"

import { useEffect, useState } from "react"

import { TechnologyCard } from "../cards/technology-card"

interface TechnologyListProps {
  technologies: Technology[]
}

export function TechnologyList({ technologies }: TechnologyListProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  // TODO: Set active Index to null if section is not visible
  // TODO: More time to scroll for the edges items
  // TODO: Fix get in touch tapes on zoom out
  // TODO: Remove blank space on zoom out
  // TODO: Test on multiple devices

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      const index = Math.min(
        Math.floor(scrollY / window.innerHeight),
        technologies.length - 1
      )
      setActiveIndex(index)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [technologies.length])

  return (
    <ul className="flex flex-col gap-10 overflow-hidden">
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
