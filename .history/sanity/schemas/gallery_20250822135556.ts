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
      
    }
  ]
})