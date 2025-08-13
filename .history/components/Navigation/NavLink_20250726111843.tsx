"use client";


import React from 'react'
import Link from 'next/link';
import styles from "../../styles/Navigation/navlink.module.scss"

interface Navlink {
  name: string;
  href: string;
}

const NavLink = ({data}: {data: V}) => {
  return (
    <div>NavLink</div>
  )
}

export default NavLink