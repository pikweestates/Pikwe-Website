"use client";

import React from "react";
import Copy from "./Copy";
import { useTranslation } from "react-i18next";
import styles from "../../styles/ReUsables/privacysection.module.scss";

const PrivacySection = ({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
}) => {
  const { t } = useTranslation();

  return (
    <div className={`section ${styles.privacy__section}`} ref={ref}>
      <div className={`container ${styles.privacy__container}`}>
        <div className={styles.privacy__main}>
          <div className={styles.privacy}>
            <Copy>
              <h3 className={styles.p__h3}>{t("Privacy:one")}</h3>
            </Copy>
            <div className={styles.p__content}>
              <Copy>
                <p className={styles.p__p}>{t("Privacy:two")}</p>
              </Copy>
              <Copy>
                <p className={styles.p__p}>{t("Privacy:three")}</p>
              </Copy>
              <Copy>
                <p className={`${styles.p__p} ${styles.cap}`}>
                  {t("Privacy:four")}
                </p>
              </Copy>
            </div>
          </div>
          <div className={styles.privacy}>
            <Copy>
              <h3 className={styles.p__h3}>{t("Privacy:five")}</h3>
            </Copy>
            <div className={styles.p__content}>
              <Copy>
                <p className={styles.p__p}>{t("Privacy:six")}</p>
              </Copy>
              <ul className={styles.p__list}>
                <Copy>
                  <li className={styles.p__ul}>{t("Privacy:seven")}</li>
                </Copy>
                <Copy>
                  <li className={styles.p__ul}>{t("Privacy:eight")}</li>
                </Copy>
                <Copy>
                  <li className={styles.p__ul}>{t("Privacy:nine")}</li>
                </Copy>
              </ul>
            </div>
          </div>
          <div className={styles.privacy}>
            <Copy>
              <h3 className={styles.p__h3}>{t("Privacy:ten")}</h3>
            </Copy>
            <div className={styles.p__content}>
              <Copy>
                <p className={styles.p__p}>{t("Privacy:eleven")}</p>
              </Copy>

              <Copy>
                <p className={styles.p__p}>{t("Privacy:twelve")}</p>
              </Copy>
              <ul className={styles.p__list}>
                <Copy>
                  <li className={styles.p__ul}>{t("Privacy:thirteen")}</li>
                </Copy>
                <Copy>
                  <li className={styles.p__ul}>{t("Privacy:fourteen")}</li>
                </Copy>
                <Copy>
                  <li className={styles.p__ul}>{t("Privacy:fifteen")}</li>
                </Copy>
              </ul>
              <Copy>
                <p className={styles.p__p}>{t("Privacy:sixteen")}</p>
              </Copy>
            </div>
          </div>

          <div className={styles.privacy}>
          <Copy>
                
                </Copy>
            <h3 className={styles.p__h3}>{t("Privacy:seventeen")}</h3>
            <div className={styles.p__content}>
            <Copy>
                
                </Copy>
              <p className={styles.p__p}>{t("Privacy:eighteen")}</p>

              <Copy>
                
              </Copy>
              <p className={styles.p__p}>{t("Privacy:nineteen")}</p>
            </div>
          </div>
          <div className={styles.privacy}>
          <Copy>
                
                </Copy>
            <h3 className={styles.p__h3}>{t("Privacy:twenty")}</h3>
            <div className={styles.p__content}>
            <Copy>
                
                </Copy>
              <p className={styles.p__p}>{t("Privacy:twentyone")}</p>
            </div>
          </div>

          <div className={styles.privacy}>
          <Copy>
                
                </Copy>
            <h3 className={styles.p__h3}>{t("Privacy:twentytwo")}</h3>
            <div className={styles.p__content2}>
            <Copy>
                
                </Copy>
              <h4 className={styles.p__h4}>{t("Privacy:twentythree")}</h4>
              <div className={styles.p__content}>
              <Copy>
                
                </Copy>
                <p className={styles.p__p}>{t("Privacy:twentyfour")}</p>
                <ul className={styles.p__list}>
                  <li className={styles.p__ul}>{t("Privacy:twentyfive")}</li>
                  <li className={styles.p__ul}>{t("Privacy:twentysix")}</li>
                  <li className={styles.p__ul}>{t("Privacy:twentyseven")}</li>
                  <li className={styles.p__ul}>{t("Privacy:twentyeight")}</li>
                  <li className={styles.p__ul}>{t("Privacy:twentynine")}</li>
                </ul>
                <p className={styles.p__p}>{t("Privacy:thirty")}</p>
              </div>
            </div>
            <div className={styles.p__content2}>
              <h4 className={styles.p__h4}>{t("Privacy:thirtyone")}</h4>
              <div className={styles.p__content}>
                <p className={styles.p__p}>{t("Privacy:thirtytwo")}</p>
                <ul className={styles.p__list}>
                  <li className={styles.p__ul}>{t("Privacy:thirtythree")}</li>
                </ul>
                <p className={styles.p__p}>{t("Privacy:thirtyfour")}</p>
              </div>
            </div>
            <div className={styles.p__content2}>
              <h4 className={styles.p__h4}>{t("Privacy:thirtyfive")}</h4>
              <div className={styles.p__content}>
                <p className={styles.p__p}>{t("Privacy:thirtysix")}</p>
                <ul className={styles.p__list}>
                  <li className={styles.p__ul}>{t("Privacy:thirtyseven")}</li>
                  <li className={styles.p__ul}>{t("Privacy:thirtyeight")}</li>
                  <li className={styles.p__ul}>{t("Privacy:thirtynine")}</li>
                  <li className={styles.p__ul}>{t("Privacy:fourty")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacySection;
