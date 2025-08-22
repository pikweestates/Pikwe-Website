import React from "react";
import { client } from "@/sanity/lib/client";
import {GalleryPageWrapper} from "@/components";


async function getGallery() {
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

export default function Portfolio() {
  return <GalleryPageWrapper/>;
}
