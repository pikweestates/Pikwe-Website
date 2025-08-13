import React from "react";
import SquareButton from "./SquareButton";
import styles from "../../styles/ReUsables/contactfooter.module.scss";

const ContactFooter = ({text}: {text: string}) => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

  const linkContent = {
    href:
      currentlocale === "en"
        ? `${currentlocale}/about`
        : `${currentlocale}/a-propos`,
    text: t("HomePage:aboutbutton"),
  };
  
  return (
    <div className={styles.cf__section}>
      <div className={styles.cf__content}>
        <h2>{text}</h2>
        <SquareButton />
      </div>
      <div className={styles.cf__background}></div>
    </div>
  );
};

export default ContactFooter;
