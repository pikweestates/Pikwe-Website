import React from 'react'
import { useTranslation } from "react-i18next";
import SectionHeader from "../ReUsables/SectionHeader";
import ImagePlaceholder from "../ReUsables/ImagePlaceholder";
import IMAGE from "../../public/images/plot.jpg";
import LinkButton from "../ReUsables/LinkButton";
import styles from "../../styles/HomePage/homesolutions.module.scss"

const HomeSolutions = () => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

  //Portfolio Header
  const solutionHeader = {
    small: t("HomePage:portsmall"),
    h2: t("HomePage:porth2"),
    text: t("HomePage:porttext"),
  };

  const solutionLink = {
    href: `${currentlocale}/portfolio`,
    text: t("HomePage:portlink"),
  };

  return (
    <div className={`section ${styles.hs__section}`}>
      <div className={`container ${styles.hs__container}`}>
      <SectionHeader sectionData={solutionHeader} />
      </div>
    </div>
  )
}

export default HomeSolutions