import React from "react";
import { useTranslation } from "react-i18next";
import LinkButton from "../ReUsables/LinkButton";
import SectionHeader from "../ReUsables/SectionHeader";
import styles from "../../styles/Portfolio/portfolioinfo.module.scss";

const PortfolioInfo = () => {
   //Translations
   const { t, i18n } = useTranslation();
   const currentlocale = i18n.language;

  const infoDetails = [
    {
      key: "location",
      name: t("Portfolio:location"),
      value: "Douala, Bonaberi",
    },
    {
      key: "surface",
      name: t("Portfolio:surface"),
      value: 1000,
    },
    {
      key: "price",
      name: t("Portfolio:pricing"),
      value: 5000000,
    },
    {
      key: "status",
      name: t("Portfolio:statuss"),
      value: "Titled",
    },
    {
      key: "reference",
      name: t("Portfolio:reference"),
      value: "PE-1023",
    }
  ];

  const propertyName = "Bonaberi Investment Lot";

  const sectionData = {
    small: "Description",
    h2: t("Portfolio:detailed"),
    text: "Bonaberi Investment Plot sits adjacent to Douala’s main commercial corridor, footsteps from lively markets, banks, and eateries. Urban restoration projects nearby promise increased foot traffic and rising property values. The site enjoys easy access via public transport, with bus stops and taxi stands within minutes. Neighbors include emerging coworking hubs and artisanal workshops, fostering a dynamic community atmosphere. Ideal for mixed-use developments aiming to capitalize on Bonaberi’s revitalization momentum."
  }

  const formatNumber = (num: number) => {
    // Convert to number if it's a string
    const numValue = typeof num === "string" ? parseFloat(num) : num;

    // Return as-is if not a valid number
    if (isNaN(numValue)) return num;

    // Use toLocaleString for comma formatting
    return numValue.toLocaleString();
  };

  const getDisplayValue = (item: typeof infoDetails[0]) => {
    switch (item.key) {
      case "surface":
        return `${formatNumber(Number(item.value))} m²`;
      case "price":
        return formatNumber(Number(item.value));
      default:
        return item.value;
    }
  };

  return (
    <div className={`section ${styles.pi__section}`}>
      <div className={`container ${styles.pi__container}`}>
        <div className={styles.pi__top}>
          {
            infoDetails.map((data, i) => (
              <div className={styles.pi__box} key={i}>
                <span className={styles.pi__span}>{data.name}</span>
                <h3 className={styles.pi__h3}>{getDisplayValue(data)}</h3>
              </div>
            ))
          }
        </div>
        <div className={styles.pi__bottom}>
          <SectionHeader sectionData={sectionData} />
          <div className={styles.pib__contact}>
            <span className={styles.pib__span}>{t("Portfolio:cta")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioInfo;
