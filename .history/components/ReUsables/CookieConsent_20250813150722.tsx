"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import styles from "../../styles/ReUsables/cookieconsent.module.scss";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

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
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    // Store the current date in cookie for 15 days
    Cookies.set("cookieConsentDate", new Date().toISOString(), { expires: 365 });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.modal__top}>
          <h3>We use Cookies</h3>
          
        </div>
        <p>
          We use essential cookies to ensure our website functions properly.
        </p>
        <button onClick={handleAccept}>Ok, got it</button>
      </div>
    </div>
  );
}
