import { faker } from "@faker-js/faker"

export function generateCompany(companyName?: string) {
  return {
    name: companyName ? companyName : faker.company.name(),
    _id: faker.string.uuid(),
    _createdAt: faker.date.past().toISOString(),
    _updatedAt: faker.date.recent().toISOString(),
    _type: "company",
    _rev: faker.string.uuid(),
  }
}

export function generatePosition(customData?: {
  position?: string
  startDate?: string
  endDate?: string
}) {
  return {
    position: customData?.position
      ? customData.position
      : faker.person.jobTitle(),
    startDate: customData?.startDate
      ? customData.startDate
      : faker.date.past().toISOString(),
    endDate: customData?.endDate,
    _id: faker.string.uuid(),
    _createdAt: faker.date.past().toISOString(),
    _updatedAt: faker.date.recent().toISOString(),
    _type: "workExperience",
    _rev: faker.string.uuid(),
  }
}

export function generateWorkExperience(customData?: {
  companyName?: string
  position?: string
  startDate?: string
  endDate?: string
}) {
  return {
    company: generateCompany(customData?.companyName),
    ...generatePosition({
      position: customData?.position,
      startDate: customData?.startDate,
      endDate: customData?.endDate,
    }),
  }
}
