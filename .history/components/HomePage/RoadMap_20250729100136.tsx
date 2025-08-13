"use client";

import React from 'react'
import { useTranslation } from "react-i18next";

  //Translations
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

import SectionHeader from '../ReUsables/SectionHeader'
import styles from "../../styles/HomePage/roadmap.module.scss"

const RoadMap = () => {
  
  return (
    <div className={`section ${styles.roadmap__section}`}>
      <div className={`container ${styles.roadmap__container}`}>
        <SectionHeader />
      </div>
    </div>
  )
}

export default RoadMap