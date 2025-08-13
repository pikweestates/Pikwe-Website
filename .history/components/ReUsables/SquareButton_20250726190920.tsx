"use client";

import React from 'react'
import Link from 'next/link'
import styles from "../../styles/ReUsables/squarebutton.module.scss"

const SquareButton = () => {
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;
  return (
    <Link href="/contact" className={styles.button__container}>
      <span>Speak with a consultant</span>
    </Link>
  )
}

export default SquareButton