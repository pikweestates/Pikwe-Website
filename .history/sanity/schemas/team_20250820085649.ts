import { defineType, defineField } from "sanity";

export const team = defineType({
  name: "category",
  title: "Category",
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
      name: "nameen",
      title: "Category Name",
      type: "string",
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
