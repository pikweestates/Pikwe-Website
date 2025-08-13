"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import ImagePlaceholder from "../ReUsables/ImagePlaceholder";
import LinkButton from "../ReUsables/LinkButton";
import IMAGE from "../../public/images/vision.jpg"
import styles from "../../styles/AboutPage/aboutvision.module.scss";

const AboutVision = () => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

  const linkData = {
    href: `/${currentlocale}/contact`,
    text: t("HomePage:buttontext"),
  };

  return (
    <div className={`section ${styles.av__section}`}>
      <div className={`container ${styles.av__container}`}>
        <div className={styles.avc__left}>
          <div className={styles.avc__top}>
            <span className={styles.avc__span}>OUR VISION</span>
            <h2 className={styles.avc__h2}>
              To become the real estate company of preference
            </h2>
          </div>
          <div className={styles.avc__bottom}>
            <p className={styles.avc__p}>
              We envision to become the real estate company of preference by
              providing premium services and opening doors to life-changing
              opportunities for millions of people in Cameroon and beyond.
            </p>
            <LinkButton linkData={linkData} />
          </div>
        </div>
        <div className={styles.avc__right}>
          <div className={styles.avc__wrapper}>
            <div className={styles.avc__image}>
              <ImagePlaceholder src={IMAGE} alt="PIKWE VISION"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutVision;
