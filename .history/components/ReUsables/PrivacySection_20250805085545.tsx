import React from "react";
import styles from "../../styles/ReUsables/privacysection.module.scss";

const PrivacySection = ({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <div className={`section ${styles.privacy__section}`} ref={ref}>
      <div className={styles.privacy__container}>
        <div className={styles.privacy}>
          <h3 className={styles.p__h3}>Notice of Agreement</h3>
          <div className={styles.p__content}>
            <p className={styles.p__p}>
              This Privacy Policy was last modified on 15/08/2025.
            </p>
            <p className={styles.p__p}>
              By using this website, you agree to be bound by this Privacy
              Policy and all disclaimers and other terms and conditions that
              appear on www.pikweestates.com. We use your personal data to
              provide and improve the service. By using this website, you agree
              to the collection and use of information in accordance with this
              Privacy Policy.
            </p>
            <p className={`${styles.p__p} ${styles.cap}`}>
              If you do not agree to this Privacy Policy, your sole and
              exclusive remedy is to discontinue using the Website.
            </p>
          </div>
        </div>
        <div className={styles.privacy}>
          <h3 className={styles.p__h3}>About This Privacy Policy</h3>
          <div className={styles.p__content}>
            <p className={styles.p__p}>
              This Policy sets forth Pikwe Estates’ practices regarding:
            </p>
            <li className={styles.p__list}>
              <ul className={styles.p__ul}>
                The information we collect through this website and your
                interactions with us.
              </ul>
              <ul className={styles.p__ul}>
                How we use and share that information.
              </ul>
              <ul className={styles.p__ul}>
                Your rights to access, correct, or delete certain information.
              </ul>
            </li>
          </div>
        </div>
        <div className={styles.privacy}>
          <h3 className={styles.p__h3}>Scope & Applicability</h3>
          <div className={styles.p__content}>
            <p className={styles.p__p}>
              In this Policy, “you” refers to any user, visitor, or customer of
              Pikwe Estates, and “we,” “us,” or “our” refers to Pikwe Estates.
            </p>

            <p className={styles.p__p}>
              The Website serves to introduce Pikwe Estates, showcase our
              land-ownership services, and give clients and partners secure
              access to their inquiries and transaction details. This Policy
              covers:
            </p>
            <li className={styles.p__list}>
              <ul className={styles.p__ul}>
                Any data Pikwe Estates collects when you browse or interact with
                the Website
              </ul>
              <ul className={styles.p__ul}>
                Information you send us via email, contact forms, or messaging
                channels
              </ul>
              <ul className={styles.p__ul}>
                Data we obtain from trusted third-party sources.
              </ul>
            </li>
            <p className={styles.p__p}>
              The Website is intended for users aged 18 and over. If you are
              under 18, please do not submit personal information through any
              Pikwe Estates channels.
            </p>
          </div>
        </div>

        <div className={styles.privacy}>
          <h3 className={styles.p__h3}>Scope & Applicability</h3>
          <div className={styles.p__content}>
            <p className={styles.p__p}>
              By accessing or using the Website, you acknowledge that we may
              revise this Policy at any time without prior notice. We will have
              no further responsibility to notify you of any such changes. We
              maintain the right to modify this Policy at any time and
              periodically. Your continued use of the Website after any changes
              to this Policy will unequivocally demonstrate your acceptance of
              the modification and the Policy as updated.
            </p>

            <p className={styles.p__p}>
            It is your duty to periodically review this Policy to determine if any changes have been implemented.

Any changes will take effect immediately upon being posted on the Website. You can ascertain whether this Privacy Policy has been altered since your previous visit to the Website by checking the "Last Modified" date located at the bottom of this page.

However, we will obtain your consent for future changes if required by applicable law.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacySection;
