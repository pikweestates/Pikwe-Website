import React from "react";
import ImagePlaceholder from "../ReUsables/ImagePlaceholder";
import IMAGE from "../../public/images/homeimage.jpg";
import styles from "../../styles/HomePage/vision.module.scss";

const Vision = () => {
  return (
    <div className={styles.vision__section}>
      <div className={styles.vision__image}>
        <div className={styles.vi__wrapper}>
          <ImagePlaceholder src={IMAGE} alt="PIKWE Land" />
        </div>
      </div>
      <div className={styles.vision__content}>
        <span>THE PIKWE ESTATES VISION</span>
        <p>
          We envision to become the real estate company of preference by
          providing premium services and opening doors to life-changing
          opportunities for millions of people in Cameroon and beyond.
        </p>
      </div>
    </div>
  );
};

export default Vision;
