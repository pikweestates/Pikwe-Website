"use client";

import React, { useEffect, useState, useRef } from "react";
import Preloader from "../Navigation/Preloader";
import { useTranslation } from "react-i18next";
import Navbar from "../Navigation/Navbar";
import HeroSection from "../ReUsables/HeroSection";
import ContactFooter from "../ReUsables/ContactFooter";
import PortfolioSection from "./PortfolioSection";
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
  const { t } = useTranslation();
  // const currentlocale = i18n.language;

  //HeroSection
  const mainData = {
    hero: t("Portfolio:heroheader"),
    subtext: t("Portfolio:herotext"),
  };

  const scrollData = {
    lenis: lenis,
    reference: containerRef,
    text: t("HomePage:portlink"),
  };

  return (
    <>
            <Preloader
        setAnimationFinished={setAnimationFinished}
        localState={localstate}
      />
      <Navbar setLocalState={setLocalState} />
      <HeroSection mainData={mainData} scrollData={scrollData} />
      <PortfolioSection ref={containerRef}/>
      <ContactFooter text={t("HomePage:homeready")}/>
      <Footer />
    </>
  )
}

export default PortfolioPageWrapper