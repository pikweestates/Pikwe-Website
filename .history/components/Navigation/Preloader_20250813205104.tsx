import React from 'react'
import Image from 'next/image'
import IMAGE from "../../public/svg/logomint.svg"
import styles from "../../styles/Navigation/preloader.module.scss"

const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.preloader__wrapper}>
        <div className={styles.loader}>

        </div>
        <div className={styles.pre__bottom}>
          <div className={styles.pre__content}>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Preloader