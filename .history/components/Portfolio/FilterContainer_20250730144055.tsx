"use client";

import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import styles from "../../styles/Portfolio/filtercontainer.module.scss";

const FilterContainer = () => {
  const filterData = {
    filterName: 
  }
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleFilter = (filter: string) => {
    const params = new URLSearchParams(searchParams);

    if (filter == "all") {
      params.delete("price");
    } else {
      // This value will have to chnage if the "All" is different
      params.set("price", filter);
    }

    replace(`${pathName}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className={styles.filter__container}>
      <div className={styles.fc__top}>
        <span className={styles.fc__span}>Price</span>
        <div className={styles.fc__icon}>
          <Icon icon="fa:angle-down" />
        </div>
      </div>
      <div className={styles.fc__bottom}>
        <div className={styles.fcb__select}>
          <span className={styles.select}>Price</span>
        </div>
        <div className={styles.fcb__select}>
          <span className={styles.select}>{`< 1M`}</span>
        </div>
        <div className={styles.fcb__select}>
          <span className={styles.select}>1M - 5M</span>
        </div>
        <div className={styles.fcb__select}>
          <span className={styles.select}>5M - 10M</span>
        </div>
        <div className={styles.fcb__select}>
          <span className={styles.select}>{`> 10M`}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterContainer;
