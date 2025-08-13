import React from "react";
import { useTranslation } from "react-i18next";
import SectionHeader from "../ReUsables/SectionHeader";
import { Icon } from "@iconify/react";
import ImagePlaceholder from "../ReUsables/ImagePlaceholder";
import IMAGE from "../../public/images/service.jpg";
import LinkButton from "../ReUsables/LinkButton";
import styles from "../../styles/HomePage/homesolutions.module.scss";

const HomeSolutions = () => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

  //Portfolio Header
  const solutionHeader = {
    small: t("HomePage:solutionsmall"),
    h2: t("HomePage:solutionh2"),
    text: t("HomePage:solutiontext"),
  };

  const solutionLink = {
    href: `${currentlocale}/contact`,
    text: t("Navigation:buttontext"),
  };

  const solutionsContent = [
    {
      name: t("HomePage:snameone")
    }
  ]

  return (
    <div className={`section ${styles.hs__section}`}>
      <div className={`container ${styles.hs__container}`}>
        <SectionHeader sectionData={solutionHeader} />
        <div className={styles.sol__content}>
          <div className={styles.sc__top}>
            <div className={styles.accordion}>
              <div className={styles.acc__head}>
                <div className={styles.acc__iconwrap}>
                  <Icon icon="ix:plus" />
                </div>
                <div className={styles.ah__right}>
                  <h2 className={styles.acc__h2}>Real Estate Education</h2>
                </div>
              </div>
              <div className={styles.acc__body}>
                <div className={styles.acb__content}>
                  <p className={styles.acb__p}>We make real estate education accessible to everyone because we believe that every Cameroonian deserves to understand how real estate really works.</p>
                  <div className={styles.acb__image}>
                    <ImagePlaceholder src={IMAGE} alt="Service"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sc__bottom}>
            <LinkButton linkData={solutionLink} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSolutions;
