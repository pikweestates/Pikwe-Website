import React from "react";
import Link from "next/link";
import styles from "../../styles/Navigation/infosection.module.scss";

const InfoSection = () => {
  const {t, i18n} = useTranslation();
  const dataOne = [
    {
      name: "Phone",
      text: "(+237) 679-703-013",
      link: "tel:+237679703013",
    },
    {
      name: "Email",
      text: "pikweestates@gmail.com",
      link: "mailto:pikweestates@gmail.com",
    },
    {
      name: "Office",
      text: "Yaounde, Simbock",
    },
  ];

  const dataTwo = [
    {
      name: "Whatsapp",
      link: "/",
    },
    {
      name: "Instagram",
      link: "/",
    },
    {
      name: "Facebook",
      link: "/",
    },
  ];

  return (
    <div className={`section ${styles.info__section}`}>
      <div className={`container ${styles.info__container}`}>
        <div className={styles.is__left}>
          <span className={styles.is__small}>{t("Navigation:getintouch")}</span>
          <h2 className={styles.is__h2}>{t("Navigation:contactinfo")}</h2>
        </div>
        <div className={styles.is__right}>
          <div className={styles.isr}>
            <span className={styles.isr__span}>{t("Navigation:getintouch")}</span>
            <div className={styles.ir__bottomone}>
              {dataOne.map((data, i) =>
                data.link ? (
                  <div className={styles.ir__box} key={i}>
                    <span className={styles.spanone}>{data.name}</span>
                    <Link className={styles.a} href={data.link}>{data.text}</Link>
                  </div>
                ) : (
                  <div className={styles.ir__box} key={i}>
                    <span className={styles.spanone}>{data.name}</span>
                    <span>{data.text}</span>
                  </div>
                )
              )}
            </div>
          </div>
          <div className={styles.isr}>
            <span className={styles.isr__span}>{t("Navigation:getintouch")}</span>
            <div className={styles.ir__bottomtwo}>
              {
                dataTwo.map((data, i) => (
                  <Link href={data.link} key={i} className={styles.a}>{data.name}</Link>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
