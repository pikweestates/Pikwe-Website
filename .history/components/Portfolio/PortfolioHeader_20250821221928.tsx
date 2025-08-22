"use client";

import React, { useEffect, useState, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import ImagePlaceholder from "../ReUsables/ImagePlaceholder";

import Copy from "../ReUsables/Copy";
import IMAGE from "../../public/images/plot.jpg";
import styles from "../../styles/Portfolio/portfolioheader.module.scss";


interface Property {
  _id: string;
  mainimage: {
    alt: string;
  };
  slug: {
    current: string;
  };
  location: string;
  price: number;
  surfacearea: number;
  reference: {
    current: string
  };
  name: string;
  landstatuss: {
    name: string,
    namefr: string
  },
  detailsen: string,
  detailsfr: string,
  images: {
    alt: string;
  }[],
}

const PortfolioHeader = ({animationFinished, post}: {animationFinished: boolean, post: Property}) => {
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
          <Copy animationFinished={animationFinished}>
            <span className={styles.reference}>{post.reference.current}</span>
          </Copy>
          <Copy animationFinished={animationFinished}>
            <h2 className={styles.ph__name}>{post.name}</h2>
          </Copy>
        </div>
        <div className={styles.ph__image} ref={container} style={{opacity: animationFinished ? 1 : 0}}>
          <motion.div className={styles.phi__wrapper} style={{ y }}>
            <ImagePlaceholder src={IMAGE} alt="PIKWE IMAGE" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHeader;
