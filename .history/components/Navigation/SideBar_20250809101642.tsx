"use client";

import React from 'react'
import { useTranslation } from 'react-i18next'
import Link from 'next/link';
import LOGO from "../../public/svg/horigreen.svg";
import Image from 'next/image'
import LanguageSelector from '@/utils/LanguageSelector'
import styles from "../../styles/Navigation/sidebar.module.scss"

const SideBar = () => {
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;
  return (
    <div className={`section ${styles.side__section}`}>
      <div className={`container ${styles.side__container}`}>
        <div className={styles.side__nav}>
        <Link href={`/${currentlocale}`} className={styles.nav__left}>
            <div className={styles.logo__wrapper}>
              <Image fill quality={100} src={LOGO} alt="PIKWE LOGO" />
            </div>
          </Link>
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