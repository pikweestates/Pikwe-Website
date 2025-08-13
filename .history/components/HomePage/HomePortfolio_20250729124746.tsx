import React from "react";
import { useTranslation } from "react-i18next";
import SectionHeader from "../ReUsables/SectionHeader";
import ImagePlaceholder from "../ReUsables/ImagePlaceholder";
import IMAGE from "../../public/images/plot.jpg";
import LinkButton from "../ReUsables/LinkButton";
import Li
import styles from "../../styles/HomePage/homeportfolio.module.scss";

const HomePortfolio = () => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

  //Portfolio Header
  const portHeader = {
    small: t("HomePage:portsmall"),
    h2: t("HomePage:porth2"),
    text: t("HomePage:porttext"),
  };

  const portLink = {
    href: `${currentlocale}/portfolio`,
    text: t("HomePage:portlink"),
  };

  return (
    <div className={`section ${styles.hp__section}`}>
      <div className={`container ${styles.hp__container}`}>
        <SectionHeader sectionData={portHeader} />
        <div className={styles.portfolio__wrapper}>
          <Link className={styles.portfolio__container}>
            <div className={styles.pc__top}>
              <div className={styles.pc__image}>
                <ImagePlaceholder src={IMAGE} alt="Porfolio Land" />
              </div>
              <span className={styles.reference}>PE-1023</span>
            </div>
            <div className={styles.pc__bottom}>
              <p className={styles.land__name}>Bonaberi Investment Lot</p>
              <div className={styles.land__details}>
                <span>Douala, Bonaberi</span>
                <span>500m&sup2;</span>
              </div>
              <span className={styles.price}>XAF 5,000,000</span>
            </div>
          </Link>
        </div>
        <LinkButton linkData={portLink} />
      </div>
    </div>
  );
};

export default HomePortfolio;
