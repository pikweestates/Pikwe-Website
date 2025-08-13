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

  return (
    <div className={`section ${styles.hs__section}`}>
      <div className={`container ${styles.hs__container}`}>

      </div>
    </div>
  )
}

export default HomeSolutions