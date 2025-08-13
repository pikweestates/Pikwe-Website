"use client";

import React, { useState, useRef, useEffect } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import styles from "../../styles/Portfolio/filtercontainer.module.scss";

interface FilterInterface {
  filterName: {
    fn: string;
    slug: string;
  };

  filters: {
    name: string;
    slug: string;
  }[];
}

const ClearFilters = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();



  return (
    <div
      className={styles.filter__container}
      onClick={}
    >
      <div className={`${styles.fc__top} ${selectedName !== filterData.filterName.fn ? styles.activeFilter : ""}`}>
        <span className={styles.fc__span}>{selectedName}</span>
        <div className={styles.fc__icon}>
          <Icon icon="fa:angle-down" />
        </div>
      </div>
      <div
        className={`${styles.fc__bottom} ${
          activeModal ? styles.active__modal : ""
        } ${filterData.filterName.slug === "size" || filterData.filterName.slug === "surface" && styles.fc__bottom2}`}
      >
        {filterData.filters.map((data, i) => (
          <div
            className={styles.fcb__select}
            key={i}
            onClick={() => handleFilter(data)}
          >
            <span className={styles.select}>{data.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClearFilters;