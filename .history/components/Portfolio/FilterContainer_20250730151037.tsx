"use client";

import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import styles from "../../styles/Portfolio/filtercontainer.module.scss";

interface FilterInterface{
  filterName: {
    fn: string,
    slug: string,
  },
  filters: string[],
}


const FilterContainer = ({filterData}: {filterData: }) => {

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleFilter = (filter: string) => {
    const params = new URLSearchParams(searchParams);

    if (filter == filterData.filterName.fn) {
      params.delete(filterData.filterName.slug);
    } else {
      // This value will have to chnage if the "All" is different
      params.set(filterData.filterName.slug, filter);
    }

    replace(`${pathName}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className={styles.filter__container}>
      <div className={styles.fc__top}>
        <span className={styles.fc__span}>{filterData.filterName.fn}</span>
        <div className={styles.fc__icon}>
          <Icon icon="fa:angle-down" />
        </div>
      </div>
      <div className={styles.fc__bottom}>
        {filterData.filters.map((data, i) => (
          <div
            className={styles.fcb__select}
            key={i}
            onClick={() => handleFilter(data)}
          >
            <span className={styles.select}>{data}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterContainer;
