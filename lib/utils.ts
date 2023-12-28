import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

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

export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  })
}
