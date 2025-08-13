import React from "react";
import { useTranslation } from "react-i18next";
import SquareButton from "./SquareButton";
import styles from "../../styles/ReUsables/contactfooter.module.scss";

const ContactFooter = ({ text }: { text: string }) => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

  const linkContent = {
    href: `/${currentlocale}/contact`,
    text: t("Navigation:buttontext"),
  };

  return (
    <div className={styles.cf__section}>
      <div className={styles}>

      </div>
      <div className={styles.cf__content}>
        <h2 className={styles.cf__h2}>{text}</h2>
        <SquareButton status="green" content={linkContent} />
      </div>
      <div className={styles.cf__background}></div>
    </div>
  );
};

export default ContactFooter;
