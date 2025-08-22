import { client } from "@/sanity/lib/client";
import React from "react";
import {PortfolioDetailsWrapper} from "@/components";

export const revalidate = 60;

interface Params {
  params: {
    portfolio: string
  }
}

export async function getPost(property: string) {
  const query = `*[_type == "property" && slug.current == "${property}"][0] {
    name,
    slug,
    reference,
    mainimage,
    location,
    price,
    surfacearea,
    landstatuss->,
    detailsen,
    detailsfr,
    images
    _id
}`;

  const data = await client.fetch(query);
  return data;
}

export default async function Portfolio({params}: Params ) {
  const {portfolio} = await params;
  const post = await getPost(params?.portfolio);

  return <PortfolioDetailsWrapper post={post}  />;
}
