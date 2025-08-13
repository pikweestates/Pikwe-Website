import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LOGO from "../../public/svg/horigreen.svg"
import styles from "../../styles/Navigation/navbar.module.scss"

const Navbar = () => {
  const nav_links = [
    {
      name: "About",
      link: "/about"
    },
    {
      name: "Portfolio",
      link: "/portfolio"
    },
    {
      name: "Services",
      link: "/about"
    },
    {
      name: "Gallery",
      link: "/about"
    },
    {
      name: "Blog",
      link: "/about"
    }
  ]
  return (
    <div className={styles.navbar__section}>
      <div className={`container ${styles.navbar__container}`}>
        <Link href="/" className={styles.nav__left}>
          <div className={styles.logo__wrapper}>
            <Image fill quality={100} src={LOGO} alt='PIKWE LOGO'/>
          </div>
        </Link>
        <div className={styles.nav__center}>
          <nav className={styles.navigation}>


          </nav>
        </div>
        <div className={styles.nav__right}>

        </div>
      </div>
    </div>
  )
}

export default Navbar