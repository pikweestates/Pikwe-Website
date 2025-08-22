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

  const value = [
    properties.map((data) => (
      {
        id: properties[0]._id,
        ref: properties[0].reference.current,
        name: properties[0].name,
        location: properties[0].location,
        area: properties[0].surfacearea,
        price: properties[0].price,
        image: properties[0].mainimage,
        link: `/${currentlocale}/portfolio/${properties[0].slug.current}`
      },,
    ))
  ]

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
