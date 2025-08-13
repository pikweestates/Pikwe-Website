"use client";

import React, {useEffect, useState, useRef} from "react";
import { useTranslation } from "react-i18next";
import { useScroll, motion, useTransform } from "framer-motion";
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

  //Parallax
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  //Handle Resizing Y value
  const [transform, setTransform] = useState(-125);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined" && window.innerWidth < 540) {
        setTransform(-60);
      } else if (typeof window !== "undefined" && window.innerWidth < 750) {
        setTransform(-85);
      } else {
        setTransform(-125);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], [transform, 0]);

  return (
    <div className={`section ${styles.av__section}`}>
      <div className={`container ${styles.av__container}`}>
        <div className={styles.avc__left}>
          <div className={styles.avc__top}>
            <span className={styles.avc__span}>{t("About:ourvision")}</span>
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
        <div className={styles.avc__right} ref={container}>
          <div className={styles.avc__wrapper}>
            <motion.div className={styles.avc__image} style={{y}}>
              <ImagePlaceholder src={IMAGE} alt="PIKWE VISION"/>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutVision;
