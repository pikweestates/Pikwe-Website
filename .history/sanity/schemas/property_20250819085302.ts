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

    
  ]
})