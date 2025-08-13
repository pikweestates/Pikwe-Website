import React from "react";
import ImagePlaceholder from "../ReUsables/ImagePlaceholder";
import IMAGE from "../../public/images/homeimage.jpg";
import styles from "../../styles/HomePage/vision.module.scss";

const Vision = () => {
  return (
    <div className={styles.vision__section}>
      <div className={styles.vision__image}>
        <div className={styles.vi__wrapper}>
          <ImagePlaceholder src={IMAGE} alt="PIKWE Land"/>
        </div>
      </div>
      <div className={styles.vision__content}></div>
    </div>
  );
};

export default Vision;
