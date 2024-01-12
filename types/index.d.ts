export type WorkExperience = {
  company: string
  position: string
  startDate: string
  endDate?: string
  companyWebsiteUrl?: string
}

export type GroupedWorkExperience = {
  company: string
  companyWebsiteUrl?: string
  positions: Omit<WorkExperience, "company" | "companyWebsiteUrl">[]
}
