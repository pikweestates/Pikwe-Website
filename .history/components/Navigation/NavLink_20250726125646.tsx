"use client";


import React from 'react'
import Link from 'next/link';
import styles from "../../styles/Navigation/navlink.module.scss"

interface Navlink {
  name: string;
  href: string;
}

const NavLink = ({data, navbar}: {data: Navlink, navbar: boolean}) => {
  return (
    <Link className={styles.navlink__container1} href={data.href}>
      <div className={styles.link__wrapper}>
        <span className={styles.}>{data.name}</span>
        <span className={styles.}>{data.name}</span>
      </div>
    </Link>
  )
}

export default NavLink