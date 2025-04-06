import { isSubpath } from "@/lib/nav"

describe("isSubpath", () => {
  it("should return true when all segments of childPath match with corresponding segments of parentPath", () => {
    const parentPath = "parent/path"
    const childPath = "parent/path"
    const result = isSubpath(parentPath, childPath)
    expect(result).toBe(true)
  })

  it("should return true when child path is a direct subpath of parent path", () => {
    const parentPath = "parent/path"
    const childPath = "parent/path/child"
    const result = isSubpath(parentPath, childPath)
    expect(result).toBe(true)
  })

  it("should return false when child path is not a direct subpath of parent path", () => {
    const parentPath = "parent/path"
    const childPath = "parent/otherpath/child"
    const result = isSubpath(parentPath, childPath)
    expect(result).toBe(false)
  })

  it("should return false when parent path is an empty string", () => {
    const parentPath = ""
    const childPath = "child"
    const result = isSubpath(parentPath, childPath)
    expect(result).toBe(false)
  })

  it("should return true when both parentPath and childPath are empty strings", () => {
    const parentPath = ""
    const childPath = ""
    const result = isSubpath(parentPath, childPath)
    expect(result).toBe(true)
  })
})
