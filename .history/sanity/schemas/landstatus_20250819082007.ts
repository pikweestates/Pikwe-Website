import { defineType, Rule } from "sanity";

export const landstatus = defineType({
  name: "landstatus",
  title: "LandStatus",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Publisher Name",
      type: "string",
      validation: (Rule: Rule) => Rule.required().min(3).error("Please name should be atleast 3 characters.")
    },
  ]
})