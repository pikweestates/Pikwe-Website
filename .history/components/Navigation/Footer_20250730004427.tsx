import React from "react";
import { useTranslation } from "react-i18next";
import NavLink from "./NavLink";
import Link from "next/link";
import ImagePlaceholder from "../ReUsables/ImagePlaceholder";
import Image from "next/image";
import IMAGE from "../../public/svg/wordmark.svg";
import IMAGE2 from "../../public/images/homeimage.jpg";
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

  return (
    <footer className={styles.footer__section}>
      <div className={`container ${styles.footer__container}`}>
        <div className={styles.fc__top}>
          <div className={styles.fct__left}>
            <ImagePlaceholder src={IMAGE2} alt="PIKWE ESTATES" />
          </div>
          <div className={styles.fct__right}>
            <div className={styles.fcr__content}>
              <span className={styles.fc__span}>NAVIGATION</span>
              <nav className={styles.footer__nav}>
                {navLinks.map((data, i) => (
                  <NavLink navbar={false} data={data} key={i} />
                ))}
              </nav>
            </div>
            <div className={styles.fcr__right}>
              <div className={styles.fcr__content}>
                <span className={styles.fc__span}>CONVICTION</span>
                <p className={styles.fc__p}>
                  We believe that transparent guidance, local expertise, and
                  honest partnerships can turn land ownership from a daunting
                  process into an empowering foundation for your future while
                  also fostering community growth, lasting relationships, and
                  peace of mind.
                </p>
              </div>
              <div className={styles.fcr__content}>
                <span className={styles.fc__span}>INFO</span>
                <div className={styles.fcr__bottom}>
                  <div className={styles.fcr__div}><span className={styles.fc__bold}>N:</span> Pikwe Estates</div>
                  <Link href="mailto:pikweestates@gmail.com" className={styles.fcr__div}><span className={styles.fc__bold}>E:</span> pikweestates@gmail.com</Link>
                  <Link href="tel:+237679703 013" className={styles.fcr__div}><span className={styles.fc__bold}>P:</span> +237 679 703 013</Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.fc__bottom}></div>
      </div>
    </footer>
  );
};

export default Footer;
