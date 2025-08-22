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
    slugfr,
  _id
}`;

  const data = await client.fetch(query);
  return data;
}

let lastId = ''

async function fetchNextPage() {
  if (lastId === null) {
    return []
  }
  const {result} = await fetch(
    groq`*[_type == "article" && _id > $lastId] | order(_id) [0...100] {
      _id, title, body
    }`, {lastId})
  
  if (result.length > 0) {
    lastId = result[result.length - 1]._id
  } else {
    lastId = null // Reached the end
  }
  return result
}

export default async function Portfolio() {
  const blogs = await getBlogs();
  const categories = await getCategories();

  return <BlogPageWrapper blogs={blogs} categories={categories} />;
}
