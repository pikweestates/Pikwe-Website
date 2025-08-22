import { defineType, defineField } from "sanity";

export const property = defineType({
  name: "property",
  title: "Property",
  type: "document",
  fieldsets: [
    {
      name: "details",
      title: "Property Details",
      options: { collapsible: true, collapsed: false }
    }
  ],
  fields: [
    defineField({
      name: "name",
      title: "Property Name",
      type: "string",
      validation: (rule) => rule.required().min(3).error("Please name should be atleast 3 characters.")
    }),
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (rule) => rule.required().error("Required"),
    },
    {
      name: "reference",
      title: "Reference Code",
      type: "slug",
      validation: (rule) => rule.required().error("Please enter a unique reference code"),
    },
    {
      name: "image",
      title: "Property Image",
      type: "image",
      fields: [
        {
          type: "string",
          name: "alt",
          title: "Alt",
        },
      ],
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
    {
      name: "surfacearea",
      title: "Surface Area",
      type: "number",
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
    {
      name: "detailsen",
      title: "Property Info En",
      type: "string",
      validation: (Rule: Rule) => Rule.required().error("Required"),
      fieldset: "details"
    },
    {
      name: "detailsfr",
      title: "Property Info Fr",
      type: "string",
      validation: (Rule: Rule) => Rule.required().error("Required"),
      fieldset: "details"
    },
  ],
})