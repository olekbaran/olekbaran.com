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
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "position",
      title: "Position",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "startDate",
      title: "Start date",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "endDate",
      title: "End date",
      type: "date",
      validation: (rule) => rule.min(rule.valueOfField("startDate")),
    }),
  ],
  preview: {
    select: {
      title: "position",
      subtitle: "company.name",
    },
  },
})
