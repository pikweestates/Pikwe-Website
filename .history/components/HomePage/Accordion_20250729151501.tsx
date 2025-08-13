"use client";

import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import ImagePlaceholder from "../ReUsables/ImagePlaceholder";
import Lenis from "lenis";
import styles from "../../styles/HomePage/accordion.module.scss";


interface DataInterface {
  name: string;
  text: string;
  image
}

const Accordion = ({lenis, data, index}: {lenis: Lenis | null, index: number, data: }) => {
  //Active Accordion
  const [activeAccordion, setActiveAccordion] = useState(0);

  //Accordion Scroll
  const accordionRef = useRef<HTMLDivElement>(null);

  const handleLenisScroll = () => {
    setActiveAccordion(index);

    if (lenis && accordionRef.current) {
      setTimeout(() => {
        const referenceTop = accordionRef.current
          ? window.scrollY +
            accordionRef.current.getBoundingClientRect().top -
            96
          : 0;
        lenis.scrollTo(referenceTop);
      }, 550); // Delay of 1 second
    }
  };

  return (
    <div
      className={`${styles.accordion}`}
      key={i}
      onClick={() => setActiveAccordion(i)}
    >
      <div className={styles.acc__head}>
        <div
          className={`${styles.acc__iconwrap} ${
            activeAccordion === i ? styles.active__svg : ""
          }`}
        >
          <Icon icon="ix:plus" />
        </div>
        <div className={styles.ah__right}>
          <h2
            className={`${styles.acc__h2} ${
              activeAccordion === i ? styles.active__h2 : ""
            }`}
          >
            {data.name}
          </h2>
        </div>
      </div>
      <div
        className={`${styles.acc__body} ${
          activeAccordion === i ? styles.active__acc : ""
        }`}
      >
        <div className={styles.acb__content}>
          <p className={styles.acb__p}>{data.text}</p>
          <div className={styles.acb__image}>
            <ImagePlaceholder src={data.image} alt={data.name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
