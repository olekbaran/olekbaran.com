import { isOdd } from "@/lib/utils"

describe("isOdd", () => {
  it("should return true when the number is odd", () => {
    const number = 1
    const result = isOdd(number)
    expect(result).toBe(true)
  })

  it("should return true when the number is a negative odd number", () => {
    const number = -1
    const result = isOdd(number)
    expect(result).toBe(true)
  })

  it("should return false when the number is zero", () => {
    const number = 0
    const result = isOdd(number)
    expect(result).toBe(false)
  })

  it("should return false when the number is a positive even number", () => {
    const number = 2
    const result = isOdd(number)
    expect(result).toBe(false)
  })

  it("should return false when the number is a negative even number", () => {
    const number = -2
    const result = isOdd(number)
    expect(result).toBe(false)
  })
})
