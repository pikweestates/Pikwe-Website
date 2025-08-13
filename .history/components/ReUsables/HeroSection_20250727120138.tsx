import React from "react";
import styles from "../../styles/ReUsables/herosection.module.scss";

const HeroSection = () => {
  return (
    <div className={styles.hero__section}>
      <div className={`container ${styles.hero__container}`}>
        <div className={styles.hero__content}>
          <div className={styles.hero}>
            <p className={styles.hero__h1}>Your trusted guide to land ownership</p>
          </div>
          <div className={styles.hero__right}>

          </div>
        </div>
      </div>
      <div className={styles.hero__background}></div>
    </div>
  );
};

export default HeroSection;
