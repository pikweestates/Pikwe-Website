import { MetadataRoute } from "next"
import { client } from "@/sanity/lib/client";

async function getPosts() {
  const query = `*[_type == "property"] 
  | order(publishedAt desc){
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

export default async function sitemap(): MetadataRoute.Sitemap {
  const properties = await getPosts();
  const projectEntries: MetadataRoute.Sitemap = properties.map(({slug}) => ({
    url: `https://pikweestates.com/portfolio/${slug.current}`
  }))

  return [
    {
      url: 'https://pikweestates.com',
      priority: 1
    },
    {
      url: 'https://pikweestates.com/about',
    },
    {
      url: 'https://pikweestates.com/gallery',
    },
    {
      url: 'https://pikweestates.com/portfolio',
    },
    {
      url: 'https://pikweestates.com/services',
    },
    {
      url: 'https://pikweestates.com/contact',
    },
    {
      url: 'https://pikweestates.com/contact',
    },
    ...projectEntries
  ]
}