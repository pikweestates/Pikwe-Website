"use client";

import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import LOGO from "../../public/svg/horigreen.svg";
import SideBar from "./SideBar";
import NavLink from "./NavLink";
import SquareButton from "../ReUsables/SquareButton";
import { AnimatePresence } from "framer-motion";
import LanguageSelector from "@/utils/LanguageSelector";
import styles from "../../styles/Navigation/navbar.module.scss";

const Navbar = ({setLocalState, animationFinished}: {setLocalState: React.Dispatch<React.SetStateAction<string>>, animationFinished: boo}) => {
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

  const linkContent = {
    href: `/${currentlocale}/contact`,
    text: t("Navigation:buttontext"),
  };

  const [activeSide, setActiveSide] = useState(false);

  return (
    <>
      <div className={styles.navbar__section} style={{opacity: animati}}>
        <div className={`container ${styles.navbar__container}`}>
          <Link href={`/${currentlocale}`} className={styles.nav__left}>
            <div className={styles.logo__wrapper}>
              <Image fill quality={100} src={LOGO} alt="PIKWE LOGO" />
            </div>
          </Link>
          <div className={styles.nav__center}>
            <nav className={styles.navigation}>
              {nav_links.map((link, i) => (
                <div className={styles.nav__i} key={i}>
                  <NavLink data={link} navbar={true} key={i} />
                </div>
              ))}
            </nav>
          </div>
          <div className={styles.nav__right}>
            <LanguageSelector status="navbar" setActiveSide={setActiveSide} setLocalState={setLocalState}/>
            <div className={styles.nav__sb}>
              <SquareButton status="light" content={linkContent} />
            </div>
            <div className={styles.nav__menu} onClick={() => setActiveSide(true)}>
              <span>Menu</span>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {activeSide && (
          <SideBar activeSide={activeSide} setActiveSide={setActiveSide} setLocalState={setLocalState}/>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
