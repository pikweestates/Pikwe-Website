import React from "react";
import styles from "../../styles/Navigation/infosection.module.scss";

const InfoSection = () => {
  return (
    <div className={`section ${styles.info__section}`}>
      <div className={`container ${styles.info__container}`}>
        <div className={styles.is__left}>
          <span className={styles.is__small}>Get in touch</span>
          <h2 className={styles.is__h2}>Contact Info</h2>
        </div>
        <div className={styles.is__right}>
          <div className={styles.isr__left}>
            <span className={styles.isr__span}>GENERAL INQUIRIES</span>
            <div className={styles.ir__}>

            </div>
          </div>
          <div className={styles.isr__right}>
            <span className={styles.isr__span}>GENERAL INQUIRIES</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
