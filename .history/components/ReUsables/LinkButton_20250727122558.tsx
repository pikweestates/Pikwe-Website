import React from 'react'
import Link from 'next/link'
import styles from "../../styles/ReUsables/linkbutton.module.scss"

const LinkButton = () => {
  return (
    <div className={styles.link__wrapper}>
      <Link className={styles.linker} href="/">
        <div></div>
      </Link>
    </div>
  )
}

export default LinkButton