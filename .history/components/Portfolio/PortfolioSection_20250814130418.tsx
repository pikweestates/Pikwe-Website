"use client";

import React from "react";
import FilterContainer from "./FilterContainer";
import { useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import IMAGE from "../../public/images/plot.jpg";
import PortfolioCard from "../ReUsables/PortfolioCard";
import styles from "../../styles/Portfolio/portfoliosection.module.scss";
import ClearFilters from "./ClearFilters";

const PortfolioSection = ({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
}) => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;
  const searchParams = useSearchParams();

  const filters = [
    {
      filterName: {
        fn: t("Portfolio:price"),
        slug: t("Portfolio:sprice"),
      },
      filters: [
        { name: t("Portfolio:price"), slug: t("Portfolio:sprice") },
        { name: "< 1M", slug: "<1M" },
        { name: "1M - 5M", slug: "1M-5M" },
        { name: "5M - 10M", slug: "5M-10M" },
        { name: "> 10M", slug: ">10M" },
      ],
    },
    {
      filterName: {
        fn: t("Portfolio:size"),
        slug: t("Portfolio:ssize"),
      },
      filters: [
        { name: t("Portfolio:size"), slug: t("Portfolio:ssize") },
        { name: "< 500m²", slug: "<500m²" },
        { name: "500m² - 1000m²", slug: "500m²-1000m²" },
        { name: "1000m² - 10000m²", slug: "1000m²-10000m²" },
        { name: "> 10000m²", slug: ">10000m²" },
      ],
    },
    {
      filterName: {
        fn: t("Portfolio:status"),
        slug: t("Portfolio:sstatus"),
      },
      filters: [
        { name: t("Portfolio:status"), slug: t("Portfolio:sstatus") },
        { name: t("Portfolio:titled"), slug: t("Portfolio:stitled") },
        { name: t("Portfolio:nontitled"), slug: t("Portfolio:snontitled") },
        { name: t("Portfolio:inprocess"), slug: t("Portfolio:sinprocess") },
      ],
    },
  ];

  // Check if any filter query param is active
  const hasActiveFilters = filters.some(({ filterName }) =>
    searchParams.has(filterName.slug)
  );

  const portfolioContent = [
    {
      ref: "PE-1023",
      name: "Bonaberi Investment Lot",
      location: "Douala, Bonaberi",
      area: 500,
      price: 5000000,
      image: IMAGE,
      link: `/${currentlocale}/portfolio/bonaberi-investment`,
    },
    {
      ref: "PE-1024",
      name: "Bonaberi Investment Lot",
      location: "Douala, Bonaberi",
      area: 500,
      price: 5000000,
      image: IMAGE,
      link: `/${currentlocale}/portfolio/bonaberi-investment`,
    },
    {
      ref: "PE-1025",
      name: "Bonaberi Investment Lot",
      location: "Douala, Bonaberi",
      area: 500,
      price: 5000000,
      image: IMAGE,
      link: `/${currentlocale}/portfolio/bonaberi-investment`,
    },
    {
      ref: "PE-1026",
      name: "Bonaberi Investment Lot",
      location: "Douala, Bonaberi",
      area: 500,
      price: 5000000,
      image: IMAGE,
      link: `/${currentlocale}/portfolio/bonaberi-investment`,
    },
    {
      ref: "PE-1027",
      name: "Bonaberi Investment Lot",
      location: "Douala, Bonaberi",
      area: 500,
      price: 5000000,
      image: IMAGE,
      link: `/${currentlocale}/portfolio/bonaberi-investment`,
    },
    {
      ref: "PE-1028",
      name: "Bonaberi Investment Lot",
      location: "Douala, Bonaberi",
      area: 500,
      price: 5000000,
      image: IMAGE,
      link: `/${currentlocale}/portfolio/bonaberi-investment`,
    },
  ];

  return (
    <div ref={ref} className={`section ${styles.ps__section}`}>
      <div className={`container ${styles.ps__container}`}>
        <div className={styles.ps__filter}>
          <h2 className={styles.filter__h2}>{t("Portfolio:filters")}</h2>
          <div className={styles.f}>

          </div>
          <div className={styles.filter__scroller}>
            <div className={styles.filter__inner}>
              {filters.map((data, i) => (
                <FilterContainer filterData={data} key={i} />
              ))}
              {hasActiveFilters && <ClearFilters />}
            </div>
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

export default PortfolioSection;
