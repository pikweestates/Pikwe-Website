import React from "react";
import { useTranslation } from "react-i18next";
import SectionHeader from "../ReUsables/SectionHeader";
import IMAGE from "../../public/images/plot.jpg";
import InsightCard from "../ReUsables/InsightCard";
import LinkButton from "../ReUsables/LinkButton";
import styles from "../../styles/HomePage/homeinsights.module.scss";

const HomeInsights = () => {
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
      name: "Cameroon land market trends",
      image: IMAGE,
      categories: [
        "Market Insights", "Legal Guidance"
      ],
      date: "July 17th, 2025",
      link: `${currentlocale}/`
    },

  ]

  return (
    <div className={`section ${styles.hi__section}`}>
      <div className={`container ${styles.hi__container}`}>
        <SectionHeader sectionData={insightHeader} />
        <div className={styles.hi__wrapper}>
          <InsightCard/>
          <InsightCard/>
          <InsightCard/>
        </div>
        <LinkButton linkData={insightLink} />
      </div>
    </div>
  );
};

export default HomeInsights;
