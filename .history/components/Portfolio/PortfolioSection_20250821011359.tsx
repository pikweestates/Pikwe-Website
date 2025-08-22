"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import IMAGE from "../../public/images/plot.jpg";
import PortfolioCard from "../ReUsables/PortfolioCard";
import { Property } from "@/types";
import styles from "../../styles/Portfolio/portfoliosection.module.scss";


const PortfolioSection = ({
  ref,
  properties
}: {
  ref: React.RefObject<HTMLDivElement | null>;
  properties: Property[]
}) => {
  //Translations
  const { i18n } = useTranslation();
  const currentlocale = i18n.language;

  const portfolioContent = properties.map((p: Property) => ({
    id: p._id,
    ref: p.reference?.current,
    name: p.name,
    location: p.location,
    area: p.surfacearea ,
    price: p.price,
    image: p.mainimage,
    link: `/${currentlocale}/portfolio/${p.slug.current}`,
  }));


  return (
    <div ref={ref} className={`section ${styles.ps__section}`}>
      <div className={`container ${styles.ps__container}`}>
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
