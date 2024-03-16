import { groupWorkExperience } from "@/lib/utils"

import { generateCompany, generatePosition } from "../helpers"

describe("groupWorkExperience", () => {
  it("should correctly group work experience by company name", () => {
    const companyA = generateCompany("Company A")
    const companyB = generateCompany("Company B")

    const positionA = generatePosition({
      position: "Position A",
      startDate: "2021-01-01",
      endDate: "2021-02-01",
    })
    const positionB = generatePosition({
      position: "Position B",
      startDate: "2021-02-02",
      endDate: "2021-03-01",
    })
    const positionC = generatePosition({
      position: "Position C",
      startDate: "2021-03-02",
      endDate: "2021-04-01",
    })

    const workExperience = [
      {
        company: companyA,
        ...positionA,
      },
      {
        company: companyA,
        ...positionB,
      },
      {
        company: companyB,
        ...positionC,
      },
    ]

    const result = groupWorkExperience(workExperience)

    expect(result).toEqual([
      {
        company: companyA,
        positions: [positionA, positionB],
      },
      {
        company: companyB,
        positions: [positionC],
      },
    ])
  })

  it("should correctly group work experience with the same company name and different positions", () => {
    const companyA = generateCompany("Company A")

    const positionA = generatePosition({
      position: "Position A",
      startDate: "2021-01-01",
      endDate: "2021-02-01",
    })
    const positionB = generatePosition({
      position: "Position B",
      startDate: "2021-02-02",
      endDate: "2021-03-01",
    })
    const positionC = generatePosition({
      position: "Position C",
      startDate: "2021-03-02",
      endDate: "2021-04-01",
    })

    const workExperience = [
      {
        company: companyA,
        ...positionA,
      },
      {
        company: companyA,
        ...positionB,
      },
      {
        company: companyA,
        ...positionC,
      },
    ]

    const result = groupWorkExperience(workExperience)

    expect(result).toEqual([
      {
        company: companyA,
        positions: [positionA, positionB, positionC],
      },
    ])
  })

  it("should correctly handle an empty array of work experience", () => {
    const workExperience: WorkExperience[] = []
    const result = groupWorkExperience(workExperience)
    expect(result).toEqual([])
  })
})
