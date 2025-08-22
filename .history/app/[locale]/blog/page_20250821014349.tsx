import React from "react";
import { client } from "@/sanity/lib/client";
import { BlogPageWrapper } from "@/components";

export const revalidate = 60;

export async function getBlogs() {
  const query = `*[_type == "blogpost"] 
  | order(publishedAt desc){
  titleen,
  titlefr,
  categories[]->,
  image,
    slug,
    publishedAt,
    _id
}`;

  const data = await client.fetch(query);
  return data;
}

export async function getCategories() {
  const query = `*[_type == "category"] {
  nameen,
  namefr,
  slug,
  slugfr
  _id
}`;

  const data = await client.fetch(query);
  return data;
}

export default async function Portfolio() {
  const blogs = await getBlogs();
  const categories = await getC();

  return <BlogPageWrapper blogs={blogs} />;
}
