import React from "react";
import { useTranslation } from "react-i18next";
import SectionHeader from "../ReUsables/SectionHeader";
import Image from "next/image";
import IMAGE from "../../p"
import LinkButton from "../ReUsables/LinkButton";
import styles from "../../styles/HomePage/homeportfolio.module.scss";

const HomePortfolio = () => {
  //Translations
  const { t } = useTranslation();

  //Portfolio Header
  const portHeader = {
    small: t("HomePage:portsmall"),
    h2: t("HomePage:porth2"),
    text: t("HomePage:porttext"),
  };

  return (
    <div className={`section ${styles.hp__section}`}>
      <div className={`container ${styles.hp__container}`}>
        <SectionHeader sectionData={portHeader}/>
        <div className={styles.portfolio__wrapper}>
          <div className={styles.portfolio__container}>
            <div className={styles.pc__top}>
              <div className={styles.pc__image}>

              </div>
            </div>
            <div className={styles.pc__bottom}>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePortfolio;
