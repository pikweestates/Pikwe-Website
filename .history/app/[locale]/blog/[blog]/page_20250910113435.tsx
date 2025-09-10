import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
import { getBlog, getNextBlogPosts, getAllBlogSlugs } from "@/sanity/lib/blog";
import { BlogDetailsWrapper } from "@/components";
import { urlFor } from "@/sanity/lib/image";

type Props = {
  params: Promise<{ locale: string; blog: string }>;
};

// Generate static params for all blog posts
export async function generateStaticParams() {
  const blogSlugs = await getAllBlogSlugs(); // You need to create this function
  
  // Generate params for both locales
  const params = [];
  
  for (const slug of blogSlugs) {
    params.push(
      { locale: 'en', blog: slug },
      { locale: 'fr', blog: slug }
    );
  }
  
  return params;
}

//MetaData
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { locale, blog } = await params;
  const blogpost = await getBlog(blog);

  return {
    title: `PIKWE ESTATES - ${locale === "en" ? blogpost.titleen : blogpost.titlefr}`,
    description: locale === "en" ? blogpost.excerpten : blogpost.excerptfr,
    openGraph: {
      images: [
        {
          url: urlFor(blogpost.image).width(1200).height(630).url(),
        },
      ],
    },
  };
}

export const revalidate = 60;

export default async function Blog({
  params,
}: {
  params: Promise<{ blog: string }>;
}) {
  const { blog } = await params;
  const [blogpost, otherblogs] = await Promise.all([
    getBlog(blog),
    getNextBlogPosts(blog),
  ]);

  if (!blogpost) {
    notFound();
  }

  return (<BlogDetailsWrapper blogpost={blogpost} otherblogs={otherblogs} />)
}
