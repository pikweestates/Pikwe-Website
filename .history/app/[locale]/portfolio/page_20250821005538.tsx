import React from "react";
import { client } from "@/sanity/lib/client";
import { PortfolioPageWrapper } from "@/components";

export const revalidate = 60;

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

export default function Portfolio() {
  const properties = await getPosts();
  return <PortfolioPageWrapper />;
}
