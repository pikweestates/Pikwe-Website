import React from 'react'
import Image from 'next/image'
import LanguageSelector from '@/utils/LanguageSelector'
import styles from "../../styles/Navigation/sidebar.module.scss"

const SideBar = () => {
  return (
    <div className={`section ${styles.side__section}`}>
      <div className={`container ${styles.side__container}`}>
        <div className={styles.side__nav}>
          <div className={styles.side__logo}>

          </div>
        <div className={styles.side__right}>
            <LanguageSelector />
            <div className={styles.nav__menu}>
              <span>Close</span>
            </div>
          </div>
        </div>
        <div className={styles.side__mid}>

        </div>
        <div className={styles.side__bottom}>

        </div>
      </div>
    </div>
  )
}

export default SideBar