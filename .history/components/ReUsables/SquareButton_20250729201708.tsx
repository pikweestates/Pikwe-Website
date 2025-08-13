"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import styles from "../../styles/ReUsables/squarebutton.module.scss";

interface contentInterface {
  href: string;
  text: string;
}

const SquareButton = ({
  status,
  content,
}: {
  status: string;
  content: contentInterface;
}) => {
  if (status === "light") {
    return (
      <Link href={content.href} className={styles.button__container}>
        <span>{content.text}</span>
      </Link>
    );
  } else if (status === "ivory") {
    return (
      <Link href={content.href} className={styles.button__container2}>
        <span>{content.text}</span>
      </Link>
    );
  } else {
    return (
      <Link href={content.href} className={styles.button__container3}>
        <span>{content.text}</span>
      </Link>
    );
  }
};

export default SquareButton;
