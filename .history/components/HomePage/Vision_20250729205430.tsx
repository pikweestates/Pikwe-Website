import React, { use } from "react";
import { useTranslation } from "react-i18next";
import SquareButton from "../ReUsables/SquareButton";
import ImagePlaceholder from "../ReUsables/ImagePlaceholder";
import IMAGE from "../../public/images/homeimage.jpg";
import styles from "../../styles/HomePage/vision.module.scss";

const Vision = () => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

  const linkContent = {
    href:
      currentlocale === "en"
        ? `${currentlocale}/about`
        : `${currentlocale}/a-propos`,
    text: t("HomePage:aboutbutton"),
  };

  return (
    <div className={styles.vision__section}>
      <div className={styles.vision__image}>
        <div className={styles.vi__wrapper}>
          <ImagePlaceholder src={IMAGE} alt="PIKWE Land" />
        </div>
      </div>
      <div className={styles.vision__content} style={{width: currentlocale==="en" ? "60%"}}>
        <span className={styles.vc__span}>{t("HomePage:aboutsmall")}</span>
        <p className={styles.vc__p}>{t("HomePage:homevision")}</p>
        <div className={styles.vc__button}>
          <SquareButton status="ivory" content={linkContent} />
        </div>
      </div>
    </div>
  );
};

export default Vision;
