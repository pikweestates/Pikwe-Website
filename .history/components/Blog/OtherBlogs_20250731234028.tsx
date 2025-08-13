import React from 'react'
import styles from "../../styles/ReUsables/otherblogs.module.scss"

const OtherBlogs = () => {
  return (
    <div className={`section ${styles.ob__section}`}>
      <div className={`container ${styles.ob__container}`}>
        <div className={styles.ob__top}>
          <span className={styles.}>Our Blog</span>
        </div>
      </div>
    </div>
  )
}

export default OtherBlogs