"use client";

import React from 'react'
import SectionHeader from '../ReUsables/SectionHeader'
import styles from "../../styles/HomePage/roadmap.module.scss"

const RoadMap = ({data}) => {
  
  return (
    <div className={`section ${styles.roadmap__section}`}>
      <div className={`container ${styles.roadmap__container}`}>
        <SectionHeader />
      </div>
    </div>
  )
}

export default RoadMap