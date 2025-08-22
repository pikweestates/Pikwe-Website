import React from "react";
import { useTranslation } from "react-i18next";
import InsightCard from "../ReUsables/InsightCard";
import Copy from "../ReUsables/Copy";
import formatDate from "@/utils/dateformatter";
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

    // Build insightData and include localized category slugs for easy filtering
    const insightData = otherblogs.map((blog: BlogShort) => {
      // map the blog's categories into localized slug strings (defensive)
      const categorySlugs = (blog.categories || []).map((cat) =>
        currentlocale === "en"
          ? (cat.slug?.current ?? "")
          : (cat.slugfr?.current ?? "")
      );
  
      return {
        id: blog._id,
        name: currentlocale === "en" ? blog.titleen : blog.titlefr,
        image: blog.image,
        categories: blog.categories,
        categorySlugs, // <--- useful for filtering
        date:
          currentlocale === "en"
            ? formatDate(blog.publishedAt)
            : formatDate(blog.publishedAt, "fr-FR"),
        link: `/${currentlocale}/blog/${blog.slug.current}`,
      };
    });

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
