"use client";

import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import SectionHeader from "../ReUsables/SectionHeader";
import IMAGE from "../../public/images/education.jpg";
import IMAGE2 from "../../public/images/sales.jpg"
import IMAGE3 from "../../public/images/development.jpg"
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
      image: IMAGE2,
    },
    {
      name: t("HomePage:snamethree"),
      text: t("HomePage:stextthree"),
      image: IMAGE3,
    },
  ];

  //Active Accordion
  const [activeAccordion, setActiveAccordion] = useState(0);

  return (
    <div className={`section ${styles.hs__section}`}>
      <div className={`container ${styles.hs__container}`}>
        <SectionHeader sectionData={solutionHeader} />
        <div className={styles.sol__content}>
          <div className={styles.sc__top}>
            {solutionsContent.map((data, i) => (
              <Accordion data={data} key={i} index={i} lenis={lenis} activeAccordion={activeAccordion} setActiveAccordion={setActiveAccordion} />
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
