import React from "react";
import { client } from "@/sanity/lib/client";
import { PortfolioPageWrapper } from "@/components";
import initTranslations from "../../i18n"

type Props = {
  params: Promise<{ locale: string }>
}

/**Translations */
const i18nNamespaces = [
  "Navigation",
  "HomePage",
  "Portfolio",
  "Blog",
  "Gallery",
  "About",
  "Privacy",
];

//MetaData
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const {locale} = await params;
  const { t } = await initTranslations(locale, i18nNamespaces);
  
  return {
    title: t("Navigation:servicesmetatitle"),
    description: t("HomePage:servicestext"),
  };
}

export const revalidate = 60;

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

export default async function Portfolio() {
  const properties = await getPosts();
  return <PortfolioPageWrapper properties={properties}/>;
}
