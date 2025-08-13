import React, { use } from "react";
import { useTranslation } from "react-i18next";
import SquareButton from "../ReUsables/SquareButton";
import ImagePlaceholder from "../ReUsables/ImagePlaceholder";
import IMAGE from "../../public/images/homeimage.jpg";
import styles from "../../styles/HomePage/vision.module.scss";

const Vision = () => {
  //Translations
  const {t, i18n} = useTranslation();
  const currentlocale = i18n.language;


  const linkContent = {
    href: currentlocale === "en" ? `${currentlocale}/about` : `${currentlocale}/a-propos`,
    text: t("HomePage:aboutbutton")
  }

  return (
    <div className={styles.vision__section}>
      <div className={styles.vision__image}>
        <div className={styles.vi__wrapper}>
          <ImagePlaceholder src={IMAGE} alt="PIKWE Land" />
        </div>
      </div>
      <div className={styles.vision__content}>
        <span className={styles.vc__span}>THE PIKWE ESTATES VISION</span>
        <p className={styles.vc__p}>
          We envision to become the real estate company of preference by
          providing premium services and opening doors to life-changing
          opportunities for millions of people in Cameroon and beyond.
        </p>
        <SquareButton status="ivory" content={linkContent}/>
      </div>
    </div>
  );
};

export default Vision;
