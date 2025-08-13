import React from 'react'
import styles from "../../styles/ReUsables/servicessection.module.scss"

const ServicesSection = () => {
  return (
    <div className={`section ${styles.services__section}`}>
      <div className={`container ${styles.services__container}`}>
        <div className={styles.ss__top}>
          <span className={styles.ss__span}></span>
          
        </div>
        <div className={styles.ss__bottom}>

        </div>
      </div>
    </div>
  )
}

export default ServicesSection