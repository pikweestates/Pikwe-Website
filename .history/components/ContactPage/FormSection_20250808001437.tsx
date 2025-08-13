import React from "react";
import styles from "../../styles/Navigation/formsection.module.scss";

const FormSection = ({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <div className={`section ${styles.form__section}`} ref={ref}>
      <div className={`container ${styles.form__container}`}>
        <div className={styles.fc__left}>
          <span className={styles.fc__small}>Get in touch</span>
          <h2 className={styles.fc__h2}>Fill out the form</h2>
        </div>
        <div className={styles.fc__right}></div>
      </div>
    </div>
  );
};

export default FormSection;
