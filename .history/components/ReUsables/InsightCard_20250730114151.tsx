import React from 'react'
import ImagePlaceholder from './ImagePlaceholder'
import IMAGE from "../../public/images/plot.jpg"
import Link from 'next/link'
import styles from "../../styles/ReUsables/insightcard.module.scss"

const InsightCard = () => {
  return (
    <Link href={""} className={styles.ic__wrapper}>
      <div className={styles.ic__top}>
        <div className={styles.ic__image}>
          <ImagePlaceholder src={IMAGE} alt=''/>
        </div>
      </div>
      <div className={styles.ic__bottom}>

      </div>
    </Link>
  )
}

export default InsightCard