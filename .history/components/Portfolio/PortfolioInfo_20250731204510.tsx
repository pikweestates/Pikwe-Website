import React from "react";
import { useTranslation } from "react-i18next";
import styles from "../../styles/Portfolio/portfolioinfo.module.scss";

const PortfolioInfo = () => {
  const
  const infoDetails = [
    {
      key: "location",
      name: "Location",
      value: "Douala, Bonaberi",
    },
    {
      key: "surface",
      name: "Surface Area",
      value: 1000,
    },
    {
      key: "price",
      name: "Price (FCFA)",
      value: 5000000,
    },
    {
      key: "status",
      name: "Status",
      value: "Titled",
    },
    {
      key: "reference",
      name: "Reference code",
      value: "PE-1023",
    }
  ];

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

        </div>
      </div>
    </div>
  );
};

export default PortfolioInfo;
