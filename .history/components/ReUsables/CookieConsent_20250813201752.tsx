"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import Link from "next/link";
import { CookieAnim } from "@/animations";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../../styles/ReUsables/cookieconsent.module.scss";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

  useEffect(() => {
    // Check if the consent cookie exists
    const consentDate = Cookies.get("cookieConsentDate");

    // If consent exists and is less than 15 days old, don't show
    if (consentDate) {
      const lastConsent = new Date(consentDate);
      const now = new Date();
      const diffDays = Math.floor(
        (now.getTime() - lastConsent.getTime()) / (1000 * 60 * 60 * 24)
      );
      if (diffDays < 15) return;
    }

    // Show modal after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    // Store the current date in cookie for 15 days
    // Cookies.set("cookieConsentDate", new Date().toISOString(), {
    //   expires: 365,
    // });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence mode="wait">
      
      <div className={styles.cookie__section}>
        <div className={`container ${styles.cookie__container}`}>
          <motion.div
            variants={CookieAnim}
            animate={isVisible ? "entry" : "exit"}
            initial="initial"
            exit="exit"
            className={styles.overlay}
          >
            <div className={styles.modal}>
              <div className={styles.modal__top}>
                <h3>{t("Navigation:cookies")}</h3>
                <p>{t("Navigation:cookietext")}</p>
              </div>
              <div className={styles.modal__bottom}>
                <Link
                  href={
                    currentlocale === "en"
                      ? "/en/privacy"
                      : "/fr/confidentialite"
                  }
                >
                  {t("Navigation:privacy")}
                </Link>
                <button onClick={handleAccept}>{t("Navigation:okay")}</button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
