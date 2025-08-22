import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import InsightCard from "../ReUsables/InsightCard";
import styles from "../../styles/Portfolio/portfoliosection.module.scss";
import Copy from "../ReUsables/Copy";
import formatDate from "@/utils/dateformatter";
import { BlogPost, Category } from "@/types";

const BlogSection = ({
  ref,
  blogs,
  categories
}: {
  ref: React.RefObject<HTMLDivElement | null>;
  blogs: BlogPost[];
  categories: Category[]
}) => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

  const insightData = blogs.map((blog: BlogPost) => ({
    id: blog._id,
    name: currentlocale === "en" ? blog.titleen : blog.titlefr,
    image: blog.image,
    categories: blog.categories,
    date:
      currentlocale === "en"
        ? formatDate(blog.publishedAt)
        : formatDate(blog.publishedAt, "fr-FR"),
    link: `/${currentlocale}/blog/${blog.slug.current}`,
  }));

  const categoriesm = [categories.map((category: Category) => ({
    id: category._id,
    name: currentlocale === "en" ? category.nameen : category.namefr,
    slug: currentlocale === "en" ? category.slug : category.slugfr
  }))

  const categoriess = [
    {
      id: "cateall",
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
          <Copy>
            <h2 className={styles.filter__h2}>{t("Blog:categories")}</h2>
          </Copy>
          <div className={styles.fc__wrapper}>
            <div className={styles.filter__inner}>
              {categoriess.map((data, i) => (
                <div
                  className={`${styles.category__wrapper} ${
                    activeCategory === data.slug ? styles.active__category : ""
                  }`}
                  key={i}
                  onClick={() => handleCategory(data)}
                >
                  <Copy>
                    <span>{data.name}</span>
                  </Copy>
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
