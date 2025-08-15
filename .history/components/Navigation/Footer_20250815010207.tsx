"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useScroll, motion, useTransform } from "framer-motion";
import NavLink from "./NavLink";
import Copy from "../ReUsables/Copy";
import Link from "next/link";
import ImagePlaceholder from "../ReUsables/ImagePlaceholder";
import Image from "next/image";
import IMAGE from "../../public/svg/wordmark.svg";
import IMAGE2 from "../../public/images/homeimage.jpg";
import BetterMarque from "./BetterMarque";
import styles from "../../styles/Navigation/footer.module.scss";

const Footer = () => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

  const navLinks = [
    {
      name: t("Navigation:homelink"),
      href: `/${currentlocale}`,
    },
    {
      name: t("Navigation:aboutlink"),
      href:
        currentlocale === "en"
          ? `/${currentlocale}/about`
          : `/${currentlocale}/a-propos`,
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
      href:
        currentlocale === "en"
          ? `/${currentlocale}/gallery`
          : `/${currentlocale}/galerie`,
    },
    {
      name: "Blog",
      href: `/${currentlocale}/blog`,
    },
  ];

  //Parallax
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "start start"],
  });

  //Handle Resizing Y value
  const [transform, setTransform] = useState(-80);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined" && window.innerWidth < 540) {
        setTransform(-40);
      } else if (typeof window !== "undefined" && window.innerWidth < 750) {
        setTransform(-60);
      } else {
        setTransform(-80);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], [transform, 0]);

  //BetterMarque
  const [activeBetter, setActiveBetter] = useState(false);
  return (
    <footer className={styles.footer__section}>
      <div className={`container ${styles.footer__container}`}>
        <div className={styles.fc__top}>
          <div className={styles.fct__left} ref={container}>
            <motion.div className={styles.fcl__image} style={{ y }}>
              <ImagePlaceholder src={IMAGE2} alt="PIKWE ESTATES" />
            </motion.div>
          </div>
          <div className={styles.fct__right}>
            <div className={styles.fcr__content}>
              <Copy>
                <span className={styles.fc__span}>NAVIGATION</span>
              </Copy>
              <nav className={styles.footer__nav}>
                {navLinks.map((data, i) => (
                  <NavLink navbar={false} data={data} key={i} />
                ))}
              </nav>
            </div>
            <div className={styles.fcr__right}>
              <div className={styles.fcr__content}>
                <Copy>
                  <span className={styles.fc__span}>CONVICTION</span>
                </Copy>
                <Copy>
                  <p className={styles.fc__p}>{t("Navigation:conviction")}</p>
                </Copy>
              </div>
              <div className={styles.fcr__content}>
                <Copy>
                  <span className={styles.fc__span}>INFO</span>
                </Copy>
                <div className={styles.fcr__bottom}>
                  <div className={styles.fcr__div}>
                    <Copy>
                      <span className={styles.fc__bold}>N:</span> Pikwe Estates
                    </Copy>
                  </div>
                  <Copy>
                    <Link
                      href="mailto:pikweestates@gmail.com"
                      className={styles.fcr__div}
                    >
                      <span className={styles.fc__bold}>E:</span>{" "}
                      pikweestates@gmail.com
                    </Link>
                  </Copy>
                  
                  <Link href="tel:+237679703013" className={styles.fcr__div}>
                    <span className={styles.fc__bold}>P:</span> +237 679 703 013
                  </Link>
                  <Link
                    href="https://www.instagram.com/pikwe_estates"
                    target="_blank"
                    className={styles.fcr__div}
                  >
                    <span className={styles.fc__bold}>S:</span> @pikwe_estates
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.fc__bottom}>
          <div className={styles.wordmark__image}>
            <Image fill quality={100} src={IMAGE} alt="PIKWE ESTATES" />
          </div>
          <div className={styles.fc__footer}>
            <span>&copy;{new Date().getFullYear()} PIKWE ESTATES</span>
            <Link
              href={
                currentlocale === "en" ? "/en/privacy" : "/fr/confidentialite"
              }
            >
              {t("Navigation:privacy")}
            </Link>
            <span>
              {t("Navigation:webby")}{" "}
              <span
                className={styles.underline}
                onClick={() => setActiveBetter(!activeBetter)}
              >
                BetterMarque
              </span>
            </span>
          </div>
        </div>
        <BetterMarque
          activeBetter={activeBetter}
          setActiveBetter={setActiveBetter}
        />
      </div>
    </footer>
  );
};

export default Footer;
