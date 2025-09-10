import { client } from "@/sanity/lib/client";
import React, { Suspense } from "react";
import { HomePageWrapper } from "@/components";

export const revalidate = 60;

// Generate static params for supported locales
export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }];
}

async function getPosts() {
  const query = `*[_type == "property"] 
  | order(publishedAt desc) [0...3]{
  name,
    slug,
    reference,
    mainimage,
    location,
    price,
    surfacearea,
    _id
}`;

  const data = await client.fetch(query);
  return data;
}

async function getBlogs() {
  const query = `*[_type == "blogpost"] 
  | order(publishedAt desc) [0...3]{
  titleen,
  titlefr,
  categories[]->,
  image,
    slug,
    publishedAt,
    _id
}`;

  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const [properties, blogs] = await Promise.all([getPosts(), getBlogs()]);

  return (
    <Suspense>
      <HomePageWrapper properties={properties} blogs={blogs} />;
    </Suspense>
  );
}
