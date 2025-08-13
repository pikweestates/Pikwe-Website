"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import styles from "../styles/Navigation/languageselector.module.scss"


export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const searchParams = useSearchParams();


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
    <div className={styles.ls__container}>
      <div className={styles.ls__wrapper}>
        <span>EN</span>
        <span></span>
      </div>
    </div>
  );
}
