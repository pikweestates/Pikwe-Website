"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import styles from "../styles/Navigation/languageselector.module.scss";

export default function LanguageSelector({
  status,
  setActiveSide,
  setLocalState,
}: {
  status: string;
  setActiveSide: React.Dispatch<React.SetStateAction<boolean>>;
  setLocalState: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const searchParams = useSearchParams();

  const [activeSelector, setActiveSelector] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  //Set Active selector to false when clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setActiveSelector(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

  const handleChange = (newLocale: string) => {
    //Managing Local State
    setLocalState("Translating State");
    
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

    // Check if the current page is 'projets' or 'projects'
    if (
      newPathname.includes("/confidentialite") ||
      newPathname.includes("/privacy")
    ) {
      // Adjust the pathname based on the new locale
      newPathname =
        newLocale === "fr"
          ? newPathname.replace("/privacy", "/confidentialite")
          : newPathname.replace("/confidentialite", "/privacy");
    }

    router.push(newPathname);
  };

  return (
    <div
      className={styles.ls__container}
      ref={containerRef}
      onClick={() => setActiveSelector((v) => !v)}
    >
      <div className={styles.ls__wrapper}>
        <span
          className={`${styles.selected} ${status === "sidebar" ? styles.side : ""}`}
        >
          {currentLocale.toUpperCase()}
        </span>
        <span
          className={`${styles.icon} ${activeSelector ? styles.active__icon : ""} `}
        >
          <Icon
            icon="fa:angle-down"
            className={`${status === "sidebar" ? styles.side : ""}`}
          />
        </span>
      </div>
      <div
        className={`${styles.selector} ${activeSelector ? styles.active__selector : ""}`}
      >
        <div
          className={`${styles.s__item} ${currentLocale === "en" ? styles.active__select : ""}`}
          onClick={() => {
            handleChange("en");
            setActiveSide(false);
          }}
        >
          <span>EN</span>
        </div>
        <div
          className={`${styles.s__item} ${styles.s__item2} ${currentLocale === "fr" ? styles.active__select : ""}`}
          onClick={() => {
            handleChange("fr");
            setActiveSide(false);
          }}
        >
          <span>FR</span>
        </div>
      </div>
    </div>
  );
}
