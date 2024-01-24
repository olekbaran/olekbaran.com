import { defineField, defineType } from "sanity"

export const company = defineType({
  name: "company",
  title: "Company",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "website",
      title: "Website",
      type: "url",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "website",
    },
  },
})
