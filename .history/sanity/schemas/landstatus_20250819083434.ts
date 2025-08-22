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
    },
    

  ]
})


// import { defineType } from "sanity";

// export const property =  defineType({
//   name: "property",
//   title: "Property",
//   type: "document",
//   fieldsets: [
//     {
//       name: "location",
//       title: "Location Details",
//       options: { collapsible: true, collapsed: false }
//     },
//     {
//       name: "pricing",
//       title: "Pricing Information",
//       options: { collapsible: true, collapsed: true }
//     }
//   ],
//   fields: [
//     {
//       name: "address",
//       title: "Address",
//       type: "string",
//       fieldset: "location"
//     },
//     {
//       name: "city",
//       title: "City",
//       type: "string",
//       fieldset: "location"
//     },
//     {
//       name: "price",
//       title: "Price",
//       type: "number",
//       fieldset: "pricing"
//     },
//     {
//       name: "currency",
//       title: "Currency",
//       type: "string",
//       fieldset: "pricing"
//     }
//   ]
// });
