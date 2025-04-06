import { routes } from "@/config/routes"
import { siteConfig } from "@/config/site"

export function absoluteUrl(pathname: string) {
  return `${siteConfig.url}${pathname}`
}

export function isSubpath(parentPath: string, childPath: string) {
  const parentSegments = parentPath.split("/")
  const childSegments = childPath.split("/")

  return parentSegments.every(
    (segment, index) => childSegments[index] === segment
  )
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
