"use client";

import React, { useEffect, useState, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import IMAGE from "../../public/images/plot.jpg";
import { useTranslation } from "react-i18next";
import ImagePlaceholder from "../ReUsables/ImagePlaceholder";
import SectionHeader from "../ReUsables/SectionHeader";
import styles from "../../styles/ReUsables/blogheader.module.scss";
import Copy from "../ReUsables/Copy";
import { Category } from "@/types";

// Complete post interface
export interface BlogPost {
  _id: string;
  categories: Category[];
  image: {
    alt: string;
  };
  publishedAt: string;
  slug: {
    current: string;
  };
  titleen: string;
  titlefr: string;
  excerpten: string,
  excerptfr: string,
  body: React.ReactNode
}

const BlogHeader = ({ animationFinished, blogpost }: { animationFinished: boolean, blogpost:  }) => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

  const categories = ["Market Insights", "Legal Guidance"];
  const sectionData = {
    small: t("Blog:headline"),
    h2: t("Blog:quick"),
    text: "Cameroon’s land market is transforming: rapid urbanization, title reforms, and growing diaspora investment reshape ownership. Despite tenure challenges, emerging opportunities promise secure, high‑yield land acquisitions through 2025 and beyond.",
  };

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
    <div className={styles.bh__section}>
      <div className={`container ${styles.bh__container}`}>
        <div className={styles.bh__top}>
          <Copy animationFinished={animationFinished}>
            <span className={styles.bh__date}>July 22, 2025</span>
          </Copy>
          <Copy animationFinished={animationFinished}>
            <h2 className={styles.bh__h2}>
              Cameroon Real Estate Market: 2025 Outlook
            </h2>
          </Copy>
          <div className={styles.bh__categories}>
            {categories.map((data, i) => (
              <Copy key={i} animationFinished={animationFinished}>
                <span className={styles.category}>
                  {data}
                </span>
              </Copy>
            ))}
          </div>
        </div>
        <div className={styles.bh__bottom} style={{opacity: animationFinished ? 1 : 0, transition: "opacity 0.7s ease"}}>
          <SectionHeader sectionData={sectionData} />
          <div className={styles.bh__image} ref={container}>
            <motion.div className={styles.bhi__wrapper} style={{ y }}>
              <ImagePlaceholder src={IMAGE} alt="PIKWE IMAGE" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
