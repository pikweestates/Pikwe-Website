"use client";

import React from 'react'
import Link from 'next/link'
import { useTranslation } from "react-i18next";
import styles from "../../styles/ReUsables/squarebutton.module.scss"

const SquareButton = ({status, content}: {mainColor}) => {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  return (
    <Link href={`${currentLocale}/contact`} className={styles.button__container}>
      <span>{t("Navigation:buttontext")}</span>
    </Link>
  )
}

export default SquareButton