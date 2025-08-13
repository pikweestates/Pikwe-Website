"use client";

import React, { useState } from "react";
import FilterContainer from "./FilterContainer";
import { useTranslation } from "react-i18next";
import styles from "../../styles/Portfolio/portfoliosection.module.scss";

const PortfolioSection = ({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
}) => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

  const filters = [
    {
      filterName: {
        fn: t("Portfolio:price"),
        slug: "price",
      },
      filters: [{name: t("Portfolio:price"), slug: "price"}, {name: "< 1M", slug: "<1M"}, {name: "1M - 5M", slug: "1M-5M"}, {name: "5M - 10M", slug: "5M-10M"}, {name: "> 10M", slug: ">10M"}],
    },
    {
      filterName: {
        fn: t("Portfolio:"),
        slug: "size",
      },
      filters: [{name: t("Portfolio:"), slug: "size"}, {name: "500m² - 1000m²", slug: "500m²-1000m²"}, {name: "1000m² - 10000m²", slug: "1000m²-10000m²"}, {name: "> 10000m²", slug: ">10000m²"}],
    },
    {
      filterName: {
        fn: "Status",
        slug: "status",
      },
      filters: [{name: "Status", slug: "status"}, {name: "Titled", slug: "titled"}, {name: "Non-titled", slug: "non-titled"}, {name: "In process", slug: "in-process"}],
    },
  ];

  return (
    <div ref={ref} className={`section ${styles.ps__section}`}>
      <div className={`container ${styles.ps__container}`}>
        <div className={styles.ps__filter}>
          <h2 className={styles.filter__h2}>{t("Portfolio:filters")}</h2>
          <div className={styles.filter__container}>
            {filters.map((data, i) => (
              <FilterContainer filterData={data} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
