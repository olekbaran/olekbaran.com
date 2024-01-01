import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import { type WorkExperience } from "@/types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isSubpath(parentPath: string, childPath: string) {
  const parentSegments = parentPath.split("/")
  const childSegments = childPath.split("/")

  return parentSegments.every(
    (segment, index) => childSegments[index] === segment
  )
}

export function formatDate(input: string | number | Date): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  })
}

export function sortByDate(
  a: string | number | Date,
  b: string | number | Date
) {
  const aStartDate = new Date(a)
  const bStartDate = new Date(b)

  if (aStartDate < bStartDate) return 1
  if (aStartDate > bStartDate) return -1

  return 0
}

export function calculateYearsOfExperience(workExperience: WorkExperience[]) {
  const currentDate = new Date()

  const totalExperienceInMonths = workExperience.reduce((total, job) => {
    const startDate = new Date(job.startDate)
    const endDate = job.endDate ? new Date(job.endDate) : currentDate

    const monthsDifference =
      (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      endDate.getMonth() -
      startDate.getMonth() +
      (endDate.getDate() >= startDate.getDate() ? 1 : 0)

    return total + monthsDifference
  }, 0)

  const totalExperienceInYears = Math.floor(totalExperienceInMonths / 12)

  return totalExperienceInYears
}

export function calculateMonthsDifference(
  start: string | number | Date,
  end?: string | number | Date
) {
  const currentDate = new Date()

  const startDate = new Date(start)
  const endDate = end ? new Date(end) : currentDate

  const monthsDifference =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    endDate.getMonth() -
    startDate.getMonth() +
    (endDate.getDate() >= startDate.getDate() ? 1 : 0)

  return monthsDifference
}
