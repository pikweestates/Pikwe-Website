"use client";

import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import SectionHeader from "../ReUsables/SectionHeader";
import { Icon } from "@iconify/react";
import ImagePlaceholder from "../ReUsables/ImagePlaceholder";
import IMAGE from "../../public/images/service.jpg";
import LinkButton from "../ReUsables/LinkButton";
import styles from "../../styles/HomePage/homesolutions.module.scss";

const HomeSolutions = () => {
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

  return (
    <div className={`section ${styles.hs__section}`}>
      <div className={`container ${styles.hs__container}`}>
        <SectionHeader sectionData={solutionHeader} />
        <div className={styles.sol__content}>
          <div className={styles.sc__top}>
            {solutionsContent.map((data, i) => (
              <div className={styles.accordion} key={i}>
                <div className={styles.acc__head}>
                  <div className={styles.acc__iconwrap}>
                    <Icon icon="ix:plus" />
                  </div>
                  <div className={styles.ah__right}>
                    <h2 className={styles.acc__h2}>{data.name}</h2>
                  </div>
                </div>
                <div className={styles.acc__body}>
                  <div className={styles.acb__content}>
                    <p className={styles.acb__p}>
                      {data.text}
                    </p>
                    <div className={styles.acb__image}>
                      <ImagePlaceholder src={data.image} alt={data.name} />
                    </div>
                  </div>
                </div>
              </div>
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
