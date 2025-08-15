"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import SectionHeader from "../ReUsables/SectionHeader";
import Copy from "../ReUsables/Copy";
import LinkButton from "../ReUsables/LinkButton";
import styles from "../../styles/HomePage/roadmap.module.scss";

const RoadMap = () => {
  //Translations
  const { t} = useTranslation();

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

  const roadDownload = {
    href: "/images/pikwe-roadmap.pdf",
    text: t("HomePage:roaddownload")
  }

  return (
    <div className={`section ${styles.roadmap__section}`}>
      <div className={`container ${styles.roadmap__container}`}>
        <SectionHeader sectionData={roadHeader} />
        <div className={styles.roadmap__content}>
          {roadmapContent.map((data, i) => (
            <div className={styles.rmc__container} key={i}>
              <Copy>

              <span className={styles.rmc__number}>{data.number}</span>
              </Copy>
              <Copy>

              <p className={styles.rmc__p}>{data.text}</p>
              </Copy>
            </div>
          ))}
        </div>
        <LinkButton downloadData={roadDownload}/>
      </div>
    </div>
  );
};

export default RoadMap;
