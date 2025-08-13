import React from "react";
import { useTranslation } from "react-i18next";
import ImagePlaceholder from "./ImagePlaceholder";
import Link from "next/link";
import styles from "../../styles/ReUsables/portfoliocard.module.scss";


interface PortfolioInterface {
  ref: "PE-1023",
      name: "Bonaberi Investment Lot",
      location: "Douala, Bonaberi",
      area: 500,
      price: 5000000,
      image: IMAGE,
      link: `${currentlocale}/portfolio/bonaberi-investment`
}

const PortfolioCard = ({data}: {data: }) => {
   //Translations
   const { t, i18n } = useTranslation();
   const currentlocale = i18n.language;

   const formatNumber = (num: number) => {
    // Convert to number if it's a string
    const numValue = typeof num === 'string' ? parseFloat(num) : num;
    
    // Return as-is if not a valid number
    if (isNaN(numValue)) return num;
    
    // Use toLocaleString for comma formatting
    return numValue.toLocaleString();
  };

  return (
    <Link
      href={`${currentlocale}/portfolio`}
      className={styles.portfolio__container}
    >
      <div className={styles.pc__top}>
        <div className={styles.pc__image}>
          <ImagePlaceholder src={data.image} alt={data.name} />
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
  );
};

export default PortfolioCard;
