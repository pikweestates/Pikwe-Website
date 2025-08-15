"use client";

import React from "react";
import IMAGE from "../../public/images/service.jpg";
import LinkButton from "../ReUsables/LinkButton";
import Copy from "../ReUsables/Copy";
import ImagePlaceholder from "../ReUsables/ImagePlaceholder";
import { useTranslation } from "react-i18next";
import styles from "../../styles/ReUsables/servicessection.module.scss";

const ServicesSection = () => {
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

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
      text: t("HomePage:stextthree"),
      image: IMAGE,
    },
  ];

  const linkData = {
    href: `/${currentlocale}/contact`,
    text: t("HomePage:buttontext"),
  };

  return (
    <div className={`section ${styles.services__section}`}>
      <div className={`container ${styles.services__container}`}>
        <div className={styles.ss__top}>
          <Copy>
            <span className={styles.ss__span}>
              {t("HomePage:solutionsmall")}
            </span>
          </Copy>
          <Copy>
            <h2 className={styles.ss__h2}>{t("HomePage:solutionh2")}</h2>
          </Copy>
        </div>
        <div className={styles.ss__bottom}>
          {solutionsContent.map((data, i) => (
            <div className={styles.services__card} key={i}>
              <div className={styles.sc__left}>
                <div className={styles.sc__image}>
                  <ImagePlaceholder src={data.image} alt={data.name} />
                </div>
              </div>
              <div className={styles.sc__right}>
                <div className={styles.scr__content}>
                  <Copy>
                    <h3 className={styles.sc__h3}>{data.name}</h3>
                  </Copy>
                  <div className={styles.scr__bottom}>
                    {/* <Copy> */}
                      <p className={styles.sc__p}>{data.text}</p>
                    {/* </Copy> */}
                    <LinkButton linkData={linkData} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
