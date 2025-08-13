import React from "react";
import styles from "../../styles/Portfolio/portfoliosection.module.scss";

const PortfolioSection = ({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <div ref={ref} className={`section ${styles.ps__section}`}>
      <div className={`container ${styles.ps__container}`}>
        
      </div>
    </div>
  );
};

export default PortfolioSection;
