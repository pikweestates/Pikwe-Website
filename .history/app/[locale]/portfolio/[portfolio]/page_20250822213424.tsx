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

//MetaData
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const {locale, blog} = await params;
  const blogpost = await getPost(blog);

  return {
    title: `PIKWE ESTATES - ${locale==="en" ? blogpost.titleen: blogpost.titlefr}`,
    description: locale==="en" ? blogpost.excerpten: blogpost.excerptfr,
    openGraph: {
      images: [
        {
          url: urlFor(blogpost.image).width(1200).height(630).url()
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
