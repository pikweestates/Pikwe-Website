import React from "react";
import styles from "../../styles/ReUsables/contactfooter.module.scss";

const ContactFooter = ({text}: {text: string}) => {
  return (
    <div className={styles.cf__section}>
      <div className={styles.cf__content}>
        {text}
      </div>
      <div className={styles.cf__background}></div>
    </div>
  );
};

export default ContactFooter;
