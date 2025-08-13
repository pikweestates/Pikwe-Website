import React from 'react'
import ImagePlaceholder from '../ReUsables/ImagePlaceholder'
import IMAGE from "../../public/images/plot.jpg"
import styles from "../../styles/Portfolio/portfolioheader.module.scss"

const PortfolioHeader = () => {
  return (
    <div className={styles.ph__section}>
      <div className={`container ${styles.ph__container}`}>
        <div className={styles.ph__header}>
          <span className={styles.reference}>PE-1023</span>
          h
        </div>
        <div className={styles.ph__image}>
          <div className={styles.phi__wrapper}>
            <ImagePlaceholder src={IMAGE} alt='PIKWE IMAGE'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioHeader