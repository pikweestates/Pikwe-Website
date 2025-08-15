"use client";

import React, {useEffect, useRef, useState} from "react";
import LinkButton from "./LinkButton";
import Lenis from "lenis";
import Copy from "./Copy";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import IMAGE from "../../public/svg/patternlight.svg"
import IMAGE2 from "../../public/svg/wpattmobile.svg"
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

    //Parallax
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
  
      offset: ["start end", "end start"],
    });
  
    //Handle Resizing Y value
    const [transform, setTransform] = useState(-150);
    const [background, setBackground] = useS 
  
    useEffect(() => {
      const handleResize = () => {
        if (typeof window !== "undefined" && window.innerWidth < 540) {
          setTransform(-100);
        } else if (typeof window !== "undefined" && window.innerWidth < 750) {
          setTransform(-140);
        } else {
          setTransform(-200);
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
    <div className={`${styles.hero__section}`}>
      <div className={`container ${styles.hero__container}`}>
        <div className={styles.hero__content}>
          <div className={styles.hero__left}>
            <Copy animationFinished={animationFinished}>
              <p className={styles.hero__h1}>{mainData.hero}</p>
            </Copy>
          </div>
          <div className={styles.hero__right}>
            <Copy animationFinished={animationFinished}>
              <p className={styles.hero__p}>{mainData.subtext}</p>
            </Copy>
            <div className={styles.linkb__wrap} style={{opacity: animationFinished ? 1 : 0}}>
              {linkData && <LinkButton linkData={linkData} />}
              {scrollData && <LinkButton scrollData={scrollData} />}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.hero__background} ref={container}>
        <motion.div className={styles.hback__image} style={{y}}>
          <Image fill quality={100} alt="PIKWE PATTERN" src={IMAGE}/>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
