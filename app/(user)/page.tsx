import { Contact } from "@/components/sections/home/contact"
import { Hero } from "@/components/sections/home/hero"
import { LatestProjects } from "@/components/sections/home/latest-projects"
import { TechStack } from "@/components/sections/home/tech-stack"

export default async function IndexPage() {
  return (
    <>
      <Hero />
      <LatestProjects />
      <TechStack />
      <Contact />
    </>
  )
}
