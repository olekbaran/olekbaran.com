import { cn } from "@/lib/utils"

describe("cn", () => {
  it("should return a single class name as a string", () => {
    const result = cn("class1")
    expect(result).toBe("class1")
  })

  it("should return a string of concatenated class names when passed one or more class values", () => {
    const result = cn("class1", "class2", "class3")
    expect(result).toBe("class1 class2 class3")
  })

  it("should handle null and undefined values as empty strings", () => {
    const result = cn("class1", null, "class2", undefined, "class3")
    expect(result).toBe("class1 class2 class3")
  })

  it("should handle empty string as a class name", () => {
    const result = cn("class1", "", "class2")
    expect(result).toBe("class1 class2")
  })

  it("should return an empty string when passed an empty array", () => {
    const result = cn([])
    expect(result).toBe("")
  })
})
