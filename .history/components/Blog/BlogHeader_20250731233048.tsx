import React from "react";
import IMAGE from "../../public/images/plot.jpg";
import { useTranslation } from "react-i18next";
import ImagePlaceholder from "../ReUsables/ImagePlaceholder";
import SectionHeader from "../ReUsables/SectionHeader";
import styles from "../../styles/ReUsables/blogheader.module.scss";

const BlogHeader = () => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

  const categories = ["Market Insights", "Legal Guidance"];
  const sectionData = {
    small: t("Blog:headline"),
    h2: t("Blog:quick"),
    text: "Cameroon’s land market is transforming: rapid urbanization, title reforms, and growing diaspora investment reshape ownership. Despite tenure challenges, emerging opportunities promise secure, high‑yield land acquisitions through 2025 and beyond.",
  };

  return (
    <div className={styles.bh__section}>
      <div className={`container ${styles.bh__container}`}>
        <div className={styles.bh__top}>
          <span className={styles.bh__date}>July 22, 2025</span>
          <h2 className={styles.bh__h2}>
            Cameroon Real Estate Market: 2025 Outlook
          </h2>
          <div className={styles.bh__categories}>
            {categories.map((data, i) => (
              <span className={styles.category} key={i}>
                {data}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.bh__bottom}>
          <SectionHeader sectionData={sectionData} />
          <div className={stylesbph__image} ref={container}>
            <motion.div className={styles.bhi__wrapper} style={{ y }}>
              <ImagePlaceholder src={IMAGE} alt="PIKWE IMAGE" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
