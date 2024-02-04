import { TechnologyCard } from "./technology-card"

interface TechStackProps {
  technologies: Technology[]
}

export function TechStack({ technologies }: TechStackProps) {
  return (
    <ul className="flex flex-col gap-10">
      {technologies.map((technology) => (
        <li key={technology._id}>
          <TechnologyCard name={technology.name} size="large" />
        </li>
      ))}
    </ul>
  )
}
