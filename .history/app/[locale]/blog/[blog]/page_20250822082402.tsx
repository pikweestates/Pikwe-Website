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

export async function getPost(blog: string) {
  const query = `*[_type == "blogpost" && slug.current == "${blog}"][0] {
    titleen,
    title
    _id
}`;

  const data = await client.fetch(query);
  return data;
}



export default function Portfolio() {
  return <BlogDetailsWrapper />;
}
