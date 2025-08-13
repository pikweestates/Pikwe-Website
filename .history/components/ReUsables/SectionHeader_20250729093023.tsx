import React from 'react'
import styles from "../../styles/ReUsables/sectionheader.module.scss"

const SectionHeader = () => {
  return (
    <div className={styles.sh__wrapper}>
      <div className={styles.sh__left}>
        <span className={styles.sh__small}>

        </span>
        <h2></h2>
      </div>
      <div className={styles.sh__right}>

      </div>
    </div>
  )
}

export default SectionHeader