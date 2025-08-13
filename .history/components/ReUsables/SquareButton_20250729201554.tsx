"use client";

import React from 'react'
import Link from 'next/link'
import { useTranslation } from "react-i18next";
import styles from "../../styles/ReUsables/squarebutton.module.scss"


interface contentInterface{
  href: string;
  text: string;
}

const SquareButton = ({status, content}: {status: string, content: contentInterface}) => {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  if (status === "light"){

    return (
      <Link href={`${currentLocale}/contact`} className={styles.button__container}>
        <span>{t("Navigation:buttontext")}</span>
      </Link>
    )
  } else if (status === "ivory"){
    return (
      <Link href={`${currentLocale}/contact`} className={styles.button__container}>
        <span>{t("Navigation:buttontext")}</span>
      </Link>
    )
  } else
}

export default SquareButton