import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import styles from "../../styles/ReUsables/portfoliocard.module.scss";

const PortfolioCard = () => {
   //Translations
   const { t, i18n } = useTranslation();
   const currentlocale = i18n.language;
   
  return (
    <Link
      href={`${currentlocale}/portfolio`}
      className={styles.portfolio__container}
      key={i}
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
