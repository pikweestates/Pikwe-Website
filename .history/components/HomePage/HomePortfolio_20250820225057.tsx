import React from "react";
import { useTranslation } from "react-i18next";
import SectionHeader from "../ReUsables/SectionHeader";
import IMAGE from "../../public/images/plot.jpg";
import LinkButton from "../ReUsables/LinkButton";
import PortfolioCard from "../ReUsables/PortfolioCard";
import { Property } from "@/types";
import styles from "../../styles/HomePage/homeportfolio.module.scss";

const HomePortfolio = ({properties}: {properties: Property[]}) => {
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
    href: `/${currentlocale}/portfolio`,
    text: t("HomePage:portlink"),
  };

  const portfolioContent = [
    {
      ref: properties[0].reference,
      name: properties[0].name,
      location: properties[0].location,
      area: 500,
      price: 5000000,
      image: IMAGE,
      link: `/${currentlocale}/portfolio/bonaberi-investment`
    },
    {
      ref: "PE-1023",
      name: "Bonaberi Investment Lot",
      location: "Douala, Bonaberi",
      area: 500,
      price: 5000000,
      image: IMAGE,
      link: `/${currentlocale}/portfolio/bonaberi-investment`
    },
    {
      ref: "PE-1023",
      name: "Bonaberi Investment Lot",
      location: "Douala, Bonaberi",
      area: 500,
      price: 5000000,
      image: IMAGE,
      link: `/${currentlocale}/portfolio/bonaberi-investment`
    },
  ];


  return (
    <div className={`section ${styles.hp__section}`}>
      <div className={`container ${styles.hp__container}`}>
        <SectionHeader sectionData={portHeader} />
        <div className={styles.portfolio__wrapper}>
          {portfolioContent.map((data, i) => (
            <PortfolioCard data={data} key={i}/>
          ))}
        </div>
        <LinkButton linkData={portLink} />
      </div>
    </div>
  );
};

export default HomePortfolio;
