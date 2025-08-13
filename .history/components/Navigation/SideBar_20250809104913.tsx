"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import LOGO from "../../public/svg/logomint.svg";
import Image from "next/image";
import LanguageSelector from "@/utils/LanguageSelector";
import styles from "../../styles/Navigation/sidebar.module.scss";

const SideBar = () => {
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

  const nav_links = [
    {
      name: t("Navigation:aboutlink"),
      href: currentlocale == "en" ? "/en/about" : "/fr/a-propos",
    },
    {
      name: "Portfolio",
      href: `/${currentlocale}/portfolio`,
    },
    {
      name: "Services",
      href: `/${currentlocale}/services`,
    },
    {
      name: t("Navigation:gallerylink"),
      href: currentlocale == "en" ? "/en/gallery" : "/fr/galerie",
    },
    {
      name: "Blog",
      href: `/${currentlocale}/blog`,
    },
  ];

  return (
    <div className={styles.side__section}>
      <div className={`container ${styles.side__container}`}>
        <div className={styles.side__nav}>
          <Link href={`/${currentlocale}`} className={styles.side__left}>
            <div className={styles.logo__wrapper}>
              <Image fill quality={100} src={LOGO} alt="PIKWE LOGO" />
            </div>
          </Link>
          <div className={styles.side__right}>
            <LanguageSelector status="sidebar"/>
            <div className={styles.nav__menu}>
              <span>Close</span>
            </div>
          </div>
        </div>
        <div className={styles.side__mid}>
          <div className={styles.sm__top}>

          </div>
          <div className={styles.sm__bottom}>

          </div>
        </div>
        <div className={styles.side__bottom}></div>
      </div>
    </div>
  );
};

export default SideBar;
