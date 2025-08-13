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
        <span className={styles.sh__small}>{sectionData.small}</span>
        <h2 className={styles.sh__h2}>{sectionData.h2}</h2>
      </div>
      <div className={styles.sh__right}>
        <p className={styles.sh__p}>
          {sectionData.text}
        </p>
      </div>
    </div>
  );
};

export default SectionHeader;
