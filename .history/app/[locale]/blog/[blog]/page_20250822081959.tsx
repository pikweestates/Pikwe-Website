import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import React from "react";
import {BlogDetailsWrapper} from "@/components";

export const revalidate = 60;

interface Params {
  params: {
    blog: string
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
    images,
    _id
}`;

export default function Portfolio() {
  return <BlogDetailsWrapper />;
}
