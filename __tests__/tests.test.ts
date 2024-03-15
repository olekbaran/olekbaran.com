import { faker } from "@faker-js/faker"

import {
  generateCompany,
  generatePosition,
  generateWorkExperience,
} from "@/lib/tests"

describe("generateCompany", () => {
  it("should generate a company object with a name property when companyName is not provided", () => {
    const result = generateCompany()
    expect(result).toHaveProperty("name")
  })

  it("should generate a company object with the provided name when a non-empty string is provided as companyName", () => {
    const companyName = "Test Company"
    const result = generateCompany(companyName)
    expect(result.name).toBe(companyName)
  })

  it("should generate a company object with all the required properties", () => {
    const result = generateCompany()
    expect(result).toHaveProperty("name")
    expect(result).toHaveProperty("_id")
    expect(result).toHaveProperty("_createdAt")
    expect(result).toHaveProperty("_updatedAt")
    expect(result).toHaveProperty("_type")
    expect(result).toHaveProperty("_rev")
  })

  it("should generate a company object with unique _id and _rev properties", () => {
    const result1 = generateCompany()
    const result2 = generateCompany()
    expect(result1._id).not.toBe(result2._id)
    expect(result1._rev).not.toBe(result2._rev)
  })
})

describe("generatePosition", () => {
  it("should generate a position object with default values when no custom data is provided", () => {
    const result = generatePosition()
    expect(result).toHaveProperty("position")
    expect(result).toHaveProperty("startDate")
    expect(result).toHaveProperty("endDate")
  })

  it("should generate a position object with custom startDate value", () => {
    const customStartDate = faker.date.past().toISOString()
    const result = generatePosition({ startDate: customStartDate })
    expect(result.startDate).toBe(customStartDate)
  })

  it("should generate a position object with custom endDate value", () => {
    const customEndDate = faker.date.past().toISOString()
    const result = generatePosition({ endDate: customEndDate })
    expect(result.endDate).toBe(customEndDate)
  })

  it("should generate a position object with custom position value", () => {
    const customPosition = faker.person.jobTitle()
    const result = generatePosition({ position: customPosition })
    expect(result.position).toBe(customPosition)
  })
})

describe("generateWorkExperience", () => {
  it("should generate a default work experience object with valid data when no custom data is provided", () => {
    const result = generateWorkExperience()
    expect(result.company).toHaveProperty("name")
    expect(result).toHaveProperty("position")
    expect(result).toHaveProperty("startDate")
    expect(result).toHaveProperty("endDate")
  })

  it("should generate a work experience object with the specified company name when custom data is provided", () => {
    const customCompanyName = faker.company.name()
    const result = generateWorkExperience({ companyName: customCompanyName })
    expect(result.company.name).toBe(customCompanyName)
  })

  it("should generate a work experience object with the specified start date when custom data is provided", () => {
    const customStartDate = faker.date.past().toISOString()
    const result = generateWorkExperience({ startDate: customStartDate })
    expect(result.startDate).toBe(customStartDate)
  })

  it("should generate a work experience object with the specified end date when custom data is provided", () => {
    const customEndDate = faker.date.past().toISOString()
    const result = generateWorkExperience({ endDate: customEndDate })
    expect(result.endDate).toBe(customEndDate)
  })

  it("should generate a work experience object with the specified position when custom data is provided", () => {
    const customPosition = faker.person.jobTitle()
    const result = generateWorkExperience({ position: customPosition })
    expect(result.position).toBe(customPosition)
  })
})
