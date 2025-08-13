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
        fn: "Price",
        slug: "price",
      },
      filters: [{name: "Price", slug: "price"}, {name: "< 1M", slug: "<1M"}, {name: "1M - 5M", slug: "1M-5M"}, {name: "5M - 10M", slug: "5M-10M"}, {name: "> 10M", slug: ">10M"}],
    },
    {
      filterName: {
        fn: "Size",
        slug: "size",
      },
      filters: ["Size", "<500", "500-1000", "1000-10000", ">10000"],
      filters: [{name: "Size", slug: "size"}, {name: "500 - 1000", slug: "500-1000"}, {name: "1000 - 10000", slug: "1000-10000"}, {name: "10000 - 10M", slug: "5M-10M"}],
    },
    {
      filterName: {
        fn: "Status",
        slug: "status",
      },
      filters: ["Status", "Titled", "Non-titled", "In process"],
    },
  ];

  return (
    <div ref={ref} className={`section ${styles.ps__section}`}>
      <div className={`container ${styles.ps__container}`}>
        <div className={styles.ps__filter}>
          <h2 className={styles.filter__h2}>Filters</h2>
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
