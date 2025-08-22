import { defineType, defineField } from "sanity";

export const gallery = defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",
  fieldsets: {
    
  }
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
    },
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    {
      name: "descriptionfr",
      title: "Description French",
      type: "text",
      validation: (rule) =>
        rule
          .required()
          .error("Required"),
    }
  ]
})