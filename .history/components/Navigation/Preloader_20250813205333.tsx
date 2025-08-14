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
            <div className={styles.slogan}>
              <p></p>
            </div>
          </div>
          <div className={styles.pre__image}>
            <Image fill quality={100} alt="Pikwe Estates" priority src={IMAGE}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preloader