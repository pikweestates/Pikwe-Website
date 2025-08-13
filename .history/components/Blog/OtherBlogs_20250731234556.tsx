import React from "react";
import { useTranslation } from "react-i18next";
import styles from "../../styles/ReUsables/otherblogs.module.scss";

const OtherBlogs = () => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

  return (
    <div className={`section ${styles.ob__section}`}>
      <div className={`container ${styles.ob__container}`}>
        <div className={styles.ob__top}>
          <span className={styles.ob__span}>{t("HomePage:insightsmall")}</span>
          <h2 className={styles.ob__h2}>{t("")}</h2>
        </div>
      </div>
    </div>
  );
};

export default OtherBlogs;
