import { calculateMonthsDifference } from "@/lib/utils"

describe("calculateMonthsDifference", () => {
  it("should return the correct number of months between two dates", () => {
    const start = new Date(2021, 0, 1)
    const end = new Date(2022, 5, 1)
    const result = calculateMonthsDifference(start, end)
    expect(result).toBe(18)
  })

  it("should return the correct number of months when end date day is greater than start date day", () => {
    const start = new Date(2021, 0, 1)
    const end = new Date(2022, 5, 15)
    const result = calculateMonthsDifference(start, end)
    expect(result).toBe(18)
  })

  it("should return the correct number of months when end date day is less than start date day", () => {
    const start = new Date(2021, 0, 15)
    const end = new Date(2022, 5, 1)
    const result = calculateMonthsDifference(start, end)
    expect(result).toBe(17)
  })

  it("should return the correct number of months from start date to current date if end date is not provided", () => {
    const start = new Date(2021, 0, 1)
    const currentDate = new Date()
    const result = calculateMonthsDifference(start)
    const expectedMonthsDifference =
      (currentDate.getFullYear() - start.getFullYear()) * 12 +
      currentDate.getMonth() -
      start.getMonth() +
      (currentDate.getDate() >= start.getDate() ? 1 : 0)
    expect(result).toBe(expectedMonthsDifference)
  })

  it("should return 1 if start date is the first day of the month and end date is the last day of the same month", () => {
    const start = new Date(2022, 0, 1)
    const end = new Date(2022, 0, 31)
    const result = calculateMonthsDifference(start, end)
    expect(result).toBe(1)
  })

  it("should return 1 if start date and end date are the same", () => {
    const start = new Date(2022, 0, 1)
    const end = new Date(2022, 0, 1)
    const result = calculateMonthsDifference(start, end)
    expect(result).toBe(1)
  })

  it("should return a negative number if start date is after the end date", () => {
    const start = new Date(2022, 5, 1)
    const end = new Date(2022, 0, 1)
    const result = calculateMonthsDifference(start, end)
    expect(result).toBeLessThan(0)
  })
})
