import { defineType, defineField } from "sanity";

export const gallery = defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",
  fields: [
    {
      name: "descriptionen",
      title: "Description English",
      type: "text",
      validation: (rule) =>
        rule
          .required()
          .min(3)
          .error("Please name should be atleast 3 characters."),
    }
  ]
})