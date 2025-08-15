import React from "react";
import { useTranslation } from "react-i18next";
import InsightCard from "../ReUsables/InsightCard";
import Copy from "../ReUsables/Copy";
import IMAGE from "../../public/images/plot.jpg";
import styles from "../../styles/ReUsables/otherblogs.module.scss";

const OtherBlogs = () => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

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
  ];

  return (
    <div className={`section ${styles.ob__section}`}>
      <div className={`container ${styles.ob__container}`}>
        <div className={styles.ob__top}>
          <Copy>

          <span className={styles.ob__span}>{t("HomePage:insightsmall")}</span>
          </Copy>
          <Copy>

          <h2 className={styles.ob__h2}>{t("Blog:other")}</h2>
          </Copy>
        </div>
        <div className={styles.ob__bottom}>
          {insightData.map((data, i) => (
            <InsightCard key={i} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherBlogs;
