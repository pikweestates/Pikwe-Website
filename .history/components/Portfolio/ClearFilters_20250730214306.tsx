"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import styles from "../../styles/Portfolio/filtercontainer.module.scss";

const ClearFilters = () => {
  const router = useRouter();
  const pathName = usePathname();
  const { t } = useTranslation();

  const handleClear = () => {
    // Navigate to the same path with no query string
    router.replace(pathName, { scroll: false });
  };

  return (
    <div className={styles.filter__container} onClick={handleClear}>
      <div className={`${styles.fc__top}`}>
        <span className={styles.fc__span}>{t("Portfolio:clearfilters")}</span>
        <div className={styles.fc__icon}>
          <Icon icon="ix:cancel" />
        </div>
      </div>
    </div>
  );
};

export default ClearFilters;
