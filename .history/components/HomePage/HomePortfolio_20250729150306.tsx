import React from "react";
import { useTranslation } from "react-i18next";
import SectionHeader from "../ReUsables/SectionHeader";
import ImagePlaceholder from "../ReUsables/ImagePlaceholder";
import IMAGE from "../../public/images/plot.jpg";
import LinkButton from "../ReUsables/LinkButton";
import Lenis from "@studio-freight/lenis/types";
import Link from "next/link";
import styles from "../../styles/HomePage/homeportfolio.module.scss";

const HomePortfolio = () => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

  //Portfolio Header
  const portHeader = {
    small: t("HomePage:portsmall"),
    h2: t("HomePage:porth2"),
    text: t("HomePage:porttext"),
  };

  const portLink = {
    href: `${currentlocale}/portfolio`,
    text: t("HomePage:portlink"),
  };

  const portfolioContent = [
    {
      ref: "PE-1023",
      name: "Bonaberi Investment Lot",
      location: "Douala, Bonaberi",
      area: 500,
      price: 5000000,
      image: IMAGE
    },
    {
      ref: "PE-1023",
      name: "Bonaberi Investment Lot",
      location: "Douala, Bonaberi",
      area: 500,
      price: 5000000,
      image: IMAGE
    },
    {
      ref: "PE-1023",
      name: "Bonaberi Investment Lot",
      location: "Douala, Bonaberi",
      area: 500,
      price: 5000000,
      image: IMAGE
    },
  ];

  const formatNumber = (num: number) => {
    // Convert to number if it's a string
    const numValue = typeof num === 'string' ? parseFloat(num) : num;
    
    // Return as-is if not a valid number
    if (isNaN(numValue)) return num;
    
    // Use toLocaleString for comma formatting
    return numValue.toLocaleString();
  };

  return (
    <div className={`section ${styles.hp__section}`}>
      <div className={`container ${styles.hp__container}`}>
        <SectionHeader sectionData={portHeader} />
        <div className={styles.portfolio__wrapper}>
          {portfolioContent.map((data, i) => (
            <Link
              href={`${currentlocale}/portfolio`}
              className={styles.portfolio__container}
              key={i}
            >
              <div className={styles.pc__top}>
                <div className={styles.pc__image}>
                  <ImagePlaceholder src={data.image} alt={data.name}/>
                </div>
                <span className={styles.reference}>{data.ref}</span>
              </div>
              <div className={styles.pc__bottom}>
                <p className={styles.land__name}>{data.name}</p>
                <div className={styles.land__details}>
                  <span>{data.location}</span>
                  <span>{formatNumber(data.area)}m&sup2;</span>
                </div>
                <span className={styles.price}>XAF {formatNumber(data.price)}</span>
              </div>
            </Link>
          ))}
        </div>
        <LinkButton linkData={portLink} />
      </div>
    </div>
  );
};

export default HomePortfolio;
