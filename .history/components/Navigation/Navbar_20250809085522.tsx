"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import LOGO from "../../public/svg/horigreen.svg";
import NavLink from "./NavLink";
import SquareButton from "../ReUsables/SquareButton";
import LanguageSelector from "@/utils/LanguageSelector";
import styles from "../../styles/Navigation/navbar.module.scss";
import { div } from "framer-motion/client";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

  const nav_links = [
    {
      name: t("Navigation:aboutlink"),
      href: currentlocale=="en" ? "/en/about" : "/fr/a-propos",
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
      href: currentlocale=="en" ? "/en/gallery" : "/fr/galerie",
    },
    {
      name: "Blog",
      href: `/${currentlocale}/blog`,
    },
  ];

  const linkContent = {
    href: `/${currentlocale}/contact`,
    text: t("Navigation:buttontext")
  }

  return (
    <div className={styles.navbar__section}>
      <div className={`container ${styles.navbar__container}`}>
        <Link href={`/${currentlocale}`} className={styles.nav__left}>
          <div className={styles.logo__wrapper}>
            <Image fill quality={100} src={LOGO} alt="PIKWE LOGO" />
          </div>
        </Link>
        <div className={styles.nav__center}>
          <nav className={styles.navigation}>
            {nav_links.map((link, i) => (
              div
              <NavLink data={link} navbar={true} key={i} />
            ))}
          </nav>
        </div>
        <div className={styles.nav__right}>
          <LanguageSelector/>
          <SquareButton status="light" content={linkContent} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
