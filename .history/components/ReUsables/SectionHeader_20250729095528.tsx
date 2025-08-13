import React from "react";
import styles from "../../styles/ReUsables/sectionheader.module.scss";


interface SectionData{
  small: string;
  h2: string;
  text: string;
}


const SectionHeader = ({sectionData}: {sectionData: SectionData}) => {
  return (
    <div className={styles.sh__wrapper}>
      <div className={styles.sh__left}>
        <span className={styles.sh__small}}</span>
        <h2 className={styles.sh__h2}>Land acquisition roadmap</h2>
      </div>
      <div className={styles.sh__right}>
        <p className={styles.sh__p}>
          Discover each step, from identifying plots and verifying titles to
          conducting surveys, notarizing sales, processing dossiers, and
          applying for mutation. Get the full roadmap with instructions.
        </p>
      </div>
    </div>
  );
};

export default SectionHeader;
