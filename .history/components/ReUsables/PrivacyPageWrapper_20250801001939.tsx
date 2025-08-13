"use client";

import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../Navigation/Navbar";
import HeroSection from "../ReUsables/HeroSection";
import Footer from "../Navigation/Footer";
import Lenis from "lenis";

const PrivacyPageWrapper = () => {
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
    hero: t("About:privacy"),
    subtext: t("About:privacytext"),
  };

  const scrollData = {
    lenis: lenis,
    reference: containerRef,
    text: t("Gallery:herolink"),
  };

  return (
    <>
      <Navbar />
      <HeroSection mainData={mainData} scrollData={scrollData} />
      <Footer />
    </>
  );
};

export default PrivacyPageWrapper;
