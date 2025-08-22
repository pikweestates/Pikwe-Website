import React from "react";
import { client } from "@/sanity/lib/client";
import {GalleryPageWrapper} from "@/components";


async function getGallery() {
  const query = ``;

  const data = await client.fetch(query);
  return data;
}

export default async function Portfolio() {
  const gallery = await getGallery();

  return <GalleryPageWrapper/>;
}
