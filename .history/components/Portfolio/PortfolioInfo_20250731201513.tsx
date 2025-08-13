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
      value: "1000m²",
    },
    {
      name: "Price(FCFA)",
      value: 5000000,
    },
    {
      name: "Status",
      value: "Douala, Bonaberi",
    },
    {
      name: "Reference code",
      value: "Douala, Bonaberi",
    },
  ];
  return (
    <div className={`section ${styles.pi__section}`}>
      <div className={`container ${styles.pi__container}`}></div>
    </div>
  );
};

export default PortfolioInfo;
