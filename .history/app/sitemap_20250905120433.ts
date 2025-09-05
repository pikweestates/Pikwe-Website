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
    url: `https://dkadstudio.com/projects/${slug.current}`
  }))

  return [
    {
      url: 'https://dkadstudio.com',
      priority: 1
    },
    {
      url: 'https://dkadstudio.com/about',
    },
    {
      url: 'https://dkadstudio.com/gallery',
    },
    {
      url: 'https://dkadstudio.com/projects',
    },
    {
      url: 'https://dkadstudio.com/services',
    },
    {
      url: 'https://dkadstudio.com/contact',
    },
    ...projectEntries
  ]
}