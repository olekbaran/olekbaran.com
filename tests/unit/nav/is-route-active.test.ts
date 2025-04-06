import { routes } from "@/config/routes"
import { isRouteActive } from "@/lib/nav"

describe("isRouteActive", () => {
  it("should return true when currentPathname and routePathname are both the home route and isContactSectionActive is false", () => {
    const currentPathname = routes.home.pathname
    const routePathname = routes.home.pathname
    const isContactSectionActive = false

    const result = isRouteActive(
      currentPathname,
      routePathname,
      isContactSectionActive
    )

    expect(result).toBe(true)
  })

  it("should return false when currentPathname and routePathname are both the home route and isContactSectionActive is true", () => {
    const currentPathname = routes.home.pathname
    const routePathname = routes.home.pathname
    const isContactSectionActive = true

    const result = isRouteActive(
      currentPathname,
      routePathname,
      isContactSectionActive
    )

    expect(result).toBe(false)
  })

  it("should return true when currentPathname is the home route, routePathname is the contact route and isContactSectionActive is false", () => {
    const currentPathname = routes.home.pathname
    const routePathname = routes.contact.pathname
    const isContactSectionActive = false

    const result = isRouteActive(
      currentPathname,
      routePathname,
      isContactSectionActive
    )

    expect(result).toBe(false)
  })

  it("should return true when currentPathname is the home route, routePathname is the contact route and isContactSectionActive is true", () => {
    const currentPathname = routes.home.pathname
    const routePathname = routes.contact.pathname
    const isContactSectionActive = true

    const result = isRouteActive(
      currentPathname,
      routePathname,
      isContactSectionActive
    )

    expect(result).toBe(true)
  })

  it("should return false when currentPathname is an empty string and routePathname is the home route", () => {
    const currentPathname = ""
    const routePathname = routes.home.pathname

    const result = isRouteActive(currentPathname, routePathname)

    expect(result).toBe(false)
  })
})
