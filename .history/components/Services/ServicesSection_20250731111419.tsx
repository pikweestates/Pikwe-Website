"use client";

import React from 'react'
import IMAGE from "../../public/images/service.jpg"
import LinkButton from '../ReUsables/LinkButton';
import { useTranslation } from 'react-i18next';
import styles from "../../styles/ReUsables/servicessection.module.scss"

const ServicesSection = () => {
  const {t, i18n} = useTranslation();
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

  return (
    <div className={`section ${styles.services__section}`}>
      <div className={`container ${styles.services__container}`}>
        <div className={styles.ss__top}>
          <span className={styles.ss__span}>{t("HomePage:solutionsmall")}</span>
          <h2 className={styles.ss__h2}>{t("HomePage:solutionh2")}</h2>
        </div>
        <div className={styles.ss__bottom}>
          {
            solutionsContent.map((data, i) => (
              <div className={styles.services__card} key={i}>
                <div className={styles.sc__left}>
                  <h3 cl></h3>
                </div>
                <div className={styles.sc__right}>

                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ServicesSection