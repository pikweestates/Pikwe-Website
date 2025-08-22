import { notFound } from "next/navigation";
import React from "react";
import { getBlog, getNextBlogPosts } from "@/sanity/lib/blog";
import { BlogDetailsWrapper } from "@/components";



export const revalidate = 60;


export default async function Blog({
  params,
}: {
  params: Promise<{ blog: string }>;
}) {
  const { blog } = await params;
  const blogpost = await getBlog(blog);
  const otherblogs = await getNextBlogPosts(blog);

  if (!blogpost) {
    notFound();
  }

  return <BlogDetailsWrapper blogpost={blogpost} otherblogs={otherblogs} />;
}
