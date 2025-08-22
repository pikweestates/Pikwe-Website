import { defineType, defineField } from "sanity";
import { AddCircleIcon } from "@sanity/icons";

export const blogpost = defineType({
  name: "blogpost",
  title: "Blog Post",
  type: "document",
  fieldsets: [
    {
      name: "excerpt",
      title: "Brief Intro",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "title",
      title: "Blog Title",
      options: { collapsible: true, collapsed: false },
    },
  ],

  fields: [
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),

    defineField({
      name: "titleen",
      title: "Blog Title English",
      type: "string",
      validation: (rule) =>
        rule.min(10).error("Please enter a title with about 10 characters"),
    }),

    defineField({
      name: "titlefr",
      title: "Blog Title French",
      type: "string",
      validation: (rule) =>
        rule.min(10).error("Please enter a title with about 10 characters"),
    }),

    defineField({
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
      validation: (rule) => rule.required().error("Please select atleast one category"),
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

    defineField({
      name: "excerpten",
      title: "Brief Intro En",
      type: "text",
      validation: (rule) =>
        rule
          .min(120)
          .max(400)
          .error("Please enter an excerpt of about 25-50 words"),
          fieldset: "excerpt"
    }),

    defineField({
      name: "excerptfr",
      title: "Brief Intro Fr",
      type: "text",
      validation: (rule) => rule.required().error("Required"),
      fieldset: "excerpt"
    }),
    defineField({
      name: "bodyen",
      title: "Conten English",
      type: "array",
      fieldset: "Blog Content"
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
              validation: (rule) =>
                rule
                  .min(5)
                  .error("Please enter an alt text of about 5 characters"),
            },
            {
              type: "string",
              name: "aspectRatio",
              title: "Aspect Ratio",
              validation: (rule) =>
                rule
                  .min(3)
                  .error(
                    "Please enter an aspect ratio(width/height) of image e.g 1920/1080"
                  ),
            },
          ],
        },
      ],
    }),

    defineField({
      name: "bodyfr",
      title: "Body French",
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
              validation: (rule) =>
                rule
                  .min(5)
                  .error("Please enter an alt text of about 5 characters"),
            },
            {
              type: "string",
              name: "aspectRatio",
              title: "Aspect Ratio",
              validation: (rule) =>
                rule
                  .min(3)
                  .error(
                    "Please enter an aspect ratio(width/height) of image e.g 1920/1080"
                  ),
            },
          ],
        },
      ],
    }),
  ],
});
