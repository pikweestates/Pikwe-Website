import React from "react";
import { client } from "@/sanity/lib/client";
import { BlogPageWrapper } from "@/components";

export const revalidate = 60;

export async function getBlogs(category?: string) {
  const query = `*[_type == "blogpost" && category] 
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
    slugfr,
  _id
}`;

  const data = await client.fetch(query);
  return data;
}


export default async function Portfolio() {
  const blogs = await getBlogs();
  const categories = await getCategories();

  return <BlogPageWrapper blogs={blogs} categories={categories} />;
}
