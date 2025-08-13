import React from "react";
import { useTranslation } from "react-i18next";
import SectionHeader from "../ReUsables/SectionHeader";
import LinkButton from "../ReUsables/LinkButton";
import styles from "../../styles/HomePage/homeportfolio.module.scss";

const HomePortfolio = () => {
  //Translations
  const { t } = useTranslation();

  //Portfolio Header
  const roadHeader = {
    small: t("HomePage:portsmall"),
    h2: t("HomePage:porth2"),
    text: t("HomePage:roadtext"),
  };

  return (
    <div className={`section ${styles.hp__section}`}>
      <div className={`container ${styles.hp__container}`}>
        <SectionHeader />
      </div>
    </div>
  );
};

export default HomePortfolio;
