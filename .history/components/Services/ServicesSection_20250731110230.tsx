"use client";

import React from 'react'
import { useTranslation } from 'react-i18next';
import styles from "../../styles/ReUsables/servicessection.module.scss"

const ServicesSection = () => {
  const {t, i18next} = useTranslation();
  const currentlocale = i18next.
  return (
    <div className={`section ${styles.services__section}`}>
      <div className={`container ${styles.services__container}`}>
        <div className={styles.ss__top}>
          <span className={styles.ss__span}></span>
          <h2 className={styles.ss__h2}></h2>
        </div>
        <div className={styles.ss__bottom}>

        </div>
      </div>
    </div>
  )
}

export default ServicesSection