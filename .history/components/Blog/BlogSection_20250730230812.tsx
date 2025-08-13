import React from "react";
import { useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";

const BlogSection = ({
  ref
}: {
  ref: React.RefObject<HTMLDivElement | null>;
}) => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;
  const searchParams = useSearchParams();

  return (
    <div ref={ref} className={`section ${styles.ps__section}`}>
      <div className={`container ${styles.ps__container}`}>
        <div className={styles.ps__filter}>
          <h2 className={styles.filter__h2}>{t("Portfolio:filters")}</h2>
          <div className={styles.filter__container}>
            {filters.map((data, i) => (
              <FilterContainer filterData={data} key={i} />
            ))}
            {hasActiveFilters && <ClearFilters />}
          </div>
        </div>
        <div className={styles.ps__content}>
          {portfolioContent.map((data, i) => (
            <PortfolioCard key={i} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
