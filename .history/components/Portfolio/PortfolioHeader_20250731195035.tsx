import React from 'react'
import ImagePlaceholder from '../ReUsables/ImagePlaceholder'
import IMAGE from "../../public/images/"
import styles from "../../styles/Portfolio/portfolioheader.module.scss"

const PortfolioHeader = () => {
  return (
    <div className={styles.ph__section}>
      <div className={`container ${styles.ph__container}`}>
        <div className={styles.ph__header}>

        </div>
        <div className={styles.ph__image}>

        </div>
      </div>
    </div>
  )
}

export default PortfolioHeader