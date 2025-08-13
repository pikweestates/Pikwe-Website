import React from 'react'
import ImagePlaceholder from '../ReUsables/ImagePlaceholder'
import IMAGE from "../../public/images/ceo.jpg"
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
          <div className={styles.tc__card}>
            <div className={styles.card__image}>
              <ImagePlaceholder src={IMAGE} alt='PIKWE ESTATES' />
            </div>
            <div className={styles.card__bottom}>
              <h3 className={styles.name}>Ndichengoh Rahimu</h3>
              <span className={styles.position}></span>
              <p>Rahimu, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamSection