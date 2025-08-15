import React from "react";
import { useTranslation } from "react-i18next";
import SectionHeader from "../ReUsables/SectionHeader";
import LinkButton from "../ReUsables/LinkButton";
import styles from "../../styles/HomePage/whychoose.module.scss";
import Copy from "../ReUsables/Copy";

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

  const whyContent = [
    {
      id: "01",
      name: t("HomePage:whynameone"),
      text: t("HomePage:whytextone"),
    },
    {
      id: "02",
      name: t("HomePage:whynametwo"),
      text: t("HomePage:whytexttwo"),
    },
    {
      id: "03",
      name: t("HomePage:whynamethree"),
      text: t("HomePage:whytextthree"),
    },
    {
      id: "04",
      name: t("HomePage:whynamefour"),
      text: t("HomePage:whytextfour"),
    },
  ];

  return (
    <div className={`section ${styles.wc__section}`}>
      <div className={`container ${styles.wc__container}`}>
        <SectionHeader sectionData={whyHeader} />
        <div className={styles.why__content}>
          {whyContent.map((data, i) => (
            <div className={styles.wcc__content} key={i}>
              <div className={styles.wc__left}>
                <Copy>
                  <span>{data.id}</span>
                </Copy>
              </div>
              <div className={styles.wc__right}>
                <Copy>
                  
                </Copy>
                <h2 className={styles.wcr__h2}>{data.name}</h2>
                <p className={styles.wrc__p}>{data.text}</p>
              </div>
            </div>
          ))}
        </div>
        <LinkButton linkData={whyLink} />
      </div>
    </div>
  );
};

export default WhyChoose;
