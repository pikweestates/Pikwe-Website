"use client";

import React, {useState} from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import styles from "../styles/Navigation/languageselector.module.scss";

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const searchParams = useSearchParams();

  const [activeSelector, setActiveSelector] = useState(false);

  const handleChange = (newLocale: string) => {
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "; expires=" + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    let newPathname = currentPathname.replace(
      new RegExp(`^/(${["en", "fr"].join("|")})`),
      `/${newLocale}`
    );

    // Check if the current page is 'projets' or 'projects'
    if (newPathname.includes("/a-propos") || newPathname.includes("/about")) {
      // Adjust the pathname based on the new locale
      newPathname =
        newLocale === "fr"
          ? newPathname.replace("/about", "/a-propos")
          : newPathname.replace("/a-propos", "/about");
    }

    // Check if the current page is 'projets' or 'projects'
    if (newPathname.includes("/galerie") || newPathname.includes("/gallery")) {
      // Adjust the pathname based on the new locale
      newPathname =
        newLocale === "fr"
          ? newPathname.replace("/gallery", "/galerie")
          : newPathname.replace("/galerie", "/gallery");
    }

    router.push(newPathname);
  };

  return (
    <div className={styles.ls__container} onClick={}>
      <div className={styles.ls__wrapper}>
        <span className={styles.selected}>{currentLocale.toUpperCase()}</span>
        <span className={styles.icon}>
          <Icon icon="fa:angle-down" />
        </span>
      </div>
      <div className={styles.selector}>
        <div
          className={`${styles.s__item} ${currentLocale==="en" ? styles.active__select : ""}`}
          onClick={() => {
            handleChange("en");
          }}
        >
          <span>EN</span>
        </div>
        <div
          className={`${styles.s__item} ${currentLocale==="fr" ? styles.active__select : ""}`}
          onClick={() => {
            handleChange("fr");
          }}
        >
          <span>FR</span>
        </div>
      </div>
    </div>
  );
}
