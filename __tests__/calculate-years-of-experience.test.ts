import { generateWorkExperience } from "@/lib/tests"
import { calculateYearsOfExperience } from "@/lib/utils"

describe("calculateYearsOfExperience", () => {
  it("should calculate the total years of experience correctly when given a valid array of WorkExperience objects", () => {
    const workExperience = [
      generateWorkExperience({
        startDate: "2012-09-01",
        endDate: "2014-08-31",
      }),
      generateWorkExperience({
        startDate: "2015-06-01",
        endDate: "2017-05-31",
      }),
      generateWorkExperience({
        startDate: "2018-01-01",
        endDate: "2020-12-31",
      }),
    ]
    const result = calculateYearsOfExperience(workExperience)
    expect(result).toBe(7)
  })

  it("should return 0 when all WorkExperience objects have end dates before their start dates", () => {
    const workExperience = [
      generateWorkExperience({
        startDate: "2022-01-01",
        endDate: "2021-12-31",
      }),
      generateWorkExperience({
        startDate: "2023-06-01",
        endDate: "2023-05-31",
      }),
      generateWorkExperience({
        startDate: "2024-09-01",
        endDate: "2024-08-31",
      }),
    ]
    const result = calculateYearsOfExperience(workExperience)
    expect(result).toBe(0)
  })

  it("should return 0 when given an empty array of WorkExperience objects", () => {
    const workExperience: WorkExperience[] = []
    const result = calculateYearsOfExperience(workExperience)
    expect(result).toBe(0)
  })

  it("should calculate the total years of experience correctly when given a single WorkExperience object with no end date", () => {
    const workExperience = [
      generateWorkExperience({
        startDate: "2015-06-01",
      }),
    ]
    const result = calculateYearsOfExperience(workExperience)
    const startDate = new Date(workExperience[0].startDate)
    const currentDate = new Date()
    const monthsDifference =
      (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
      currentDate.getMonth() -
      startDate.getMonth() +
      (currentDate.getDate() >= startDate.getDate() ? 1 : 0)
    const expectedYears = Math.floor(monthsDifference / 12)
    expect(result).toBe(expectedYears)
  })

  it("should calculate the total years of experience correctly when given a valid array of WorkExperience objects with leap years", () => {
    const workExperience = [
      generateWorkExperience({
        startDate: "2012-02-29",
        endDate: "2016-02-28",
      }),
      generateWorkExperience({
        startDate: "2016-02-29",
        endDate: "2020-02-28",
      }),
    ]
    const result = calculateYearsOfExperience(workExperience)
    expect(result).toBe(8)
  })

  it("should calculate the total years of experience correctly when given a valid array of WorkExperience objects with multiple job periods", () => {
    const workExperience = [
      generateWorkExperience({
        startDate: "2010-01-01",
        endDate: "2011-12-31",
      }),
      generateWorkExperience({
        startDate: "2012-09-01",
        endDate: "2014-08-31",
      }),
      generateWorkExperience({
        startDate: "2015-06-01",
        endDate: "2017-05-31",
      }),
      generateWorkExperience({
        startDate: "2018-01-01",
        endDate: "2020-12-31",
      }),
    ]
    const result = calculateYearsOfExperience(workExperience)
    expect(result).toBe(9)
  })
})
