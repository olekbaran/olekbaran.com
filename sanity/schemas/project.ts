import { defineField, defineType } from "sanity"

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "industry",
      title: "Industry",
      type: "string",
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
    }),
    defineField({
      name: "isOpenSourceContribution",
      title: "Open Source Contribution",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "repository",
      title: "Repository",
      type: "url",
    }),
    defineField({
      name: "demo",
      title: "Demo",
      type: "url",
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [
        {
          name: "technology",
          title: "Technology",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alternative text",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          name: "image",
          title: "Image",
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              title: "Alternative text",
              type: "string",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "overview",
      title: "Overview",
      type: "blockContent",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
})
