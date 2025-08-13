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

  const roadmapContent = [
    {
      number: "01",
      text: t("HomePage:roadone"),
    },
    {
      number: "02",
      text: t("HomePage:roadtwo"),
    },
    {
      number: "03",
      text: t("HomePage:roadthree"),
    },
    {
      number: "04",
      text: t("HomePage:roadfour"),
    },
    {
      number: "05",
      text: t("HomePage:roadfive"),
    },
    {
      number: "06",
      text: t("HomePage:roadsix"),
    },
  ];

  return (
    <div className={`section ${styles.roadmap__section}`}>
      <div className={`container ${styles.roadmap__container}`}>
        <SectionHeader sectionData={roadHeader} />
        <div className={styles.roadmap__content}>
          {roadmapContent.map((data, i) => (
            <div className={styles.rmc__container} key={i}>
              <span className={styles.rmc__number}>{data.number}</span>
              <p className={styles.rmc__p}>Land Identification</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
