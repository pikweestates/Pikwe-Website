import { defineType, Rule, defineField } from "sanity";

export const landstatus = defineType({
  name: "landstatus",
  title: "Land Status",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Status Name",
      type: "string",
      validation: (Rule: Rule) => Rule.required().min(3).error("Please name should be atleast 3 characters."),
    }),

    defineField({
      name: "namefr",
      title: "Status Name French",
      type: "string",
      validation: (Rule: Rule) => Rule.required().min(3).error("Please namefr should be atleast 3 characters."),
    }
  ]
})

