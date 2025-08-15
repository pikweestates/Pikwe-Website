"use client";

import React from "react";
import LinkButton from "./LinkButton";
import Lenis from "lenis";
import Copy from "./Copy";
import styles from "../../styles/ReUsables/herosection.module.scss";

interface LinkInterface {
  href: string;
  text: string;
}

interface MainInterface {
  hero: string;
  subtext: string;
}

interface ScrollInterface {
  lenis: Lenis | null;
  reference?: React.RefObject<HTMLDivElement | null>;
  text: string;
}

const HeroSection = ({
  mainData,
  linkData,
  scrollData,
  animationFinished,
}: {
  mainData: MainInterface;
  linkData?: LinkInterface;
  scrollData?: ScrollInterface;
  animationFinished: boolean;
}) => {
  return (
    <div className={`${styles.hero__section}`}>
      <div className={`container ${styles.hero__container}`}>
        <div className={styles.hero__content}>
          <div className={styles.hero__left}>
            <Copy animationFinished={animationFinished} delay={1}>
              <p className={styles.hero__h1}>{mainData.hero}</p>
            </Copy>
          </div>
          <div className={styles.hero__right}>
            <Copy animationFinished={animationFinished}>
              <p className={styles.hero__p}>{mainData.subtext}</p>
            </Copy>
            {linkData && <LinkButton linkData={linkData} />}
            {scrollData && <LinkButton scrollData={scrollData} />}
          </div>
        </div>
      </div>
      <div className={styles.hero__background}></div>
    </div>
  );
};

export default HeroSection;
