"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import styles from "../../styles/Navigation/formsection.module.scss";

const FormSection = ({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
}) => {
  const {t, i18n} = useTranslation();
  
  return (
    <div className={`section ${styles.form__section}`} ref={ref}>
      <div className={`container ${styles.form__container}`}>
        <div className={styles.fc__left}>
          <span className={styles.fc__small}>{t("Navigation:getintouch")}</span>
          <h2 className={styles.fc__h2}>{t("Navigation:fillout")}</h2>
        </div>
        <div className={styles.fc__right}>
          
        </div>
      </div>
    </div>
  );
};

export default FormSection;
