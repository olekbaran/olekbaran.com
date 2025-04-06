export function formatDate(input: string | number | Date): string {
  const date = new Date(typeof input === "number" ? Math.abs(input) : input)
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  })
}

export function formatMonths(months: number) {
  return `${months} mo${months > 1 ? "s" : ""}`
}

export function formatYears(years: number) {
  return `${years} yr${years > 1 ? "s" : ""}`
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
    return formatMonths(monthsDifference)
  }

  const yearsDifference = Math.floor(monthsDifference / 12)
  const remainingMonths = monthsDifference % 12

  if (remainingMonths === 0) {
    return formatYears(yearsDifference)
  }

  return `${formatYears(yearsDifference)} ${formatMonths(remainingMonths)}`
}
