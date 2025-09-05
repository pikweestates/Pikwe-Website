import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";

interface Property {
  slug: { current: string };
}

async function getPosts(): Promise<Property[]> {
  const query = `*[_type == "property"] 
    | order(publishedAt desc){
      slug
    }`;
  // on précise le type attendu par fetch
  const data = await client.fetch<Property[]>(query);
  return data;
}

async function getBlogs() {
  const query = `*[_type == "blogpost"] 
  | order(publishedAt desc){
    slug
}`;

  const data = await client.fetch<Property[]>(query);
  return data;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const properties = await getPosts();
  const blogs = await getBlogs();

  const propertyEntries: MetadataRoute.Sitemap = properties.map(({ slug }) => ({
    url: `https://pikweestates.com/portfolio/${slug.current}`,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogs.map(({ slug }) => ({
    url: `https://pikweestates.com/blog/${slug.current}`,
  }));

  return [
    { url: "https://pikweestates.com", priority: 1 },
    { url: "https://pikweestates.com/about" , priority: 0.6},
    { url: "https://pikweestates.com/gallery" },
    { url: "https://pikweestates.com/portfolio", priority: 0.9 },
    { url: "https://pikweestates.com/services" , priority: 0.6},
    { url: "https://pikweestates.com/contact", priority: 0.8 },
    { url: "https://pikweestates.com/blog" , priority: 0.7},
    { url: "https://pikweestates.com/privacy" },
    ...propertyEntries,
    ...blogEntries,
  ];
}
