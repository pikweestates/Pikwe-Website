import React from "react";
import { client } from "@/sanity/lib/client";
import {BlogPageWrapper} from "@/components";

export async function getBlogs() {
  const query = `*[_type == "blogpost"] 
  | order(publishedAt desc) [0...3]{
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

export default function Portfolio() {
  return <BlogPageWrapper/>;
}
