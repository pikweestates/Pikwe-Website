import React from 'react'
import ImagePlaceholder from '../ReUsables/ImagePlaceholder'
import IMAGE from "../../public/images/plot.jpg"
import styles from "../../styles/Portfolio/portfoliogallery.module.scss"

const PortfolioGallery = () => {
  const images = [
    {
      name: "Bonaberi Investment Lot",
      image: IMAGE
    },
    {
      name: "Bonaberi Investment Lot",
      image: IMAGE
    },
    {
      name: "Bonaberi Investment Lot",
      image: IMAGE
    },
    {
      name: "Bonaberi Investment Lot",
      image: IMAGE
    },
    {
      name: "Bonaberi Investment Lot",
      image: IMAGE
    },
    {
      name: "Bonaberi Investment Lot",
      image: IMAGE
    }
  ]
  return (
    <div className={styles.portfolio__gallery}>
      <div className={`container ${styles.pg__container}`}>
        <div className={styles.pg__wrapper}>
          {
            images[Symbol],a
          }
        </div>
      </div>
    </div>
  )
}

export default PortfolioGallery