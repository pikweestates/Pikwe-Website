import React from 'react'
import NavLink from './NavLink'
import Link from 'next/link'
import ImagePlaceholder from '../ReUsables/ImagePlaceholder'
import IMAGE from "../../"
import styles from "../../styles/Navigation/footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer__section}>
      <div className={`container ${styles.footer__container}`}>
        <div className={styles.fc__top}>

        </div>
        <div className={styles.fc__bottom}>

        </div>
      </div>
    </footer>
  )
}

export default Footer