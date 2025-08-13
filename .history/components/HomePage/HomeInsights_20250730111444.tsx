import React from 'react'
import { useTranslation } from "react-i18next";
import SectionHeader from "../ReUsables/SectionHeader";
import IMAGE from "../../public/images/plot.jpg";
import LinkButton from "../ReUsables/LinkButton";
import styles from "../../styles/HomePage/homeinsights.module.scss"

const HomeInsights = () => {
  return (
    <div className={`section ${styles.hi__section}`}>
      <div className={`container ${styles.hi__container}`}>
      <SectionHeader sectionData={portHeader} />
        <div className={}>

        </div>
      </div>
    </div>
  )
}

export default HomeInsights