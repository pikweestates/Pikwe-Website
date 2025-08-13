"use client";

import React from 'react'
import Link from 'next/link'
import { useTranslation } from "react-i18next";
import styles from "../../styles/ReUsables/squarebutton.module.scss"

const SquareButton = () => {
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;
  return (
    <Link href="/contact" className={styles.button__container}>
      <span>{}</span>
    </Link>
  )
}

export default SquareButton