import React from "react";
import { useTranslation } from "react-i18next";
import SectionHeader from "../ReUsables/SectionHeader";
import LinkButton from "../ReUsables/LinkButton";
import styles from "../../styles/HomePage/whychoose.module.scss";

const WhyChoose = () => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

  //Portfolio Header
  const whyHeader = {
    small: t("HomePage:whysmall"),
    h2: t("HomePage:whyh2"),
    text: t("HomePage:whytext"),
  };

  const whyLink = {
    href: `${currentlocale}/portfolio`,
    text: t("HomePage:portlink"),
  };

  return (
    <div className={`section ${styles.wc__section}`}>
      <div className={`container ${styles.wc__container}`}>
        <SectionHeader sectionData={whyHeader} />
        <div className={styles.why__content}>
          <div className={styles.wcc__content}>
            <div className={styles.wc__left}>
              <span>01</span>
            </div>
            <div className={styles.wc__right}>
              <h2 className={styles.wcr__h2}>Only verified plots of land</h2>
              <p>Every piece of land is carefully checked for quality and honesty, guaranteeing you always invest in safe properties.</p>
            </div>
          </div>
        </div>
        <LinkButton linkData={whyLink} />
      </div>
    </div>
  );
};

export default WhyChoose;
