"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import styles from "../../styles/Navigation/infosection.module.scss";
import Copy from "../ReUsables/Copy";

const InfoSection = () => {
  const { t } = useTranslation();

  const dataOne = [
    {
      name: t("Navigation:phone"),
      text: "(+237) 679-703-013",
      link: "tel:+237679703013",
    },
    {
      name: t("Navigation:email"),
      text: "pikweestates@gmail.com",
      link: "mailto:pikweestates@gmail.com",
    },
    {
      name: t("Navigation:office"),
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
          <Copy>
            <span className={styles.is__small}>
              {t("Navigation:getintouch")}
            </span>
          </Copy>
          <Copy>
            <h2 className={styles.is__h2}>{t("Navigation:contactinfo")}</h2>
          </Copy>
        </div>
        <div className={styles.is__right}>
          <div className={styles.isr}>
            <Copy>
              <span className={styles.isr__span}>
                {t("Navigation:generalinq")}
              </span>
            </Copy>
            <div className={styles.ir__bottomone}>
              {dataOne.map((data, i) =>
                data.link ? (
                  <div className={styles.ir__box} key={i}>
                    <Copy>
                      <span className={styles.spanone}>{data.name}</span>
                    </Copy>
                    <Copy>
                      <Link className={styles.a} href={data.link}>
                        {data.text}
                      </Link>
                    </Copy>
                  </div>
                ) : (
                  <div className={styles.ir__box} key={i}>
                    <Copy>
                      <span className={styles.spanone}>{data.name}</span>
                    </Copy>
                    <Copy>
                      <span>{data.text}</span>
                    </Copy>
                  </div>
                )
              )}
            </div>
          </div>
          <div className={styles.isr}>
            <Copy>

            <span className={styles.isr__span}>
              {t("Navigation:socialmedia")}
            </span>
            </Copy>
            <div className={styles.ir__bottomtwo}>
              {dataTwo.map((data, i) => (
                <Link href={data.link} key={i} className={styles.a}>
                  {data.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
