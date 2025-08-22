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
          .min(40)
          .error("Please name should be atleast 10 words"),
    }

    {
      name: "descriptionfr",
      title: "Description French",
      type: "text",
      validation: (rule) =>
        rule
          .required()
          .min(40)
          .error("Please name should be atleast 10 words"),
    }
  ]
})