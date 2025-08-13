import React from 'react'
import ImagePlaceholder from './ImagePlaceholder'
import IMAGE from "../../public/images/plot.jpg"
import { StaticImageData } from 'next/image'
import Link from 'next/link'
import styles from "../../styles/ReUsables/insightcard.module.scss"


interface InsightInterface {
  name: string,
      image: IMAGE,
      categories: ["Market Insights"],
      date: "July 18th, 2025",
      link: `${currentlocale}/blog/cameroon-land-market`,
}


const InsightCard = ({data}: {data: InsightInterface}) => {
  return (
    <Link href={""} className={styles.ic__wrapper}>
      <div className={styles.ic__top}>
        <div className={styles.ic__image}>
          <ImagePlaceholder src={IMAGE} alt={""}/>
        </div>
        <div className={styles.categories}>
          <span className={styles.category}>Market Insights</span>
          <span className={styles.category}>Legal Guidance</span>
        </div>
      </div>
      <div className={styles.ic__bottom}>
        <p className={styles.ic__p}>Cameroon Land Market Trends</p>
        <span className={styles.ic__date}>July, 17th 2025</span>
      </div>
    </Link>
  )
}

export default InsightCard