import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
import { getBlog, getNextBlogPosts } from "@/sanity/lib/blog";
import { BlogDetailsWrapper } from "@/components";
import initTranslations from "@/app/i18n";

type Props = {
  params: Promise<{ locale: string, blog: string }>
}


//MetaData
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const {locale, blog} = await params;
  const blogpost = await getBlog(blog);

  return {
    title: `PIKWE ESTATES - ${locale==="en" ? blogpost.titleen: blogpost.titlefr}`,
    description: locale==="en" ? blogpost.excerpten: blogpost.excerptfr,
  };
}


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
