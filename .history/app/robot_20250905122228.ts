import { MetadataRoute } from "next";
import { userAgent } from "next/server";

export default function robots(){

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: '/private/',
      }
    ],
    sitemap: "https://dkadstudio.com/sitemap.xml"
  }
}