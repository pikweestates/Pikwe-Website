import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import IMAGE from "../../public/images/plot.jpg";
import InsightCard from "../ReUsables/InsightCard";
import styles from "../../styles/Portfolio/portfoliosection.module.scss";

const BlogSection = ({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
}) => {
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

  const categories = [
    {
      name: t("Blog:all"),
      slug: t("Blog:sall"),
    },
    {
      name: "Market Insights",
      slug: "market-insights",
    },
    {
      name: "Acquisition Tips",
      slug: "acquisition-tips",
    },
    {
      name: "Legal Guidance",
      slug: "legal-guidance",
    },
  ];

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleCategory = (category: { name: string; slug: string }) => {
    const params = new URLSearchParams(searchParams);

    if (category.slug == t("Blog:sall")) {
      params.delete(t("Blog:category"));
    } else {
      // This value will have to chnage if the "All" is different
      params.set(t("Blog:category"), category.slug);
    }

    replace(`${pathName}?${params.toString()}`, { scroll: false });
  };

  const activeCategory = searchParams.get(t("Blog:category")) || t("Blog:sall");

  return (
    <div ref={ref} className={`section ${styles.ps__section}`}>
      <div className={`container ${styles.ps__container}`}>
        <div className={styles.ps__filter}>
          <h2 className={styles.filter__h2}>{t("Blog:categories")}</h2>
          <div className={styles.fc__wrapper}>
            <div className={styles.filter__container}>
              {categories.map((data, i) => (
                <div
                  className={`${styles.category__wrapper} ${
                    activeCategory === data.slug ? styles.active__category : ""
                  }`}
                  key={i}
                  onClick={() => handleCategory(data)}
                >
                  <span>{data.name}</span>
                </div>
              ))}
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
