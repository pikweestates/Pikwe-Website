"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import FormWrapper from "./FormWrapper";
import styles from "../../styles/Navigation/formsection.module.scss";
import Copy from "../ReUsables/Copy";

const FormSection = ({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
}) => {
  const { t } = useTranslation();

  return (
    <div className={`section ${styles.form__section}`} ref={ref}>
      <div className={`container ${styles.form__container}`}>
        <div className={styles.fc__left}>
          <Copy>
            <span className={styles.fc__small}>
              {t("Navigation:getintouch")}
            </span>
          </Copy>
          <Copy>
            <h2 className={styles.fc__h2}>{t("Navigation:fillout")}</h2>
          </Copy>
        </div>
        <div className={styles.fc__right}>
          <FormWrapper />
        </div>
      </div>
    </div>
  );
};

export default FormSection;
