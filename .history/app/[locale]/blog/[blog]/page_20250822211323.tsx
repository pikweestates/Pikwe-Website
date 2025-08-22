import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
import { getBlog, getNextBlogPosts } from "@/sanity/lib/blog";
import { BlogDetailsWrapper } from "@/components";
import initTranslations from "@/app/i18n";

type Props = {
  params: Promise<{ locale: string, blog: string }>
}

/**Translations */
const i18nNamespaces = [
  "Navigation",
  "HomePage",
  "Portfolio",
  "Blog",
  "Gallery",
  "About",
  "Privacy",
];

//MetaData
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const {locale} = await params;

  return {
    title: `PIKWE ESTATES - ${locale==="en" ? }`,
    description: t("Portfolio:herotext"),
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
