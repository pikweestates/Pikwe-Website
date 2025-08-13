"use client";

import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../Navigation/Navbar";
import PortfolioHeader from "./PortfolioHeader";
import PortfolioInfo from "./PortfolioInfo";
import ContactFooter from "../ReUsables/ContactFooter";
import Footer from "../Navigation/Footer";
import Lenis from "lenis";

const PortfolioDetailsWrapper = () => {
  //Smooth Scroll
  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.25,
    });

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  //Translations
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

  return (
    <>
      <Navbar />
      <PortfolioHeader />
      <PortfolioInfo />
      <ContactFooter text={t("Portfolio:cta", {propertyName})} />
      <Footer />
    </>
  );
};

export default PortfolioDetailsWrapper;
