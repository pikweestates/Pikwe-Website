"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import SectionHeader from "../ReUsables/SectionHeader";
import InsightCard from "../ReUsables/InsightCard";
import LinkButton from "../ReUsables/LinkButton";
import formatDate from "@/utils/dateformatter";
import { BlogPost } from "@/types";
import styles from "../../styles/HomePage/homeinsights.module.scss";

const HomeInsights = ({blogs}: {blogs: BlogPost[]}) => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

  //Portfolio Header
  const insightHeader = {
    small: t("HomePage:insightsmall"),
    h2: t("HomePage:insighth2"),
    text: t("HomePage:insighttext"),
  };

  const insightLink = {
    href: `${currentlocale}/portfolio`,
    text: t("HomePage:insightlink"),
  };

  const insightData = [
    {
      id: blogs[0]._id,
      name: currentlocale==="en" ? blogs[0].titleen : blogs[0].titlefr,
      image: blogs[0].image,
      categories: blogs[0].categories,
      date: currentlocale==="en" ? formatDate(blogs[0].publishedAt) : formatDate(blogs[0].publishedAt, "fr-FR"),
      link: `/${currentlocale}/blog/${blogs[0].slug.current}`,
    },

    {
      id: blogs[1]._id,
      name: currentlocale==="en" ? blogs[1].titleen : blogs[1].titlefr,
      image: blogs[1].image,
      categories: blogs[1].categories,
      date: currentlocale==="en" ? formatDate(blogs[1].publishedAt) : formatDate(blogs[1].publishedAt, "fr-FR"),
      link: `/${currentlocale}/blog/${blogs[1].slug.current}`,
    },

    {
      id: blogs[2]._id,
      name: currentlocale==="en" ? blogs[2].titleen : blogs[2].titlefr,
      image: blogs[2].image,
      categories: blogs[2].categories,
      date: currentlocale==="en" ? formatDate(blogs[2].publishedAt) : formatDate(blogs[2].publishedAt, "fr-FR"),
      link: `/${currentlocale}/blog/${blogs[2].slug.current}`,
    },
  ];

  console.log(insightData)

  return (
    <div className={`section ${styles.hi__section}`}>
      <div className={`container ${styles.hi__container}`}>
        <SectionHeader sectionData={insightHeader} />
        <div className={styles.hi__wrapper}>
          {insightData.map((data, i) => (
            <InsightCard key={i} data={data} />
          ))}
        </div>
        <LinkButton linkData={insightLink} />
      </div>
    </div>
  );
};

export default HomeInsights;
