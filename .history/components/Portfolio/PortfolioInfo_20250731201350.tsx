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
      value: "Douala, Bonaberi",
    },
    {
      name: "Price",
      value: "Douala, Bonaberi",
    },
    {
      name: "Status",
      value: "Douala, Bonaberi",
    },
    {
      name: "Location",
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
