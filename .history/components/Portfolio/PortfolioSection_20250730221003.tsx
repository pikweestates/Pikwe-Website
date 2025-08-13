"use client";

import React from "react";
import FilterContainer from "./FilterContainer";
import { useTranslation } from "react-i18next";
import PortfolioCard from "../ReUsables/PortfolioCard";
import styles from "../../styles/Portfolio/portfoliosection.module.scss";
import ClearFilters from "./ClearFilters";

const PortfolioSection = ({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
}) => {
  //Translations
  const { t } = useTranslation();

  const filters = [
    {
      filterName: {
        fn: t("Portfolio:price"),
        slug: t("Portfolio:sprice"),
      },
      filters: [{name: t("Portfolio:price"), slug: t("Portfolio:sprice")}, {name: "< 1M", slug: "<1M"}, {name: "1M - 5M", slug: "1M-5M"}, {name: "5M - 10M", slug: "5M-10M"}, {name: "> 10M", slug: ">10M"}],
    },
    {
      filterName: {
        fn: t("Portfolio:size"),
        slug: t("Portfolio:ssize"),
      },
      filters: [{name: t("Portfolio:size"), slug: t("Portfolio:ssize")}, {name: "500m² - 1000m²", slug: "500m²-1000m²"}, {name: "1000m² - 10000m²", slug: "1000m²-10000m²"}, {name: "> 10000m²", slug: ">10000m²"}],
    },
    {
      filterName: {
        fn: t("Portfolio:status"),
        slug: t("Portfolio:sstatus"),
      },
      filters: [{name: t("Portfolio:status"), slug: t("Portfolio:sstatus")}, {name: "Titled", slug: "titled"}, {name: "Non-titled", slug: "non-titled"}, {name: "In process", slug: "in-process"}],
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
            <ClearFilters />
          </div>
        </div>
        <div className={styles.ps__content}>

        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
