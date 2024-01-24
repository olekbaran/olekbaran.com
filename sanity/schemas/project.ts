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
      name: "isOpenSourceContribution",
      title: "Open Source Contribution",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "info",
      title: "Info",
      type: "array",
      of: [
        {
          name: "infoItem",
          title: "Info item",
          type: "object",
          fields: [
            {
              name: "label",
              title: "Label",
              type: "string",
            },
            {
              name: "value",
              title: "Value",
              type: "string",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [
        {
          name: "link",
          title: "Link",
          type: "object",
          fields: [
            {
              name: "type",
              title: "Type",
              type: "string",
            },
            {
              name: "label",
              title: "Label",
              type: "string",
            },
            {
              name: "url",
              title: "URL",
              type: "url",
            },
          ],
        },
      ],
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
      subtitle: "description",
      media: "mainImage",
    },
  },
})
