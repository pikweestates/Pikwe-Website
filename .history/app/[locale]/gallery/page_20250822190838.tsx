import React from "react";
import { client } from "@/sanity/lib/client";
import {GalleryPageWrapper} from "@/components";


async function getGallery() {
  const query = `*[_type == "gallery"] 
  | order(publishedAt desc){
    image,
    descriptionen,
    descriptionfr,
    _id
}`;

  const data = await client.fetch(query);
  return data;
}

export default async function Portfolio() {
  const gallery = await getGallery();

  return <GalleryPageWrapper/>;
}
