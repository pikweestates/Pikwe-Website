import React from "react";
import { client } from "@/sanity/lib/client";
import { PortfolioPageWrapper } from "@/components";

export const revalidate = 60;

async function getPosts() {
  const query = `*[_type == "property"] 
  | order(publishedAt desc){
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

export default async function Portfolio() {
  const properties = await getPosts();
  return <PortfolioPageWrapper properties={properties}/>;
}
