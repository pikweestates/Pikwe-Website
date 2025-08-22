import React from "react";
import { useTranslation } from "react-i18next";
import InsightCard from "../ReUsables/InsightCard";
import Copy from "../ReUsables/Copy";
import formatDate from "@/utils/dateformatter";
import IMAGE from "../../public/images/plot.jpg";
import { Category } from "@/types";
import styles from "../../styles/ReUsables/otherblogs.module.scss";

type BlogShort = {
  _id: string;
  categories: Category[];
  image: {
    alt: string;
  };
  publishedAt: string;
  slug: {
    current: string;
  };
  titleen: string;
  titlefr: string;
};

const OtherBlogs = ({ otherblogs }: { otherblogs: BlogShort[] }) => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

  const insightData = otherblogs.map([
    {
      name:
        currentlocale === "en" ? otherblogs[0].titleen : otherblogs[0].titlefr,
      image: otherblogs[0].image,
      categories: otherblogs[0].categories,
      date:
        currentlocale === "en"
          ? formatDate(otherblogs[0].publishedAt)
          : formatDate(otherblogs[0].publishedAt, "fr-FR"),
      link: `/${currentlocale}/blog/${otherblogs[0].slug}`,
    },
  ];

  return (
    <div className={`section ${styles.ob__section}`}>
      <div className={`container ${styles.ob__container}`}>
        <div className={styles.ob__top}>
          <Copy>
            <span className={styles.ob__span}>
              {t("HomePage:insightsmall")}
            </span>
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
