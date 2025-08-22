import React from "react";
import { useTranslation } from "react-i18next";
import SectionHeader from "../ReUsables/SectionHeader";
import IMAGE from "../../public/images/plot.jpg";
import LinkButton from "../ReUsables/LinkButton";
import PortfolioCard from "../ReUsables/PortfolioCard";
import { urlFor } from "@/sanity/lib/image";
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
      id: properties[0]._id,
      ref: properties[0].reference,
      name: properties[0].name,
      location: properties[0].location,
      area: properties[0].surfacearea,
      price: properties[0].price,
      image: urlFor(properties[0].mainimage).url(),
      link: `/${currentlocale}/portfolio/${properties[0].slug}`
    },
    {
      id: properties[1]._id,
      ref: properties[1].reference,
      name: properties[1].name,
      location: properties[1].location,
      area: properties[1].surfacearea,
      price: properties[1].price,
      image: urlFor(properties[1].mainimage).url(),
      link: `/${currentlocale}/portfolio/${properties[1].slug}`
    },
    {
      id: properties[2]._id,
      ref: properties[2].reference,
      name: properties[2].name,
      location: properties[2].location,
      area: properties[2].surfacearea,
      price: properties[2].price,
      image: urlFor(properties[2].mainimage).url(),
      link: `/${currentlocale}/portfolio/${properties[2].slug}`
    },
  ];


  return (
    <div className={`section ${styles.hp__section}`}>
      <div className={`container ${styles.hp__container}`}>
        <SectionHeader sectionData={portHeader} />
        <div className={styles.portfolio__wrapper}>
          {portfolioContent.map((data) => (
            <PortfolioCard data={data} key={data.id}/>
          ))}
        </div>
        <LinkButton linkData={portLink} />
      </div>
    </div>
  );
};

export default HomePortfolio;
