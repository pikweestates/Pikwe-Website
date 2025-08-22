import { client } from "@/sanity/lib/client";
import React from "react";
import { HomePageWrapper } from "@/components";

export async function getPosts() {
  const query = `*[_type == "property"] {
  title, image, slug, publishedAt, excerpt, categories[]->, _id
}`;

  const data = await client.fetch(query);
  return data;
}


export default function Home() {
  return <HomePageWrapper />;
}
