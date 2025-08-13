import React from 'react'
import styles from "../../styles/Navigation/sidebar.module.scss"

const SideBar = () => {
  return (
    <div className={`section ${styles.side__section}`}>
      <div className={`container ${styles.side__container}`}>
        <div className={styles.side__nav}>
        <div className={styles.nav__right}>
            <LanguageSelector />
            <div className={styles.nav__menu}>
              <span>Menu</span>
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