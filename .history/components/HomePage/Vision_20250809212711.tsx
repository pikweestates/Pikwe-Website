"use client";

import React, {useEffect, useState, useRef} from "react";
import { useTranslation } from "react-i18next";
import { useScroll, motion, useTransform } from "framer-motion";
import SquareButton from "../ReUsables/SquareButton";
import ImagePlaceholder from "../ReUsables/ImagePlaceholder";
import IMAGE from "../../public/images/homeimage.jpg";
import styles from "../../styles/HomePage/vision.module.scss";

const Vision = () => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

  const linkContent = {
    href:
      currentlocale === "en"
        ? `${currentlocale}/about`
        : `${currentlocale}/a-propos`,
    text: t("HomePage:aboutbutton"),
  };

  //Parallax
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  //Handle Resizing Y value
  const [transform, setTransform] = useState(-150);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined" && window.innerWidth < 540) {
        setTransform(-70);
      } else if (typeof window !== "undefined" && window.innerWidth < 750) {
        setTransform(-100);
      } else {
        setTransform(-150);
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
    <div className={styles.vision__section} ref={container}>
      <motion.div className={styles.vision__image} style={{y}}>
        <div className={styles.vi__wrapper}>
          <ImagePlaceholder src={IMAGE} alt="PIKWE Land" />
        </div>
      </motion.div>
      <div
        className={`${styles.vi}{styles.vision__content}`}
      >
        <span className={styles.vc__span}>{t("HomePage:aboutsmall")}</span>
        <p className={styles.vc__p}>{t("HomePage:homevision")}</p>
        <div className={styles.vc__button}>
          <SquareButton status="ivory" content={linkContent} />
        </div>
      </div>
    </div>
  );

};

export default Vision;