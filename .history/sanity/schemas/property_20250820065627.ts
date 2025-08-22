import { defineType, defineField } from "sanity";

export const property = defineType({
  name: "property",
  title: "Property",
  type: "document",
  fieldsets: [
    {
      name: "details",
      title: "Property Details",
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Property Name",
      type: "string",
      validation: (rule) =>
        rule
          .required()
          .min(3)
          .error("Please name should be atleast 3 characters."),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (rule) => rule.required().error("Required"),
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "reference",
      title: "Reference Code",
      type: "slug",
      validation: (rule) =>
        rule.required().error("Please enter a unique reference code"),
    }),
    defineField({
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
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (rule) => rule.required().error("Required"),
    }),
    defineField({
      name: "surfacearea",
      title: "Surface Area",
      type: "number",
      validation: (rule) => rule.required().error("Required"),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (rule) => rule.required().error("Required"),
    }),
    // defineField({
    //   name: "landstatus",
    //   title: "Land Status",
    //   type: "array",
    //   of: [
    //     {
    //       type: "reference",
    //       to: [
    //         {
    //           type: "landstatus",
    //         },
    //       ],
    //     },
    //   ],
    // }),
    defineField({
      name: "landstatus",
      title: "Land Status",
      type: "reference",
      to: [{ type: "landstatus" }],
      validation: (Rule) => Rule.required().error("Please select a land status"),
    }),
    
    defineField({
      name: "detailsen",
      title: "Property Info En",
      type: "string",
      validation: (rule) => rule.required().error("Required"),
      fieldset: "details",
    }),
    defineField({
      name: "detailsfr",
      title: "Property Info Fr",
      type: "string",
      validation: (rule) => rule.required().error("Required"),
      fieldset: "details",
    }),
  ],
});
