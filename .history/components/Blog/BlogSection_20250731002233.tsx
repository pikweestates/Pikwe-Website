import React from "react";
import { useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import IMAGE from "../../public/images/plot.jpg"
import InsightCard from "../ReUsables/InsightCard";
import styles from "../../styles/Portfolio/portfoliosection.module.scss";

const BlogSection = ({
  ref
}: {
  ref: React.RefObject<HTMLDivElement | null>;
}) => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;
  const searchParams = useSearchParams();

  const insightData = [
    {
      name: "Cameroon land market trends",
      image: IMAGE,
      categories: ["Market Insights", "Legal Guidance"],
      date: "July 17th, 2025",
      link: `/${currentlocale}/blog/cameroon-land-market`,
    },

    {
      name: "Cameroon land market trends",
      image: IMAGE,
      categories: ["Market Insights"],
      date: "July 18th, 2025",
      link: `/${currentlocale}/blog/cameroon-land-market`,
    },

    {
      name: "Cameroon land market trends",
      image: IMAGE,
      categories: ["Legal Guidance"],
      date: "July 19th, 2025",
      link: `/${currentlocale}/blog/cameroon-land-market`,
    },
    {
      name: "Cameroon land market trends",
      image: IMAGE,
      categories: ["Market Insights", "Legal Guidance"],
      date: "July 17th, 2025",
      link: `/${currentlocale}/blog/cameroon-land-market`,
    },

    {
      name: "Cameroon land market trends",
      image: IMAGE,
      categories: ["Market Insights"],
      date: "July 18th, 2025",
      link: `/${currentlocale}/blog/cameroon-land-market`,
    },

    {
      name: "Cameroon land market trends",
      image: IMAGE,
      categories: ["Legal Guidance"],
      date: "July 19th, 2025",
      link: `/${currentlocale}/blog/cameroon-land-market`,
    }
  ];

  const categories = [
    {
      name: "All",
      
    }
  ]

  return (
    <div ref={ref} className={`section ${styles.ps__section}`}>
      <div className={`container ${styles.ps__container}`}>
        <div className={styles.ps__filter}>
          <h2 className={styles.filter__h2}>{t("Blog:categories")}</h2>
          <div className={styles.filter__container}>
            <div className={styles.category__wrapper}>
              <span>All</span>
            </div>
          </div>
        </div>
        <div className={styles.ps__content2}>
          {insightData.map((data, i) => (
            <InsightCard key={i} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
