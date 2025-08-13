"use"

import React from 'react'
import Link from 'next/link'
import styles from "../../styles/ReUsables/squarebutton.module.scss"

const SquareButton = () => {
  return (
    <Link href="/contact" className={styles.button__container}>
      <span>Speak with a consultant</span>
    </Link>
  )
}

export default SquareButton