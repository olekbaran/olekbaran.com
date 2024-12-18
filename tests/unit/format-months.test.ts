import { formatMonths } from "@/lib/utils"

describe("formatMonths", () => {
  it("should format single month without plural suffix", () => {
    const result = formatMonths(1)
    expect(result).toBe("1 mo")
  })

  it("should format multiple months with plural suffix", () => {
    const result = formatMonths(2)
    expect(result).toBe("2 mos")
  })
})
