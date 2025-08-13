"use client";

import React from "react";
import LinkButton from "./LinkButton";
import styles from "../../styles/ReUsables/herosection.module.scss";

const HeroSection = ({mainData, buttonData}) => {
  return (
    <div className={styles.hero__section}>
      <div className={`container ${styles.hero__container}`}>
        <div className={styles.hero__content}>
          <div className={styles.hero__left}>
            <p className={styles.hero__h1}>
              Your trusted guide to land ownership
            </p>
          </div>
          <div className={styles.hero__right}>
            <p className={styles.hero__p}>
              Do you need guidance getting your next piece of land? Pikwe
              Estates simplifies every step of the land ownership process in
              Cameroon.
            </p>
            <LinkButton data={}/>
          </div>
        </div>
      </div>
      <div className={styles.hero__background}></div>
    </div>
  );
};

export default HeroSection;
