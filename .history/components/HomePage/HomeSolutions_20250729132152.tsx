import React from 'react'
import SectionHeader from '../ReUsables/SectionHeader'
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