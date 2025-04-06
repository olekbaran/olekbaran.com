import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isOdd(number: number) {
  return number % 2 !== 0
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
