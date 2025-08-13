import React from "react";
import Image from "next/image";
import Link from "next/link";
import LOGO from "../../public/svg/horigreen.svg";
import NavLink from "./NavLink";
import styles from "../../styles/Navigation/navbar.module.scss";

const Navbar = () => {
  const nav_links = [
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Portfolio",
      href: "/portfolio",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Gallery",
      href: "/gallery",
    },
    {
      name: "Blog",
      href: "/blog",
    },
  ];

  return (
    <div className={styles.navbar__section}>
      <div className={`container ${styles.navbar__container}`}>
        <Link href="/" className={styles.nav__left}>
          <div className={styles.logo__wrapper}>
            <Image fill quality={100} src={LOGO} alt="PIKWE LOGO" />
          </div>
        </Link>
        <div className={styles.nav__center}>
          <nav className={styles.navigation}>
            {nav_links.map((link, i) => (
              // <Link key={i} href={link.href} className={styles.nav__link}>
              //   {link.name}
              // </Link>
            ))}
          </nav>
        </div>
        <div className={styles.nav__right}></div>
      </div>
    </div>
  );
};

export default Navbar;
