"use client";

import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useScroll, motion, useTransform } from "framer-motion";
import ImagePlaceholder from "../ReUsables/ImagePlaceholder";
import { Icon } from "@iconify/react"
import IMAGE from "../../public/images/ceo.jpg";
import styles from "../../styles/AboutPage/aboutquote.module.scss";

const AboutQuote = () => {
  const {t, i18n} = useTranslation();
  const currentlocale = i18n.language;

    //Parallax
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
  
      offset: ["start end", "end start"],
    });
  
    //Handle Resizing Y value
    const [transform, setTransform] = useState(-);
  
    useEffect(() => {
      const handleResize = () => {
        if (typeof window !== "undefined" && window.innerWidth < 540) {
          setTransform(-50);
        } else if (typeof window !== "undefined" && window.innerWidth < 750) {
          setTransform(-75);
        } else {
          setTransform(-100);
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
    <div className={`section ${styles.quote__section}`}>
      <div className={`container ${styles.quote__container}`}>
        <div className={styles.quote__wrapper}>
          <div className={styles.qw__left} ref={container}>
            <motion.div className={styles.qw__image} style={{y}}>
              <ImagePlaceholder src={IMAGE} alt="Ndichengoh Rahimu, CEO" />
            </motion.div>
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
              <span className={styles.qw__span}>Ndichengoh Rahimu</span>
              <span className={styles.qw__span2}>Founder and CEO</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutQuote;
