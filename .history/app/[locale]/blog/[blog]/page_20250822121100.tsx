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


type BlogShort = {
  _id: string;
  titleen?: string;
  titlefr?: string;
  slug?: { current: string };
  image?: any;
  publishedAt?: string;

};

export async function getNextBlogPosts(slug: string, limit = 3): Promise<BlogShort[]> {
  if (!slug) return [];

  // 1) Fetch current post to know its _id and publishedAt
  const currentQuery = `*[_type == "blogpost" && slug.current == $slug][0]{_id, publishedAt}`;
  const current = await client.fetch(currentQuery, { slug });

  if (!current) return [];

  const publishedAt: string = current.publishedAt;

  // 2) Fetch up-to-`limit` posts that come after the current one in the normal ordering.
  //    Normal ordering: newest first -> so "after current" are those with publishedAt < current.publishedAt
  const afterQuery = `*[_type == "blogpost" && publishedAt < $publishedAt] | order(publishedAt desc) [0...${limit}] {
    _id,
    categories[]->,
    titleen,
    titlefr,
    slug,
    image,
    publishedAt,
  }`;
  const afterPosts: BlogShort[] = await client.fetch(afterQuery, { publishedAt });

  // If we already have enough, return (excluding current by construction)
  if (afterPosts.length >= limit) {
    return afterPosts.slice(0, limit);
  }

  // 3) Need to fill the remainder by taking from the top of the list (newest posts),
  //    but exclude current and any already included posts.
  const excludeIds = [current._id, ...afterPosts.map((p) => p._id)];

  const remaining = limit - afterPosts.length;

  // Use GROQ `in` with param array to exclude already returned posts
  const topFillQuery = `*[_type == "blogpost" && !(_id in $excludeIds)] | order(publishedAt desc) [0...${remaining}] {
    _id,
    categories[]->,
    titleen,
    titlefr,
    slug,
    image,
    publishedAt,
  }`;

  const fillPosts: BlogShort[] = await client.fetch(topFillQuery, { excludeIds });

  // Merge and return (afterPosts first, then fillPosts). Total length <= limit
  const result = [...afterPosts, ...fillPosts].slice(0, limit);
  return result;
}


export default async function Blog({params}: {params: Promise<{blog: string}>} ) {
  const { blog } = await params;
  const blogpost = await getBlog(blog);
  const otherblogs = await getNextBlogPosts(blog)

  if (!blogpost) {
    notFound();
  }

  console.log(otherblogs)

  return <BlogDetailsWrapper blogpost={blogpost}/>;
}
