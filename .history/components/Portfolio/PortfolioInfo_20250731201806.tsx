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
      value: "Titled",
    },
    {
      name: "Reference code",
      value: "PE-1023",
    }
  ];
  return (
    <div className={`section ${styles.pi__section}`}>
      <div className={`container ${styles.pi__container}`}>
        <div className={styles.pi__top}>
          {
            infoDetails.map((data, i) => (
              <div className={styles.}>

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
