import React from 'react'
import SectionHeader from '../ReUsables/SectionHeader'
import styles from "../../styles/HomePage/homeportfolio.module.scss"

const HomePortfolio = () => {
    //Translations
    const { t} = useTranslation();
  return (
    <div className={`section ${styles.hp__section}`}>
      <div className={`container ${styles.hp__container}`}>
        <SectionHeader />
      </div>
    </div>
  )
}

export default HomePortfolio