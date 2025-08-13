"use client";

import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../Navigation/Navbar";
import HeroSection from "../ReUsables/HeroSection";
import ContactFooter from "../ReUsables/ContactFooter";
import Footer from "../Navigation/Footer";
import Lenis from "lenis";

const PortfolioPageWrapper = () => {
  //Lenis State
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

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

    // Store the lenis instance in state
    setLenis(lenisInstance);
  }, []);


  //Translations
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

  //HeroSection
  const mainData = {
    hero: t("Portfolio:heroheader"),
    subtext: t("Portfolio:herotext"),
  };

  const linkData = {
    href: `${currentlocale}/contact`,
    text: t("Navigation:buttontext"),
  };

  return (
    <>
      <Navbar />
      <HeroSection mainData={mainData} linkData={linkData} />
      <PortfolioSection ref={containerRef}/>
      <ContactFooter text={t("HomePage:homeready")}/>
      <Footer />
    </>
  )
}

export default PortfolioPageWrapper