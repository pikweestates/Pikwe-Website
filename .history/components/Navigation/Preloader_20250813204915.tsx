import React from 'react'
import Image from 'next/image'
import IMAGE from "."
import styles from "../../styles/Navigation/preloader.module.scss"

const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.preloader__wrapper}>

      </div>
    </div>
  )
}

export default Preloader