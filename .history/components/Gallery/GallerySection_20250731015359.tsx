import React from "react";
import styles from "../../styles/ReUsables/gallerysection.module.scss";

const GallerySection = ({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <div className={`section ${styles.gs__section}`} ref={ref}>
      <div className={`container ${styles.gs__container}`}>
        <div className={styles.gs__content}>
          <div className={styles.gallery__box}>
            <div className={styles.gb__main}>

            </div>
            <div className={styles.}>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
