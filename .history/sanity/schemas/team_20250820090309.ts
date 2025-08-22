import { defineType, defineField } from "sanity";

export const team = defineType({
  name: "team",
  title: "Team",
  type: "document",

  fieldsets: [
    {
      name: "position",
      title: "Position",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "about",
      title: "About",
      options: { collapsible: true, collapsed: false },
    },
  ],

  fields: [
    defineField({
      name: "image",
      title: "Member Image",
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
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required().error("Required"),
    }),

    defineField({
      name: "positionen",
      title: "Position English",
      type: "string",
      validation: (rule) => rule.required().error("Required"),
      fieldset: "position",
    }),

    defineField({
      name: "positionfr",
      title: "Position French",
      type: "string",
      validation: (rule) => rule.required().error("Required"),
      fieldset: "position",
    }),

    defineField({
      name: "positionen",
      title: "Position English",
      type: "string",
      validation: (rule) => rule.required().error("Required"),
      fieldset: "position",
    }),

    defineField({
      name: "positionfr",
      title: "Position French",
      type: "string",
      validation: (rule) => rule.required().error("Required"),
      fieldset: "position",
    })

  ],
});
