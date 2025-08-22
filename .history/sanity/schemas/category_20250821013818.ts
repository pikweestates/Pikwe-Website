import { defineType, defineField } from "sanity";

export const category = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fieldsets: [
    {
      name: "name",
      title: "Category Name",
      options: { collapsible: true, collapsed: false },
    },
  ],

  fields: [
    defineField({
      name: "nameen",
      title: "Category Name English",
      type: "string",
      validation: (rule) => rule.required().error("Required"),
      fieldset: "name"
    }),
    defineField({
      name: "namefr",
      title: "Category Name French",
      type: "string",
      validation: (rule) => rule.required().error("Required"),
      fieldset: "name"
    }),
    defineField({
      name: "slug",
      title: "Slug English",
      type: "slug",
      options: { source: "nameen" },
      validation: (rule) => rule.required().error("Required"),
    }),

    defineField({
      name: "slugfr",
      title: "Slug French",
      type: "slug",
      options: { source: "namefr" },
      validation: (rule) => rule.required().error("Required"),
    }),
  ],
});
