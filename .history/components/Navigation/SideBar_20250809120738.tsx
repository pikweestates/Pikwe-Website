"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import LOGO from "../../public/svg/logomint.svg";
import Image from "next/image";
import LanguageSelector from "@/utils/LanguageSelector";
import SquareButton from "../ReUsables/SquareButton";
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

  const smData: {
    name: string;
    data: {
      name: string;
      href?: string;
    }[];
  }[] = [
    {
      name: "Contacts",
      data: [
        {
          name: "(+237) 679-703-013",
          href: "tel:+237679703013",
        },
        {
          name: "pikweestates@gmail.com",
          href: "mailto:pikweestates@gmail.com",
        },
      ],
    },

    {
      name: "Location",
      data: [
        {
          name: "Yaounde, Simbock",
        },
      ],
    },
  ];

  const linkContent = {
    href: `/${currentlocale}/contact`,
    text: t("Navigation:buttontext"),
  };

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
            <LanguageSelector status="sidebar" />
            <div className={styles.nav__menu}>
              <span>Close</span>
            </div>
          </div>
        </div>
        <div className={styles.side__mid}>
          <div className={styles.sm__top}>
            {nav_links.map((data, i) => (
              <Link key={i} className={styles.sl__link} href={data.href}>
                {data.name}
              </Link>
            ))}
          </div>
          <div className={styles.sm__bottom}>
            {smData.map((data, i) => (
              <div className={styles.sm__div} key={i}>
                <span className={styles.sm__span}>{data.name}</span>
                <div className={styles.smb__b}>
                  {data.data.map((content, i) =>
                    content.href ? (
                      <Link key={i} href={content.href}>
                        {content.name}
                      </Link>
                    ) : (
                      <span key={i}>{content.name}</span>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.side__bottom}>
          <SquareButton status="light" content={linkContent} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
