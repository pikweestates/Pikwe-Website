"use client";

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
  categories,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
  blogs: BlogPost[];
  categories: Category[];
}) => {
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

  // constant for the "all" slug so we don't repeat t() everywhere
  const ALL_SLUG = t("Blog:sall");
  const QUERY_PARAM = t("Blog:category"); // optional: consider using fixed key like "category"

  // Build insightData and include localized category slugs for easy filtering
  const insightData = blogs.map((blog: BlogPost) => {
    // map the blog's categories into localized slug strings (defensive)
    const categorySlugs = (blog.categories || []).map((cat) =>
      currentlocale === "en" ? cat.slug?.current ?? "" : cat.slugfr?.current ?? ""
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

  // categories list for the UI (unchanged)
  const categoriess = [
    {
      id: "cateall",
      name: t("Blog:all"),
      slug: ALL_SLUG,
    },
    ...(Array.isArray(categories)
      ? categories.map((category: Category) => ({
          id: category._id,
          name: currentlocale === "en" ? category.nameen : category.namefr,
          slug:
            currentlocale === "en"
              ? category.slug?.current ?? ""
              : category.slugfr?.current ?? "",
        }))
      : []),
  ];

  // routing / params (unchanged)
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleCategory = (category: { name: string; slug: string }) => {
    const params = new URLSearchParams(searchParams);

    if (category.slug === ALL_SLUG) {
      params.delete(QUERY_PARAM);
    } else {
      params.set(QUERY_PARAM, category.slug);
    }

    replace(`${pathName}?${params.toString()}`, { scroll: false });
  };

  // activeCategory is the slug value (or "all")
  const activeCategory = searchParams.get(QUERY_PARAM) || ALL_SLUG;

  // --- FILTER LOGIC: only keep posts that have the activeCategory in their categorySlugs
  const visibleData =
    activeCategory === ALL_SLUG
      ? insightData
      : insightData.filter((item) => item.categorySlugs.includes(activeCategory));

  return (
    <div ref={ref} className={`section ${styles.ps__section}`}>
      <div className={`container ${styles.ps__container}`}>
        <div className={styles.ps__filter}>
          <Copy>
            <h2 className={styles.filter__h2}>{t("Blog:categories")}</h2>
          </Copy>
          <div className={styles.fc__wrapper}>
            
            <div className={styles.filter__inner}>
              {categoriess.map((data) => (
                <div
                  className={`${styles.category__wrapper} ${
                    activeCategory === data.slug ? styles.active__category : ""
                  }`}
                  key={data.id}
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
          {visibleData.map((data) => (
            <InsightCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
