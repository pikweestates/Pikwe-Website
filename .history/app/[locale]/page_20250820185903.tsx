import { client } from "@/sanity/lib/client";
import React from "react";
import { HomePageWrapper } from "@/components";

export async function getPosts() {
  const query = `*[_type == "property"] 
  | order(publishedAt desc) [0...3]{
  name,
    slug,
    reference,
    mainimage,
    location,
    price,
    surfacearea,
    _id
}`;

  const data = await client.fetch(query);
  return data;
}

export async function getBlogs() {
  const query = `*[_type == "blogpost"] 
  | order(publishedAt desc) [0...3]{
  titleen,
  titlefr,
  categories,
  image,
    slug,
    publishedAt,
    _id
}`;

  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const posts = await getPosts();
  const categories = await getBlogs();

  return <HomePageWrapper posts={posts}  />;
}
