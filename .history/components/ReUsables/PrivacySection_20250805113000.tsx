"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import styles from "../../styles/ReUsables/privacysection.module.scss";

const PrivacySection = ({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
}) => {
  const {t, i18n} = useTranslation();
  
  return (
    <div className={`section ${styles.privacy__section}`} ref={ref}>
      <div className={styles.privacy__container}>
        <div className={styles.privacy}>
          <h3 className={styles.p__h3}>{t("Privacy:one")}</h3>
          <div className={styles.p__content}>
            <p className={styles.p__p}>
            {t("Privacy:two")}
            </p>
            <p className={styles.p__p}>
            {t("Privacy:three")}
            </p>
            <p className={`${styles.p__p} ${styles.cap}`}>
            {t("Privacy:four")}
            </p>
          </div>
        </div>
        <div className={styles.privacy}>
          <h3 className={styles.p__h3}>{t("Privacy:five")}</h3>
          <div className={styles.p__content}>
            <p className={styles.p__p}>
            {t("Privacy:six")}
            </p>
            <ul className={styles.p__list}>
              <li className={styles.p__ul}>
              {t("Privacy:seven")}
              </li>
              <li className={styles.p__ul}>
              {t("Privacy:eight")}
              </li>
              <li className={styles.p__ul}>
              {t("Privacy:nine")}
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.privacy}>
          <h3 className={styles.p__h3}>{t("Privacy:ten")}</h3>
          <div className={styles.p__content}>
            <p className={styles.p__p}>
            {t("Privacy:eleven")}
            </p>

            <p className={styles.p__p}>
            {t("Privacy:twelve")}
            </p>
            <ul className={styles.p__list}>
              <li className={styles.p__ul}>
              {t("Privacy:thirteen")}
              </li>
              <li className={styles.p__ul}>
              {t("Privacy:fourteen")}
              </li>
              <li className={styles.p__ul}>
              {t("Privacy:fifteen")}
              </li>
            </ul>
            <p className={styles.p__p}>
            {t("Privacy:sixteen")}
            </p>
          </div>
        </div>

        <div className={styles.privacy}>
          <h3 className={styles.p__h3}>{t("Privacy:seventeen")}</h3>
          <div className={styles.p__content}>
            <p className={styles.p__p}>
            {t("Privacy:eighteen")}
            </p>

            <p className={styles.p__p}>
            {t("Privacy:nineteen")}
            </p>
          </div>
        </div>
        <div className={styles.privacy}>
          <h3 className={styles.p__h3}>{t("Privacy:twenty")}</h3>
          <div className={styles.p__content}>
            <p className={styles.p__p}>
            {t("Privacy:twentyone")}
            </p>
          </div>
        </div>

        <div className={styles.privacy}>
          <h3 className={styles.p__h3}>
          {t("Privacy:twentytwo")}
          </h3>
          <div className={styles.p__content2}>
            <h4 className={styles.p__h4}>{t("Privacy:twentythree")}</h4>
            <div className={styles.p__content}>
              <p className={styles.p__p}>
              {t("Privacy:twentyfour")}
              </p>
              <ul className={styles.p__list}>
                <li className={styles.p__ul}>
                {t("Privacy:twentyfive")}
                </li>
                <li className={styles.p__ul}>
                {t("Privacy:twentysix")}
                </li>
                <li className={styles.p__ul}>
                {t("Privacy:twentyseven")}
                </li>
                <li className={styles.p__ul}>
                {t("Privacy:twentyeight")}
                </li>
                <li className={styles.p__ul}>
                {t("Privacy:twentynine")}
                </li>
              </ul>
              <p className={styles.p__p}>
              {t("Privacy:thirty")}
              </p>
            </div>
          </div>
          <div className={styles.p__content2}>
            <h4 className={styles.p__h4}>{t("Privacy:thirtyone")}</h4>
            <div className={styles.p__content}>
              <p className={styles.p__p}>
              {t("Privacy:thirtytwo")}
              </p>
              <ul className={styles.p__list}>
                <li className={styles.p__ul}>
                {t("Privacy:thirtythree")}
                </li>
              </ul>
              <p className={styles.p__p}>
              {t("Privacy:thirtyfour")}
              </p>
            </div>
          </div>
          <div className={styles.p__content2}>
            <h4 className={styles.p__h4}>
            {t("Privacy:thirtyfive")}
            </h4>
            <div className={styles.p__content}>
              <p className={styles.p__p}>
              {t("Privacy:thirtysix")}
              </p>
              <ul className={styles.p__list}>
                <li className={styles.p__ul}>
                {t("Privacy:thirtyseven")}
                </li>
                <li className={styles.p__ul}>
                {t("Privacy:thirtyeight")}
                </li>
                <li className={styles.p__ul}>
                {t("Privacy:thirty")}
                </li>
                <li className={styles.p__ul}>
                  Essential cookies keep the site functional, analytics cookies
                  measure traffic and user behavior, and marketing cookies help
                  us present relevant offers. You can instruct your browser to
                  refuse all cookies or to indicate when a Cookie is being sent.
                  However, if you do not accept cookies, you may not be able to
                  use some parts of our website. Unless you have adjusted your
                  browser setting so that it will refuse cookies, our website
                  will use cookies.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacySection;
