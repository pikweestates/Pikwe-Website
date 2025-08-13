import React from 'react'
import styles from "../../styles/AboutPage/teamsection.module.scss"

const TeamSection = () => {
  return (
    <div className={`section ${styles.team__section}`}>
      <div className={`container ${styles.team__container}`}>
        <div className={styles.tc__top}>
          <span className={styles.tc__span}></span>
          <span className={styles.tc__span}></span>
        </div>
        <div className={styles.tc__bottom}>

        </div>
      </div>
    </div>
  )
}

export default TeamSection