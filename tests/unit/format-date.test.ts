import { formatDate } from "@/lib/utils"

describe("formatDate", () => {
  it("should return a formatted date string when given a valid input date", () => {
    const input = "2022-01-01"
    const expected = "Jan 2022"
    const result = formatDate(input)
    expect(result).toEqual(expected)
  })

  it("should return an empty string when given an invalid input", () => {
    const input = "invalid date"
    const expected = "Invalid Date"
    const result = formatDate(input)
    expect(result).toEqual(expected)
  })

  it("should return a formatted date string when given a valid input date as a number", () => {
    const input = 1640995200000
    const expected = "Jan 2022"
    const result = formatDate(input)
    expect(result).toEqual(expected)
  })

  it("should return a formatted date string when given a valid input date as a negative number", () => {
    const input = -1640995200000
    const expected = "Jan 2022"
    const result = formatDate(input)
    expect(result).toEqual(expected)
  })

  it("should return a formatted date string when given a valid input date as a Date object", () => {
    const input = new Date("2022-01-01")
    const expected = "Jan 2022"
    const result = formatDate(input)
    expect(result).toEqual(expected)
  })

  it("should return an empty string when given an empty string as input", () => {
    const input = ""
    const expected = "Invalid Date"
    const result = formatDate(input)
    expect(result).toEqual(expected)
  })
})
