import { calculateDatesDifference } from "@/lib/utils"

describe("calculateDatesDifference", () => {
  it("should return the correct singular number of years between two dates", () => {
    const start = new Date(2021, 0, 1)
    const end = new Date(2022, 5, 1)
    const result = calculateDatesDifference(start, end)
    expect(result).toBe("1 year")
  })

  it("should return the correct plural number of years between two dates", () => {
    const start = new Date(2021, 0, 1)
    const end = new Date(2023, 5, 1)
    const result = calculateDatesDifference(start, end)
    expect(result).toBe("2 years")
  })

  it("should return the correct singular number of months between two dates", () => {
    const start = new Date(2022, 5, 1)
    const end = new Date(2022, 5, 30)
    const result = calculateDatesDifference(start, end)
    expect(result).toBe("1 mo")
  })

  it("should return the correct plural number of months between two dates", () => {
    const start = new Date(2022, 5, 1)
    const end = new Date(2022, 6, 1)
    const result = calculateDatesDifference(start, end)
    expect(result).toBe("2 mos")
  })

  it("should return the correct number of years when end date day is greater than start date day", () => {
    const start = new Date(2021, 0, 1)
    const end = new Date(2022, 5, 15)
    const result = calculateDatesDifference(start, end)
    expect(result).toBe("1 year")
  })

  it("should return the correct number of months when end date day is less than start date day", () => {
    const start = new Date(2021, 0, 15)
    const end = new Date(2022, 5, 1)
    const result = calculateDatesDifference(start, end)
    expect(result).toBe("1 year")
  })

  it("should return 1 mo if start date is the first day of the month and end date is the last day of the same month", () => {
    const start = new Date(2022, 0, 1)
    const end = new Date(2022, 0, 31)
    const result = calculateDatesDifference(start, end)
    expect(result).toBe("1 mo")
  })

  it("should return 1 mo if start date and end date are the same", () => {
    const start = new Date(2022, 0, 1)
    const end = new Date(2022, 0, 1)
    const result = calculateDatesDifference(start, end)
    expect(result).toBe("1 mo")
  })

  it("should return the correct difference from start date to current date if end date is not provided", () => {
    const start = new Date(2021, 0, 1)
    const currentDate = new Date()
    const result = calculateDatesDifference(start)

    const expectedMonthsDifference =
      (currentDate.getFullYear() - start.getFullYear()) * 12 +
      currentDate.getMonth() -
      start.getMonth() +
      (currentDate.getDate() >= start.getDate() ? 1 : 0)

    if (expectedMonthsDifference < 12) {
      expect(result).toBe(
        `${expectedMonthsDifference} mo${
          expectedMonthsDifference > 1 ? "s" : ""
        }`
      )
      return
    }

    const expectedYearsDifference = Math.floor(expectedMonthsDifference / 12)

    expect(result).toBe(
      `${expectedYearsDifference} year${expectedYearsDifference > 1 ? "s" : ""}`
    )
  })
})
