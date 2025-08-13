import React from "react";
import styles from "../../styles/ReUsables/privacysection.module.scss";

const PrivacySection = ({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
}) => {
  return <div className={`section ${styles.privacy__section}`} ref={ref}>
    <div className={styles.privacy__container}>
      <div className={styles.privacy}>
        <h3 className={styles.p__h3}>Notice of Agreement</h3>
        <div className={styles.p__content}>
          <p className={styles.p__p}>This Privacy Policy was last modified on 15/08/2025.</p>
          <p className={styles.p__p}>By using this website, you agree to be bound by this Privacy Policy and all disclaimers and other terms and conditions that appear on www.pikweestates.com. We use your personal data to provide and improve the service. By using this website, you agree to the collection and use of information in accordance with this Privacy Policy.</p>
          <p className={`${styles.p__p} ${styles.cap}`}>If you do not agree to this Privacy Policy, your sole and exclusive remedy is to discontinue using the Website.</p>
        </div>
      </div>
      <div className={styles.privacy}>
        <h3 className={styles.p__h3}>About This Privacy Policy</h3>
        <div className={styles.p__content}>
          <p className={styles.p__p}>This Policy sets forth Pikwe Estates’ practices regarding:</p>
          <li className={styles.p__list}>
            <ul className={styles.p__ul}>The information we collect through this website and your interactions with us.</ul>
            <ul className={styles.p__ul}>How we use and share that information.</ul>
          </li>
        </div>
      </div>
    </div>
  </div>;
};

export default PrivacySection;
