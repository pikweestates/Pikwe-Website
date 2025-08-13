import React from 'react'
import IMAGE from "../../public/images/plot.jpg"
import ImagePlaceholder from '../ReUsables/ImagePlaceholder'
import SectionHeader from '../ReUsables/SectionHeader'
import styles from "../../styles/ReUsables/blogheader.module.scss"

const BlogHeader = () => {
  const categories = [
    "Market Insights", "Legal Guidance"
  ]
  const sectionData = {
    small: "Description",
    h2: t("Portfolio:detailed"),
    text: "Bonaberi Investment Plot sits adjacent to Douala’s main commercial corridor, footsteps from lively markets, banks, and eateries. Urban restoration projects nearby promise increased foot traffic and rising property values. The site enjoys easy access via public transport, with bus stops and taxi stands within minutes. Neighbors include emerging coworking hubs and artisanal workshops, fostering a dynamic community atmosphere. Ideal for mixed-use developments aiming to capitalize on Bonaberi’s revitalization momentum."
  }

  return (
    <div className={styles.bh__section}>
      <div className={`container ${styles.bh__container}`}>
        <div className={styles.bh__top}>
          <span className={styles.bh__date}>July 22, 2025</span>
          <h2 className={styles.bh__h2}>Cameroon Real Estate Market: 2025 Outlook</h2>
          <div className={styles.bh__categories}>
            {
              categories.map((data, i) => (
                <span className={styles.category} key={i}>{data}</span>
              ))
            }
          </div>
        </div>
        <div className={styles.bh__bottom}>
            <SectionHeader />
        </div>
      </div>
    </div>
  )
}

export default BlogHeader