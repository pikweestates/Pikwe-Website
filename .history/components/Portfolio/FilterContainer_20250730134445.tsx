import React from "react";
import { Icon } from "@iconify/react";
import styles from "../../styles/Portfolio/filtercontainer.module.scss";

const FilterContainer = () => {
  return (
    <div className={styles.filter__container}>
      <div className={styles.fc__top}>
        <span className={styles.fc__span}>Price</span>
        <div className={styles.fc__icon}>
          <Icon icon="fa:angle-down" />
        </div>
      </div>
      <div className={styles.fc__bottom}>
        <div className={styles.}>

        </div>
      </div>
    </div>
  );
};

export default FilterContainer;
