import { defineType, Rule } from "sanity";

export const property = defineType({
  name: "property",
  title: "Property",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Property Name",
      type: "string",
      validation: (Rule: Rule) => Rule.required().min(3).error("Please name should be atleast 3 characters."),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
    {
      name: "reference",
      title: "Reference Code",
      type: "slug",
    }
  ]
})