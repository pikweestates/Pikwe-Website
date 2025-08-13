import React from "react";
import styles from "../../styles/Navigation/infosection.module.scss";

const InfoSection = () => {
  return (
    <div className={`section ${styles.info__section}`}>
      <div className={`container ${styles.info__container}`}>
        <div className={styles.is__left}>
          <span className={styles.sh__small}>Get in touch</span>
          <h2 className={styles.sh__h2}>Contact Info</h2>
        </div>
        <div className={styles.is__right}>
          
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
