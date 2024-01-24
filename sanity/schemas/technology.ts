import { defineField, defineType } from "sanity"

export const technology = defineType({
  name: "technology",
  title: "Technology",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
  },
})
