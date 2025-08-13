"use client";


import React from 'react'
import Link from 'next/link';
import styles from "../../styles/Navigation/navlink.module.scss"

interface Navlink {
  name: string;
  href: string;
}

const NavLink = ({data}: {data: Navlink}) => {
  return (
    <Link className={styles.navlink__wrapper} href={data.href}>
      
    </Link>
  )
}

export default NavLink