import React from 'react'
import SectionHeader from '../ReUsables/SectionHeader'
import styles from "../../styles/HomePage/roadmap.module.scss"

const RoadMap = () => {
  const sectionData = {
    small: 
  }
  return (
    <div className={`section ${styles.roadmap__section}`}>
      <div className={`container ${styles.roadmap__container}`}>
        <SectionHeader />
      </div>
    </div>
  )
}

export default RoadMap