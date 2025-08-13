"use client";

import React, {useState, useRef} from "react";
import { useTranslation } from "react-i18next";
import SectionHeader from "../ReUsables/SectionHeader";
import { Icon } from "@iconify/react";
import ImagePlaceholder from "../ReUsables/ImagePlaceholder";
import IMAGE from "../../public/images/service.jpg";
import Lenis from "lenis";
import LinkButton from "../ReUsables/LinkButton";
import styles from "../../styles/HomePage/homesolutions.module.scss";
import Accordion from "./Accordion";

const HomeSolutions = ({lenis}: {lenis: Lenis | null}) => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

  //Portfolio Header
  const solutionHeader = {
    small: t("HomePage:solutionsmall"),
    h2: t("HomePage:solutionh2"),
    text: t("HomePage:solutiontext"),
  };

  const solutionLink = {
    href: `${currentlocale}/contact`,
    text: t("Navigation:buttontext"),
  };

  const solutionsContent = [
    {
      name: t("HomePage:snameone"),
      text: t("HomePage:stextone"),
      image: IMAGE,
    },
    {
      name: t("HomePage:snametwo"),
      text: t("HomePage:stexttwo"),
      image: IMAGE,
    },
    {
      name: t("HomePage:snamethree"),
      text: t("HomePage:stextone"),
      image: IMAGE,
    },
  ];

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
    <div className={`section ${styles.hs__section}`}>
      <div className={`container ${styles.hs__container}`}>
        <SectionHeader sectionData={solutionHeader} />
        <div className={styles.sol__content}>
          <div className={styles.sc__top}>
            {solutionsContent.map((data, i) => (
              <Accordion/>
            ))}
          </div>
          <div className={styles.sc__bottom}>
            <LinkButton linkData={solutionLink} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSolutions;
