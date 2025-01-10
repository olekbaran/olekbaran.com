interface TechStackWrapperProps {
  children: React.ReactNode
  technologyCount: number
}

export function TechStackWrapper({
  children,
  technologyCount,
}: TechStackWrapperProps) {
  const scrollOffset = 227

  return (
    <section
      id="tech-stack"
      className="relative"
      style={{
        height: `${technologyCount * scrollOffset * 3}px`,
      }}
    >
      <div className="sticky top-0 w-full">{children}</div>
    </section>
  )
}
