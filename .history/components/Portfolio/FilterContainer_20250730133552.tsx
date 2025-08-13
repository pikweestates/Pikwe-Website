import React from 'react'
import { Icon } from "@iconify/react";
import styles from "../../styles/Portfolio/filtercontainer.module.scss"

const FilterContainer = () => {
  return (
    <div className={styles.filter__container}>
      <div className={styles.fc__top}>
        <span className={styles.fc__span}></span>
      </div>
      <div className={styles.fc__bottom}>

      </div>
    </div>
  )
}

export default FilterContainer