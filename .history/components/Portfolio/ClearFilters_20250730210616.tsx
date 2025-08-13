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
      <div className={`${styles.fc__top}`}>
        <span className={styles.fc__span}>{selectedName}</span>
        <div className={styles.fc__icon}>
          <Icon icon="fa:angle-down" />
        </div>
      </div>
    </div>
  );
};

export default ClearFilters;