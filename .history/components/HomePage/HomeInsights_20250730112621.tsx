import React from "react";
import { useTranslation } from "react-i18next";
import SectionHeader from "../ReUsables/SectionHeader";
import IMAGE from "../../public/images/plot.jpg";
import LinkButton from "../ReUsables/LinkButton";
import styles from "../../styles/HomePage/homeinsights.module.scss";

const HomeInsights = () => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

  //Portfolio Header
  const Header = {
    small: t("HomePage:insightsmall"),
    h2: t("HomePage:insighth2"),
    text: t("HomePage:insighttext"),
  };

  const portLink = {
    href: `${currentlocale}/portfolio`,
    text: t("HomePage:portlink"),
  };

  return (
    <div className={`section ${styles.hi__section}`}>
      <div className={`container ${styles.hi__container}`}>
        <SectionHeader sectionData={portHeader} />
        <div className={styles.hi__wrapper}>

        </div>
        <LinkButton linkData={portLink} />
      </div>
    </div>
  );
};

export default HomeInsights;
