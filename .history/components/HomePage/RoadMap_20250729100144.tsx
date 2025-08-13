"use client";

import React from 'react'
import { useTranslation } from "react-i18next";
import SectionHeader from '../ReUsables/SectionHeader'
import styles from "../../styles/HomePage/roadmap.module.scss"

const RoadMap = () => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

  return (
    <div className={`section ${styles.roadmap__section}`}>
      <div className={`container ${styles.roadmap__container}`}>
        <SectionHeader />
      </div>
    </div>
  )
}

export default RoadMap