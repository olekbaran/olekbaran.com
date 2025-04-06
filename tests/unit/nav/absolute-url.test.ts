import { siteConfig } from "@/config/site"
import { absoluteUrl } from "@/lib/nav"

describe("absoluteUrl", () => {
  it("should return the absolute URL when a valid pathname is provided", () => {
    const pathname = "/example"
    const result = absoluteUrl(pathname)
    expect(result).toBe(`${siteConfig.url}${pathname}`)
  })

  it("should return the absolute URL when the pathname is an empty string", () => {
    const result = absoluteUrl("")
    expect(result).toBe(siteConfig.url)
  })
})
