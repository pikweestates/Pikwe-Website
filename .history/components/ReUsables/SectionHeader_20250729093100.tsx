import React from 'react'
import styles from "../../styles/ReUsables/sectionheader.module.scss"

const SectionHeader = () => {
  return (
    <div className={styles.sh__wrapper}>
      <div className={styles.sh__left}>
        <span className={styles.sh__small}>
        Process Overview
        </span>
        <h2 className={styles.sh__h2}></h2>
      </div>
      <div className={styles.sh__right}>
        <p className={styles.sh__p}></p>
      </div>
    </div>
  )
}

export default SectionHeader