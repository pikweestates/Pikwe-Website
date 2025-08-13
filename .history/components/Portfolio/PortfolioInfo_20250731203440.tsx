import React from "react";
import styles from "../../styles/Portfolio/portfolioinfo.module.scss";

const PortfolioInfo = () => {
  const infoDetails = [
    {
      name: "Location",
      value: "Douala, Bonaberi",
    },
    {
      name: "Surface Area",
      value: 1000,
    },
    {
      name: "Price(FCFA)",
      value: 5000000,
    },
    {
      name: "Status",
      value: "Titled",
    },
    {
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
    if (item.name === "Surface Area") {
      return `${formatNumber(Number(item.value))} m²`;
    }
    if (item.name.startsWith("Price")) {
      return formatNumber(Number(item.value));
    }
    return item.value;
  };

  return (
    <div className={`section ${styles.pi__section}`}>
      <div className={`container ${styles.pi__container}`}>
        <div className={styles.pi__top}>
          {
            infoDetails.map((data, i) => (
              <div className={styles.pi__box} key={i}>
                <span className={styles.pi__span}>{data.name}</span>
                <h3 className={styles.pi__h3}>{data.value}</h3>
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
