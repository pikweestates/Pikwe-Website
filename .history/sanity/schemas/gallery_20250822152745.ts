import { defineType, defineField } from "sanity";

export const gallery = defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",
  fieldsets: [
    {
      name: "description",
      title: "Image Description",
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    defineField({
      name: "image",
      title: "Gallery Image",
      type: "image",
      validation: (rule) => rule.required().error("Required"),
    }),
    {
      name: "descriptionen",
      title: "Description English",
      type: "text",
      validation: (rule) =>
        rule.required().max(250).error("Please english description should be maximum 30 words"),
      fieldset: "description"
    },
    {
      name: "descriptionfr",
      title: "Description French",
      type: "text",
      validation: (rule) => rule.required().max(300).error("Please english description should be maximum 30 words"),
      fieldset: "description"
    },
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
});
