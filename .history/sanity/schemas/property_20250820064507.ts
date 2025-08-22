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
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (rule) => rule.required().error("Required"),
    }),
    definr{
      name: "reference",
      title: "Reference Code",
      type: "slug",
      validation: (rule) => rule.required().error("Please enter a unique reference code"),
    },
    definr{
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
      validation: (rule) => rule.required().error("Required"),
    },
    definr{
      name: "location",
      title: "Location",
      type: "string",
      validation: (rule) => rule.required().error("Required"),
    },
    definr{
      name: "surfacearea",
      title: "Surface Area",
      type: "number",
      validation: (rule) => rule.required().error("Required"),
    },
    definr{
      name: "price",
      title: "Price",
      type: "number",
      validation: (rule) => rule.required().error("Required"),
    },
    definr{
      name: "detailsen",
      title: "Property Info En",
      type: "string",
      validation: (rule) => rule.required().error("Required"),
      fieldset: "details"
    },
    definr{
      name: "detailsfr",
      title: "Property Info Fr",
      type: "string",
      validation: (rule) => rule.required().error("Required"),
      fieldset: "details"
    },
  ],
})