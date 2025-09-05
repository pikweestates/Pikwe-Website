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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const properties = await getPosts();

  const projectEntries: MetadataRoute.Sitemap = properties.map(({ slug }) => ({
    url: `https://pikweestates.com/portfolio/${slug.current}`,
  }));

  return [
    { url: "https://pikweestates.com", priority: 1 },
    { url: "https://pikweestates.com/about" },
    { url: "https://pikweestates.com/gallery" },
    { url: "https://pikweestates.com/portfolio" },
    { url: "https://pikweestates.com/services" },
    { url: "https://pikweestates.com/contact" },
    { url: "https://pikweestates.com/blog" },
    { url: "https://pikweestates.com/privacy" },
    ...projectEntries,
  ];
}
