"use client";

import React from 'react'
import { useTranslation } from "react-i18next";
import ImagePlaceholder from '../ReUsables/ImagePlaceholder';
import Link
import styles from "../../styles/AboutPage/aboutvision.module.scss"

const AboutVision = () => {
  return (
    <div className={`section ${styles.av__section}`}>
      <div className={`container ${styles.av__container}`}>
        <div className={styles.avc__left}>
          <div className={styles.avc__top}>
            <span className={styles.avc__span}>OUR VISION</span>
            <h2 className={styles.avc__h2}>To become the real estate company of preference</h2>
          </div>
          <div className={styles.avc__bottom}>

          </div>
        </div>
        <div className={styles.avc__right}>

        </div>
      </div>
    </div>
  )
}

export default AboutVision