import React from 'react'
import styles from "../../styles/AboutPage/teamsection.module.scss"

const TeamSection = () => {
  return (
    <div className={`section ${styles.team__section}`}>
      <div className={`container ${styles.team__container}`}>
        <div className={styles.tc__top}>
          <span className={styles.tc__span}>MEET OUR TEAM</span>
          <h2 className={styles.tc__h2}>Experts committed to helping you</h2>
        </div>
        <div className={styles.tc__bottom}>
          <div className={styles.tc__ca}>

          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamSection