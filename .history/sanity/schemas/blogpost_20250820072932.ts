import { defineType, defineField } from "sanity";
import { AddCircleIcon } from "@sanity/icons";

export const post = defineType({
  name: "blogpost",
  title: "Blog Post",
  type: "document",

  fields: [
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),

    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) =>
        rule.min(10).error("Please enter a title with about 10 characters"),
    }),

    defineField({
      name: "image",
      title: "Blog Image",
      type: "image",
      fields: [
        {
          type: "string",
          name: "alt",
          title: "Alt",
        },
      ],
      validation: (rule) => rule.required().error("Required"),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required().error("Required"),
    }),
    {
      name: "excerpt",
      title: "Brief Intro",
      type: "text",
      validation: (rule) =>
        rule.min(20).max(200).error("Please enter an excerpt of about 25-50 words"),
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "category",
            },
          ],
        },
      ],
    },
    {
      name: "publisher",
      title: "Publisher",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "publisher",
            },
          ],
        },
      ],
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block",
          // Here we hook into Portable Text’s marks
          marks: {
            decorators: [
              // keep your existing bold/italic etc.
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              // { title: "Code", value: "code" },
              { title: "Underline", value: "underline" },
              // { title: "Strike", value: "strike-through" },
            ],
            annotations: [
              // your existing link annotation
              {
                name: "link",
                type: "object",
                title: "URL Link",
                fields: [{ name: "href", type: "url", title: "URL" }],
              },
              // NEW: button annotation
              {
                name: "button",
                type: "object",
                title: "Button",
                icon: AddCircleIcon,
                fields: [
                  {
                    name: "url",
                    type: "url",
                    title: "Button URL",
                  },
                  {
                    name: "label",
                    type: "string",
                    title: "Button Text",
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          fields: [
            {
              type: "string",
              name: "alt",
              title: "Alt",
              validation: (Rule: Rule) =>
                Rule.min(5).error("Please enter an alt text of about 5 characters"),
            },
            {
              type: "string",
              name: "aspectRatio",
              title: "Aspect Ratio",
              validation: (Rule: Rule) =>
                Rule.min(3).error("Please enter an aspect ratio(width/height) of image e.g 1920/1080"),
            },
          ],
        },
      ],
    },
  ],
});
