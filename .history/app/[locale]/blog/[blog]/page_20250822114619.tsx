import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import React from "react";
import { BlogDetailsWrapper } from "@/components";

export const revalidate = 60;


export async function getBlog(blog: string) {
  const query = `*[_type == "blogpost" && slug.current == "${blog}"][0] {
      titleen,
  titlefr,
  categories[]->,
  image,
    slug,
    publishedAt,
    excerpten,
    excerptfr,
    bodyen,
    bodyfr,
    _id
}`;

  const data = await client.fetch(query);
  return data;
}

export default async function Blog({params}: {params: Promise<{blog: string}>} ) {
  const { blog } = await params;
  const blogpost = await getBlog(blog);

  if (!blogpost) {
    notFound();
  }


  return <BlogDetailsWrapper blogpost={blogpost}/>;
}
