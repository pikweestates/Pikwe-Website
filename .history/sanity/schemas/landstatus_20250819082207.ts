import { defineType, Rule } from "sanity";

export const landstatus = defineType({
  name: "landstatus",
  title: "LandStatus",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Status Name",
      type: "string",
      validation: (Rule: Rule) => Rule.required().min(3).error("Please name should be atleast 3 characters."),
      fields: [
        {
          type: "string",
          name: "alt",
          title: "Alt",
        },
      ],
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
    },
  ]
})