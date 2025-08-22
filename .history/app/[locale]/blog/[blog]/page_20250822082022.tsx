import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import React from "react";
import {BlogDetailsWrapper} from "@/components";

export const revalidate = 60;

interface Params {
  params: {
    blog: string
  }
}



export default function Portfolio() {
  return <BlogDetailsWrapper />;
}
