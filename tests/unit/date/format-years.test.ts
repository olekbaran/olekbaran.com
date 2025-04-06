import { formatYears } from "@/lib/date"

describe("formatYears", () => {
  it("should format single year without plural suffix", () => {
    const result = formatYears(1)
    expect(result).toBe("1 yr")
  })

  it("should format multiple years with plural suffix", () => {
    const result = formatYears(2)
    expect(result).toBe("2 yrs")
  })
})
