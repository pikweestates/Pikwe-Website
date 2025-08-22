import { client } from "@/sanity/lib/client";
import React from "react";
import {PortfolioDetailsWrapper} from "@/components";

export const revalidate = 60;

interface Params {
  params: {
    portfolio: string
  }
}

export async function getPost(blog: string) {
  const query = `*[_type == "post" && slug.current == "${blog}"][0] {
  title, image, slug, publishedAt, excerpt, categories[]->, _id, body, publisher[]->
}`;

  const data = await client.fetch(query);
  return data;
}

export default function Portfolio() {
  return <PortfolioDetailsWrapper />;
}
