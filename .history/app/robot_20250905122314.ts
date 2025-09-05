
export default function robots(){

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: '/studio/',
      }
    ],
    sitemap: "https://pikweestates.com/sitemap.xml"
  }
}