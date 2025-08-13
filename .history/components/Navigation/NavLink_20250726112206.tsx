"use client";


import React from 'react'
import Link from 'next/link';
import styles from "../../styles/Navigation/navlink.module.scss"

interface Navlink {
  name: string;
  href: string;
}

const NavLink = ({data, navbar}: {data: Navlink, navbar}) => {
  return (
    <Link className={styles.navlink__container} href={data.href}>
      <div className={styles.link__wrapper}>
        <span>{data.name}</span>
        <span>{data.name}</span>
      </div>
    </Link>
  )
}

export default NavLink