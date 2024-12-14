import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { routes } from "@/config/routes"
import { siteConfig } from "@/config/site"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(pathname: string) {
  return `${siteConfig.url}${pathname}`
}

export function isOdd(number: number) {
  return number % 2 !== 0
}

export function isSubpath(parentPath: string, childPath: string) {
  const parentSegments = parentPath.split("/")
  const childSegments = childPath.split("/")

  return parentSegments.every(
    (segment, index) => childSegments[index] === segment
  )
}

export function formatDate(input: string | number | Date): string {
  const date = new Date(typeof input === "number" ? Math.abs(input) : input)
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  })
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

export function calculateDatesDifference(
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

  if (monthsDifference < 12) {
    return `${monthsDifference} mo${monthsDifference > 1 ? "s" : ""}`
  }

  const yearsDifference = Math.floor(monthsDifference / 12)
  return `${yearsDifference} year${yearsDifference > 1 ? "s" : ""}`
}

export function groupWorkExperience(workExperience: WorkExperience[]) {
  const groupedWorkExperience = workExperience.reduce(
    (acc: GroupedWorkExperience[], job) => {
      const lastIndex = acc.length - 1

      if (lastIndex >= 0 && acc[lastIndex].company.name === job.company.name) {
        acc = [
          ...acc.slice(0, lastIndex),
          {
            ...acc[lastIndex],
            positions: [
              ...acc[lastIndex].positions,
              {
                position: job.position,
                startDate: job.startDate,
                endDate: job.endDate,
                _createdAt: job._createdAt,
                _id: job._id,
                _rev: job._rev,
                _type: job._type,
                _updatedAt: job._updatedAt,
              },
            ],
          },
        ]
      } else {
        acc = [
          ...acc,
          {
            company: job.company,
            positions: [
              {
                position: job.position,
                startDate: job.startDate,
                endDate: job.endDate,
                _createdAt: job._createdAt,
                _id: job._id,
                _rev: job._rev,
                _type: job._type,
                _updatedAt: job._updatedAt,
              },
            ],
          },
        ]
      }

      return acc
    },
    []
  )

  return groupedWorkExperience
}

export function isRouteActive(
  currentPathname: string,
  routePathname: string,
  isContactSectionActive = false
) {
  if (
    currentPathname === routes.home.pathname &&
    routePathname === routes.home.pathname
  ) {
    return isContactSectionActive ? false : true
  }

  if (routePathname === routes.contact.pathname) {
    return isContactSectionActive
  }

  return isSubpath(routePathname, currentPathname)
}
