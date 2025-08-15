"use client";

import React, {useState, useEffect, useRef} from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useTranslation } from "react-i18next";
import LOGO from "../../public/svg/horigreen.svg";
import SideBar from "./SideBar";
import NavLink from "./NavLink";
import SquareButton from "../ReUsables/SquareButton";
import { AnimatePresence } from "framer-motion";
import LanguageSelector from "@/utils/LanguageSelector";
import styles from "../../styles/Navigation/navbar.module.scss";

const Navbar = ({setLocalState, animationFinished}: {setLocalState: React.Dispatch<React.SetStateAction<string>>, animationFinished: boolean}) => {
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

  const navbar = useRef<HTMLHeadElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const navigation = navbar.current;
    if (navigation) {
      // Initially set navigation to visible with a transparent background.
      gsap.set(navigation, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 102%, 0% 102%)",
      });

      let lastScroll = 0;

      ScrollTrigger.create({
        start: "top+=600 top",
        end: "bottom bottom",
        scrub: 0.3,
        onUpdate: (self) => {
          // If scrolled less than 700, force nav to be visible and transparent.
          if (self.scroll() < 600) {
            gsap.to(navigation, {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 102%, 0% 102%)",
              duration: 1,
            });
          } else {
            // Then animate the translateY based on scroll direction.
            if (self.direction === 1 && self.scroll() > lastScroll) {
              // Scrolling down: hide nav.
              gsap.to(navigation, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                duration: 1,
              });
            } else if (self.direction === -1 && self.scroll() < lastScroll) {
              // Scrolling up: show nav.
              gsap.to(navigation, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 102%, 0% 102%)",
                duration: 1,
              });
            }
          }
          lastScroll = self.scroll();
        },
      });
    }
  });

  return (
    <>
      <header className={styles.navbar__section} ref={navbar} style={{opacity: animationFinished ? 1 : 0}}>
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
      </header>
      <AnimatePresence mode="wait">
        {activeSide && (
          <SideBar activeSide={activeSide} setActiveSide={setActiveSide} setLocalState={setLocalState}/>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
