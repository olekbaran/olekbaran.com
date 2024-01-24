import { defineField, defineType } from "sanity"

export const workExperience = defineType({
  name: "workExperience",
  title: "Work experience",
  type: "document",
  fields: [
    defineField({
      name: "company",
      title: "Company",
      type: "reference",
      to: { type: "company" },
    }),
    defineField({
      name: "position",
      title: "Position",
      type: "string",
    }),
    defineField({
      name: "startDate",
      title: "Start date",
      type: "date",
    }),
    defineField({
      name: "endDate",
      title: "End date",
      type: "date",
    }),
  ],
  preview: {
    select: {
      title: "position",
      subtitle: "company.name",
    },
  },
})
