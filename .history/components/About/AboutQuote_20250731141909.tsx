"use client";

import React from "react";
import ImagePlaceholder from "../ReUsables/ImagePlaceholder";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react"
import IMAGE from "../../public/images/ceo.jpg";
import styles from "../../styles/AboutPage/aboutquote.module.scss";

const AboutQuote = () => {
  const {t, i18n} = useTranslation();
  const currentlocale = i18n.language;
  
  return (
    <div className={`section ${styles.quote__section}`}>
      <div className={`container ${styles.quote__container}`}>
        <div className={styles.quote__wrapper}>
          <div className={styles.qw__left}>
            <div className={styles.qw__image}>
              <ImagePlaceholder src={IMAGE} alt="Ndichengoh Rahimu, CEO" />
            </div>
          </div>
          <div className={styles.qw__right}>
            <div className={styles.qw__top}>
              <div className={styles.qw__icon}>
                <Icon icon="fe:quote-left" />
              </div>
              <p className={styles.qw__p}>
                Our goal at Pikwe Estates is ensuring clients access verified
                properties, expert guidance, and affordable solutions for
                sustainable, worry-free investments.
              </p>
            </div>
            <div className={styles.qw__bottom}>
              <span className={styles.qw__span1}>Ndichengoh Rahimu</span>
              <span className={styles.qw__span2}>Founder and CEO</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutQuote;
