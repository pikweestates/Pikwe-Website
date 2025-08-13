import React from "react";
import { useTranslation } from "react-i18next";
import SectionHeader from "../ReUsables/SectionHeader";
import LinkButton from "../ReUsables/LinkButton";
import styles from "../../styles/HomePage/whychoose.module.scss";

const WhyChoose = () => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

  //Portfolio Header
  const whyHeader = {
    small: t("HomePage:portsmall"),
    h2: t("HomePage:porth2"),
    text: t("HomePage:porttext"),
  };

  const whyLink = {
    href: `${currentlocale}/portfolio`,
    text: t("HomePage:portlink"),
  };

  return (
    <div className={`section ${styles.wc__section}`}>
      <div className={`container ${styles.wc__container}`}></div>
    </div>
  );
};

export default WhyChoose;
