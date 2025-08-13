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
            <h4 className={styles.p__h4}>{t("Privacy:twentyone")}</h4>
            <div className={styles.p__content}>
              <p className={styles.p__p}>
                When you contact us through our form or send us a whatsapp
                message, we collect certain personal details to identify you and
                facilitate clear communication.
              </p>
              <ul className={styles.p__list}>
                <li className={styles.p__ul}>
                  Full Name: We use this to personalize our responses and match
                  your inquiry with your profile.
                </li>
                <li className={styles.p__ul}>
                  Email Address: This allows us to send confirmations, updates
                  on your request status, and important service notices.
                </li>
                <li className={styles.p__ul}>
                  Phone Number: We may call or text you to clarify your needs,
                  schedule site visits, or provide real‐time support.
                </li>
                <li className={styles.p__ul}>
                  Property Reference Code (optional) This unique identifier
                  corresponds to a specific listing in our database. Providing
                  it isn’t required, but it helps us locate the exact property
                  quickly and deliver faster, more accurate information.
                </li>
                <li className={styles.p__ul}>
                  Additional Messages: Any extra information you include helps
                  us understand your specific goals and tailor our advice
                  accordingly.
                </li>
              </ul>
              <p className={styles.p__p}>
                By providing these details, you consent to our processing and
                use of your information to deliver and improve our services.
              </p>
            </div>
          </div>
          <div className={styles.p__content2}>
            <h4 className={styles.p__h4}>Information from Third Parties</h4>
            <div className={styles.p__content}>
              <p className={styles.p__p}>
                To ensure accuracy and enrich our records, we may receive data
                about you from trusted external providers and public sources.
              </p>
              <ul className={styles.p__list}>
                <li className={styles.p__ul}>
                  Sanity CMS: Your profile metadata or preferences stored in our
                  content management system help us maintain up-to-date
                  information.
                </li>
              </ul>
              <p className={styles.p__p}>
                This supplemental information enables us to keep our database
                accurate, streamline processes, and enhance your overall
                experience.
              </p>
            </div>
          </div>
          <div className={styles.p__content2}>
            <h4 className={styles.p__h4}>
              Information from your use of the Website
            </h4>
            <div className={styles.p__content}>
              <p className={styles.p__p}>
                We automatically collect technical and behavioral data when you
                browse and interact with our website to optimize performance and
                personalize content.
              </p>
              <ul className={styles.p__list}>
                <li className={styles.p__ul}>
                  Device Identifiers and IP Addresses: We detect your device
                  type and approximate location to safeguard security and
                  deliver region-specific information.
                </li>
                <li className={styles.p__ul}>
                  Server Log Details like pages visited, timestamps, and
                  referral sources help us monitor site health and troubleshoot
                  issues.
                </li>
                <li className={styles.p__ul}>
                  Location Data: As reported by your browser or mobile device,
                  this lets us recommend nearby plots or local services.
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
