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

const FilterContainer = ({ filterData }: { filterData: FilterInterface }) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleFilter = (filter: { name: string; slug: string }) => {
    const params = new URLSearchParams(searchParams);

    if (filter.name == filterData.filterName.fn) {
      params.delete(filterData.filterName.slug);
      setSelectedName(filterData.filterName.fn);
    } else {
      // This value will have to chnage if the "All" is different
      params.set(filterData.filterName.slug, filter.slug);
      setSelectedName(filter.name);
    }

    replace(`${pathName}?${params.toString()}`, { scroll: false });
  };

  // 1. State for the selected filter name
  const [selectedName, setSelectedName] = useState(filterData.filterName.fn);
  const [activeModal, setActiveModal] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  //Set Active selector to false when clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setActiveModal(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

  return (
    <div
      className={styles.filter__container}
      onClick={() => setActiveModal((v) => !v)}
      ref={containerRef}
    >
      <div className={`${styles.fc__top} {selectedName !== filterData.filterName.fn ? styles.activeFilter : ""}`}>
        <span className={styles.fc__span}>{selectedName}</span>
        <div className={styles.fc__icon}>
          <Icon icon="fa:angle-down" />
        </div>
      </div>
      <div
        className={`${styles.fc__bottom} ${
          activeModal ? styles.active__modal : ""
        } ${filterData.filterName.slug === "size" && styles.fc__bottom2}`}
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

export default FilterContainer;
