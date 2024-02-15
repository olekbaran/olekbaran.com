interface Company extends Base {
  name: string
  website?: string
}

interface Project extends Base {
  title: string
  slug: Slug
  description: string
  industry: string
  date: string
  isOpenSourceContribution: boolean
  repository?: string
  demo?: string
  technologies: string[]
  mainImage: Image
  images: Image[]
  overview: Block[]
}

interface Technology extends Base {
  name: string
}

interface WorkExperience extends Base {
  company: Company
  position: string
  startDate: string
  endDate?: string
}

interface GroupedWorkExperience {
  company: Company
  positions: Omit<WorkExperience, "company">[]
}
