"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import SectionHeader from "../ReUsables/SectionHeader";
import styles from "../../styles/HomePage/roadmap.module.scss";

const RoadMap = () => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

  //RoadMap
  const roadHeader = {
    small: t("HomePage:roadsmall"),
    h2: t("HomePage:roadh2"),
    text: t("HomePage:roadtext"),
  };

  return (
    <div className={`section ${styles.roadmap__section}`}>
      <div className={`container ${styles.roadmap__container}`}>
        <SectionHeader sectionData={roadHeader} />
        <div className={styles.roadmap__content}>
          <div className={styles.rmc__container}>
            <span className={styles.rmc__number}>

            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
