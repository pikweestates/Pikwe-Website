import React from 'react'
import Image from 'next/image'
import LOGO from "../../public/svg/horigreen.svg"
import styles from "../../styles/Navigation/navbar.module.scss"

const Navbar = () => {
  return (
    <div className={styles.navbar__section}>
      <div className={`container ${styles.navbar__container}`}>
        <div className={styles.nav__left}>
          <div className={styles.logo__wrapper}>
            <Image fill quality={100} src={LOGO} alt=''/>
          </div>
        </div>
        <div className={styles.nav__center}>

        </div>
        <div className={styles.nav__right}>

        </div>
      </div>
    </div>
  )
}

export default Navbar