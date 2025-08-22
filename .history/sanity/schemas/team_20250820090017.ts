import { defineType, defineField } from "sanity";

export const team = defineType({
  name: "team",
  title: "Team",
  type: "document",

  fieldsets: [
    {
      name: "position",
      title: "Position",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "about",
      title: "About",
      options: { collapsible: true, collapsed: false },
    },
  ],

  fields: [
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
      name: "namefr",
      title: "Category Name French",
      type: "string",
      validation: (rule) => rule.required().error("Required"),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "nameen" },
      validation: (rule) => rule.required().error("Required"),
    }),
  ],
});
