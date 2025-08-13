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
              exclusive remedy is to discontinue using this Website.
            </p>
          </div>
        </div>
        <div className={styles.privacy}>
          <h3 className={styles.p__h3}>About This Privacy Policy</h3>
          <div className={styles.p__content}>
            <p className={styles.p__p}>
              This Policy sets forth Pikwe Estates’ practices regarding:
            </p>
            <ul className={styles.p__list}>
              <li className={styles.p__ul}>
                The information we collect through this website and your
                interactions with us.
              </li>
              <li className={styles.p__ul}>
                How we use and share that information.
              </li>
              <li className={styles.p__ul}>
                Your rights to access, correct, or not provide certain information.
              </li>
            </ul>
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
              The website serves to introduce Pikwe Estates, showcase our
              land-ownership services, and give clients and partners secure
              access to their inquiries and transaction details. This Policy
              covers:
            </p>
            <ul className={styles.p__list}>
              <li className={styles.p__ul}>
                Any data Pikwe Estates collects when you browse or interact with
                the Website
              </li>
              <li className={styles.p__ul}>
                Information you send us via email, contact forms, or messaging
                channels
              </li>
              <li className={styles.p__ul}>
                Data we obtain from trusted third-party sources.
              </li>
            </ul>
            <p className={styles.p__p}>
              The Website is intended for users aged 18 and over. If you are
              under 18, please do not submit personal information through any
              Pikwe Estates channels.
            </p>
          </div>
        </div>

        <div className={styles.privacy}>
          <h3 className={styles.p__h3}>Modifications to This Policy</h3>
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
              It is your duty to periodically review this Policy to determine if
              any changes have been implemented. Any changes will take effect
              immediately upon being posted on the Website. You can ascertain
              whether this Privacy Policy has been altered since your previous
              visit to the Website by checking the "Last Modified" date located
              at the top of this page. However, we will obtain your consent for
              future changes if required by applicable law.
            </p>
          </div>
        </div>
        <div className={styles.privacy}>
          <h3 className={styles.p__h3}>Exclusions</h3>
          <div className={styles.p__content}>
            <p className={styles.p__p}>
              This Policy covers only the personal data we collect via our
              Website, email, phone, and other electronic channels. It does not
              apply to unsolicited information such as ideas, feedback, or
              suggestions you submit outside of our request. Any such
              unsolicited submissions to Pikwe Estates are non-confidential, and
              we may use, reproduce, or share them freely without attribution.
            </p>
          </div>
        </div>

        <div className={styles.privacy}>
          <h3 className={styles.p__h3}>
            Collecting and Using Your Personal Data
          </h3>
          <div className={styles.p__content2}>
            <h4 className={styles.p__h4}>Information You Provide</h4>
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
              Information from Your Use of the Website
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
