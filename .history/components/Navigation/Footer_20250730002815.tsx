import React from "react";
import NavLink from "./NavLink";
import Link from "next/link";
import ImagePlaceholder from "../ReUsables/ImagePlaceholder";
import Image from "next/image";
import IMAGE from "../../public/svg/wordmark.svg";
import IMAGE2 from "../../public/images/homeimage.jpg";
import styles from "../../styles/Navigation/footer.module.scss";

const Footer = () => {
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
                <NavLink navbar={false} />
              </nav>
            </div>
            <div className={styles.fcr__right}>
              <div className={styles.fcr__content}></div>
              <div className={styles.fcr__content}></div>
            </div>
          </div>
        </div>
        <div className={styles.fc__bottom}></div>
      </div>
    </footer>
  );
};

export default Footer;
