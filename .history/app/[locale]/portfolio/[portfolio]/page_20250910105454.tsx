import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import React from "react";
import {PortfolioDetailsWrapper} from "@/components";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 60;

type Props = {
  params: Promise<{ locale: string, portfolio: string }>
}

async function getAllBlogSlugs(): Promise<string[]> {
  const query = `*[_type == "blogpost" && defined(slug.current)]{
    "slug": slug.current
  }`;
  
  const blogs = await client.fetch(query);
  return blogs.map((blog: { slug: string }) => blog.slug);
}

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
  const {locale, portfolio} = await params;
  const property = await getPost(portfolio);

  return {
    title: `PIKWE ESTATES - ${property.name}`,
    description: locale==="en" ? property.detailsen: property.detailsfr,
    openGraph: {
      images: [
        {
          url: urlFor(property.mainimage).width(1200).height(630).url()
        }
      ]
    }
  };
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
