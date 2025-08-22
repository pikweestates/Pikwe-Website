import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import React from "react";
import {PortfolioDetailsWrapper} from "@/components";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 60;

type Props = {
  params: Promise<{ locale: string, blog: string }>
}


async function getPost(property: string) {
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
    images,
    _id
}`;

  const data = await client.fetch(query);
  return data;
}

export default async function Portfolio({params}: {params: Promise<{portfolio: string}>} ) {
  const { portfolio } = await params;
  const post = await getPost(portfolio);

  if (!post) {
    notFound();
  }

  return <PortfolioDetailsWrapper post={post}  />;
}
