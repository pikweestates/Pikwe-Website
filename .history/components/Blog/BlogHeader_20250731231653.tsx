import React from 'react'
import IMAGE from "../../public/images/plot.jpg"
import ImagePlaceholder from '../ReUsables/ImagePlaceholder'
import styles from "../../styles/ReUsables/blogheader.module.scss"

const BlogHeader = () => {
  const categories = [
    "Market Insights", "Legal Guidance"
  ]
  return (
    <div className={styles.bh__section}>
      <div className={styles.bh__container}>
        <div className={styles.bh__top}>
          <span className={styles.bh__date}>July 22, 2025</span>
          <h2 className={styles.bh__h2}>Cameroon Real Estate Market: 2025 Outlook</h2>
          <div className={styles.bh__categories}>
            {
              categories.map(() )
            }
          </div>
        </div>
        <div className={styles.bh__bottom}>

        </div>
      </div>
    </div>
  )
}

export default BlogHeader