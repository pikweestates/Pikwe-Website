"use client";

import React, { useEffect, useState, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import ImagePlaceholder from "../ReUsables/ImagePlaceholder";
import Copy from "../ReUsables/Copy";
import IMAGE from "../../public/images/plot.jpg";
import styles from "../../styles/Portfolio/portfolioheader.module.scss";

const PortfolioHeader = ({animationFinished}: {animationFinished: boolean}) => {
  //Parallax
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  //Handle Resizing Y value
  const [transform, setTransform] = useState(-170);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined" && window.innerWidth < 540) {
        setTransform(-70);
      } else if (typeof window !== "undefined" && window.innerWidth < 750) {
        setTransform(-110);
      } else {
        setTransform(-170);
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
    <div className={styles.ph__section}>
      <div className={`container ${styles.ph__container}`}>
        <div className={styles.ph__header}>
          <Copy animationFinished={}>
            <span className={styles.reference}>PE-1023</span>
          </Copy>
          <Copy>
            <h2 className={styles.ph__name}>Bonaberi Investment Lot</h2>
          </Copy>
        </div>
        <div className={styles.ph__image} ref={container}>
          <motion.div className={styles.phi__wrapper} style={{ y }}>
            <ImagePlaceholder src={IMAGE} alt="PIKWE IMAGE" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHeader;
