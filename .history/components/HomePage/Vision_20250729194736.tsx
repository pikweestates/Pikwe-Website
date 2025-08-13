import React from 'react'
import ImagePlaceholder from '../ReUsables/ImagePlaceholder'
import IMAGE from "../../public/images/homeimage.jpg"
import styles from "../../styles/HomePage/vision.module.scss"

const Vision = () => {
  return (
    <div className={styles.vision__section}>
      <div className={styles.vision__image}>
        <ImagePlaceholder/?
      </div>
      <div className={styles.vision__content}>

      </div>
    </div>
  )
}

export default Vision