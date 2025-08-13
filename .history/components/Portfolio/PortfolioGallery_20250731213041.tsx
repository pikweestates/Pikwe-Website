import React from 'react'
import styles from "../../styles/Portfolio/portfoliogallery.module.scss"

const PortfolioGallery = () => {
  const images = [
    {
      name: "Bonaberi Investment Lot"
    }
  ]
  return (
    <div className={styles.portfolio__gallery}>
      <div className={`container ${styles.pg__container}`}>

      </div>
    </div>
  )
}

export default PortfolioGallery